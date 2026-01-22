// Core types for the agricultural market intelligence system

export type Market = {
  id: string;
  name: string;
  county: string;
  latitude: number;
  longitude: number;
}

export type Crop = {
  id: string;
  name: string;
  unit: string; // e.g., "kg", "bag (90kg)", "crate"
}

export type MarketPrice = {
  marketId: string;
  marketName: string;
  cropId: string;
  cropName: string;
  pricePerUnit: number;
  currency: string;
  date: string;
  distance?: number; // distance in km from farmer's selected market
  transportCost?: number; // estimated transport cost
}

export type PriceTrend = {
  date: string;
  price: number;
}

export type SellingRecommendation = {
  action: 'sell_now' | 'wait' | 'sell_elsewhere';
  confidence: number; // 0-100
  bestMarket: {
    name: string;
    currentPrice: number;
    distance: number;
    transportCost: number;
    netProfit: number;
  };
  alternativeMarkets: Array<{
    name: string;
    currentPrice: number;
    distance: number;
    transportCost: number;
    netProfit: number;
  }>;
  priceForecast: {
    nextWeek: number;
    nextTwoWeeks: number;
    trend: 'rising' | 'falling' | 'stable';
  };
  reasoning: string;
}

export type FarmerInput = {
  marketName: string;
  selectedMarket?: Market;
  crop: string;
  quantity: number;
  unit: string;
}
