import { NextRequest, NextResponse } from 'next/server';
import { generateSellingRecommendation } from '../../../services/aiRecommendation.js';
import { KENYAN_MARKETS } from '../../../data/mockData.js';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { marketId, cropId, cropName, quantity } = body;

    if (!marketId || !cropId || !cropName || quantity === undefined) {
      return NextResponse.json(
        {
          success: false,
          error: 'marketId, cropId, cropName, and quantity are required'
        },
        { status: 400 }
      );
    }

    const selectedMarket = KENYAN_MARKETS.find(m => m.id === marketId);
    if (!selectedMarket) {
      return NextResponse.json(
        { success: false, error: 'Market not found' },
        { status: 404 }
      );
    }

    const recommendation = generateSellingRecommendation(
      selectedMarket,
      cropId,
      cropName,
      quantity
    );

    return NextResponse.json({
      success: true,
      data: recommendation,
    });
  } catch (error) {
    console.error('Error generating recommendation:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to generate recommendation' },
      { status: 500 }
    );
  }
}