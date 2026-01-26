import { useMemo } from 'react';
import { getHistoricalTrends } from '../services/aiRecommendation.js';

interface PriceChartProps {
  marketId: string;
  marketName: string;
  cropId: string;
  cropName: string;
}

export const PriceChart = ({ marketId, marketName, cropId, cropName }: PriceChartProps) => {
  const trends = useMemo(
    () => getHistoricalTrends(marketId, marketName, cropId, cropName, 30),
    [marketId, marketName, cropId, cropName]
  );

  const maxPrice = Math.max(...trends.map(t => t.price));
  const minPrice = Math.min(...trends.map(t => t.price));
  const priceRange = maxPrice - minPrice;

  const getYPosition = (price: number) => {
    return 100 - ((price - minPrice) / priceRange) * 80; // 80% of height for data, 20% for padding
  };

  const pathData = trends
    .map((trend, index) => {
      const x = (index / (trends.length - 1)) * 100;
      const y = getYPosition(trend.price);
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    })
    .join(' ');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };

  return (
    <div className="price-chart-container">
      <h3> 30-Day Price History</h3>
      <div className="chart-wrapper">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="price-chart">
          {/* Grid lines */}
          <line x1="0" y1="20" x2="100" y2="20" stroke="#e5e7eb" strokeWidth="0.2" />
          <line x1="0" y1="40" x2="100" y2="40" stroke="#e5e7eb" strokeWidth="0.2" />
          <line x1="0" y1="60" x2="100" y2="60" stroke="#e5e7eb" strokeWidth="0.2" />
          <line x1="0" y1="80" x2="100" y2="80" stroke="#e5e7eb" strokeWidth="0.2" />

          {/* Price line */}
          <path
            d={pathData}
            fill="none"
            stroke="#10b981"
            strokeWidth="0.5"
            vectorEffect="non-scaling-stroke"
          />

          {/* Area under the line */}
          <path
            d={`${pathData} L 100 100 L 0 100 Z`}
            fill="url(#gradient)"
            opacity="0.2"
          />

          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="chart-labels">
          <div className="y-labels">
            <span>KES {Math.round(maxPrice).toLocaleString()}</span>
            <span>KES {Math.round((maxPrice + minPrice) / 2).toLocaleString()}</span>
            <span>KES {Math.round(minPrice).toLocaleString()}</span>
          </div>
          <div className="x-labels">
            <span>{formatDate(trends[0].date)}</span>
            <span>{formatDate(trends[Math.floor(trends.length / 2)].date)}</span>
            <span>{formatDate(trends[trends.length - 1].date)}</span>
          </div>
        </div>
      </div>

      <div className="chart-stats">
        <div className="stat">
          <span className="stat-label">Current:</span>
          <span className="stat-value">KES {trends[trends.length - 1].price.toLocaleString()}</span>
        </div>
        <div className="stat">
          <span className="stat-label">30-Day High:</span>
          <span className="stat-value">KES {Math.round(maxPrice).toLocaleString()}</span>
        </div>
        <div className="stat">
          <span className="stat-label">30-Day Low:</span>
          <span className="stat-value">KES {Math.round(minPrice).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};
