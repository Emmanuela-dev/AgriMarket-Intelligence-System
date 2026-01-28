# Backend API Documentation

## Overview

This document explains how the backend APIs work and how they integrate with the frontend in the AgriMarket Intelligence System. The backend is built with **Next.js 16** and provides three main API endpoints for market data, price analysis, and AI-powered recommendations.

## Architecture

```
┌─────────────────┐         HTTP/REST          ┌─────────────────┐
│                 │    ──────────────────→      │                 │
│   Frontend      │                             │    Backend      │
│   (Vite/React)  │    ←──────────────────      │   (Next.js)     │
│   Port: 5173    │         JSON                │   Port: 3001    │
└─────────────────┘                             └─────────────────┘
        │                                                │
        │                                                │
        ├──── /api/markets                             │
        ├──── /api/prices                              │
        └──── /api/recommendations                     │
                                                        │
                                                        ├─── Data Layer
                                                        ├─── AI Services
                                                        └─── Mock Data
```

## API Endpoints

### 1. GET `/api/markets`

**Purpose**: Fetch all available markets in Kenya

**Location**: `backend/src/app/api/markets/route.ts`

**Request**:
```http
GET http://localhost:3001/api/markets
```

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": "nairobi-city-market",
      "name": "Nairobi City Market",
      "county": "Nairobi",
      "latitude": -1.286389,
      "longitude": 36.817223
    },
    // ... more markets (149 total across 47 counties)
  ]
}
```

**How It Works**:
1. Imports market data from `backend/src/data/mockData.ts`
2. Returns the complete list of 149 Kenyan markets
3. Includes location coordinates for distance calculations

**Error Handling**:
- Returns 500 status code if data fetch fails
- Includes error message in response body

---

### 2. GET `/api/prices`

**Purpose**: Get historical price trends and predictions for a specific market and crop

**Location**: `backend/src/app/api/prices/route.ts`

**Request**:
```http
GET http://localhost:3001/api/prices?marketId=nairobi-city-market&cropId=tomatoes&daysBack=90
```

**Query Parameters**:
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `marketId` | string | Yes | Unique market identifier |
| `cropId` | string | Yes | Unique crop identifier |
| `daysBack` | number | No | Days of historical data (default: 90) |

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "date": "2026-01-28",
      "price": 85.50,
      "marketId": "nairobi-city-market",
      "cropId": "tomatoes"
    },
    // ... historical data points
  ]
}
```

**How It Works**:
1. Validates required query parameters (`marketId` and `cropId`)
2. Calls `getHistoricalTrends()` from `backend/src/services/aiRecommendation.ts`
3. Generates mock historical price data with realistic trends
4. Returns time-series data for chart visualization

**Error Handling**:
- Returns 400 if required parameters are missing
- Returns 500 for internal server errors

---

### 3. POST `/api/recommendations`

**Purpose**: Generate AI-powered selling recommendations based on market conditions

**Location**: `backend/src/app/api/recommendations/route.ts`

**Request**:
```http
POST http://localhost:3001/api/recommendations
Content-Type: application/json

{
  "marketId": "nairobi-city-market",
  "cropId": "tomatoes",
  "cropName": "Tomatoes",
  "quantity": 100
}
```

**Request Body**:
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `marketId` | string | Yes | Selected market identifier |
| `cropId` | string | Yes | Crop identifier |
| `cropName` | string | Yes | Display name of the crop |
| `quantity` | number | Yes | Quantity to sell (in crop units) |

**Response**:
```json
{
  "success": true,
  "data": {
    "action": "sell_now",
    "confidence": 85,
    "bestMarket": {
      "name": "Nairobi City Market",
      "currentPrice": 85.50,
      "distance": 0,
      "transportCost": 0,
      "netProfit": 8550
    },
    "alternativeMarkets": [
      {
        "name": "Thika Market",
        "currentPrice": 92.00,
        "distance": 42,
        "transportCost": 420,
        "netProfit": 8780
      }
    ],
    "reasoning": "Current prices are favorable with rising trend...",
    "priceAnalysis": {
      "currentPrice": 85.50,
      "avgPrice30Days": 82.30,
      "predictedPrice7Days": 88.20,
      "predictedPrice14Days": 90.50,
      "trend": "rising",
      "volatility": "low"
    },
    "timing": {
      "recommendation": "Sell within the next 3-5 days",
      "seasonality": "High demand season"
    }
  }
}
```

