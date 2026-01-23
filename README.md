# 🌾 AgriMarket Intelligence System

<div align="center">

![Kenya Agriculture](https://img.shields.io/badge/Built%20for-Kenya-008751?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)
![AI Powered](https://img.shields.io/badge/AI-Powered-FF6B6B?style=for-the-badge)

**Empowering Kenyan farmers with AI-driven market intelligence for smarter selling decisions**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [AI Engine](#-ai-recommendation-engine) • [API](#-raxcore-ai-integration)

</div>

---

## 🎯 Overview

AgriMarket Intelligence System is a location-based agricultural market intelligence platform that helps Kenyan farmers maximize their profits by providing:

- **Real-time AI recommendations** on when and where to sell produce
- **Comprehensive market coverage** across all 47 Kenyan counties (149 markets)
- **Diverse product support** including crops, vegetables, fruits, dairy, livestock, and cash crops (37 products)
- **Transport cost optimization** with distance calculations and net profit analysis
- **Price forecasting** with 7-day and 14-day predictions
- **Historical trends** with 90-day price analytics

---

## ✨ Features

### 🔍 Smart Market Search
- **Autocomplete search** for 149 Kenyan markets
- **County-wide coverage**: From Mombasa to Turkana, Nairobi to Luanda (Vihiga)
- **Location-aware recommendations** based on GPS coordinates

### 🤖 AI-Powered Analysis
- **Raxcore AI integration** for intelligent recommendations
- **Historical price trends** with 90-day data analysis
- **Linear regression** for accurate price predictions
- **Moving averages** (7-day and 30-day SMA)
- **Market volatility assessment** for risk evaluation

### 📊 Comprehensive Product Coverage
**37 Agricultural Products** across 6 categories:

#### 🌾 Cereals & Grains
Maize, Beans, Rice, Wheat, Sorghum

#### 🥔 Tubers & Roots
Potatoes, Sweet Potatoes, Cassava, Arrowroots

#### 🥬 Vegetables
Tomatoes, Cabbage, Kales, Onions, Carrots, Spinach, Lettuce, Peppers, Pumpkin, Cucumbers

#### 🍌 Fruits
Bananas, Avocado, Mangoes, Pineapples, Watermelon, Passion Fruit, Oranges, Pawpaw

#### 🥛 Dairy & Poultry
Milk (per liter), Eggs (tray of 30)

#### 🐐 Livestock
Chicken, Goat

#### ☕ Cash Crops
Coffee, Tea, Sugarcane

### 💰 Smart Recommendations
Three actionable insights:
- **🟢 Sell Now**: Current market conditions are optimal
- **🟡 Wait**: Prices projected to increase in 7-14 days
- **🔵 Sell Elsewhere**: Higher net profit available at nearby markets

### 🚚 Transport Cost Intelligence
- **Haversine distance calculation** between markets
- **Transport cost estimation** (KES 15 per km)
- **Net profit comparison** across up to 3 alternative markets
- **200km search radius** for practical alternatives

### 📈 Price Forecasting
- **7-day and 14-day predictions** using linear regression
- **Trend classification**: Rising, Falling, or Stable
- **Confidence scores** (30-95%) based on data quality and stability
- **Bounded predictions** (±30% of current prices for safety)

### 📉 Visual Analytics
- **30-day price history charts** (SVG-based)
- **Price statistics**: Current, High, Low, Average
- **Interactive visualizations**
- **Color-coded trend indicators**

---

## 🌍 Market Coverage

### 149 Markets Across All 47 Kenyan Counties

<details>
<summary><b>View Complete Market List</b></summary>

**Nairobi**: City Market, Gikomba, Wakulima, Kangemi  
**Nakuru**: Municipal Market, Naivasha  
**Uasin Gishu**: Eldoret, Burnt Forest  
**Kisumu**: Jubilee Market, Ahero  
**Mombasa**: Marikiti Market, Likoni  
**Kiambu**: Thika, Ruiru, Limuru  
**Nyeri**: Nyeri Town, Karatina  
**Meru**: Meru Town, Maua  
**Embu**: Embu Town, Siakago  
**Machakos**: Machakos Town, Kathiani, Masii  
**Makueni**: Wote, Makindu  
**Kitui**: Kitui Town  
**Kakamega**: Kakamega Town, Mumias  
**Bungoma**: Bungoma Town, Kimilili  
**Busia**: Busia Town, Malaba  
**Vihiga**: Luanda, Mbale  
**Siaya**: Siaya Town, Ugunja  
**Kisii**: Kisii Town, Keroka, Ogembo  
**Nyamira**: Nyamira Town  
**Homa Bay**: Homa Bay Town  
**Migori**: Migori Town, Kehancha, Awendo  
**Trans Nzoia**: Kitale  
**Nandi**: Kapsabet  
**Baringo**: Kabarnet  
**Elgeyo Marakwet**: Iten  
**West Pokot**: Kapenguria  
**Bomet**: Bomet Town  
**Kericho**: Kericho Town, Litein  
**Narok**: Narok Town  
**Kajiado**: Kajiado Town, Ngong  
**Turkana**: Lodwar, Kakuma  
**Marsabit**: Marsabit Town, Moyale  
**Mandera**: Mandera Town  
**Wajir**: Wajir Town  
**Garissa**: Garissa Town  
**Isiolo**: Isiolo Town  
**Nyandarua**: Ol Kalou  
**Murang'a**: Murang'a Town  
**Kirinyaga**: Kerugoya  
**Laikipia**: Nanyuki, Nyahururu  
**Samburu**: Maralal  
**Taita Taveta**: Voi  
**Kwale**: Kwale Town  
**Kilifi**: Kilifi Town, Malindi  
**Tana River**: Hola  
**Lamu**: Lamu Town  

*Total: 149 markets with GPS coordinates*

</details>

---

## 🛠 Tech Stack

### Frontend
- **React 19.2** - Modern UI library with concurrent features
- **TypeScript** - Type-safe development
- **Vite 7.2** - Lightning-fast build tool with HMR
- **CSS3** - Custom responsive styling

### AI & Analytics
- **Raxcore AI** - Real-time agricultural market predictions
- **Linear Regression** - Price forecasting algorithm
- **Simple Moving Averages** - Trend analysis
- **Haversine Formula** - Accurate distance calculations

### Data Management
- **Mock Data Generation** - 90-day historical price trends
- **5,513 Price Points** - 149 markets × 37 products
- **Regional Price Variations** - Location-based pricing

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.x or higher
- **npm** or **yarn**
- **Raxcore AI API Key** (for production)

### Installation

```bash
# Clone the repository
git clone https://github.com/Emmanuela-dev/AgriMarket-Intelligence-System.git

# Navigate to project directory
cd market

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Add your Raxcore AI credentials to .env
VITE_RAXCORE_AI_KEY=your_api_key_here
VITE_RAXCORE_AI_ENDPOINT=https://api.raxcore.ai/v1/predict

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_RAXCORE_AI_KEY=rax_your_api_key_here
VITE_RAXCORE_AI_ENDPOINT=https://api.raxcore.ai/v1/predict
```

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build
npm run preview
```

---

---

## 🤖 AI Recommendation Engine
### Architecture

The system uses a hybrid AI approach combining rule-based algorithms with Raxcore AI integration:

```
User Input → Market Data → AI Analysis → Recommendations
                ↓              ↓              ↓
         Price History → Raxcore AI → Action Advice
                ↓              ↓              ↓
         Transport Cost → Forecasts → Alternative Markets
```

### Algorithm Components

#### 1. **Historical Analysis**
```typescript
- 90 days of price data per market/crop
- Simple Moving Average (SMA): 7-day and 30-day
- Price variability calculation: σ / μ
- Trend detection: Recent vs Historical comparison
```

#### 2. **Trend Classification**
```typescript
const recentAvg = prices.slice(-14).average();
const historicalAvg = prices.slice(0, -14).average();
const change = (recentAvg - historicalAvg) / historicalAvg;

if (change > 0.05) → "rising"
else if (change < -0.05) → "falling"  
else → "stable"
```

#### 3. **Price Prediction (Linear Regression)**
```typescript
// Fits line: y = mx + b
// Predicts 7-day and 14-day future prices
// Bounds: currentPrice ± 30%

y = slope * days + intercept;
forecast = Math.max(min, Math.min(max, y));
```

#### 4. **Confidence Scoring**
```typescript
confidence = (
  dataQualityScore * 0.4 +      // More data = higher confidence
  trendClarityScore * 0.3 +      // Clear trends = higher confidence
  stabilityScore * 0.3           // Low volatility = higher confidence
) * 100;

// Range: 30% to 95%
```

#### 5. **Market Comparison (Haversine)**
```typescript
// Calculate distance between GPS coordinates
const R = 6371; // Earth radius in km
const dLat = toRad(lat2 - lat1);
const dLon = toRad(lon2 - lon1);

distance = 2 * R * Math.asin(
  Math.sqrt(
    Math.sin(dLat/2)² + 
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon/2)²
  )
);

transportCost = distance * 15; // KES 15/km
netProfit = (price - currentPrice) * quantity - transportCost;
```

#### 6. **Decision Logic**
```typescript
if (trend === "rising" && forecast7d > currentPrice * 1.05)
  → WAIT (expected 5%+ increase)
  
else if (alternativeMarkets.some(m => m.netProfit > currentRevenue * 0.1))
  → SELL ELSEWHERE (10%+ better net profit)
  
else
  → SELL NOW (current market is optimal)
```

### Raxcore AI Integration

The system integrates with Raxcore AI for enhanced predictions:

```typescript
// Real AI predictions from Raxcore API
const response = await fetch(RAXCORE_ENDPOINT, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${RAXCORE_API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    market: marketName,
    crop: cropName,
    quantity: quantity,
    historicalData: priceHistory
  })
});
```

**Fallback Strategy**: If Raxcore AI is unavailable, the system automatically falls back to local algorithms ensuring 100% uptime.

---

## 📊 Data Structure

### Market Schema
```typescript
interface Market {
  id: string;
  name: string;
  county: string;
  latitude: number;
  longitude: number;
}
```

### Crop Schema
```typescript
interface Crop {
  id: string;
  name: string;
  unit: string;
  category: 'cereal' | 'tuber' | 'vegetable' | 'fruit' | 
            'dairy' | 'livestock' | 'cash_crop';
}
```

### Price Data
```typescript
interface MarketPrice {
  [cropId: string]: {
    [marketId: string]: number; // Price in KES
  }
}

