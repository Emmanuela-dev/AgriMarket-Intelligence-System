import type { SellingRecommendation } from '../types/index.js';

interface RecommendationDisplayProps {
  recommendation: SellingRecommendation;
  cropName: string;
  quantity: number;
  unit: string;
}

export const RecommendationDisplay = ({
  recommendation,
  quantity,
  unit,
}: RecommendationDisplayProps) => {
  const getActionIcon = () => {
    switch (recommendation.action) {
      case 'sell_now':
        return '✅';
      case 'wait':
        return '⏳';
      case 'sell_elsewhere':
        return '📍';
    }
  };

  const getActionTitle = () => {
    switch (recommendation.action) {
      case 'sell_now':
        return 'Sell Now';
      case 'wait':
        return 'Wait for Better Prices';
      case 'sell_elsewhere':
        return 'Sell at Alternative Market';
    }
  };

  const getActionClass = () => {
    switch (recommendation.action) {
      case 'sell_now':
        return 'action-sell-now';
      case 'wait':
        return 'action-wait';
      case 'sell_elsewhere':
        return 'action-elsewhere';
    }
  };

  const getTrendIcon = () => {
    switch (recommendation.priceForecast.trend) {
      case 'rising':
        return '📈';
      case 'falling':
        return '📉';
      case 'stable':
        return '➡️';
    }
  };

  const getConfidenceColor = () => {
    if (recommendation.confidence >= 70) return '#10b981';
    if (recommendation.confidence >= 50) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <div className="recommendation-container">
      <div className={`action-header ${getActionClass()}`}>
        <div className="action-icon">{getActionIcon()}</div>
        <div className="action-title">
          <h2>{getActionTitle()}</h2>
          <div className="confidence-badge" style={{ backgroundColor: getConfidenceColor() }}>
            {recommendation.confidence}% Confidence
          </div>
        </div>
      </div>

      <div className="recommendation-content">
        <div className="reasoning-box">
          <h3> AI Analysis</h3>
          <p>{recommendation.reasoning}</p>
        </div>

        <div className="market-comparison">
          <h3> Market Comparison</h3>
          <div className="market-card primary">
            <div className="market-header">
              <span className="market-label">Selected Market</span>
              <span className="market-name">{recommendation.bestMarket.name}</span>
            </div>
            <div className="market-details">
              <div className="detail-row">
                <span>Current Price:</span>
                <strong>KES {recommendation.bestMarket.currentPrice.toLocaleString()}/{unit}</strong>
              </div>
              <div className="detail-row">
                <span>Your Quantity:</span>
                <strong>{quantity} {unit}</strong>
              </div>
              <div className="detail-row highlight">
                <span>Total Revenue:</span>
                <strong>KES {recommendation.bestMarket.netProfit.toLocaleString()}</strong>
              </div>
            </div>
          </div>

          {recommendation.alternativeMarkets.length > 0 && (
            <>
              <h4>Alternative Markets</h4>
              {recommendation.alternativeMarkets.map((market, index) => (
                <div key={index} className="market-card alternative">
                  <div className="market-header">
                    <span className="market-name">{market.name}</span>
                    <span className="distance">{market.distance} km away</span>
                  </div>
                  <div className="market-details">
                    <div className="detail-row">
                      <span>Price:</span>
                      <strong>KES {market.currentPrice.toLocaleString()}/{unit}</strong>
                    </div>
                    <div className="detail-row">
                      <span>Transport Cost:</span>
                      <span className="cost">KES {market.transportCost.toLocaleString()}</span>
                    </div>
                    <div className="detail-row highlight">
                      <span>Net Profit:</span>
                      <strong>KES {market.netProfit.toLocaleString()}</strong>
                    </div>
                    {market.netProfit > recommendation.bestMarket.netProfit && (
                      <div className="profit-difference">
                        +KES {(market.netProfit - recommendation.bestMarket.netProfit).toLocaleString()} more
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        <div className="price-forecast">
          <h3>{getTrendIcon()} Price Forecast</h3>
          <div className="forecast-grid">
            <div className="forecast-card">
              <div className="forecast-label">Next Week</div>
              <div className="forecast-price">KES {recommendation.priceForecast.nextWeek.toLocaleString()}</div>
              <div className="forecast-change">
                {recommendation.priceForecast.nextWeek > recommendation.bestMarket.currentPrice ? '↑' : '↓'}
                {Math.abs(
                  Math.round(
                    ((recommendation.priceForecast.nextWeek - recommendation.bestMarket.currentPrice) /
                      recommendation.bestMarket.currentPrice) *
                      100
                  )
                )}%
              </div>
            </div>
            <div className="forecast-card">
              <div className="forecast-label">In Two Weeks</div>
              <div className="forecast-price">KES {recommendation.priceForecast.nextTwoWeeks.toLocaleString()}</div>
              <div className="forecast-change">
                {recommendation.priceForecast.nextTwoWeeks > recommendation.bestMarket.currentPrice ? '↑' : '↓'}
                {Math.abs(
                  Math.round(
                    ((recommendation.priceForecast.nextTwoWeeks - recommendation.bestMarket.currentPrice) /
                      recommendation.bestMarket.currentPrice) *
                      100
                  )
                )}%
              </div>
            </div>
            <div className="forecast-card">
              <div className="forecast-label">Trend</div>
              <div className="forecast-trend">
                {recommendation.priceForecast.trend.charAt(0).toUpperCase() +
                  recommendation.priceForecast.trend.slice(1)}
              </div>
            </div>
          </div>
        </div>

        <div className="info-box">
          <strong>ℹ Note:</strong> This recommendation is based on AI analysis of historical price data, 
          current market conditions, and distance/transport cost calculations. Actual market conditions 
          may vary. Always verify current prices before making final decisions.
        </div>
      </div>
    </div>
  );
};