**How It Works**:
1. Validates request body for all required fields
2. Finds the selected market from mock data
3. Calls `generateSellingRecommendation()` from `backend/src/services/aiRecommendation.ts`
4. AI service performs:
   - Historical price trend analysis (90-day window)
   - Linear regression for price prediction (7-day and 14-day forecasts)
   - Market comparison across nearby markets
   - Distance and transport cost calculations
   - Net profit analysis
   - Volatility and risk assessment
5. Returns comprehensive recommendation object

**Recommendation Actions**:
- `sell_now`: Current conditions are optimal
- `wait`: Prices expected to rise soon
- `sell_elsewhere`: Better market opportunities available

**Error Handling**:
- Returns 400 if required fields are missing
- Returns 404 if market not found
- Returns 500 for internal errors

---

## Frontend Integration

### How Frontend Connects to Backend

The frontend (React/Vite app) communicates with the backend through service files located in `src/services/`.

#### 1. API Base URL Configuration

Located in `src/services/aiRecommendation.ts`:
```typescript
const API_BASE_URL = 'http://localhost:3001/api';
```

#### 2. Main Integration Flow

```
User Input (MarketInput.tsx)
    ↓
App.tsx (handleSubmit)
    ↓
aiService.ts (getRecommendation)
    ↓
aiRecommendation.ts (generateSellingRecommendation)
    ↓
POST /api/recommendations
    ↓
RecommendationDisplay.tsx (shows results)
```

### Key Frontend Files

#### `src/services/aiService.ts`
- **Purpose**: AI provider switcher (Local AI vs Raxcore AI)
- **Function**: `getRecommendation(provider, market, cropId, cropName, quantity)`
- Determines which AI service to use
- Falls back to local AI if Raxcore fails

#### `src/services/aiRecommendation.ts`
- **Purpose**: Main interface to backend APIs
- **Functions**:
  - `generateSellingRecommendation()`: Calls POST `/api/recommendations`
  - `getHistoricalTrends()`: Calls GET `/api/prices`
- Includes local fallback calculations if backend is unavailable

#### `src/components/MarketInput.tsx`
- **Purpose**: User input form
- **Data Sources**:
  - Markets: Loaded from local `mockData.ts` (same data as backend)
  - Crops: Loaded from local `mockData.ts`
- **On Submit**: Calls `App.tsx` handler with selected market, crop, and quantity

#### `src/components/RecommendationDisplay.tsx`
- **Purpose**: Display AI recommendations
- **Data Source**: Receives recommendation object from backend API
- Shows: action, confidence, best market, alternatives, price analysis

#### `src/components/PriceChart.tsx`
- **Purpose**: Visualize historical price trends
- **Data Source**: Could fetch from GET `/api/prices` (currently uses local data)
- Renders line chart with price predictions

### Data Flow Example

1. **User selects market and crop** → `MarketInput.tsx`
2. **User clicks "Get Recommendation"** → Calls `onSubmit(market, crop, quantity)`
3. **App.tsx receives input** → Calls `getRecommendation('raxcore', market, crop.id, crop.name, quantity)`
4. **aiService.ts** → Routes to appropriate AI provider
5. **aiRecommendation.ts** → Makes HTTP POST to `http://localhost:3001/api/recommendations`
6. **Backend API** → Processes request through `backend/src/app/api/recommendations/route.ts`
7. **AI Service** → Analyzes data in `backend/src/services/aiRecommendation.ts`
8. **Response flows back** → JSON recommendation object
9. **Frontend displays** → `RecommendationDisplay.tsx` shows results

---

## Data Services

### Backend Services

#### `backend/src/services/aiRecommendation.ts`
Contains the core AI logic:

**Key Functions**:
- `generateSellingRecommendation()`: Main recommendation engine
- `predictFuturePrice()`: Linear regression for price forecasting
- `analyzeTrend()`: Identifies rising/falling/stable trends
- `calculateSMA()`: Simple Moving Average calculations
- `calculateConfidence()`: Confidence score (30-95%)

**AI Algorithms**:
1. **Price Prediction**: Uses linear regression on 30-day historical data
2. **Trend Analysis**: Compares 7-day averages over 14-day periods
3. **Market Comparison**: Evaluates all markets within reasonable distance
4. **Transport Cost**: Distance-based calculation (10 KES/km base)
5. **Net Profit**: `(price × quantity) - transportCost`
6. **Volatility**: Standard deviation of recent prices