// Example: BASE_MARKET_PRICES['maize']['1'] = 4500
```

### Recommendation Output
```typescript
interface Recommendation {
  action: 'sell_now' | 'wait' | 'sell_elsewhere';
  reason: string;
  confidence: number; // 0-100
  currentPrice: number;
  currentRevenue: number;
  trend: 'rising' | 'falling' | 'stable';
  priceChange: number;
  forecast7d: number;
  forecast14d: number;
  alternativeMarkets: AlternativeMarket[];
  priceHistory: HistoricalPrice[];
}
```

---



## 🔮 Future Enhancements

### Phase 2: Backend Integration
- [ ] **Next.js API routes** for server-side logic
- [ ] **Supabase database** for persistent storage
- [ ] **Real-time price updates** via WebSockets
- [ ] **User authentication** (farmers/traders)
- [ ] **Historical data storage** (multi-year)

### Phase 3: Advanced Features
- [ ] **Weather integration** (rainfall predictions)
- [ ] **Seasonal demand forecasts**
- [ ] **SMS notifications** for price alerts
- [ ] **Mobile app** (React Native)
- [ ] **Swahili localization** (i18n)

### Phase 4: ML Enhancement
- [ ] **LSTM neural networks** for better forecasting
- [ ] **Anomaly detection** for price spikes
- [ ] **Demand prediction** based on holidays/events
- [ ] **Crop yield estimation** integration

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Code Style
- Use TypeScript strict mode
- Follow ESLint configuration
- Write descriptive commit messages
- Add comments for complex logic
- Update README for new features

---

