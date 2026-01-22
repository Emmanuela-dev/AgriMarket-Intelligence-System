# 🌾 AgriMarket Intelligence System

A location-based agricultural market intelligence system designed to help farmers in Kenya make better decisions on where and when to sell their produce.

## 🎯 Overview

The system allows farmers to:
- Enter any market name in Kenya
- Select their crop and quantity
- Receive AI-powered selling recommendations
- Compare prices across nearby markets
- View historical price trends
- Get transport cost estimates
- Access price forecasts

## 🚀 Features

### 1. **Smart Market Search**
- Autocomplete search for Kenyan markets
- Coverage of 15 major markets across Kenya
- Location-aware recommendations

### 2. **AI-Driven Analysis**
- Historical price trend analysis (90-day data)
- Linear regression for price prediction
- Moving average calculations
- Market volatility assessment

### 3. **Comprehensive Recommendations**
Three types of actions:
- **Sell Now**: Current prices are favorable
- **Wait**: Prices expected to rise
- **Sell Elsewhere**: Better net profit at alternative market

### 4. **Transport Cost Calculation**
- Distance-based transport cost estimation
- Net profit calculations after transport costs
- Comparison of up to 3 alternative markets

### 5. **Price Forecasting**
- 7-day price predictions
- 14-day price predictions
- Trend analysis (rising/falling/stable)
- Confidence scores (30-95%)

### 6. **Visual Analytics**
- 30-day price history charts
- Interactive SVG-based visualizations
- Price statistics (current, high, low)

## 🏗️ Tech Stack

- **Frontend**: React 19.2 + TypeScript
- **Build Tool**: Vite 7.2
- **Styling**: Custom CSS with responsive design
- **Data**: Mock Kenyan market data (ready for backend integration)

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🗂️ Project Structure

```
market/
├── src/
│   ├── components/          # React components
│   │   ├── MarketInput.tsx        # Market search & input form
│   │   ├── RecommendationDisplay.tsx  # AI recommendations display
│   │   └── PriceChart.tsx         # Price history visualization
│   ├── services/            # Business logic
│   │   └── aiRecommendation.ts    # AI analysis & predictions
│   ├── data/                # Mock data & utilities
│   │   └── mockData.ts            # Kenyan markets & price data
│   ├── types/               # TypeScript types
│   │   └── index.ts               # Type definitions
│   ├── App.tsx              # Main application component
│   ├── App.css              # Application styles
│   └── main.tsx             # Application entry point
```

## 🌍 Supported Markets

15 major markets across Kenya:
- **Nairobi**: City Market, Gikomba, Wakulima, Kangemi
- **Uasin Gishu**: Eldoret Market
- **Nakuru**: Municipal Market
- **Kisumu**: Jubilee Market
- **Mombasa**: Marikiti Market
- **Central Kenya**: Nyeri, Meru, Thika, Embu
- **Eastern**: Machakos
- **Western**: Kitale
- **Rift Valley**: Kericho

## 🌾 Supported Crops

10 common crops with proper units:
- Maize (bag - 90kg)
- Beans (bag - 90kg)
- Potatoes (bag - 110kg)
- Tomatoes (crate - 22kg)
- Cabbage (piece)
- Kales/Sukuma Wiki (bundle)
- Onions (bag - 50kg)
- Carrots (bag - 50kg)
- Bananas (bunch)
- Avocado (crate - 50 pieces)

## 🤖 AI Recommendation Engine

### Algorithm Components:

1. **Historical Analysis**
   - 90 days of price data
   - Simple Moving Average (7-day, 30-day)
   - Price variability calculation

2. **Trend Detection**
   - Compares recent 2-week averages
   - Classifies as rising (>5%), falling (<-5%), or stable

3. **Price Prediction**
   - Linear regression on 30-day data
   - Bounded predictions (±30% of current price)
   - 7-day and 14-day forecasts

4. **Confidence Scoring**
   - Based on data quantity (more data = higher confidence)
   - Trend clarity (clear trends = higher confidence)
   - Price stability (low variability = higher confidence)
   - Range: 30-95%

5. **Market Comparison**
   - Calculates distance using Haversine formula
   - Estimates transport costs
   - Computes net profit for each market
   - Filters markets within 200km radius

## 🔮 Future Backend Integration

The frontend is ready for backend integration. To connect:

### 1. **Replace Mock Data** (mockData.ts)
```typescript
// Replace with API calls
export const KENYAN_MARKETS = await fetch('/api/markets');
export const BASE_MARKET_PRICES = await fetch('/api/prices');
```

### 2. **Update AI Service** (aiRecommendation.ts)
```typescript
// Call backend ML model
const recommendation = await fetch('/api/recommend', {
  method: 'POST',
  body: JSON.stringify({ marketId, cropId, quantity })
});
```

### 3. **Backend Requirements**
- **Next.js API Routes**: `/api/markets`, `/api/prices`, `/api/recommend`
- **Supabase Integration**: Authentication, real-time data
- **ML Model**: TensorFlow.js or Python-based model
- **Geocoding Service**: Google Maps/Mapbox for location resolution

### 4. **Database Schema** (Supabase)
```sql
-- Markets table
CREATE TABLE markets (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  county TEXT NOT NULL,
  latitude DECIMAL,
  longitude DECIMAL
);

-- Prices table
CREATE TABLE market_prices (
  id UUID PRIMARY KEY,
  market_id UUID REFERENCES markets(id),
  crop_id TEXT NOT NULL,
  price DECIMAL NOT NULL,
  date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1200px+)
- Tablets (768px - 1200px)
- Mobile phones (< 768px)

## 🎨 UI/UX Features

- Clean, modern interface
- Smooth animations and transitions
- Color-coded recommendations (green/yellow/blue)
- Loading states with spinner
- Autocomplete search with dropdown
- Interactive price charts
- Confidence badges
- Detailed market comparisons

## 🔐 Security Considerations

For production deployment:
- Implement Supabase authentication
- Add rate limiting for API calls
- Validate all user inputs
- Sanitize market search queries
- Secure API keys in environment variables

## 📊 Performance Optimizations

- React.memo for expensive components
- useMemo for filtered data
- Lazy loading for charts
- Debounced search input
- SVG-based charts (lightweight)

## 🧪 Testing (To Be Added)

Future testing strategy:
- Unit tests for AI algorithms
- Integration tests for components
- E2E tests for user flows
- Performance testing
- Accessibility testing

## 📝 License

This project is part of a hackathon demonstration. For production use, ensure compliance with data sources and regulations.

## 👥 Contributing

This is a hackathon project. The backend (Next.js + Supabase) will be implemented in the next phase.

## 🆘 Support

For questions or issues, please contact the development team.

---

**Built with ❤️ for Kenyan farmers**
