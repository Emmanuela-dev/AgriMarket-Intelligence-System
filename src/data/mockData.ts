// Mock data for Kenyan agricultural markets
import type { Market, Crop, MarketPrice } from '../types/index.js';

export const KENYAN_MARKETS: Market[] = [
  // Nairobi County
  { id: '1', name: 'Nairobi City Market', county: 'Nairobi', latitude: -1.2864, longitude: 36.8172 },
  { id: '2', name: 'Gikomba Market', county: 'Nairobi', latitude: -1.2833, longitude: 36.8333 },
  { id: '3', name: 'Wakulima Market', county: 'Nairobi', latitude: -1.2921, longitude: 36.8219 },
  { id: '4', name: 'Kangemi Market', county: 'Nairobi', latitude: -1.2667, longitude: 36.7333 },
  { id: '5', name: 'Maasai Market', county: 'Nairobi', latitude: -1.2921, longitude: 36.8219 },
  
  // Mombasa County
  { id: '6', name: 'Mombasa Marikiti Market', county: 'Mombasa', latitude: -4.0435, longitude: 39.6682 },
  { id: '7', name: 'Kongowea Market', county: 'Mombasa', latitude: -4.0383, longitude: 39.6625 },
  
  // Kisumu County
  { id: '8', name: 'Kisumu Jubilee Market', county: 'Kisumu', latitude: -0.0917, longitude: 34.7680 },
  { id: '9', name: 'Kibuye Market', county: 'Kisumu', latitude: -0.0890, longitude: 34.7520 },
  
  // Nakuru County
  { id: '10', name: 'Nakuru Municipal Market', county: 'Nakuru', latitude: -0.3031, longitude: 36.0800 },
  { id: '11', name: 'Marikiti Nakuru', county: 'Nakuru', latitude: -0.2827, longitude: 36.0800 },
  
  // Uasin Gishu County
  { id: '12', name: 'Eldoret Market', county: 'Uasin Gishu', latitude: 0.5143, longitude: 35.2698 },
  { id: '13', name: 'Langas Market', county: 'Uasin Gishu', latitude: 0.5500, longitude: 35.3000 },
  
  // Kiambu County
  { id: '14', name: 'Thika Market', county: 'Kiambu', latitude: -1.0332, longitude: 37.0692 },
  { id: '15', name: 'Limuru Market', county: 'Kiambu', latitude: -1.1127, longitude: 36.6450 },
  { id: '16', name: 'Kikuyu Market', county: 'Kiambu', latitude: -1.2469, longitude: 36.6667 },
  { id: '17', name: 'Ruiru Market', county: 'Kiambu', latitude: -1.1500, longitude: 36.9611 },
  
  // Machakos County
  { id: '18', name: 'Machakos Market', county: 'Machakos', latitude: -1.5177, longitude: 37.2634 },
  { id: '19', name: 'Athi River Market', county: 'Machakos', latitude: -1.4500, longitude: 36.9778 },
  
  // Nyeri County
  { id: '20', name: 'Nyeri Market', county: 'Nyeri', latitude: -0.4197, longitude: 36.9519 },
  { id: '21', name: 'Karatina Market', county: 'Nyeri', latitude: -0.4833, longitude: 37.1333 },
  
  // Meru County
  { id: '22', name: 'Meru Market', county: 'Meru', latitude: 0.0469, longitude: 37.6556 },
  { id: '23', name: 'Maua Market', county: 'Meru', latitude: 0.2333, longitude: 37.9333 },
  
  // Embu County
  { id: '24', name: 'Embu Market', county: 'Embu', latitude: -0.5310, longitude: 37.4577 },
  
  // Kericho County
  { id: '25', name: 'Kericho Market', county: 'Kericho', latitude: -0.3676, longitude: 35.2839 },
  { id: '26', name: 'Litein Market', county: 'Kericho', latitude: -0.5833, longitude: 35.2000 },
  
  // Trans Nzoia County
  { id: '27', name: 'Kitale Market', county: 'Trans Nzoia', latitude: 1.0157, longitude: 34.9596 },
  
  // Kisii County
  { id: '28', name: 'Kisii Market', county: 'Kisii', latitude: -0.6770, longitude: 34.7800 },
  { id: '29', name: 'Daraja Mbili Market', county: 'Kisii', latitude: -0.6800, longitude: 34.7700 },
  { id: '30', name: 'Ogembo Market', county: 'Kisii', latitude: -0.7833, longitude: 34.7167 },
  
  // Siaya County
  { id: '31', name: 'Siaya Market', county: 'Siaya', latitude: 0.0667, longitude: 34.2833 },
  { id: '32', name: 'Ugunja Market', county: 'Siaya', latitude: 0.1667, longitude: 34.2667 },
  { id: '33', name: 'Bondo Market', county: 'Siaya', latitude: 0.2333, longitude: 34.2667 },
  { id: '34', name: 'Yala Market', county: 'Siaya', latitude: 0.1000, longitude: 34.5333 },
  
  // Kakamega County
  { id: '35', name: 'Kakamega Market', county: 'Kakamega', latitude: 0.2833, longitude: 34.7500 },
  { id: '36', name: 'Mumias Market', county: 'Kakamega', latitude: 0.3347, longitude: 34.4878 },
  
  // Bungoma County
  { id: '37', name: 'Bungoma Market', county: 'Bungoma', latitude: 0.5635, longitude: 34.5606 },
  { id: '38', name: 'Webuye Market', county: 'Bungoma', latitude: 0.6167, longitude: 34.7667 },
  
  // Narok County
  { id: '39', name: 'Narok Market', county: 'Narok', latitude: -1.0833, longitude: 35.8667 },
  
  // Kajiado County
  { id: '40', name: 'Kajiado Market', county: 'Kajiado', latitude: -1.8500, longitude: 36.7833 },
  { id: '41', name: 'Ngong Market', county: 'Kajiado', latitude: -1.3500, longitude: 36.6500 },
  
  // Nandi County
  { id: '42', name: 'Kapsabet Market', county: 'Nandi', latitude: 0.1833, longitude: 35.1167 },
  
  // Bomet County
  { id: '43', name: 'Bomet Market', county: 'Bomet', latitude: -0.7833, longitude: 35.3167 },
  
  // Murang\'a County
  { id: '44', name: 'Murang\'a Market', county: 'Murang\'a', latitude: -0.7167, longitude: 37.1500 },
  { id: '45', name: 'Kenol Market', county: 'Murang\'a', latitude: -0.9000, longitude: 37.0167 },
  
  // Kirinyaga County
  { id: '46', name: 'Kerugoya Market', county: 'Kirinyaga', latitude: -0.4989, longitude: 37.2806 },
  { id: '47', name: 'Kagio Market', county: 'Kirinyaga', latitude: -0.6500, longitude: 37.2167 },
  
  // Nyandarua County
  { id: '48', name: 'Ol Kalou Market', county: 'Nyandarua', latitude: -0.2667, longitude: 36.3833 },
  
  // Baringo County
  { id: '49', name: 'Kabarnet Market', county: 'Baringo', latitude: 0.4917, longitude: 35.7433 },
  
  // Laikipia County
  { id: '50', name: 'Nanyuki Market', county: 'Laikipia', latitude: -0.0167, longitude: 37.0667 },
];