#### `backend/src/data/mockData.ts`
Contains all static data:
- **KENYAN_MARKETS**: 149 markets across 47 counties
- **CROPS**: 37 agricultural products (cereals, vegetables, fruits, livestock)
- **BASE_MARKET_PRICES**: Base prices for each crop at each market
- **Helper Functions**:
  - `calculateDistance()`: Haversine formula for geo-distance
  - `estimateTransportCost()`: Distance-based cost estimation
  - `generateMockPriceData()`: Creates realistic historical price trends

---

## Type Definitions

Shared types are defined in both:
- `backend/src/types/index.ts`
- `src/types/index.ts`

### Core Types

```typescript
type Market = {
  id: string;
  name: string;
  county: string;
  latitude: number;
  longitude: number;
}

type Crop = {
  id: string;
  name: string;
  unit: string; // "kg", "bag (90kg)", "crate", etc.
}

type SellingRecommendation = {
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
  reasoning: string;
  priceAnalysis: {
    currentPrice: number;
    avgPrice30Days: number;
    predictedPrice7Days: number;
    predictedPrice14Days: number;
    trend: 'rising' | 'falling' | 'stable';
    volatility: 'low' | 'medium' | 'high';
  };
  timing: {
    recommendation: string;
    seasonality: string;
  };
}
```

---

## Running the System

### Start Backend
```bash
cd backend
npm install
npm run dev
```
Backend runs on: `http://localhost:3001`

### Start Frontend
```bash
npm install
npm run dev
```
Frontend runs on: `http://localhost:5173`

### Full Stack Operation
1. Backend must be running on port 3001
2. Frontend must be running on port 5173
3. Frontend makes HTTP requests to `http://localhost:3001/api/*`
4. Both use the same data structures (shared types)

---

## CORS and Development

Currently, the backend doesn't have explicit CORS configuration. In production, you would need to:

1. Add CORS middleware in Next.js:
```typescript
// In route handlers
export async function GET(request: NextRequest) {
  const response = NextResponse.json({ data });
  response.headers.set('Access-Control-Allow-Origin', '*');
  return response;
}
```

2. Or configure Next.js to allow specific origins

---

## Error Handling Strategy

### Backend
- All API routes wrapped in try-catch blocks
- Returns JSON with `success: boolean` field
- Includes descriptive error messages
- Appropriate HTTP status codes (400, 404, 500)

### Frontend
- Try-catch around API calls in `aiRecommendation.ts`
- Fallback to local calculations if backend fails
- User-friendly error messages
- Loading states during API calls

---

## Testing the APIs

### Using cURL

**Get Markets**:
```bash
curl http://localhost:3001/api/markets
```

**Get Prices**:
```bash
curl "http://localhost:3001/api/prices?marketId=nairobi-city-market&cropId=tomatoes&daysBack=90"
```

**Get Recommendation**:
```bash
curl -X POST http://localhost:3001/api/recommendations \
  -H "Content-Type: application/json" \
  -d '{
    "marketId": "nairobi-city-market",
    "cropId": "tomatoes",
    "cropName": "Tomatoes",
    "quantity": 100
  }'
```

### Using Postman/Insomnia
Import the following requests:
1. GET `http://localhost:3001/api/markets`
2. GET `http://localhost:3001/api/prices?marketId={id}&cropId={id}`
3. POST `http://localhost:3001/api/recommendations` with JSON body

---

## Future Enhancements

### Backend
- [ ] Connect to real database (PostgreSQL/MongoDB)
- [ ] Implement authentication/authorization
- [ ] Add rate limiting
- [ ] Real-time price updates via WebSocket
- [ ] Integrate with external market data APIs
- [ ] Add caching layer (Redis)

### Frontend-Backend Integration
- [ ] Environment-based API URL configuration
- [ ] Better error boundary components
- [ ] Retry logic for failed requests
- [ ] Optimistic UI updates
- [ ] Request caching with React Query/SWR

---

## Troubleshooting

### Frontend Can't Connect to Backend
1. Check if backend is running: `http://localhost:3001`
2. Verify API_BASE_URL in `src/services/aiRecommendation.ts`
3. Check browser console for CORS errors
4. Ensure ports 3001 and 5173 are not blocked

### API Returns 404
1. Verify Next.js file-based routing structure
2. Check that route files are in correct directories
3. Restart backend server

### Empty or Incorrect Data
1. Check `backend/src/data/mockData.ts` is properly imported
2. Verify market IDs and crop IDs match between frontend and backend
3. Check browser network tab for API response content

---

## License & Support

This is part of the AgriMarket Intelligence System hackathon project.

For questions or issues, refer to the main [README.md](../README.md) in the project root.
