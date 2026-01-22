# Raxcore AI Integration Guide

This guide explains how to integrate Raxcore AI into the AgriMarket Intelligence system.

## Current Status

✅ **Local AI Logic** - Currently working with mock price prediction algorithms
🔄 **Raxcore AI Ready** - Infrastructure prepared for AI integration

## Setup Steps

### 1. Get Raxcore AI Credentials

1. Sign up at [Raxcore AI](https://raxcore.ai) (or your actual Raxcore endpoint)
2. Create a new project/app
3. Get your API key from the dashboard
4. Note the API endpoint URL

### 2. Configure Environment Variables

```bash
# Create .env.local file in the project root
cp .env.example .env.local

# Edit .env.local and add your credentials
VITE_RAXCORE_AI_ENDPOINT=https://api.raxcore.ai/v1/recommendation
VITE_RAXCORE_AI_KEY=your_actual_api_key_here
```

### 3. Update App.tsx to Use Raxcore AI

Open `src/App.tsx` and replace the `handleSubmit` function to use the AI service:

```typescript
import { getRaxcoreAIRecommendation, formatAIResponse } from './services/raxcoreAI.js'

const handleSubmit = async (market: Market, crop: Crop, qty: number) => {
  console.log('Form submitted:', { market, crop, qty });
  setIsLoading(true)
  setSelectedMarket(market)
  setSelectedCrop(crop)
  setQuantity(qty)

  try {
    // Call Raxcore AI
    const aiResponse = await getRaxcoreAIRecommendation({
      marketId: market.id,
      marketName: market.name,
      cropId: crop.id,
      cropName: crop.name,
      quantity: qty,
      latitude: market.latitude,
      longitude: market.longitude,
    });
    
    const recommendation = formatAIResponse(aiResponse);
    console.log('AI Recommendation received:', recommendation);
    setRecommendation(recommendation)
    setIsLoading(false)
  } catch (error) {
    console.error('Error generating recommendation:', error);
    // Fallback to local AI
    const rec = generateSellingRecommendation(market, crop.id, crop.name, qty)
    setRecommendation(rec)
    setIsLoading(false)
  }
}
```

## Data Format

### Request to Raxcore AI

```json
{
  "market": {
    "id": "1",
    "name": "Nairobi City Market",
    "location": {
      "latitude": -1.2864,
      "longitude": 36.8172
    }
  },
  "crop": {
    "id": "maize",
    "name": "Maize"
  },
  "quantity": 10
}
```

### Expected Response from Raxcore AI

```json
{
  "recommendation": {
    "action": "sell_now" | "wait" | "sell_elsewhere"
  },
  "confidence": 85,
  "reasoning": "Current prices are favorable...",
  "bestMarket": {
    "name": "Nairobi City Market",
    "currentPrice": 3500,
    "distance": 0,
    "transportCost": 0,
    "netProfit": 35000
  },
  "alternativeMarkets": [
    {
      "name": "Gikomba Market",
      "currentPrice": 3400,
      "distance": 2.5,
      "transportCost": 500,
      "netProfit": 33500
    }
  ],
  "forecast": {
    "nextWeek": 3600,
    "nextTwoWeeks": 3700,
    "trend": "rising"
  }
}
```

## Customizing AI Response Format

If Raxcore AI returns a different format, update the `formatAIResponse` function in `src/services/raxcoreAI.ts`:

```typescript
export const formatAIResponse = (aiResponse: any): AIRecommendationResponse => {
  // Map Raxcore AI fields to your app's format
  return {
    action: aiResponse.yourActionField || 'sell_now',
    confidence: aiResponse.yourConfidenceField || 70,
    reasoning: aiResponse.yourReasoningField || '',
    bestMarket: {
      name: aiResponse.yourMarketName,
      currentPrice: aiResponse.yourPrice,
      // ... map other fields
    },
    // ... map other fields
  };
};
```

## Testing

### Test with Mock Data (Current Setup)
```bash
npm run dev
```
The app uses local AI algorithms for testing.

### Test with Raxcore AI
1. Add API credentials to `.env.local`
2. Update `App.tsx` to use `getRaxcoreAIRecommendation`
3. Restart dev server: `npm run dev`
4. Check browser console for API calls

### Debug Logging
Console logs are added to track:
- Form submission data
- API requests/responses
- Errors and fallbacks

## Fallback Strategy

The current implementation includes automatic fallback:
- Primary: Raxcore AI API
- Fallback: Local AI algorithms (if API fails)

This ensures the app keeps working even if the AI service is unavailable.

## Production Deployment

Before deploying:
1. ✅ Add API keys to production environment variables
2. ✅ Remove console.log statements (or use proper logging)
3. ✅ Add error tracking (e.g., Sentry)
4. ✅ Set up rate limiting
5. ✅ Add retry logic for API failures
6. ✅ Monitor API usage and costs

## Performance Optimization

- Cache AI responses for same inputs (optional)
- Add request debouncing
- Show cached results immediately while fetching fresh data
- Implement request cancellation for outdated requests

## Security

- ✅ Never commit `.env.local` to git
- ✅ API keys stored in environment variables
- ✅ Use HTTPS for all API calls
- ✅ Validate and sanitize all inputs
- ✅ Implement rate limiting on your backend

## Support

For Raxcore AI specific issues:
- Check Raxcore AI documentation
- Contact Raxcore AI support
- Review API status page

For app integration issues:
- Check browser console for errors
- Verify environment variables
- Test with curl/Postman first
- Check network tab for API calls
