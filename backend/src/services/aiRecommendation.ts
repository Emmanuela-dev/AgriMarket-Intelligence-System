// AI-driven price prediction and recommendation service
import type { MarketPrice, SellingRecommendation, Market, PriceTrend } from '../types/index.js';
import {
  KENYAN_MARKETS,
  BASE_MARKET_PRICES,
  generateMockPriceData,
  calculateDistance,
  estimateTransportCost
} from '../data/mockData.js';

/**
 * Simple Moving Average for trend analysis
 */
const calculateSMA = (prices: number[], period: number): number => {
  if (prices.length < period) return prices[prices.length - 1];
  const recentPrices = prices.slice(-period);
  return recentPrices.reduce((sum, price) => sum + price, 0) / period;
};

/**
 * Linear regression for price prediction
 */
const predictFuturePrice = (historicalPrices: MarketPrice[], daysAhead: number): number => {
  if (historicalPrices.length < 7) return historicalPrices[historicalPrices.length - 1].pricePerUnit;

  // Use last 30 days for prediction
  const recentPrices = historicalPrices.slice(-30);
  const n = recentPrices.length;

  // Simple linear regression
  let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;

  recentPrices.forEach((price, index) => {
    sumX += index;
    sumY += price.pricePerUnit;
    sumXY += index * price.pricePerUnit;
    sumX2 += index * index;
  });

  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;

  // Predict price for future day
  const predictedPrice = slope * (n + daysAhead) + intercept;

  // Add some bounds to keep predictions realistic
  const currentPrice = recentPrices[recentPrices.length - 1].pricePerUnit;
  const minPrice = currentPrice * 0.7;
  const maxPrice = currentPrice * 1.3;

  return Math.max(minPrice, Math.min(maxPrice, predictedPrice));
};

/**
 * Determine price trend
 */
const analyzeTrend = (historicalPrices: MarketPrice[]): 'rising' | 'falling' | 'stable' => {
  if (historicalPrices.length < 14) return 'stable';

  const recentPrices = historicalPrices.slice(-14);
  const firstWeekAvg = recentPrices.slice(0, 7).reduce((sum, p) => sum + p.pricePerUnit, 0) / 7;
  const secondWeekAvg = recentPrices.slice(7, 14).reduce((sum, p) => sum + p.pricePerUnit, 0) / 7;

  const change = (secondWeekAvg - firstWeekAvg) / firstWeekAvg;

  if (change > 0.05) return 'rising';
  if (change < -0.05) return 'falling';
  return 'stable';
};

/**
 * Calculate confidence score based on data quality and market conditions
 */
const calculateConfidence = (
  historicalPrices: MarketPrice[],
  trend: 'rising' | 'falling' | 'stable',
  priceVariability: number
): number => {
  let confidence = 70; // Base confidence

  // More historical data = higher confidence
  if (historicalPrices.length > 60) confidence += 10;
  else if (historicalPrices.length < 30) confidence -= 10;

  // Clear trends = higher confidence
  if (trend !== 'stable') confidence += 10;

  // Lower variability = higher confidence
  if (priceVariability < 0.1) confidence += 10;
  else if (priceVariability > 0.3) confidence -= 15;

  return Math.max(30, Math.min(95, confidence));
};

/**
 * Main AI recommendation engine
 */
