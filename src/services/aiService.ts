// AI Service Switcher - Choose between Local AI and Raxcore AI
import type { Market, SellingRecommendation } from '../types/index.js';
import { generateSellingRecommendation as localAI } from './aiRecommendation.js';
import { getRaxcoreAIRecommendation, formatAIResponse } from './raxcoreAI.js';

export type AIProvider = 'local' | 'raxcore';

/**
 * Get recommendation from selected AI provider
 */
export const getRecommendation = async (
  provider: AIProvider,
  market: Market,
  cropId: string,
  cropName: string,
  quantity: number
): Promise<SellingRecommendation> => {
  if (provider === 'raxcore') {
    try {
      console.log('🤖 Using Raxcore AI...');
      const response = await getRaxcoreAIRecommendation({
        marketId: market.id,
        marketName: market.name,
        cropId,
        cropName,
        quantity,
        latitude: market.latitude,
        longitude: market.longitude,
      });
      return formatAIResponse(response);
    } catch (error) {
      console.warn('⚠️ Raxcore AI failed, falling back to local AI:', error);
      return await localAI(market, cropId, cropName, quantity);
    }
  } else {
    console.log('💻 Using Local AI...');
    return await localAI(market, cropId, cropName, quantity);
  }
};

/**
 * Check if Raxcore AI is configured
 */
export const isRaxcoreConfigured = (): boolean => {
  const apiKey = import.meta.env.VITE_RAXCORE_AI_KEY;
  return !!apiKey && apiKey !== 'your_api_key_here';
};
