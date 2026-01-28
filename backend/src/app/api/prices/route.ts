import { NextRequest, NextResponse } from 'next/server';
import { getHistoricalTrends } from '../../../services/aiRecommendation.js';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const marketId = searchParams.get('marketId');
    const cropId = searchParams.get('cropId');
    const daysBack = parseInt(searchParams.get('daysBack') || '90');

    if (!marketId || !cropId) {
      return NextResponse.json(
        { success: false, error: 'marketId and cropId are required' },
        { status: 400 }
      );
    }

    // For now, use a default market name and crop name
    // In a real app, you'd look these up from a database
    const marketName = 'Market'; // This would be fetched from database
    const cropName = 'Crop'; // This would be fetched from database

    const trends = getHistoricalTrends(marketId, marketName, cropId, cropName, daysBack);

    return NextResponse.json({
      success: true,
      data: trends,
    });
  } catch (error) {
    console.error('Error fetching prices:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch prices' },
      { status: 500 }
    );
  }
}