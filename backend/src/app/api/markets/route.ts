import { NextResponse } from 'next/server';
import { KENYAN_MARKETS } from '../../../data/mockData.js';

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: KENYAN_MARKETS,
    });
  } catch (error) {
    console.error('Error fetching markets:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch markets' },
      { status: 500 }
    );
  }
}