export const CROPS: Crop[] = [
  { id: 'maize', name: 'Maize', unit: 'bag (90kg)' },
  { id: 'beans', name: 'Beans', unit: 'bag (90kg)' },
  { id: 'potatoes', name: 'Potatoes', unit: 'bag (110kg)' },
  { id: 'tomatoes', name: 'Tomatoes', unit: 'crate (22kg)' },
  { id: 'cabbage', name: 'Cabbage', unit: 'piece' },
  { id: 'kales', name: 'Kales (Sukuma Wiki)', unit: 'bundle' },
  { id: 'onions', name: 'Onions', unit: 'bag (50kg)' },
  { id: 'carrots', name: 'Carrots', unit: 'bag (50kg)' },
  { id: 'bananas', name: 'Bananas', unit: 'bunch' },
  { id: 'avocado', name: 'Avocado', unit: 'crate (50 pieces)' },
];

// Generate mock historical price data
export const generateMockPriceData = (
  marketId: string,
  marketName: string,
  cropId: string,
  cropName: string,
  basePrice: number,
  daysBack: number = 90
): MarketPrice[] => {
  const prices: MarketPrice[] = [];
  const today = new Date();
  
  for (let i = daysBack; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    // Add some realistic price variation
    const variation = (Math.random() - 0.5) * 0.3; // ±15% variation
    const seasonalFactor = Math.sin((i / 30) * Math.PI) * 0.1; // Seasonal variation
    const price = basePrice * (1 + variation + seasonalFactor);
    
    prices.push({
      marketId,
      marketName,
      cropId,
      cropName,
      pricePerUnit: Math.round(price),
      currency: 'KES',
      date: date.toISOString().split('T')[0],
    });
  }
  
  return prices;
};

