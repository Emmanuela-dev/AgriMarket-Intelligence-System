// AI Service for Raxcore AI Integration
// This file will handle all AI-related API calls

export interface AIRecommendationRequest {
  marketId: string;
  marketName: string;
  cropId: string;
  cropName: string;
  quantity: number;
  latitude: number;
  longitude: number;
}

export interface AIRecommendationResponse {
  action: 'sell_now' | 'wait' | 'sell_elsewhere';
  confidence: number;
  reasoning: string;
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
}

/**
 * Call Raxcore AI API for market recommendations
 * TODO: Replace with actual Raxcore AI endpoint
 */
export const getRaxcoreAIRecommendation = async (
  request: AIRecommendationRequest
): Promise<AIRecommendationResponse> => {
  const API_ENDPOINT = import.meta.env.VITE_RAXCORE_AI_ENDPOINT || 'https://api.raxcore.ai/v1/recommendation';
  const API_KEY = import.meta.env.VITE_RAXCORE_AI_KEY;

  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        market: {
          id: request.marketId,
          name: request.marketName,
          location: {
            latitude: request.latitude,
            longitude: request.longitude,
          },
        },
        crop: {
          id: request.cropId,
          name: request.cropName,
        },
        quantity: request.quantity,
      }),
    });

    if (!response.ok) {
      throw new Error(`AI API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Raxcore AI API Error:', error);
    throw error;
  }
};

/**
 * Format AI response to match our application's expected format
 */
export const formatAIResponse = (aiResponse: any): AIRecommendationResponse => {
  // Adapt the AI response structure to match our app's format
  // Modify this based on actual Raxcore AI response structure
  return {
    action: aiResponse.recommendation?.action || 'sell_now',
    confidence: aiResponse.confidence || 70,
    reasoning: aiResponse.reasoning || 'AI analysis completed',
    bestMarket: aiResponse.bestMarket || {
      name: '',
      currentPrice: 0,
      distance: 0,
      transportCost: 0,
      netProfit: 0,
    },
    alternativeMarkets: aiResponse.alternativeMarkets || [],
    priceForecast: aiResponse.forecast || {
      nextWeek: 0,
      nextTwoWeeks: 0,
      trend: 'stable' as const,
    },
  };
};