export const generateSellingRecommendation = (
  selectedMarket: Market,
  cropId: string,
  cropName: string,
  quantity: number
): SellingRecommendation => {
  // Get historical prices for selected market
  const basePrice = BASE_MARKET_PRICES[cropId]?.[selectedMarket.id] || 1000;
  const historicalPrices = generateMockPriceData(
    selectedMarket.id,
    selectedMarket.name,
    cropId,
    cropName,
    basePrice,
    90
  );

  // Analyze current market
  const currentPrice = historicalPrices[historicalPrices.length - 1].pricePerUnit;
  const sma30 = calculateSMA(historicalPrices.map(p => p.pricePerUnit), 30);
  const trend = analyzeTrend(historicalPrices);

  // Predict future prices
  const nextWeekPrice = predictFuturePrice(historicalPrices, 7);
  const nextTwoWeeksPrice = predictFuturePrice(historicalPrices, 14);

  // Calculate price variability
  const recentPrices = historicalPrices.slice(-30).map(p => p.pricePerUnit);
  const avgPrice = recentPrices.reduce((sum, p) => sum + p, 0) / recentPrices.length;
  const variance = recentPrices.reduce((sum, p) => sum + Math.pow(p - avgPrice, 2), 0) / recentPrices.length;
  const priceVariability = Math.sqrt(variance) / avgPrice;

  // Find nearby markets with better prices
  const nearbyMarkets = KENYAN_MARKETS.filter(m => m.id !== selectedMarket.id)
    .map(market => {
      const distance = calculateDistance(
        selectedMarket.latitude,
        selectedMarket.longitude,
        market.latitude,
        market.longitude
      );
      const transportCost = estimateTransportCost(distance, quantity);
      const marketBasePrice = BASE_MARKET_PRICES[cropId]?.[market.id] || basePrice;
      // Current price with slight variation
      const marketCurrentPrice = Math.round(marketBasePrice * (0.95 + Math.random() * 0.1));
      const revenue = marketCurrentPrice * quantity;
      const netProfit = revenue - transportCost;

      return {
        name: market.name,
        currentPrice: marketCurrentPrice,
        distance: Math.round(distance * 10) / 10,
        transportCost,
        netProfit,
      };
    })
    .filter(m => m.distance < 200) // Only consider markets within 200km
    .sort((a, b) => b.netProfit - a.netProfit);

  // Calculate net profit for current market
  const currentMarketProfit = currentPrice * quantity;
  const bestAlternative = nearbyMarkets[0];

  // Determine recommendation
  let action: 'sell_now' | 'wait' | 'sell_elsewhere';
  let reasoning: string;

  if (bestAlternative && bestAlternative.netProfit > currentMarketProfit * 1.15) {
    // Another market offers 15%+ better net profit
    action = 'sell_elsewhere';
    reasoning = `${bestAlternative.name} offers ${Math.round((bestAlternative.netProfit - currentMarketProfit) / currentMarketProfit * 100)}% better net profit (KES ${bestAlternative.netProfit.toLocaleString()} vs KES ${currentMarketProfit.toLocaleString()}) after accounting for transport costs of KES ${bestAlternative.transportCost.toLocaleString()}.`;
  } else if (trend === 'rising' && nextWeekPrice > currentPrice * 1.08) {
    // Prices rising significantly
    action = 'wait';
    reasoning = `Prices are trending upward. Our AI model predicts a ${Math.round((nextWeekPrice - currentPrice) / currentPrice * 100)}% price increase to KES ${Math.round(nextWeekPrice).toLocaleString()} per unit within the next week. Waiting could increase your revenue by KES ${Math.round((nextWeekPrice - currentPrice) * quantity).toLocaleString()}.`;
  } else if (trend === 'falling' || currentPrice > sma30 * 1.1) {
    // Prices falling or currently above average
    action = 'sell_now';
    reasoning = `Current price of KES ${currentPrice.toLocaleString()} is favorable. ${trend === 'falling' ? 'Prices are trending downward' : 'Prices are above the 30-day average'}. Selling now at ${selectedMarket.name} will secure KES ${currentMarketProfit.toLocaleString()} in revenue.`;
  } else {
    // Stable market
    action = 'sell_now';
    reasoning = `Market conditions are stable with current price at KES ${currentPrice.toLocaleString()} per unit. This is a good time to sell at ${selectedMarket.name}, generating KES ${currentMarketProfit.toLocaleString()} in revenue.`;
  }

  const confidence = calculateConfidence(historicalPrices, trend, priceVariability);

  return {
    action,
    confidence,
    bestMarket: {
      name: selectedMarket.name,
      currentPrice,
      distance: 0,
      transportCost: 0,
      netProfit: currentMarketProfit,
    },
    alternativeMarkets: nearbyMarkets.slice(0, 3),
    priceForecast: {
      nextWeek: Math.round(nextWeekPrice),
      nextTwoWeeks: Math.round(nextTwoWeeksPrice),
      trend,
    },
    reasoning,
  };
};

/**
 * Get historical price trends for visualization
 */
export const getHistoricalTrends = (
  marketId: string,
  marketName: string,
  cropId: string,
  cropName: string,
  daysBack: number = 90
): PriceTrend[] => {
  const basePrice = BASE_MARKET_PRICES[cropId]?.[marketId] || 1000;
  const historicalPrices = generateMockPriceData(marketId, marketName, cropId, cropName, basePrice, daysBack);

  return historicalPrices.map(price => ({
    date: price.date,
    price: price.pricePerUnit,
  }));
};