// Base prices for different crops in different markets (in KES)
export const BASE_MARKET_PRICES: Record<string, Record<string, number>> = {
  'maize': {
    '1': 3500, '2': 3400, '3': 3600, '4': 3300, '5': 3550, '6': 3700, '7': 3800, '8': 3650, '9': 3500,
    '10': 3400, '11': 3350, '12': 3200, '13': 3250, '14': 3450, '15': 3380, '16': 3420, '17': 3480,
    '18': 3550, '19': 3500, '20': 3300, '21': 3280, '22': 3250, '23': 3200, '24': 3350, '25': 3400,
    '26': 3380, '27': 3100, '28': 3450, '29': 3420, '30': 3380, '31': 3300, '32': 3280, '33': 3250,
    '34': 3320, '35': 3350, '36': 3300, '37': 3280, '38': 3250, '39': 3400, '40': 3500, '41': 3480,
    '42': 3350, '43': 3380, '44': 3420, '45': 3450, '46': 3380, '47': 3350, '48': 3320, '49': 3300, '50': 3400,
  },
  'beans': {
    '1': 8500, '2': 8300, '3': 8600, '4': 8200, '5': 8450, '6': 9000, '7': 9200, '8': 8700, '9': 8600,
    '10': 8400, '11': 8350, '12': 7800, '13': 8000, '14': 8350, '15': 8250, '16': 8300, '17': 8400,
    '18': 8550, '19': 8450, '20': 8100, '21': 8050, '22': 7900, '23': 7850, '24': 8150, '25': 8300,
    '26': 8250, '27': 7700, '28': 8400, '29': 8350, '30': 8280, '31': 8100, '32': 8050, '33': 8000,
    '34': 8120, '35': 8200, '36': 8100, '37': 8050, '38': 7950, '39': 8300, '40': 8400, '41': 8350,
    '42': 8200, '43': 8250, '44': 8300, '45': 8350, '46': 8250, '47': 8200, '48': 8150, '49': 8100, '50': 8300,
  },
  'potatoes': {
    '1': 2800, '2': 2700, '3': 2900, '4': 2600, '5': 2750, '6': 3100, '7': 3200, '8': 2850, '9': 2800,
    '10': 2750, '11': 2720, '12': 2500, '13': 2550, '14': 2750, '15': 2680, '16': 2720, '17': 2780,
    '18': 2900, '19': 2850, '20': 2550, '21': 2520, '22': 2600, '23': 2580, '24': 2650, '25': 2700,
    '26': 2680, '27': 2450, '28': 2750, '29': 2720, '30': 2680, '31': 2600, '32': 2580, '33': 2550,
    '34': 2620, '35': 2650, '36': 2600, '37': 2580, '38': 2550, '39': 2700, '40': 2800, '41': 2780,
    '42': 2650, '43': 2680, '44': 2720, '45': 2750, '46': 2680, '47': 2650, '48': 2620, '49': 2600, '50': 2700,
  },
  'tomatoes': {
    '1': 1800, '2': 1700, '3': 1850, '4': 1600, '5': 1750, '6': 2000, '7': 2100, '8': 1900, '9': 1850,
    '10': 1750, '11': 1720, '12': 1550, '13': 1580, '14': 1700, '15': 1650, '16': 1680, '17': 1750,
    '18': 1850, '19': 1800, '20': 1600, '21': 1580, '22': 1650, '23': 1620, '24': 1700, '25': 1750,
    '26': 1720, '27': 1500, '28': 1750, '29': 1720, '30': 1680, '31': 1600, '32': 1580, '33': 1550,
    '34': 1620, '35': 1650, '36': 1600, '37': 1580, '38': 1550, '39': 1700, '40': 1800, '41': 1780,
    '42': 1650, '43': 1680, '44': 1720, '45': 1750, '46': 1680, '47': 1650, '48': 1620, '49': 1600, '50': 1700,
  },
  'cabbage': {
    '1': 35, '2': 30, '3': 40, '4': 28, '5': 33, '6': 45, '7': 48, '8': 38, '9': 36,
    '10': 32, '11': 31, '12': 25, '13': 27, '14': 33, '15': 30, '16': 31, '17': 34,
    '18': 37, '19': 35, '20': 30, '21': 29, '22': 28, '23': 27, '24': 30, '25': 32,
    '26': 31, '27': 25, '28': 32, '29': 31, '30': 30, '31': 28, '32': 27, '33': 26,
    '34': 28, '35': 29, '36': 28, '37': 27, '38': 26, '39': 32, '40': 35, '41': 34,
    '42': 29, '43': 30, '44': 31, '45': 33, '46': 30, '47': 29, '48': 28, '49': 27, '50': 32,
  },
  'kales': {
    '1': 20, '2': 18, '3': 22, '4': 17, '5': 19, '6': 25, '7': 27, '8': 21, '9': 20,
    '10': 19, '11': 18, '12': 15, '13': 16, '14': 19, '15': 17, '16': 18, '17': 19,
    '18': 21, '19': 20, '20': 18, '21': 17, '22': 17, '23': 16, '24': 18, '25': 19,
    '26': 18, '27': 15, '28': 19, '29': 18, '30': 17, '31': 16, '32': 15, '33': 15,
    '34': 16, '35': 17, '36': 16, '37': 15, '38': 15, '39': 19, '40': 20, '41': 19,
    '42': 17, '43': 18, '44': 18, '45': 19, '46': 18, '47': 17, '48': 16, '49': 16, '50': 19,
  },
  'onions': {
    '1': 4500, '2': 4300, '3': 4600, '4': 4200, '5': 4450, '6': 5000, '7': 5200, '8': 4700, '9': 4600,
    '10': 4400, '11': 4350, '12': 4000, '13': 4100, '14': 4350, '15': 4250, '16': 4300, '17': 4400,
    '18': 4550, '19': 4450, '20': 4100, '21': 4050, '22': 4050, '23': 4000, '24': 4150, '25': 4400,
    '26': 4350, '27': 3900, '28': 4400, '29': 4350, '30': 4280, '31': 4100, '32': 4050, '33': 4000,
    '34': 4120, '35': 4200, '36': 4100, '37': 4050, '38': 3950, '39': 4300, '40': 4400, '41': 4350,
    '42': 4200, '43': 4250, '44': 4300, '45': 4350, '46': 4250, '47': 4200, '48': 4150, '49': 4100, '50': 4300,
  },
  'carrots': {
    '1': 3500, '2': 3300, '3': 3600, '4': 3200, '5': 3450, '6': 4000, '7': 4100, '8': 3700, '9': 3600,
    '10': 3400, '11': 3350, '12': 3000, '13': 3100, '14': 3350, '15': 3250, '16': 3300, '17': 3400,
    '18': 3550, '19': 3450, '20': 3100, '21': 3050, '22': 3050, '23': 3000, '24': 3150, '25': 3400,
    '26': 3350, '27': 2900, '28': 3400, '29': 3350, '30': 3280, '31': 3100, '32': 3050, '33': 3000,
    '34': 3120, '35': 3200, '36': 3100, '37': 3050, '38': 2950, '39': 3300, '40': 3400, '41': 3350,
    '42': 3200, '43': 3250, '44': 3300, '45': 3350, '46': 3250, '47': 3200, '48': 3150, '49': 3100, '50': 3300,
  },
  'bananas': {
    '1': 250, '2': 230, '3': 260, '4': 220, '5': 245, '6': 300, '7': 320, '8': 270, '9': 260,
    '10': 240, '11': 235, '12': 200, '13': 210, '14': 235, '15': 225, '16': 230, '17': 240,
    '18': 255, '19': 245, '20': 210, '21': 205, '22': 205, '23': 200, '24': 215, '25': 240,
    '26': 235, '27': 190, '28': 240, '29': 235, '30': 228, '31': 210, '32': 205, '33': 200,
    '34': 212, '35': 220, '36': 210, '37': 205, '38': 195, '39': 230, '40': 240, '41': 235,
    '42': 220, '43': 225, '44': 230, '45': 235, '46': 225, '47': 220, '48': 215, '49': 210, '50': 230,
  },
  'avocado': {
    '1': 2500, '2': 2400, '3': 2600, '4': 2300, '5': 2450, '6': 2800, '7': 2900, '8': 2650, '9': 2600,
    '10': 2450, '11': 2420, '12': 2200, '13': 2250, '14': 2400, '15': 2350, '16': 2380, '17': 2450,
    '18': 2550, '19': 2450, '20': 2250, '21': 2220, '22': 2300, '23': 2280, '24': 2350, '25': 2450,
    '26': 2420, '27': 2100, '28': 2450, '29': 2420, '30': 2380, '31': 2300, '32': 2280, '33': 2250,
    '34': 2320, '35': 2350, '36': 2300, '37': 2280, '38': 2250, '39': 2400, '40': 2500, '41': 2480,
    '42': 2350, '43': 2380, '44': 2420, '45': 2450, '46': 2380, '47': 2350, '48': 2320, '49': 2300, '50': 2400,
  },
};

// Calculate distance between two coordinates (Haversine formula)
export const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const R = 6371; // Radius of the Earth in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// Estimate transport cost based on distance (simplified model)
export const estimateTransportCost = (distanceKm: number, quantity: number): number => {
  // Base rate: 50 KES per km for first 50km, then 30 KES per km
  // Plus quantity factor
  const baseRate = distanceKm <= 50 ? 50 : 50 * 50 + (distanceKm - 50) * 30;
  const quantityFactor = Math.ceil(quantity / 10); // Assume 10 units per trip
  return Math.round(baseRate * quantityFactor);
};
