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
  { id: '8', name: 'Likoni Market', county: 'Mombasa', latitude: -4.0833, longitude: 39.6667 },
  
  // Kisumu County
  { id: '9', name: 'Kisumu Jubilee Market', county: 'Kisumu', latitude: -0.0917, longitude: 34.7680 },
  { id: '10', name: 'Kibuye Market', county: 'Kisumu', latitude: -0.0890, longitude: 34.7520 },
  
  // Nakuru County
  { id: '11', name: 'Nakuru Municipal Market', county: 'Nakuru', latitude: -0.3031, longitude: 36.0800 },
  { id: '12', name: 'Marikiti Nakuru', county: 'Nakuru', latitude: -0.2827, longitude: 36.0800 },
  
  // Uasin Gishu County
  { id: '13', name: 'Eldoret Market', county: 'Uasin Gishu', latitude: 0.5143, longitude: 35.2698 },
  { id: '14', name: 'Langas Market', county: 'Uasin Gishu', latitude: 0.5500, longitude: 35.3000 },
  
  // Kiambu County
  { id: '15', name: 'Thika Market', county: 'Kiambu', latitude: -1.0332, longitude: 37.0692 },
  { id: '16', name: 'Limuru Market', county: 'Kiambu', latitude: -1.1127, longitude: 36.6450 },
  { id: '17', name: 'Kikuyu Market', county: 'Kiambu', latitude: -1.2469, longitude: 36.6667 },
  { id: '18', name: 'Ruiru Market', county: 'Kiambu', latitude: -1.1500, longitude: 36.9611 },
  
  // Machakos County
  { id: '19', name: 'Machakos Market', county: 'Machakos', latitude: -1.5177, longitude: 37.2634 },
  { id: '20', name: 'Athi River Market', county: 'Machakos', latitude: -1.4500, longitude: 36.9778 },
  { id: '21', name: 'Mlolongo Market', county: 'Machakos', latitude: -1.3833, longitude: 36.9167 },
  
  // Makueni County
  { id: '22', name: 'Wote Market', county: 'Makueni', latitude: -1.7833, longitude: 37.6333 },
  { id: '23', name: 'Makindu Market', county: 'Makueni', latitude: -2.2833, longitude: 37.8333 },
  { id: '24', name: 'Sultan Hamud Market', county: 'Makueni', latitude: -2.0667, longitude: 37.5333 },
  
  // Nyeri County
  { id: '25', name: 'Nyeri Market', county: 'Nyeri', latitude: -0.4197, longitude: 36.9519 },
  { id: '26', name: 'Karatina Market', county: 'Nyeri', latitude: -0.4833, longitude: 37.1333 },
  
  // Meru County
  { id: '27', name: 'Meru Market', county: 'Meru', latitude: 0.0469, longitude: 37.6556 },
  { id: '28', name: 'Maua Market', county: 'Meru', latitude: 0.2333, longitude: 37.9333 },
  
  // Embu County
  { id: '29', name: 'Embu Market', county: 'Embu', latitude: -0.5310, longitude: 37.4577 },
  
  // Kericho County
  { id: '30', name: 'Kericho Market', county: 'Kericho', latitude: -0.3676, longitude: 35.2839 },
  { id: '31', name: 'Litein Market', county: 'Kericho', latitude: -0.5833, longitude: 35.2000 },
  
  // Trans Nzoia County
  { id: '32', name: 'Kitale Market', county: 'Trans Nzoia', latitude: 1.0157, longitude: 34.9596 },
  
  // Kisii County
  { id: '33', name: 'Kisii Market', county: 'Kisii', latitude: -0.6770, longitude: 34.7800 },
  { id: '34', name: 'Daraja Mbili Market', county: 'Kisii', latitude: -0.6800, longitude: 34.7700 },
  { id: '35', name: 'Ogembo Market', county: 'Kisii', latitude: -0.7833, longitude: 34.7167 },
  
  // Siaya County
  { id: '36', name: 'Siaya Market', county: 'Siaya', latitude: 0.0667, longitude: 34.2833 },
  { id: '37', name: 'Ugunja Market', county: 'Siaya', latitude: 0.1667, longitude: 34.2667 },
  { id: '38', name: 'Bondo Market', county: 'Siaya', latitude: 0.2333, longitude: 34.2667 },
  { id: '39', name: 'Yala Market', county: 'Siaya', latitude: 0.1000, longitude: 34.5333 },
  
  // Kakamega County
  { id: '40', name: 'Kakamega Market', county: 'Kakamega', latitude: 0.2833, longitude: 34.7500 },
  { id: '41', name: 'Mumias Market', county: 'Kakamega', latitude: 0.3347, longitude: 34.4878 },
  
  // Bungoma County
  { id: '42', name: 'Bungoma Market', county: 'Bungoma', latitude: 0.5635, longitude: 34.5606 },
  { id: '43', name: 'Webuye Market', county: 'Bungoma', latitude: 0.6167, longitude: 34.7667 },
  
  // Narok County
  { id: '44', name: 'Narok Market', county: 'Narok', latitude: -1.0833, longitude: 35.8667 },
  
  // Kajiado County
  { id: '45', name: 'Kajiado Market', county: 'Kajiado', latitude: -1.8500, longitude: 36.7833 },
  { id: '46', name: 'Ngong Market', county: 'Kajiado', latitude: -1.3500, longitude: 36.6500 },
  { id: '47', name: 'Isinya Market', county: 'Kajiado', latitude: -1.6667, longitude: 36.9167 },
  
  // Nandi County
  { id: '48', name: 'Kapsabet Market', county: 'Nandi', latitude: 0.1833, longitude: 35.1167 },
  
  // Bomet County
  { id: '49', name: 'Bomet Market', county: 'Bomet', latitude: -0.7833, longitude: 35.3167 },
  
  // Murang'a County
  { id: '50', name: 'Murang\'a Market', county: 'Murang\'a', latitude: -0.7167, longitude: 37.1500 },
  { id: '51', name: 'Kenol Market', county: 'Murang\'a', latitude: -0.9000, longitude: 37.0167 },
  
  // Kirinyaga County
  { id: '52', name: 'Kerugoya Market', county: 'Kirinyaga', latitude: -0.4989, longitude: 37.2806 },
  { id: '53', name: 'Kagio Market', county: 'Kirinyaga', latitude: -0.6500, longitude: 37.2167 },
  
  // Nyandarua County
  { id: '54', name: 'Ol Kalou Market', county: 'Nyandarua', latitude: -0.2667, longitude: 36.3833 },
  
  // Baringo County
  { id: '55', name: 'Kabarnet Market', county: 'Baringo', latitude: 0.4917, longitude: 35.7433 },
  
  // Laikipia County
  { id: '56', name: 'Nanyuki Market', county: 'Laikipia', latitude: -0.0167, longitude: 37.0667 },
  
  // Turkana County
  { id: '57', name: 'Lodwar Market', county: 'Turkana', latitude: 3.1190, longitude: 35.5973 },
  { id: '58', name: 'Kakuma Market', county: 'Turkana', latitude: 3.7211, longitude: 34.8522 },
  
  // West Pokot County
  { id: '59', name: 'Kapenguria Market', county: 'West Pokot', latitude: 1.2381, longitude: 35.1118 },
  
  // Samburu County
  { id: '60', name: 'Maralal Market', county: 'Samburu', latitude: 1.0967, longitude: 36.6970 },
  
  // Isiolo County
  { id: '61', name: 'Isiolo Market', county: 'Isiolo', latitude: 0.3555, longitude: 37.5826 },
  
  // Marsabit County
  { id: '62', name: 'Marsabit Market', county: 'Marsabit', latitude: 2.3333, longitude: 37.9833 },
  
  // Mandera County
  { id: '63', name: 'Mandera Market', county: 'Mandera', latitude: 3.9366, longitude: 41.8550 },
  
  // Wajir County
  { id: '64', name: 'Wajir Market', county: 'Wajir', latitude: 1.7500, longitude: 40.0667 },
  
  // Garissa County
  { id: '65', name: 'Garissa Market', county: 'Garissa', latitude: -0.4536, longitude: 39.6401 },
  
  // Tana River County
  { id: '66', name: 'Hola Market', county: 'Tana River', latitude: -1.4833, longitude: 40.0167 },
  
  // Lamu County
  { id: '67', name: 'Lamu Market', county: 'Lamu', latitude: -2.2717, longitude: 40.9020 },
  
  // Taita-Taveta County
  { id: '68', name: 'Voi Market', county: 'Taita-Taveta', latitude: -3.3963, longitude: 38.5564 },
  { id: '69', name: 'Taveta Market', county: 'Taita-Taveta', latitude: -3.4000, longitude: 37.6833 },
  
  // Kwale County
  { id: '70', name: 'Kwale Market', county: 'Kwale', latitude: -4.1744, longitude: 39.4521 },
  { id: '71', name: 'Ukunda Market', county: 'Kwale', latitude: -4.2833, longitude: 39.5667 },
  
  // Kilifi County
  { id: '72', name: 'Kilifi Market', county: 'Kilifi', latitude: -3.6309, longitude: 39.8493 },
  { id: '73', name: 'Malindi Market', county: 'Kilifi', latitude: -3.2167, longitude: 40.1167 },
  
  // Kitui County
  { id: '74', name: 'Kitui Market', county: 'Kitui', latitude: -1.3667, longitude: 38.0167 },
  
  // Tharaka-Nithi County
  { id: '75', name: 'Chuka Market', county: 'Tharaka-Nithi', latitude: -0.3333, longitude: 37.6500 },
  
  // Elgeyo-Marakwet County
  { id: '76', name: 'Iten Market', county: 'Elgeyo-Marakwet', latitude: 0.6703, longitude: 35.5082 },
  
  // Vihiga County
  { id: '77', name: 'Mbale Market', county: 'Vihiga', latitude: 0.0987, longitude: 34.7308 },
  { id: '84', name: 'Luanda Market', county: 'Vihiga', latitude: 0.0800, longitude: 34.6833 },
  { id: '85', name: 'Hamisi Market', county: 'Vihiga', latitude: 0.0833, longitude: 34.7500 },
  { id: '86', name: 'Sabatia Market', county: 'Vihiga', latitude: 0.1000, longitude: 34.7167 },
  
  // Busia County
  { id: '78', name: 'Busia Market', county: 'Busia', latitude: 0.4606, longitude: 34.1115 },
  { id: '87', name: 'Malaba Market', county: 'Busia', latitude: 0.6167, longitude: 34.2667 },
  
  // Migori County
  { id: '79', name: 'Migori Market', county: 'Migori', latitude: -1.0634, longitude: 34.4731 },
  { id: '80', name: 'Rongo Market', county: 'Migori', latitude: -0.7833, longitude: 34.6167 },
  { id: '88', name: 'Awendo Market', county: 'Migori', latitude: -0.9833, longitude: 34.4833 },
  { id: '89', name: 'Kehancha Market', county: 'Migori', latitude: -1.0333, longitude: 34.2167 },
  
  // Homa Bay County
  { id: '81', name: 'Homa Bay Market', county: 'Homa Bay', latitude: -0.5273, longitude: 34.4570 },
  { id: '90', name: 'Oyugis Market', county: 'Homa Bay', latitude: -0.5167, longitude: 34.7333 },
  { id: '91', name: 'Ndhiwa Market', county: 'Homa Bay', latitude: -0.7333, longitude: 34.4667 },
  { id: '92', name: 'Kendu Bay Market', county: 'Homa Bay', latitude: -0.3667, longitude: 34.6333 },
  
  // Nyamira County
  { id: '82', name: 'Nyamira Market', county: 'Nyamira', latitude: -0.5667, longitude: 34.9333 },
  { id: '93', name: 'Keroka Market', county: 'Nyamira', latitude: -0.6667, longitude: 34.9500 },
  
  // Trans Mara County (Narok)
  { id: '83', name: 'Kilgoris Market', county: 'Narok', latitude: -1.0000, longitude: 34.9167 },
  
  // Additional Nairobi Markets
  { id: '94', name: 'Githurai Market', county: 'Nairobi', latitude: -1.1500, longitude: 36.8833 },
  { id: '95', name: 'Kawangware Market', county: 'Nairobi', latitude: -1.2833, longitude: 36.7500 },
  { id: '96', name: 'Kenyatta Market', county: 'Nairobi', latitude: -1.2667, longitude: 36.8167 },
  { id: '97', name: 'Toi Market', county: 'Nairobi', latitude: -1.2967, longitude: 36.7733 },
  
  // Additional Kiambu Markets
  { id: '98', name: 'Juja Market', county: 'Kiambu', latitude: -1.1000, longitude: 37.0167 },
  { id: '99', name: 'Karuri Market', county: 'Kiambu', latitude: -1.1500, longitude: 36.8167 },
  { id: '100', name: 'Githunguri Market', county: 'Kiambu', latitude: -1.0500, longitude: 36.7667 },
  
  // Additional Kakamega Markets
  { id: '101', name: 'Butere Market', county: 'Kakamega', latitude: 0.2167, longitude: 34.4833 },
  { id: '102', name: 'Khayega Market', county: 'Kakamega', latitude: 0.1667, longitude: 34.8667 },
  { id: '103', name: 'Shianda Market', county: 'Kakamega', latitude: 0.2667, longitude: 34.5833 },
  
  // Additional Bungoma Markets
  { id: '104', name: 'Kimilili Market', county: 'Bungoma', latitude: 0.6833, longitude: 34.7333 },
  { id: '105', name: 'Chwele Market', county: 'Bungoma', latitude: 0.6333, longitude: 34.7667 },
  { id: '106', name: 'Malakisi Market', county: 'Bungoma', latitude: 0.6000, longitude: 34.3333 },
  
  // Additional Nakuru Markets
  { id: '107', name: 'Naivasha Market', county: 'Nakuru', latitude: -0.7167, longitude: 36.4333 },
  { id: '108', name: 'Gilgil Market', county: 'Nakuru', latitude: -0.5000, longitude: 36.3167 },
  { id: '109', name: 'Molo Market', county: 'Nakuru', latitude: -0.2500, longitude: 35.7333 },
  { id: '110', name: 'Njoro Market', county: 'Nakuru', latitude: -0.3333, longitude: 35.9333 },
  
  // Additional Meru Markets
  { id: '111', name: 'Nkubu Market', county: 'Meru', latitude: 0.1667, longitude: 37.7167 },
  { id: '112', name: 'Chuka Market', county: 'Meru', latitude: -0.3333, longitude: 37.6500 },
  { id: '113', name: 'Tigania Market', county: 'Meru', latitude: 0.2833, longitude: 37.9833 },
  
  // Additional Kisii Markets
  { id: '114', name: 'Suneka Market', county: 'Kisii', latitude: -0.6333, longitude: 34.6500 },
  { id: '115', name: 'Nyamarambe Market', county: 'Kisii', latitude: -0.6000, longitude: 34.8000 },
  { id: '116', name: 'Kebirigo Market', county: 'Kisii', latitude: -0.6833, longitude: 34.7833 },
  
  // Additional Uasin Gishu Markets
  { id: '117', name: 'Burnt Forest Market', county: 'Uasin Gishu', latitude: 0.4167, longitude: 35.4667 },
  { id: '118', name: 'Turbo Market', county: 'Uasin Gishu', latitude: 0.5500, longitude: 35.1500 },
  { id: '119', name: 'Soy Market', county: 'Uasin Gishu', latitude: 0.6000, longitude: 35.1833 },
  
  // Additional Trans Nzoia Markets
  { id: '120', name: 'Endebess Market', county: 'Trans Nzoia', latitude: 1.0333, longitude: 34.9500 },
  { id: '121', name: 'Kiminini Market', county: 'Trans Nzoia', latitude: 0.9833, longitude: 34.9833 },
  { id: '122', name: 'Cherangany Market', county: 'Trans Nzoia', latitude: 1.1000, longitude: 35.0500 },
  
  // Additional Kisumu Markets
  { id: '123', name: 'Ahero Market', county: 'Kisumu', latitude: -0.1667, longitude: 34.9167 },
  { id: '124', name: 'Maseno Market', county: 'Kisumu', latitude: 0.0167, longitude: 34.6000 },
  { id: '125', name: 'Muhoroni Market', county: 'Kisumu', latitude: -0.1667, longitude: 35.2000 },
  
  // Additional Machakos Markets
  { id: '126', name: 'Kangundo Market', county: 'Machakos', latitude: -1.2833, longitude: 37.3833 },
  { id: '127', name: 'Matuu Market', county: 'Machakos', latitude: -1.0500, longitude: 37.6333 },
  { id: '128', name: 'Tala Market', county: 'Machakos', latitude: -1.3500, longitude: 37.3000 },
  
  // Additional Kajiado Markets
  { id: '129', name: 'Kitengela Market', county: 'Kajiado', latitude: -1.4667, longitude: 36.9500 },
  { id: '130', name: 'Namanga Market', county: 'Kajiado', latitude: -2.5500, longitude: 36.7833 },
  { id: '131', name: 'Loitokitok Market', county: 'Kajiado', latitude: -2.8833, longitude: 37.5167 },
  
  // Additional Nyandarua Markets
  { id: '132', name: 'Engineer Market', county: 'Nyandarua', latitude: -0.3833, longitude: 36.5833 },
  { id: '133', name: 'Kinangop Market', county: 'Nyandarua', latitude: -0.6000, longitude: 36.6333 },
  
  // Additional Nyeri Markets
  { id: '134', name: 'Othaya Market', county: 'Nyeri', latitude: -0.5833, longitude: 36.9500 },
  { id: '135', name: 'Mukurweini Market', county: 'Nyeri', latitude: -0.5000, longitude: 37.0500 },
  
  // Additional Laikipia Markets
  { id: '136', name: 'Nyahururu Market', county: 'Laikipia', latitude: -0.0333, longitude: 36.3667 },
  { id: '137', name: 'Rumuruti Market', county: 'Laikipia', latitude: 0.2667, longitude: 36.5333 },
  
  // Additional Kericho Markets
  { id: '138', name: 'Londiani Market', county: 'Kericho', latitude: -0.1667, longitude: 35.5833 },
  { id: '139', name: 'Kipkelion Market', county: 'Kericho', latitude: -0.2000, longitude: 35.4667 },
  { id: '140', name: 'Fort Ternan Market', county: 'Kericho', latitude: -0.1833, longitude: 35.3500 },
  
  // Additional Nandi Markets
  { id: '141', name: 'Mosoriot Market', county: 'Nandi', latitude: 0.2667, longitude: 35.2833 },
  { id: '142', name: 'Nandi Hills Market', county: 'Nandi', latitude: 0.1000, longitude: 35.1833 },
  
  // Additional Bomet Markets
  { id: '143', name: 'Sotik Market', county: 'Bomet', latitude: -0.7000, longitude: 35.1167 },
  { id: '144', name: 'Mulot Market', county: 'Bomet', latitude: -0.8167, longitude: 35.3833 },
  
  // Additional Baringo Markets
  { id: '145', name: 'Marigat Market', county: 'Baringo', latitude: 0.4667, longitude: 36.0333 },
  { id: '146', name: 'Mogotio Market', county: 'Baringo', latitude: 0.5333, longitude: 35.9833 },
  
  // Additional Embu Markets
  { id: '147', name: 'Siakago Market', county: 'Embu', latitude: -0.6667, longitude: 37.5833 },
  { id: '148', name: 'Runyenjes Market', county: 'Embu', latitude: -0.4833, longitude: 37.5667 },
  
  // Additional West Pokot Markets
  { id: '149', name: 'Makutano Market', county: 'West Pokot', latitude: 1.2167, longitude: 35.0667 },
];

export const CROPS: Crop[] = [
  // Cereals & Grains
  { id: 'maize', name: 'Maize', unit: 'bag (90kg)' },
  { id: 'beans', name: 'Beans', unit: 'bag (90kg)' },
  { id: 'rice', name: 'Rice', unit: 'bag (100kg)' },
  { id: 'wheat', name: 'Wheat', unit: 'bag (90kg)' },
  { id: 'sorghum', name: 'Sorghum', unit: 'bag (90kg)' },
  
  // Tubers & Roots
  { id: 'potatoes', name: 'Potatoes', unit: 'bag (110kg)' },
  { id: 'sweet_potatoes', name: 'Sweet Potatoes', unit: 'bag (100kg)' },
  { id: 'cassava', name: 'Cassava', unit: 'bag (100kg)' },
  { id: 'arrowroots', name: 'Arrowroots', unit: 'bag (50kg)' },
  
  // Vegetables
  { id: 'tomatoes', name: 'Tomatoes', unit: 'crate (22kg)' },
  { id: 'cabbage', name: 'Cabbage', unit: 'piece' },
  { id: 'kales', name: 'Kales (Sukuma Wiki)', unit: 'bundle' },
  { id: 'onions', name: 'Onions', unit: 'bag (50kg)' },
  { id: 'carrots', name: 'Carrots', unit: 'bag (50kg)' },
  { id: 'spinach', name: 'Spinach', unit: 'bundle' },
  { id: 'lettuce', name: 'Lettuce', unit: 'head' },
  { id: 'peppers', name: 'Green/Red Peppers', unit: 'crate (20kg)' },
  { id: 'pumpkin', name: 'Pumpkin', unit: 'piece' },
  { id: 'cucumbers', name: 'Cucumbers', unit: 'crate (15kg)' },
  
  // Fruits
  { id: 'bananas', name: 'Bananas', unit: 'bunch' },
  { id: 'avocado', name: 'Avocado', unit: 'crate (50 pieces)' },
  { id: 'mangoes', name: 'Mangoes', unit: 'crate (40 pieces)' },
  { id: 'pineapples', name: 'Pineapples', unit: 'piece' },
  { id: 'watermelon', name: 'Watermelon', unit: 'piece' },
  { id: 'passion_fruit', name: 'Passion Fruit', unit: 'bag (100 pieces)' },
  { id: 'oranges', name: 'Oranges', unit: 'bag (100 pieces)' },
  { id: 'pawpaw', name: 'Pawpaw', unit: 'piece' },
  
  // Dairy & Poultry
  { id: 'milk', name: 'Milk', unit: 'liter' },
  { id: 'eggs', name: 'Eggs', unit: 'tray (30 pieces)' },
  
  // Livestock
  { id: 'chicken', name: 'Chicken (Live)', unit: 'per bird' },
  { id: 'goat', name: 'Goat (Live)', unit: 'per animal' },
  
  // Cash Crops
  { id: 'coffee', name: 'Coffee (Cherry)', unit: 'kg' },
  { id: 'tea', name: 'Tea Leaves', unit: 'kg' },
  { id: 'sugarcane', name: 'Sugarcane', unit: 'ton' },
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
// Prices vary based on location, proximity to major cities, and regional agricultural production
export const BASE_MARKET_PRICES: Record<string, Record<string, number>> = {
  'maize': {
    '1': 3500, '2': 3400, '3': 3600, '4': 3300, '5': 3550, '6': 3700, '7': 3800, '8': 3750,
    '9': 3650, '10': 3500, '11': 3400, '12': 3350, '13': 3200, '14': 3250, '15': 3450, '16': 3380,
    '17': 3420, '18': 3480, '19': 3550, '20': 3500, '21': 3480, '22': 3600, '23': 3650, '24': 3580,
    '25': 3300, '26': 3280, '27': 3250, '28': 3200, '29': 3350, '30': 3400, '31': 3380, '32': 3100,
    '33': 3450, '34': 3420, '35': 3380, '36': 3300, '37': 3280, '38': 3250, '39': 3320, '40': 3350,
    '41': 3300, '42': 3280, '43': 3250, '44': 3400, '45': 3500, '46': 3480, '47': 3450, '48': 3350,
    '49': 3380, '50': 3420, '51': 3450, '52': 3380, '53': 3350, '54': 3320, '55': 3300, '56': 3400,
    '57': 3800, '58': 3850, '59': 3400, '60': 3600, '61': 3700, '62': 3750, '63': 3900, '64': 3850,
    '65': 3700, '66': 3650, '67': 3800, '68': 3600, '69': 3580, '70': 3650, '71': 3700, '72': 3680,
    '73': 3720, '74': 3550, '75': 3400, '76': 3350, '77': 3320, '78': 3300, '79': 3450, '80': 3420,
    '81': 3480, '82': 3430, '83': 3380, '84': 3350, '85': 3340, '86': 3330, '87': 3280, '88': 3460,
    '89': 3440, '90': 3470, '91': 3490, '92': 3455, '93': 3445, '94': 3480, '95': 3320, '96': 3500,
    '97': 3310, '98': 3490, '99': 3450, '100': 3420, '101': 3310, '102': 3360, '103': 3290, '104': 3270,
    '105': 3260, '106': 3240, '107': 3380, '108': 3340, '109': 3220, '110': 3250, '111': 3280, '112': 3300,
    '113': 3190, '114': 3470, '115': 3440, '116': 3450, '117': 3180, '118': 3210, '119': 3200, '120': 3080,
    '121': 3090, '122': 3070, '123': 3640, '124': 3320, '125': 3620, '126': 3570, '127': 3590, '128': 3560,
    '129': 3520, '130': 3580, '131': 3600, '132': 3310, '133': 3290, '134': 3270, '135': 3260, '136': 3360,
    '137': 3340, '138': 3390, '139': 3370, '140': 3410, '141': 3330, '142': 3320, '143': 3400, '144': 3420,
    '145': 3280, '146': 3240, '147': 3360, '148': 3340, '149': 3380,
  },
  'beans': {
    '1': 8500, '2': 8300, '3': 8600, '4': 8200, '5': 8450, '6': 9000, '7': 9200, '8': 9100,
    '9': 8700, '10': 8600, '11': 8400, '12': 8350, '13': 7800, '14': 8000, '15': 8350, '16': 8250,
    '17': 8300, '18': 8400, '19': 8550, '20': 8450, '21': 8480, '22': 8600, '23': 8650, '24': 8580,
    '25': 8100, '26': 8050, '27': 7900, '28': 7850, '29': 8150, '30': 8300, '31': 8250, '32': 7700,
    '33': 8400, '34': 8350, '35': 8280, '36': 8100, '37': 8050, '38': 8000, '39': 8120, '40': 8200,
    '41': 8100, '42': 8050, '43': 7950, '44': 8300, '45': 8400, '46': 8350, '47': 8320, '48': 8200,
    '49': 8250, '50': 8300, '51': 8350, '52': 8250, '53': 8200, '54': 8150, '55': 8100, '56': 8300,
    '57': 9500, '58': 9600, '59': 8500, '60': 8800, '61': 9000, '62': 9100, '63': 9700, '64': 9500,
    '65': 9200, '66': 9000, '67': 9300, '68': 8800, '69': 8750, '70': 8900, '71': 9000, '72': 8950,
    '73': 9050, '74': 8600, '75': 8400, '76': 8300, '77': 8200, '78': 8150, '79': 8450, '80': 8380,
    '81': 8500, '82': 8420, '83': 8350, '84': 8180, '85': 8160, '86': 8140, '87': 8120, '88': 8470,
    '89': 8440, '90': 8490, '91': 8510, '92': 8460, '93': 8430, '94': 8480, '95': 8220, '96': 8500,
    '97': 8180, '98': 8490, '99': 8450, '100': 8380, '101': 8110, '102': 8170, '103': 8090, '104': 8060,
    '105': 8040, '106': 8020, '107': 8380, '108': 8320, '109': 8180, '110': 8220, '111': 7950, '112': 8000,
    '113': 7880, '114': 8420, '115': 8400, '116': 8410, '117': 7750, '118': 7780, '119': 7760, '120': 7680,
    '121': 7690, '122': 7670, '123': 8680, '124': 8120, '125': 8660, '126': 8570, '127': 8590, '128': 8540,
    '129': 8520, '130': 8580, '131': 8600, '132': 8080, '133': 8060, '134': 8040, '135': 8020, '136': 8280,
    '137': 8240, '138': 8320, '139': 8290, '140': 8350, '141': 8180, '142': 8160, '143': 8280, '144': 8300,
    '145': 8050, '146': 7990, '147': 8180, '148': 8140, '149': 8220,
  },
  'potatoes': {
    '1': 2800, '2': 2700, '3': 2900, '4': 2600, '5': 2750, '6': 3100, '7': 3200, '8': 3150,
    '9': 2850, '10': 2800, '11': 2750, '12': 2720, '13': 2500, '14': 2550, '15': 2750, '16': 2680,
    '17': 2720, '18': 2780, '19': 2900, '20': 2850, '21': 2880, '22': 2950, '23': 3000, '24': 2920,
    '25': 2550, '26': 2520, '27': 2600, '28': 2580, '29': 2650, '30': 2700, '31': 2680, '32': 2450,
    '33': 2750, '34': 2720, '35': 2680, '36': 2600, '37': 2580, '38': 2550, '39': 2620, '40': 2650,
    '41': 2600, '42': 2580, '43': 2550, '44': 2700, '45': 2800, '46': 2780, '47': 2750, '48': 2650,
    '49': 2680, '50': 2720, '51': 2750, '52': 2680, '53': 2650, '54': 2620, '55': 2600, '56': 2700,
    '57': 3200, '58': 3300, '59': 2800, '60': 2950, '61': 3050, '62': 3100, '63': 3400, '64': 3300,
    '65': 3100, '66': 3000, '67': 3150, '68': 2950, '69': 2920, '70': 3000, '71': 3050, '72': 3020,
    '73': 3080, '74': 2850, '75': 2700, '76': 2650, '77': 2620, '78': 2600, '79': 2750, '80': 2720,
    '81': 2800, '82': 2730, '83': 2680, '84': 2590, '85': 2570, '86': 2560, '87': 2580, '88': 2770,
    '89': 2740, '90': 2780, '91': 2790, '92': 2760, '93': 2750, '94': 2880, '95': 2610, '96': 2900,
    '97': 2600, '98': 2890, '99': 2850, '100': 2720, '101': 2610, '102': 2660, '103': 2590, '104': 2570,
    '105': 2560, '106': 2540, '107': 2780, '108': 2740, '109': 2520, '110': 2550, '111': 2630, '112': 2650,
    '113': 2590, '114': 2770, '115': 2740, '116': 2750, '117': 2480, '118': 2510, '119': 2500, '120': 2420,
    '121': 2430, '122': 2410, '123': 2840, '124': 2620, '125': 2860, '126': 2920, '127': 2940, '128': 2910,
    '129': 2870, '130': 2930, '131': 2950, '132': 2560, '133': 2540, '134': 2520, '135': 2510, '136': 2680,
    '137': 2640, '138': 2690, '139': 2670, '140': 2710, '141': 2630, '142': 2620, '143': 2700, '144': 2720,
    '145': 2550, '146': 2490, '147': 2660, '148': 2640, '149': 2680,
  },
  'tomatoes': {
    '1': 1800, '2': 1700, '3': 1850, '4': 1600, '5': 1750, '6': 2000, '7': 2100, '8': 2050,
    '9': 1900, '10': 1850, '11': 1750, '12': 1720, '13': 1550, '14': 1580, '15': 1700, '16': 1650,
    '17': 1680, '18': 1750, '19': 1850, '20': 1800, '21': 1820, '22': 1900, '23': 1950, '24': 1880,
    '25': 1600, '26': 1580, '27': 1650, '28': 1620, '29': 1700, '30': 1750, '31': 1720, '32': 1500,
    '33': 1750, '34': 1720, '35': 1680, '36': 1600, '37': 1580, '38': 1550, '39': 1620, '40': 1650,
    '41': 1600, '42': 1580, '43': 1550, '44': 1700, '45': 1800, '46': 1780, '47': 1750, '48': 1650,
    '49': 1680, '50': 1720, '51': 1750, '52': 1680, '53': 1650, '54': 1620, '55': 1600, '56': 1700,
    '57': 2200, '58': 2300, '59': 1800, '60': 1950, '61': 2050, '62': 2100, '63': 2400, '64': 2300,
    '65': 2100, '66': 2000, '67': 2150, '68': 1950, '69': 1920, '70': 2000, '71': 2050, '72': 2020,
    '73': 2080, '74': 1850, '75': 1700, '76': 1650, '77': 1620, '78': 1600, '79': 1750, '80': 1720,
    '81': 1800, '82': 1730, '83': 1680, '84': 1590, '85': 1570, '86': 1560, '87': 1580, '88': 1770,
    '89': 1740, '90': 1780, '91': 1790, '92': 1760, '93': 1750, '94': 1820, '95': 1610, '96': 1900,
    '97': 1600, '98': 1890, '99': 1850, '100': 1720, '101': 1610, '102': 1660, '103': 1590, '104': 1570,
    '105': 1560, '106': 1540, '107': 1780, '108': 1740, '109': 1520, '110': 1550, '111': 1670, '112': 1690,
    '113': 1640, '114': 1770, '115': 1740, '116': 1750, '117': 1530, '118': 1560, '119': 1550, '120': 1470,
    '121': 1480, '122': 1460, '123': 1890, '124': 1620, '125': 1910, '126': 1880, '127': 1890, '128': 1870,
    '129': 1830, '130': 1890, '131': 1900, '132': 1560, '133': 1540, '134': 1520, '135': 1510, '136': 1680,
    '137': 1640, '138': 1730, '139': 1710, '140': 1760, '141': 1630, '142': 1620, '143': 1700, '144': 1720,
    '145': 1550, '146': 1490, '147': 1660, '148': 1640, '149': 1680,
  },
  'cabbage': {
    '1': 35, '2': 30, '3': 40, '4': 28, '5': 33, '6': 45, '7': 48, '8': 46,
    '9': 38, '10': 36, '11': 32, '12': 31, '13': 25, '14': 27, '15': 33, '16': 30,
    '17': 31, '18': 34, '19': 37, '20': 35, '21': 36, '22': 40, '23': 42, '24': 38,
    '25': 30, '26': 29, '27': 28, '28': 27, '29': 30, '30': 32, '31': 31, '32': 25,
    '33': 32, '34': 31, '35': 30, '36': 28, '37': 27, '38': 26, '39': 28, '40': 29,
    '41': 28, '42': 27, '43': 26, '44': 32, '45': 35, '46': 34, '47': 33, '48': 29,
    '49': 30, '50': 31, '51': 33, '52': 30, '53': 29, '54': 28, '55': 27, '56': 32,
    '57': 50, '58': 52, '59': 35, '60': 40, '61': 42, '62': 45, '63': 55, '64': 52,
    '65': 48, '66': 45, '67': 50, '68': 40, '69': 38, '70': 42, '71': 45, '72': 43,
    '73': 46, '74': 37, '75': 32, '76': 30, '77': 29, '78': 28, '79': 33, '80': 32,
    '81': 35, '82': 33, '83': 31, '84': 27, '85': 26, '86': 25, '87': 27, '88': 34,
    '89': 32, '90': 35, '91': 36, '92': 33, '93': 32, '94': 36, '95': 28, '96': 38,
    '97': 27, '98': 37, '99': 35, '100': 31, '101': 28, '102': 29, '103': 27, '104': 26,
    '105': 25, '106': 24, '107': 33, '108': 31, '109': 24, '110': 25, '111': 28, '112': 29,
    '113': 26, '114': 32, '115': 31, '116': 32, '117': 23, '118': 24, '119': 23, '120': 22,
    '121': 22, '122': 21, '123': 37, '124': 28, '125': 38, '126': 38, '127': 39, '128': 37,
    '129': 36, '130': 39, '131': 40, '132': 26, '133': 25, '134': 24, '135': 23, '136': 30,
    '137': 29, '138': 31, '139': 30, '140': 32, '141': 28, '142': 27, '143': 31, '144': 32,
    '145': 26, '146': 24, '147': 29, '148': 28, '149': 30,
  },
  'kales': {
    '1': 20, '2': 18, '3': 22, '4': 17, '5': 19, '6': 25, '7': 27, '8': 26,
    '9': 21, '10': 20, '11': 19, '12': 18, '13': 15, '14': 16, '15': 19, '16': 17,
    '17': 18, '18': 19, '19': 21, '20': 20, '21': 20, '22': 23, '23': 24, '24': 22,
    '25': 18, '26': 17, '27': 17, '28': 16, '29': 18, '30': 19, '31': 18, '32': 15,
    '33': 19, '34': 18, '35': 17, '36': 16, '37': 15, '38': 15, '39': 16, '40': 17,
    '41': 16, '42': 15, '43': 15, '44': 19, '45': 20, '46': 19, '47': 19, '48': 17,
    '49': 18, '50': 18, '51': 19, '52': 18, '53': 17, '54': 16, '55': 16, '56': 19,
    '57': 30, '58': 32, '59': 22, '60': 25, '61': 27, '62': 28, '63': 35, '64': 32,
    '65': 28, '66': 26, '67': 30, '68': 25, '69': 24, '70': 26, '71': 28, '72': 27,
    '73': 28, '74': 22, '75': 19, '76': 18, '77': 17, '78': 16, '79': 20, '80': 19,
    '81': 21, '82': 19, '83': 18, '84': 16, '85': 15, '86': 15, '87': 15, '88': 20,
    '89': 19, '90': 21, '91': 22, '92': 20, '93': 19, '94': 20, '95': 17, '96': 22,
    '97': 16, '98': 21, '99': 20, '100': 18, '101': 16, '102': 17, '103': 16, '104': 15,
    '105': 14, '106': 14, '107': 19, '108': 18, '109': 14, '110': 15, '111': 17, '112': 17,
    '113': 16, '114': 19, '115': 18, '116': 19, '117': 14, '118': 15, '119': 14, '120': 13,
    '121': 13, '122': 12, '123': 21, '124': 16, '125': 22, '126': 22, '127': 23, '128': 21,
    '129': 20, '130': 23, '131': 24, '132': 15, '133': 14, '134': 14, '135': 13, '136': 18,
    '137': 17, '138': 18, '139': 18, '140': 19, '141': 16, '142': 16, '143': 18, '144': 19,
    '145': 15, '146': 14, '147': 17, '148': 16, '149': 18,
  },
  'onions': {
    '1': 4500, '2': 4300, '3': 4600, '4': 4200, '5': 4450, '6': 5000, '7': 5200, '8': 5100,
    '9': 4700, '10': 4600, '11': 4400, '12': 4350, '13': 4000, '14': 4100, '15': 4350, '16': 4250,
    '17': 4300, '18': 4400, '19': 4550, '20': 4450, '21': 4480, '22': 4650, '23': 4700, '24': 4620,
    '25': 4100, '26': 4050, '27': 4050, '28': 4000, '29': 4150, '30': 4400, '31': 4350, '32': 3900,
    '33': 4400, '34': 4350, '35': 4280, '36': 4100, '37': 4050, '38': 4000, '39': 4120, '40': 4200,
    '41': 4100, '42': 4050, '43': 3950, '44': 4300, '45': 4400, '46': 4350, '47': 4320, '48': 4200,
    '49': 4250, '50': 4300, '51': 4350, '52': 4250, '53': 4200, '54': 4150, '55': 4100, '56': 4300,
    '57': 5500, '58': 5700, '59': 4600, '60': 4900, '61': 5100, '62': 5200, '63': 6000, '64': 5700,
    '65': 5300, '66': 5100, '67': 5400, '68': 4900, '69': 4850, '70': 5000, '71': 5100, '72': 5050,
    '73': 5150, '74': 4650, '75': 4400, '76': 4300, '77': 4200, '78': 4150, '79': 4450, '80': 4380,
    '81': 4500, '82': 4420, '83': 4350, '84': 4080, '85': 4060, '86': 4040, '87': 4120, '88': 4470,
    '89': 4440, '90': 4490, '91': 4510, '92': 4460, '93': 4430, '94': 4480, '95': 4220, '96': 4600,
    '97': 4180, '98': 4590, '99': 4550, '100': 4380, '101': 4110, '102': 4170, '103': 4090, '104': 4060,
    '105': 4040, '106': 4020, '107': 4380, '108': 4320, '109': 3980, '110': 4020, '111': 4080, '112': 4100,
    '113': 3950, '114': 4420, '115': 4400, '116': 4410, '117': 3920, '118': 3950, '119': 3930, '120': 3850,
    '121': 3860, '122': 3840, '123': 4680, '124': 4120, '125': 4700, '126': 4620, '127': 4640, '128': 4610,
    '129': 4570, '130': 4630, '131': 4650, '132': 4040, '133': 4020, '134': 4000, '135': 3980, '136': 4280,
    '137': 4240, '138': 4350, '139': 4320, '140': 4380, '141': 4180, '142': 4160, '143': 4300, '144': 4320,
    '145': 4050, '146': 3990, '147': 4180, '148': 4140, '149': 4220,
  },
  'carrots': {
    '1': 3500, '2': 3300, '3': 3600, '4': 3200, '5': 3450, '6': 4000, '7': 4100, '8': 4050,
    '9': 3700, '10': 3600, '11': 3400, '12': 3350, '13': 3000, '14': 3100, '15': 3350, '16': 3250,
    '17': 3300, '18': 3400, '19': 3550, '20': 3450, '21': 3480, '22': 3650, '23': 3700, '24': 3620,
    '25': 3100, '26': 3050, '27': 3050, '28': 3000, '29': 3150, '30': 3400, '31': 3350, '32': 2900,
    '33': 3400, '34': 3350, '35': 3280, '36': 3100, '37': 3050, '38': 3000, '39': 3120, '40': 3200,
    '41': 3100, '42': 3050, '43': 2950, '44': 3300, '45': 3400, '46': 3350, '47': 3320, '48': 3200,
    '49': 3250, '50': 3300, '51': 3350, '52': 3250, '53': 3200, '54': 3150, '55': 3100, '56': 3300,
    '57': 4500, '58': 4700, '59': 3600, '60': 3900, '61': 4100, '62': 4200, '63': 5000, '64': 4700,
    '65': 4300, '66': 4100, '67': 4400, '68': 3900, '69': 3850, '70': 4000, '71': 4100, '72': 4050,
    '73': 4150, '74': 3650, '75': 3400, '76': 3300, '77': 3200, '78': 3150, '79': 3450, '80': 3380,
    '81': 3500, '82': 3420, '83': 3350, '84': 3080, '85': 3060, '86': 3040, '87': 3120, '88': 3470,
    '89': 3440, '90': 3490, '91': 3510, '92': 3460, '93': 3430, '94': 3480, '95': 3220, '96': 3600,
    '97': 3180, '98': 3590, '99': 3550, '100': 3380, '101': 3110, '102': 3170, '103': 3090, '104': 3060,
    '105': 3040, '106': 3020, '107': 3380, '108': 3320, '109': 2980, '110': 3020, '111': 3080, '112': 3100,
    '113': 2950, '114': 3420, '115': 3400, '116': 3410, '117': 2920, '118': 2950, '119': 2930, '120': 2850,
    '121': 2860, '122': 2840, '123': 3680, '124': 3120, '125': 3700, '126': 3620, '127': 3640, '128': 3610,
    '129': 3570, '130': 3630, '131': 3650, '132': 3040, '133': 3020, '134': 3000, '135': 2980, '136': 3280,
    '137': 3240, '138': 3350, '139': 3320, '140': 3380, '141': 3180, '142': 3160, '143': 3300, '144': 3320,
    '145': 3050, '146': 2990, '147': 3180, '148': 3140, '149': 3220,
  },
  'bananas': {
    '1': 250, '2': 230, '3': 260, '4': 220, '5': 245, '6': 300, '7': 320, '8': 310,
    '9': 270, '10': 260, '11': 240, '12': 235, '13': 200, '14': 210, '15': 235, '16': 225,
    '17': 230, '18': 240, '19': 255, '20': 245, '21': 248, '22': 265, '23': 270, '24': 258,
    '25': 210, '26': 205, '27': 205, '28': 200, '29': 215, '30': 240, '31': 235, '32': 190,
    '33': 240, '34': 235, '35': 228, '36': 210, '37': 205, '38': 200, '39': 212, '40': 220,
    '41': 210, '42': 205, '43': 195, '44': 230, '45': 240, '46': 235, '47': 232, '48': 220,
    '49': 225, '50': 230, '51': 235, '52': 225, '53': 220, '54': 215, '55': 210, '56': 230,
    '57': 350, '58': 370, '59': 260, '60': 300, '61': 320, '62': 330, '63': 400, '64': 370,
    '65': 340, '66': 320, '67': 360, '68': 300, '69': 295, '70': 310, '71': 320, '72': 315,
    '73': 325, '74': 265, '75': 240, '76': 230, '77': 220, '78': 215, '79': 245, '80': 238,
    '81': 250, '82': 242, '83': 235, '84': 208, '85': 203, '86': 198, '87': 205, '88': 247,
    '89': 243, '90': 252, '91': 255, '92': 246, '93': 241, '94': 248, '95': 218, '96': 260,
    '97': 215, '98': 258, '99': 250, '100': 228, '101': 208, '102': 217, '103': 207, '104': 203,
    '105': 198, '106': 193, '107': 238, '108': 233, '109': 188, '110': 193, '111': 228, '112': 233,
    '113': 223, '114': 242, '115': 238, '116': 241, '117': 185, '118': 190, '119': 188, '120': 175,
    '121': 177, '122': 172, '123': 268, '124': 212, '125': 272, '126': 258, '127': 262, '128': 256,
    '129': 248, '130': 263, '131': 265, '132': 198, '133': 193, '134': 188, '135': 183, '136': 228,
    '137': 223, '138': 235, '139': 232, '140': 240, '141': 218, '142': 215, '143': 230, '144': 235,
    '145': 205, '146': 190, '147': 220, '148': 215, '149': 225,
  },
  'avocado': {
    '1': 2500, '2': 2400, '3': 2600, '4': 2300, '5': 2450, '6': 2800, '7': 2900, '8': 2850,
    '9': 2650, '10': 2600, '11': 2450, '12': 2420, '13': 2200, '14': 2250, '15': 2400, '16': 2350,
    '17': 2380, '18': 2450, '19': 2550, '20': 2450, '21': 2480, '22': 2600, '23': 2650, '24': 2580,
    '25': 2250, '26': 2220, '27': 2300, '28': 2280, '29': 2350, '30': 2450, '31': 2420, '32': 2100,
    '33': 2450, '34': 2420, '35': 2380, '36': 2300, '37': 2280, '38': 2250, '39': 2320, '40': 2350,
    '41': 2300, '42': 2280, '43': 2250, '44': 2400, '45': 2500, '46': 2480, '47': 2450, '48': 2350,
    '49': 2380, '50': 2420, '51': 2450, '52': 2380, '53': 2350, '54': 2320, '55': 2300, '56': 2400,
    '57': 3200, '58': 3400, '59': 2700, '60': 2900, '61': 3000, '62': 3100, '63': 3600, '64': 3400,
    '65': 3100, '66': 2950, '67': 3200, '68': 2900, '69': 2850, '70': 2950, '71': 3000, '72': 2980,
    '73': 3050, '74': 2650, '75': 2450, '76': 2380, '77': 2350, '78': 2300, '79': 2500, '80': 2450,
    '81': 2550, '82': 2480, '83': 2420, '84': 2280, '85': 2260, '86': 2240, '87': 2270, '88': 2520,
    '89': 2490, '90': 2530, '91': 2540, '92': 2510, '93': 2480, '94': 2500, '95': 2290, '96': 2600,
    '97': 2270, '98': 2590, '99': 2550, '100': 2420, '101': 2280, '102': 2330, '103': 2270, '104': 2250,
    '105': 2240, '106': 2220, '107': 2420, '108': 2380, '109': 2180, '110': 2220, '111': 2310, '112': 2330,
    '113': 2250, '114': 2470, '115': 2450, '116': 2460, '117': 2150, '118': 2180, '119': 2170, '120': 2080,
    '121': 2090, '122': 2070, '123': 2640, '124': 2320, '125': 2660, '126': 2580, '127': 2600, '128': 2570,
    '129': 2530, '130': 2590, '131': 2600, '132': 2240, '133': 2220, '134': 2200, '135': 2180, '136': 2380,
    '137': 2340, '138': 2430, '139': 2410, '140': 2460, '141': 2330, '142': 2320, '143': 2400, '144': 2420,
    '145': 2260, '146': 2190, '147': 2330, '148': 2310, '149': 2360,
  },
  'rice': {
    '1': 12000, '2': 11800, '3': 12200, '4': 11500, '5': 11900, '6': 13000, '7': 13500, '8': 13200,
    '9': 12500, '10': 12300, '11': 12000, '12': 11800, '13': 11000, '14': 11200, '15': 11900, '16': 11600,
    '17': 11700, '18': 12000, '19': 12200, '20': 12100, '21': 12050, '22': 12300, '23': 12400, '24': 12250,
    '25': 11200, '26': 11100, '27': 11300, '28': 11000, '29': 11400, '30': 11800, '31': 11700, '32': 10800,
    '33': 11900, '34': 11800, '35': 11600, '36': 11300, '37': 11200, '38': 11100, '39': 11350, '40': 11500,
    '41': 11300, '42': 11200, '43': 11000, '44': 11800, '45': 12000, '46': 11900, '47': 11850, '48': 11500,
    '49': 11600, '50': 11700, '51': 11900, '52': 11700, '53': 11600, '54': 11400, '55': 11300, '56': 11800,
    '57': 14000, '58': 14500, '59': 12500, '60': 13000, '61': 13500, '62': 13800, '63': 15000, '64': 14500,
    '65': 14000, '66': 13500, '67': 14200, '68': 13000, '69': 12800, '70': 13200, '71': 13500, '72': 13300,
    '73': 13600, '74': 12400, '75': 12000, '76': 11800, '77': 11600, '78': 11500, '79': 12000, '80': 11900,
    '81': 12100, '82': 11950, '83': 11800, '84': 11500, '85': 11400, '86': 11300, '87': 11450, '88': 12050,
    '89': 11980, '90': 12120, '91': 12150, '92': 12080, '93': 11950, '94': 12100, '95': 11650, '96': 12200,
    '97': 11550, '98': 12180, '99': 12050, '100': 11750, '101': 11350, '102': 11450, '103': 11280, '104': 11200,
    '105': 11150, '106': 11100, '107': 11750, '108': 11650, '109': 10950, '110': 11050, '111': 11650, '112': 11700,
    '113': 11400, '114': 11980, '115': 11900, '116': 11950, '117': 10850, '118': 10950, '119': 10900, '120': 10600,
    '121': 10650, '122': 10550, '123': 12450, '124': 11380, '125': 12500, '126': 12280, '127': 12320, '128': 12250,
    '129': 12150, '130': 12300, '131': 12350, '132': 11280, '133': 11200, '134': 11100, '135': 11050, '136': 11700,
    '137': 11600, '138': 11800, '139': 11750, '140': 11850, '141': 11450, '142': 11400, '143': 11750, '144': 11800,
    '145': 11150, '146': 10950, '147': 11450, '148': 11380, '149': 11550,
  },
  'wheat': {
    '1': 4000, '2': 3900, '3': 4100, '4': 3800, '5': 3950, '6': 4200, '7': 4300, '8': 4250,
    '9': 4050, '10': 4000, '11': 3950, '12': 3900, '13': 3600, '14': 3700, '15': 3950, '16': 3850,
    '17': 3880, '18': 3950, '19': 4050, '20': 4000, '21': 4020, '22': 4100, '23': 4150, '24': 4080,
    '25': 3700, '26': 3650, '27': 3720, '28': 3680, '29': 3750, '30': 3900, '31': 3850, '32': 3500,
    '33': 3950, '34': 3900, '35': 3850, '36': 3720, '37': 3680, '38': 3650, '39': 3740, '40': 3800,
    '41': 3720, '42': 3680, '43': 3630, '44': 3900, '45': 4000, '46': 3950, '47': 3920, '48': 3800,
    '49': 3850, '50': 3880, '51': 3950, '52': 3880, '53': 3850, '54': 3780, '55': 3720, '56': 3900,
    '57': 4500, '58': 4650, '59': 4100, '60': 4250, '61': 4350, '62': 4400, '63': 4800, '64': 4650,
    '65': 4450, '66': 4300, '67': 4550, '68': 4250, '69': 4200, '70': 4300, '71': 4350, '72': 4320,
    '73': 4380, '74': 4080, '75': 3950, '76': 3850, '77': 3780, '78': 3720, '79': 4000, '80': 3950,
    '81': 4050, '82': 3980, '83': 3900, '84': 3700, '85': 3680, '86': 3650, '87': 3690, '88': 4020,
    '89': 3980, '90': 4060, '91': 4080, '92': 4030, '93': 3980, '94': 4050, '95': 3780, '96': 4100,
    '97': 3750, '98': 4080, '99': 4020, '100': 3880, '101': 3730, '102': 3780, '103': 3690, '104': 3660,
    '105': 3640, '106': 3620, '107': 3880, '108': 3820, '109': 3580, '110': 3620, '111': 3830, '112': 3850,
    '113': 3720, '114': 3980, '115': 3950, '116': 3970, '117': 3550, '118': 3580, '119': 3560, '120': 3450,
    '121': 3470, '122': 3430, '123': 4080, '124': 3750, '125': 4100, '126': 4050, '127': 4070, '128': 4040,
    '129': 4020, '130': 4060, '131': 4080, '132': 3680, '133': 3650, '134': 3620, '135': 3580, '136': 3850,
    '137': 3800, '138': 3920, '139': 3880, '140': 3950, '141': 3780, '142': 3750, '143': 3900, '144': 3920,
    '145': 3650, '146': 3560, '147': 3780, '148': 3750, '149': 3820,
  },
  'sorghum': {
    '1': 3200, '2': 3100, '3': 3300, '4': 3000, '5': 3150, '6': 3400, '7': 3500, '8': 3450,
    '9': 3250, '10': 3200, '11': 3150, '12': 3100, '13': 2800, '14': 2900, '15': 3150, '16': 3050,
    '17': 3080, '18': 3150, '19': 3250, '20': 3200, '21': 3220, '22': 3300, '23': 3350, '24': 3280,
    '25': 2900, '26': 2850, '27': 2920, '28': 2880, '29': 2950, '30': 3100, '31': 3050, '32': 2700,
    '33': 3150, '34': 3100, '35': 3050, '36': 2920, '37': 2880, '38': 2850, '39': 2940, '40': 3000,
    '41': 2920, '42': 2880, '43': 2830, '44': 3100, '45': 3200, '46': 3150, '47': 3120, '48': 3000,
    '49': 3050, '50': 3080, '51': 3150, '52': 3080, '53': 3050, '54': 2980, '55': 2920, '56': 3100,
    '57': 3700, '58': 3850, '59': 3300, '60': 3450, '61': 3550, '62': 3600, '63': 4000, '64': 3850,
    '65': 3650, '66': 3500, '67': 3750, '68': 3450, '69': 3400, '70': 3500, '71': 3550, '72': 3520,
    '73': 3580, '74': 3280, '75': 3150, '76': 3050, '77': 2980, '78': 2920, '79': 3200, '80': 3150,
    '81': 3250, '82': 3180, '83': 3100, '84': 2900, '85': 2880, '86': 2850, '87': 2890, '88': 3220,
    '89': 3180, '90': 3260, '91': 3280, '92': 3230, '93': 3180, '94': 3250, '95': 2980, '96': 3300,
    '97': 2950, '98': 3280, '99': 3220, '100': 3080, '101': 2930, '102': 2980, '103': 2890, '104': 2860,
    '105': 2840, '106': 2820, '107': 3080, '108': 3020, '109': 2780, '110': 2820, '111': 3030, '112': 3050,
    '113': 2920, '114': 3180, '115': 3150, '116': 3170, '117': 2750, '118': 2780, '119': 2760, '120': 2650,
    '121': 2670, '122': 2630, '123': 3280, '124': 2950, '125': 3300, '126': 3250, '127': 3270, '128': 3240,
    '129': 3220, '130': 3260, '131': 3280, '132': 2880, '133': 2850, '134': 2820, '135': 2780, '136': 3050,
    '137': 3000, '138': 3120, '139': 3080, '140': 3150, '141': 2980, '142': 2950, '143': 3100, '144': 3120,
    '145': 2850, '146': 2760, '147': 2980, '148': 2950, '149': 3020,
  },
  'sweet_potatoes': {
    '1': 2500, '2': 2400, '3': 2600, '4': 2300, '5': 2450, '6': 2800, '7': 2900, '8': 2850,
    '9': 2650, '10': 2600, '11': 2450, '12': 2420, '13': 2200, '14': 2250, '15': 2450, '16': 2380,
    '17': 2420, '18': 2480, '19': 2600, '20': 2550, '21': 2580, '22': 2650, '23': 2700, '24': 2620,
    '25': 2250, '26': 2220, '27': 2300, '28': 2280, '29': 2350, '30': 2450, '31': 2420, '32': 2150,
    '33': 2450, '34': 2420, '35': 2380, '36': 2300, '37': 2280, '38': 2250, '39': 2320, '40': 2350,
    '41': 2300, '42': 2280, '43': 2250, '44': 2450, '45': 2550, '46': 2480, '47': 2450, '48': 2350,
    '49': 2380, '50': 2420, '51': 2450, '52': 2420, '53': 2380, '54': 2320, '55': 2300, '56': 2450,
    '57': 3000, '58': 3100, '59': 2650, '60': 2750, '61': 2850, '62': 2900, '63': 3200, '64': 3100,
    '65': 2950, '66': 2800, '67': 3000, '68': 2750, '69': 2720, '70': 2800, '71': 2850, '72': 2820,
    '73': 2880, '74': 2620, '75': 2450, '76': 2380, '77': 2320, '78': 2300, '79': 2450, '80': 2420,
    '81': 2550, '82': 2480, '83': 2420, '84': 2290, '85': 2270, '86': 2240, '87': 2280, '88': 2470,
    '89': 2440, '90': 2530, '91': 2550, '92': 2490, '93': 2450, '94': 2580, '95': 2320, '96': 2600,
    '97': 2290, '98': 2590, '99': 2550, '100': 2420, '101': 2310, '102': 2360, '103': 2280, '104': 2260,
    '105': 2240, '106': 2220, '107': 2480, '108': 2420, '109': 2180, '110': 2220, '111': 2430, '112': 2450,
    '113': 2340, '114': 2460, '115': 2440, '116': 2450, '117': 2150, '118': 2180, '119': 2160, '120': 2080,
    '121': 2090, '122': 2070, '123': 2640, '124': 2330, '125': 2660, '126': 2620, '127': 2640, '128': 2610,
    '129': 2570, '130': 2630, '131': 2650, '132': 2270, '133': 2240, '134': 2220, '135': 2180, '136': 2420,
    '137': 2380, '138': 2460, '139': 2430, '140': 2480, '141': 2360, '142': 2330, '143': 2450, '144': 2470,
    '145': 2250, '146': 2160, '147': 2360, '148': 2330, '149': 2380,
  },
  'cassava': {
    '1': 1800, '2': 1700, '3': 1850, '4': 1600, '5': 1750, '6': 2000, '7': 2100, '8': 2050,
    '9': 1900, '10': 1850, '11': 1750, '12': 1720, '13': 1550, '14': 1580, '15': 1750, '16': 1680,
    '17': 1720, '18': 1780, '19': 1850, '20': 1800, '21': 1820, '22': 1900, '23': 1950, '24': 1880,
    '25': 1580, '26': 1550, '27': 1620, '28': 1600, '29': 1650, '30': 1750, '31': 1720, '32': 1480,
    '33': 1750, '34': 1720, '35': 1680, '36': 1620, '37': 1600, '38': 1550, '39': 1640, '40': 1680,
    '41': 1620, '42': 1600, '43': 1570, '44': 1750, '45': 1850, '46': 1780, '47': 1750, '48': 1680,
    '49': 1720, '50': 1750, '51': 1780, '52': 1720, '53': 1680, '54': 1640, '55': 1620, '56': 1750,
    '57': 2300, '58': 2400, '59': 1900, '60': 2000, '61': 2100, '62': 2150, '63': 2500, '64': 2400,
    '65': 2200, '66': 2050, '67': 2300, '68': 2000, '69': 1980, '70': 2050, '71': 2100, '72': 2080,
    '73': 2120, '74': 1880, '75': 1750, '76': 1680, '77': 1640, '78': 1620, '79': 1750, '80': 1720,
    '81': 1850, '82': 1780, '83': 1720, '84': 1590, '85': 1570, '86': 1540, '87': 1580, '88': 1770,
    '89': 1740, '90': 1830, '91': 1850, '92': 1790, '93': 1750, '94': 1820, '95': 1640, '96': 1900,
    '97': 1590, '98': 1890, '99': 1850, '100': 1720, '101': 1630, '102': 1680, '103': 1590, '104': 1570,
    '105': 1540, '106': 1520, '107': 1780, '108': 1720, '109': 1500, '110': 1520, '111': 1730, '112': 1750,
    '113': 1660, '114': 1760, '115': 1740, '116': 1750, '117': 1480, '118': 1500, '119': 1490, '120': 1420,
    '121': 1430, '122': 1410, '123': 1890, '124': 1650, '125': 1910, '126': 1880, '127': 1890, '128': 1870,
    '129': 1830, '130': 1890, '131': 1900, '132': 1570, '133': 1540, '134': 1520, '135': 1480, '136': 1720,
    '137': 1680, '138': 1760, '139': 1730, '140': 1780, '141': 1680, '142': 1650, '143': 1750, '144': 1770,
    '145': 1550, '146': 1470, '147': 1680, '148': 1650, '149': 1700,
  },
  'arrowroots': {
    '1': 4500, '2': 4300, '3': 4600, '4': 4200, '5': 4450, '6': 5000, '7': 5200, '8': 5100,
    '9': 4700, '10': 4600, '11': 4400, '12': 4350, '13': 4000, '14': 4100, '15': 4450, '16': 4350,
    '17': 4380, '18': 4450, '19': 4550, '20': 4500, '21': 4520, '22': 4600, '23': 4650, '24': 4580,
    '25': 4100, '26': 4050, '27': 4150, '28': 4100, '29': 4200, '30': 4400, '31': 4350, '32': 3900,
    '33': 4450, '34': 4400, '35': 4350, '36': 4150, '37': 4100, '38': 4050, '39': 4170, '40': 4250,
    '41': 4150, '42': 4100, '43': 4030, '44': 4400, '45': 4500, '46': 4450, '47': 4420, '48': 4250,
    '49': 4350, '50': 4400, '51': 4450, '52': 4380, '53': 4350, '54': 4250, '55': 4150, '56': 4400,
    '57': 5800, '58': 6000, '59': 4700, '60': 5000, '61': 5200, '62': 5300, '63': 6200, '64': 6000,
    '65': 5600, '66': 5300, '67': 5800, '68': 5000, '69': 4950, '70': 5100, '71': 5200, '72': 5150,
    '73': 5250, '74': 4680, '75': 4450, '76': 4350, '77': 4250, '78': 4150, '79': 4500, '80': 4450,
    '81': 4600, '82': 4520, '83': 4450, '84': 4080, '85': 4050, '86': 4020, '87': 4090, '88': 4530,
    '89': 4490, '90': 4610, '91': 4630, '92': 4550, '93': 4480, '94': 4580, '95': 4280, '96': 4700,
    '97': 4180, '98': 4690, '99': 4620, '100': 4420, '101': 4180, '102': 4250, '103': 4090, '104': 4050,
    '105': 4020, '106': 3980, '107': 4420, '108': 4350, '109': 3930, '110': 3980, '111': 4360, '112': 4380,
    '113': 4200, '114': 4490, '115': 4460, '116': 4480, '117': 3880, '118': 3920, '119': 3900, '120': 3750,
    '121': 3770, '122': 3730, '123': 4710, '124': 4190, '125': 4730, '126': 4680, '127': 4700, '128': 4670,
    '129': 4620, '130': 4690, '131': 4710, '132': 4050, '133': 4020, '134': 3980, '135': 3930, '136': 4380,
    '137': 4320, '138': 4450, '139': 4410, '140': 4480, '141': 4250, '142': 4220, '143': 4400, '144': 4420,
    '145': 4030, '146': 3920, '147': 4250, '148': 4220, '149': 4320,
  },
  'spinach': {
    '1': 15, '2': 13, '3': 17, '4': 12, '5': 14, '6': 20, '7': 22, '8': 21,
    '9': 16, '10': 15, '11': 14, '12': 13, '13': 10, '14': 11, '15': 14, '16': 12,
    '17': 13, '18': 14, '19': 16, '20': 15, '21': 15, '22': 18, '23': 19, '24': 17,
    '25': 13, '26': 12, '27': 12, '28': 11, '29': 13, '30': 14, '31': 13, '32': 10,
    '33': 14, '34': 13, '35': 12, '36': 11, '37': 10, '38': 10, '39': 11, '40': 12,
    '41': 11, '42': 10, '43': 10, '44': 14, '45': 15, '46': 14, '47': 14, '48': 12,
    '49': 13, '50': 13, '51': 14, '52': 13, '53': 12, '54': 11, '55': 11, '56': 14,
    '57': 25, '58': 27, '59': 17, '60': 20, '61': 22, '62': 23, '63': 30, '64': 27,
    '65': 23, '66': 21, '67': 25, '68': 20, '69': 19, '70': 21, '71': 23, '72': 22,
    '73': 23, '74': 17, '75': 14, '76': 13, '77': 12, '78': 11, '79': 15, '80': 14,
    '81': 16, '82': 14, '83': 13, '84': 11, '85': 10, '86': 10, '87': 10, '88': 15,
    '89': 14, '90': 16, '91': 17, '92': 15, '93': 14, '94': 15, '95': 12, '96': 17,
    '97': 11, '98': 16, '99': 15, '100': 13, '101': 11, '102': 12, '103': 11, '104': 10,
    '105': 9, '106': 9, '107': 14, '108': 13, '109': 9, '110': 10, '111': 12, '112': 12,
    '113': 11, '114': 14, '115': 13, '116': 14, '117': 9, '118': 10, '119': 9, '120': 8,
    '121': 8, '122': 7, '123': 16, '124': 11, '125': 17, '126': 17, '127': 18, '128': 16,
    '129': 15, '130': 18, '131': 19, '132': 10, '133': 9, '134': 9, '135': 8, '136': 13,
    '137': 12, '138': 13, '139': 13, '140': 14, '141': 11, '142': 11, '143': 13, '144': 14,
    '145': 10, '146': 9, '147': 12, '148': 11, '149': 13,
  },
  'lettuce': {
    '1': 25, '2': 22, '3': 28, '4': 20, '5': 24, '6': 30, '7': 32, '8': 31,
    '9': 26, '10': 25, '11': 23, '12': 22, '13': 18, '14': 19, '15': 24, '16': 21,
    '17': 22, '18': 24, '19': 26, '20': 25, '21': 25, '22': 28, '23': 29, '24': 27,
    '25': 21, '26': 20, '27': 20, '28': 19, '29': 21, '30': 23, '31': 22, '32': 17,
    '33': 24, '34': 23, '35': 21, '36': 19, '37': 18, '38': 18, '39': 20, '40': 21,
    '41': 19, '42': 18, '43': 17, '44': 23, '45': 25, '46': 24, '47': 23, '48': 21,
    '49': 22, '50': 22, '51': 24, '52': 22, '53': 21, '54': 20, '55': 19, '56': 23,
    '57': 38, '58': 40, '59': 28, '60': 32, '61': 34, '62': 35, '63': 45, '64': 40,
    '65': 36, '66': 33, '67': 38, '68': 32, '69': 30, '70': 33, '71': 35, '72': 34,
    '73': 36, '74': 27, '75': 24, '76': 22, '77': 20, '78': 19, '79': 25, '80': 24,
    '81': 26, '82': 24, '83': 22, '84': 19, '85': 18, '86': 17, '87': 18, '88': 25,
    '89': 24, '90': 26, '91': 27, '92': 25, '93': 24, '94': 25, '95': 20, '96': 28,
    '97': 19, '98': 27, '99': 25, '100': 22, '101': 19, '102': 20, '103': 18, '104': 17,
    '105': 17, '106': 16, '107': 23, '108': 21, '109': 16, '110': 17, '111': 21, '112': 22,
    '113': 19, '114': 24, '115': 23, '116': 24, '117': 15, '118': 16, '119': 15, '120': 14,
    '121': 14, '122': 13, '123': 27, '124': 20, '125': 28, '126': 27, '127': 28, '128': 26,
    '129': 25, '130': 28, '131': 29, '132': 18, '133': 17, '134': 16, '135': 15, '136': 22,
    '137': 21, '138': 23, '139': 22, '140': 24, '141': 20, '142': 19, '143': 23, '144': 24,
    '145': 18, '146': 16, '147': 20, '148': 19, '149': 21,
  },
  'peppers': {
    '1': 3500, '2': 3300, '3': 3600, '4': 3200, '5': 3450, '6': 4000, '7': 4200, '8': 4100,
    '9': 3700, '10': 3600, '11': 3400, '12': 3350, '13': 3000, '14': 3100, '15': 3450, '16': 3250,
    '17': 3300, '18': 3450, '19': 3600, '20': 3550, '21': 3580, '22': 3650, '23': 3700, '24': 3620,
    '25': 3100, '26': 3050, '27': 3100, '28': 3000, '29': 3150, '30': 3400, '31': 3350, '32': 2900,
    '33': 3450, '34': 3400, '35': 3350, '36': 3100, '37': 3050, '38': 3000, '39': 3120, '40': 3200,
    '41': 3100, '42': 3050, '43': 2950, '44': 3400, '45': 3500, '46': 3450, '47': 3420, '48': 3200,
    '49': 3300, '50': 3350, '51': 3450, '52': 3350, '53': 3300, '54': 3200, '55': 3100, '56': 3400,
    '57': 4800, '58': 5000, '59': 3700, '60': 4000, '61': 4200, '62': 4300, '63': 5200, '64': 5000,
    '65': 4600, '66': 4300, '67': 4800, '68': 4000, '69': 3950, '70': 4100, '71': 4200, '72': 4150,
    '73': 4250, '74': 3680, '75': 3450, '76': 3300, '77': 3200, '78': 3100, '79': 3500, '80': 3450,
    '81': 3600, '82': 3520, '83': 3450, '84': 3080, '85': 3050, '86': 3020, '87': 3070, '88': 3530,
    '89': 3490, '90': 3610, '91': 3630, '92': 3550, '93': 3480, '94': 3580, '95': 3220, '96': 3700,
    '97': 3180, '98': 3690, '99': 3620, '100': 3380, '101': 3130, '102': 3200, '103': 3070, '104': 3030,
    '105': 3010, '106': 2980, '107': 3380, '108': 3320, '109': 2930, '110': 2980, '111': 3330, '112': 3350,
    '113': 3180, '114': 3490, '115': 3460, '116': 3480, '117': 2880, '118': 2920, '119': 2900, '120': 2750,
    '121': 2770, '122': 2730, '123': 3710, '124': 3150, '125': 3730, '126': 3680, '127': 3700, '128': 3670,
    '129': 3620, '130': 3690, '131': 3710, '132': 3050, '133': 3020, '134': 2980, '135': 2930, '136': 3350,
    '137': 3300, '138': 3420, '139': 3380, '140': 3450, '141': 3200, '142': 3180, '143': 3400, '144': 3420,
    '145': 3030, '146': 2920, '147': 3200, '148': 3180, '149': 3280,
  },
  'pumpkin': {
    '1': 80, '2': 75, '3': 85, '4': 70, '5': 78, '6': 95, '7': 100, '8': 98,
    '9': 82, '10': 80, '11': 77, '12': 75, '13': 65, '14': 68, '15': 78, '16': 72,
    '17': 74, '18': 78, '19': 82, '20': 80, '21': 81, '22': 85, '23': 88, '24': 83,
    '25': 70, '26': 68, '27': 70, '28': 67, '29': 72, '30': 77, '31': 75, '32': 62,
    '33': 78, '34': 77, '35': 74, '36': 69, '37': 67, '38': 65, '39': 70, '40': 73,
    '41': 69, '42': 67, '43': 64, '44': 77, '45': 80, '46': 78, '47': 77, '48': 73,
    '49': 75, '50': 76, '51': 78, '52': 76, '53': 74, '54': 71, '55': 69, '56': 77,
    '57': 110, '58': 115, '59': 85, '60': 92, '61': 97, '62': 100, '63': 120, '64': 115,
    '65': 105, '66': 98, '67': 110, '68': 92, '69': 90, '70': 95, '71': 98, '72': 96,
    '73': 99, '74': 84, '75': 78, '76': 74, '77': 71, '78': 69, '79': 80, '80': 78,
    '81': 82, '82': 79, '83': 76, '84': 68, '85': 66, '86': 64, '87': 67, '88': 81,
    '89': 79, '90': 83, '91': 84, '92': 81, '93': 78, '94': 82, '95': 72, '96': 85,
    '97': 69, '98': 84, '99': 82, '100': 76, '101': 70, '102': 73, '103': 68, '104': 66,
    '105': 64, '106': 62, '107': 76, '108': 74, '109': 61, '110': 63, '111': 75, '112': 76,
    '113': 70, '114': 79, '115': 78, '116': 79, '117': 60, '118': 62, '119': 61, '120': 57,
    '121': 58, '122': 56, '123': 83, '124': 71, '125': 85, '126': 84, '127': 85, '128': 83,
    '129': 82, '130': 84, '131': 85, '132': 66, '133': 64, '134': 62, '135': 60, '136': 76,
    '137': 74, '138': 77, '139': 76, '140': 78, '141': 73, '142': 72, '143': 77, '144': 78,
    '145': 66, '146': 62, '147': 73, '148': 72, '149': 75,
  },
  'cucumbers': {
    '1': 2000, '2': 1900, '3': 2100, '4': 1800, '5': 1950, '6': 2300, '7': 2400, '8': 2350,
    '9': 2050, '10': 2000, '11': 1900, '12': 1870, '13': 1700, '14': 1750, '15': 1950, '16': 1850,
    '17': 1880, '18': 1950, '19': 2050, '20': 2000, '21': 2020, '22': 2100, '23': 2150, '24': 2080,
    '25': 1750, '26': 1720, '27': 1780, '28': 1750, '29': 1800, '30': 1900, '31': 1870, '32': 1650,
    '33': 1950, '34': 1900, '35': 1850, '36': 1780, '37': 1750, '38': 1720, '39': 1790, '40': 1850,
    '41': 1780, '42': 1750, '43': 1710, '44': 1900, '45': 2000, '46': 1950, '47': 1920, '48': 1850,
    '49': 1880, '50': 1900, '51': 1950, '52': 1900, '53': 1850, '54': 1800, '55': 1780, '56': 1900,
    '57': 2700, '58': 2850, '59': 2100, '60': 2250, '61': 2350, '62': 2400, '63': 2900, '64': 2850,
    '65': 2600, '66': 2400, '67': 2700, '68': 2250, '69': 2220, '70': 2300, '71': 2350, '72': 2320,
    '73': 2380, '74': 2080, '75': 1950, '76': 1850, '77': 1800, '78': 1780, '79': 2000, '80': 1950,
    '81': 2050, '82': 1980, '83': 1920, '84': 1740, '85': 1720, '86': 1690, '87': 1730, '88': 2030,
    '89': 1990, '90': 2070, '91': 2090, '92': 2040, '93': 1980, '94': 2060, '95': 1820, '96': 2100,
    '97': 1790, '98': 2090, '99': 2040, '100': 1920, '101': 1800, '102': 1850, '103': 1730, '104': 1710,
    '105': 1690, '106': 1670, '107': 1920, '108': 1870, '109': 1640, '110': 1670, '111': 1880, '112': 1900,
    '113': 1790, '114': 1990, '115': 1970, '116': 1980, '117': 1620, '118': 1650, '119': 1640, '120': 1550,
    '121': 1560, '122': 1540, '123': 2100, '124': 1810, '125': 2120, '126': 2080, '127': 2090, '128': 2070,
    '129': 2040, '130': 2090, '131': 2100, '132': 1720, '133': 1690, '134': 1670, '135': 1640, '136': 1900,
    '137': 1860, '138': 1930, '139': 1910, '140': 1950, '141': 1850, '142': 1830, '143': 1900, '144': 1920,
    '145': 1710, '146': 1630, '147': 1850, '148': 1830, '149': 1880,
  },
  'mangoes': {
    '1': 1500, '2': 1400, '3': 1550, '4': 1350, '5': 1450, '6': 1700, '7': 1800, '8': 1750,
    '9': 1600, '10': 1550, '11': 1450, '12': 1420, '13': 1300, '14': 1320, '15': 1450, '16': 1380,
    '17': 1400, '18': 1450, '19': 1550, '20': 1500, '21': 1520, '22': 1600, '23': 1650, '24': 1580,
    '25': 1320, '26': 1300, '27': 1350, '28': 1320, '29': 1380, '30': 1450, '31': 1420, '32': 1250,
    '33': 1450, '34': 1420, '35': 1380, '36': 1350, '37': 1320, '38': 1300, '39': 1360, '40': 1400,
    '41': 1350, '42': 1320, '43': 1290, '44': 1450, '45': 1550, '46': 1480, '47': 1450, '48': 1400,
    '49': 1420, '50': 1450, '51': 1480, '52': 1420, '53': 1400, '54': 1360, '55': 1350, '56': 1450,
    '57': 2100, '58': 2200, '59': 1600, '60': 1750, '61': 1850, '62': 1900, '63': 2300, '64': 2200,
    '65': 2000, '66': 1850, '67': 2100, '68': 1750, '69': 1720, '70': 1800, '71': 1850, '72': 1820,
    '73': 1880, '74': 1580, '75': 1450, '76': 1380, '77': 1360, '78': 1350, '79': 1500, '80': 1450,
    '81': 1600, '82': 1520, '83': 1480, '84': 1310, '85': 1290, '86': 1270, '87': 1300, '88': 1530,
    '89': 1490, '90': 1610, '91': 1630, '92': 1550, '93': 1480, '94': 1580, '95': 1370, '96': 1650,
    '97': 1340, '98': 1640, '99': 1590, '100': 1460, '101': 1360, '102': 1400, '103': 1310, '104': 1290,
    '105': 1270, '106': 1250, '107': 1460, '108': 1420, '109': 1230, '110': 1250, '111': 1430, '112': 1450,
    '113': 1350, '114': 1490, '115': 1470, '116': 1480, '117': 1210, '118': 1240, '119': 1230, '120': 1150,
    '121': 1160, '122': 1140, '123': 1610, '124': 1370, '125': 1630, '126': 1600, '127': 1610, '128': 1590,
    '129': 1560, '130': 1600, '131': 1620, '132': 1290, '133': 1270, '134': 1250, '135': 1220, '136': 1450,
    '137': 1410, '138': 1470, '139': 1450, '140': 1490, '141': 1400, '142': 1380, '143': 1450, '144': 1470,
    '145': 1280, '146': 1230, '147': 1400, '148': 1380, '149': 1420,
  },
  'pineapples': {
    '1': 80, '2': 75, '3': 85, '4': 70, '5': 78, '6': 95, '7': 100, '8': 98,
    '9': 82, '10': 80, '11': 77, '12': 75, '13': 65, '14': 68, '15': 78, '16': 72,
    '17': 74, '18': 78, '19': 82, '20': 80, '21': 81, '22': 85, '23': 88, '24': 83,
    '25': 70, '26': 68, '27': 70, '28': 67, '29': 72, '30': 77, '31': 75, '32': 62,
    '33': 78, '34': 77, '35': 74, '36': 69, '37': 67, '38': 65, '39': 70, '40': 73,
    '41': 69, '42': 67, '43': 64, '44': 77, '45': 80, '46': 78, '47': 77, '48': 73,
    '49': 75, '50': 76, '51': 78, '52': 76, '53': 74, '54': 71, '55': 69, '56': 77,
    '57': 110, '58': 115, '59': 85, '60': 92, '61': 97, '62': 100, '63': 120, '64': 115,
    '65': 105, '66': 98, '67': 110, '68': 92, '69': 90, '70': 95, '71': 98, '72': 96,
    '73': 99, '74': 84, '75': 78, '76': 74, '77': 71, '78': 69, '79': 80, '80': 78,
    '81': 82, '82': 79, '83': 76, '84': 68, '85': 66, '86': 64, '87': 67, '88': 81,
    '89': 79, '90': 83, '91': 84, '92': 81, '93': 78, '94': 82, '95': 72, '96': 85,
    '97': 69, '98': 84, '99': 82, '100': 76, '101': 70, '102': 73, '103': 68, '104': 66,
    '105': 64, '106': 62, '107': 76, '108': 74, '109': 61, '110': 63, '111': 75, '112': 76,
    '113': 70, '114': 79, '115': 78, '116': 79, '117': 60, '118': 62, '119': 61, '120': 57,
    '121': 58, '122': 56, '123': 83, '124': 71, '125': 85, '126': 84, '127': 85, '128': 83,
    '129': 82, '130': 84, '131': 85, '132': 66, '133': 64, '134': 62, '135': 60, '136': 76,
    '137': 74, '138': 77, '139': 76, '140': 78, '141': 73, '142': 72, '143': 77, '144': 78,
    '145': 66, '146': 62, '147': 73, '148': 72, '149': 75,
  },
  'watermelon': {
    '1': 120, '2': 110, '3': 130, '4': 105, '5': 115, '6': 140, '7': 150, '8': 145,
    '9': 125, '10': 120, '11': 115, '12': 110, '13': 95, '14': 100, '15': 115, '16': 108,
    '17': 110, '18': 115, '19': 125, '20': 120, '21': 122, '22': 130, '23': 135, '24': 128,
    '25': 105, '26': 100, '27': 105, '28': 100, '29': 108, '30': 115, '31': 112, '32': 90,
    '33': 115, '34': 112, '35': 110, '36': 104, '37': 100, '38': 95, '39': 105, '40': 110,
    '41': 104, '42': 100, '43': 96, '44': 115, '45': 120, '46': 117, '47': 115, '48': 110,
    '49': 112, '50': 114, '51': 117, '52': 114, '53': 112, '54': 108, '55': 104, '56': 115,
    '57': 170, '58': 180, '59': 130, '60': 140, '61': 150, '62': 155, '63': 185, '64': 180,
    '65': 165, '66': 150, '67': 170, '68': 140, '69': 135, '70': 145, '71': 150, '72': 148,
    '73': 152, '74': 128, '75': 115, '76': 110, '77': 108, '78': 104, '79': 120, '80': 117,
    '81': 125, '82': 122, '83': 117, '84': 102, '85': 98, '86': 95, '87': 100, '88': 123,
    '89': 120, '90': 127, '91': 128, '92': 124, '93': 120, '94': 126, '95': 110, '96': 130,
    '97': 106, '98': 129, '99': 125, '100': 116, '101': 106, '102': 110, '103': 102, '104': 98,
    '105': 95, '106': 92, '107': 116, '108': 113, '109': 90, '110': 92, '111': 114, '112': 115,
    '113': 106, '114': 121, '115': 119, '116': 120, '117': 88, '118': 90, '119': 89, '120': 82,
    '121': 84, '122': 80, '123': 127, '124': 108, '125': 130, '126': 128, '127': 129, '128': 127,
    '129': 125, '130': 128, '131': 130, '132': 98, '133': 95, '134': 92, '135': 88, '136': 115,
    '137': 112, '138': 117, '139': 115, '140': 119, '141': 110, '142': 108, '143': 115, '144': 117,
    '145': 97, '146': 90, '147': 110, '148': 108, '149': 113,
  },
  'passion_fruit': {
    '1': 3500, '2': 3300, '3': 3600, '4': 3200, '5': 3450, '6': 4000, '7': 4200, '8': 4100,
    '9': 3700, '10': 3600, '11': 3400, '12': 3350, '13': 3000, '14': 3100, '15': 3450, '16': 3250,
    '17': 3300, '18': 3450, '19': 3600, '20': 3550, '21': 3580, '22': 3650, '23': 3700, '24': 3620,
    '25': 3100, '26': 3050, '27': 3100, '28': 3000, '29': 3150, '30': 3400, '31': 3350, '32': 2900,
    '33': 3450, '34': 3400, '35': 3350, '36': 3100, '37': 3050, '38': 3000, '39': 3120, '40': 3200,
    '41': 3100, '42': 3050, '43': 2950, '44': 3400, '45': 3500, '46': 3450, '47': 3420, '48': 3200,
    '49': 3300, '50': 3350, '51': 3450, '52': 3350, '53': 3300, '54': 3200, '55': 3100, '56': 3400,
    '57': 4800, '58': 5000, '59': 3700, '60': 4000, '61': 4200, '62': 4300, '63': 5200, '64': 5000,
    '65': 4600, '66': 4300, '67': 4800, '68': 4000, '69': 3950, '70': 4100, '71': 4200, '72': 4150,
    '73': 4250, '74': 3680, '75': 3450, '76': 3300, '77': 3200, '78': 3100, '79': 3500, '80': 3450,
    '81': 3600, '82': 3520, '83': 3450, '84': 3080, '85': 3050, '86': 3020, '87': 3070, '88': 3530,
    '89': 3490, '90': 3610, '91': 3630, '92': 3550, '93': 3480, '94': 3580, '95': 3220, '96': 3700,
    '97': 3180, '98': 3690, '99': 3620, '100': 3380, '101': 3130, '102': 3200, '103': 3070, '104': 3030,
    '105': 3010, '106': 2980, '107': 3380, '108': 3320, '109': 2930, '110': 2980, '111': 3330, '112': 3350,
    '113': 3180, '114': 3490, '115': 3460, '116': 3480, '117': 2880, '118': 2920, '119': 2900, '120': 2750,
    '121': 2770, '122': 2730, '123': 3710, '124': 3150, '125': 3730, '126': 3680, '127': 3700, '128': 3670,
    '129': 3620, '130': 3690, '131': 3710, '132': 3050, '133': 3020, '134': 2980, '135': 2930, '136': 3350,
    '137': 3300, '138': 3420, '139': 3380, '140': 3450, '141': 3200, '142': 3180, '143': 3400, '144': 3420,
    '145': 3030, '146': 2920, '147': 3200, '148': 3180, '149': 3280,
  },
  'oranges': {
    '1': 2500, '2': 2400, '3': 2600, '4': 2300, '5': 2450, '6': 2800, '7': 2900, '8': 2850,
    '9': 2650, '10': 2600, '11': 2450, '12': 2420, '13': 2200, '14': 2250, '15': 2450, '16': 2380,
    '17': 2420, '18': 2480, '19': 2600, '20': 2550, '21': 2580, '22': 2650, '23': 2700, '24': 2620,
    '25': 2250, '26': 2220, '27': 2300, '28': 2280, '29': 2350, '30': 2450, '31': 2420, '32': 2150,
    '33': 2450, '34': 2420, '35': 2380, '36': 2300, '37': 2280, '38': 2250, '39': 2320, '40': 2350,
    '41': 2300, '42': 2280, '43': 2250, '44': 2450, '45': 2550, '46': 2480, '47': 2450, '48': 2350,
    '49': 2380, '50': 2420, '51': 2450, '52': 2420, '53': 2380, '54': 2320, '55': 2300, '56': 2450,
    '57': 3000, '58': 3100, '59': 2650, '60': 2750, '61': 2850, '62': 2900, '63': 3200, '64': 3100,
    '65': 2950, '66': 2800, '67': 3000, '68': 2750, '69': 2720, '70': 2800, '71': 2850, '72': 2820,
    '73': 2880, '74': 2620, '75': 2450, '76': 2380, '77': 2320, '78': 2300, '79': 2450, '80': 2420,
    '81': 2550, '82': 2480, '83': 2420, '84': 2290, '85': 2270, '86': 2240, '87': 2280, '88': 2470,
    '89': 2440, '90': 2530, '91': 2550, '92': 2490, '93': 2450, '94': 2580, '95': 2320, '96': 2600,
    '97': 2290, '98': 2590, '99': 2550, '100': 2420, '101': 2310, '102': 2360, '103': 2280, '104': 2260,
    '105': 2240, '106': 2220, '107': 2480, '108': 2420, '109': 2180, '110': 2220, '111': 2430, '112': 2450,
    '113': 2340, '114': 2460, '115': 2440, '116': 2450, '117': 2150, '118': 2180, '119': 2160, '120': 2080,
    '121': 2090, '122': 2070, '123': 2640, '124': 2330, '125': 2660, '126': 2620, '127': 2640, '128': 2610,
    '129': 2570, '130': 2630, '131': 2650, '132': 2270, '133': 2240, '134': 2220, '135': 2180, '136': 2420,
    '137': 2380, '138': 2460, '139': 2430, '140': 2480, '141': 2360, '142': 2330, '143': 2450, '144': 2470,
    '145': 2250, '146': 2160, '147': 2360, '148': 2330, '149': 2380,
  },
  'pawpaw': {
    '1': 70, '2': 65, '3': 75, '4': 60, '5': 68, '6': 85, '7': 90, '8': 88,
    '9': 72, '10': 70, '11': 67, '12': 65, '13': 55, '14': 58, '15': 68, '16': 62,
    '17': 64, '18': 68, '19': 72, '20': 70, '21': 71, '22': 75, '23': 78, '24': 73,
    '25': 60, '26': 58, '27': 60, '28': 57, '29': 62, '30': 67, '31': 65, '32': 52,
    '33': 68, '34': 67, '35': 64, '36': 59, '37': 57, '38': 55, '39': 60, '40': 63,
    '41': 59, '42': 57, '43': 54, '44': 67, '45': 70, '46': 68, '47': 67, '48': 63,
    '49': 65, '50': 66, '51': 68, '52': 66, '53': 64, '54': 61, '55': 59, '56': 67,
    '57': 100, '58': 105, '59': 75, '60': 82, '61': 87, '62': 90, '63': 110, '64': 105,
    '65': 95, '66': 88, '67': 100, '68': 82, '69': 80, '70': 85, '71': 88, '72': 86,
    '73': 89, '74': 74, '75': 68, '76': 64, '77': 61, '78': 59, '79': 70, '80': 68,
    '81': 72, '82': 69, '83': 66, '84': 58, '85': 56, '86': 54, '87': 57, '88': 71,
    '89': 69, '90': 73, '91': 74, '92': 71, '93': 68, '94': 72, '95': 62, '96': 75,
    '97': 59, '98': 74, '99': 72, '100': 66, '101': 60, '102': 63, '103': 58, '104': 56,
    '105': 54, '106': 52, '107': 66, '108': 64, '109': 51, '110': 53, '111': 65, '112': 66,
    '113': 60, '114': 69, '115': 68, '116': 69, '117': 50, '118': 52, '119': 51, '120': 47,
    '121': 48, '122': 46, '123': 73, '124': 61, '125': 75, '126': 74, '127': 75, '128': 73,
    '129': 72, '130': 74, '131': 75, '132': 56, '133': 54, '134': 52, '135': 50, '136': 66,
    '137': 64, '138': 67, '139': 66, '140': 68, '141': 63, '142': 62, '143': 67, '144': 68,
    '145': 56, '146': 52, '147': 63, '148': 62, '149': 65,
  },
  'milk': {
    '1': 55, '2': 52, '3': 58, '4': 50, '5': 54, '6': 60, '7': 62, '8': 61,
    '9': 56, '10': 55, '11': 53, '12': 52, '13': 48, '14': 49, '15': 54, '16': 51,
    '17': 52, '18': 54, '19': 56, '20': 55, '21': 55, '22': 57, '23': 58, '24': 56,
    '25': 50, '26': 49, '27': 50, '28': 48, '29': 51, '30': 53, '31': 52, '32': 46,
    '33': 54, '34': 53, '35': 52, '36': 50, '37': 49, '38': 48, '39': 50, '40': 51,
    '41': 50, '42': 49, '43': 47, '44': 53, '45': 55, '46': 54, '47': 53, '48': 51,
    '49': 52, '50': 52, '51': 54, '52': 52, '53': 51, '54': 50, '55': 49, '56': 53,
    '57': 68, '58': 70, '59': 57, '60': 60, '61': 62, '62': 63, '63': 72, '64': 70,
    '65': 66, '66': 62, '67': 68, '68': 60, '69': 59, '70': 61, '71': 63, '72': 62,
    '73': 64, '74': 57, '75': 54, '76': 52, '77': 51, '78': 50, '79': 55, '80': 54,
    '81': 56, '82': 55, '83': 53, '84': 49, '85': 48, '86': 47, '87': 48, '88': 55,
    '89': 54, '90': 56, '91': 57, '92': 55, '93': 54, '94': 55, '95': 51, '96': 58,
    '97': 50, '98': 57, '99': 55, '100': 52, '101': 50, '102': 51, '103': 49, '104': 48,
    '105': 47, '106': 46, '107': 53, '108': 52, '109': 46, '110': 47, '111': 52, '112': 53,
    '113': 50, '114': 54, '115': 53, '116': 54, '117': 45, '118': 46, '119': 45, '120': 43,
    '121': 44, '122': 42, '123': 57, '124': 50, '125': 58, '126': 57, '127': 58, '128': 56,
    '129': 55, '130': 57, '131': 58, '132': 48, '133': 47, '134': 46, '135': 45, '136': 53,
    '137': 52, '138': 54, '139': 53, '140': 54, '141': 51, '142': 50, '143': 53, '144': 54,
    '145': 48, '146': 46, '147': 51, '148': 50, '149': 52,
  },
  'eggs': {
    '1': 420, '2': 400, '3': 440, '4': 390, '5': 410, '6': 460, '7': 480, '8': 470,
    '9': 430, '10': 420, '11': 405, '12': 400, '13': 370, '14': 380, '15': 410, '16': 395,
    '17': 400, '18': 410, '19': 430, '20': 420, '21': 422, '22': 440, '23': 450, '24': 435,
    '25': 385, '26': 380, '27': 390, '28': 380, '29': 395, '30': 405, '31': 400, '32': 360,
    '33': 410, '34': 405, '35': 400, '36': 390, '37': 380, '38': 370, '39': 390, '40': 395,
    '41': 390, '42': 380, '43': 365, '44': 405, '45': 420, '46': 410, '47': 405, '48': 395,
    '49': 400, '50': 405, '51': 410, '52': 400, '53': 395, '54': 390, '55': 385, '56': 405,
    '57': 530, '58': 550, '59': 440, '60': 470, '61': 490, '62': 500, '63': 570, '64': 550,
    '65': 520, '66': 490, '67': 530, '68': 470, '69': 460, '70': 480, '71': 500, '72': 490,
    '73': 505, '74': 445, '75': 410, '76': 400, '77': 390, '78': 385, '79': 420, '80': 410,
    '81': 430, '82': 422, '83': 410, '84': 380, '85': 375, '86': 370, '87': 377, '88': 425,
    '89': 418, '90': 432, '91': 435, '92': 427, '93': 415, '94': 428, '95': 395, '96': 445,
    '97': 388, '98': 438, '99': 425, '100': 405, '101': 392, '102': 398, '103': 380, '104': 375,
    '105': 370, '106': 365, '107': 405, '108': 398, '109': 360, '110': 365, '111': 402, '112': 405,
    '113': 388, '114': 418, '115': 412, '116': 415, '117': 355, '118': 360, '119': 358, '120': 340,
    '121': 345, '122': 335, '123': 442, '124': 393, '125': 448, '126': 445, '127': 447, '128': 443,
    '129': 432, '130': 445, '131': 450, '132': 375, '133': 370, '134': 365, '135': 358, '136': 405,
    '137': 398, '138': 412, '139': 408, '140': 415, '141': 398, '142': 393, '143': 405, '144': 410,
    '145': 378, '146': 360, '147': 398, '148': 393, '149': 402,
  },
  'chicken': {
    '1': 650, '2': 620, '3': 680, '4': 600, '5': 635, '6': 720, '7': 750, '8': 735,
    '9': 670, '10': 650, '11': 625, '12': 620, '13': 560, '14': 580, '15': 635, '16': 610,
    '17': 620, '18': 640, '19': 670, '20': 650, '21': 655, '22': 680, '23': 700, '24': 675,
    '25': 590, '26': 580, '27': 595, '28': 580, '29': 610, '30': 625, '31': 620, '32': 550,
    '33': 635, '34': 625, '35': 615, '36': 595, '37': 580, '38': 560, '39': 600, '40': 610,
    '41': 595, '42': 580, '43': 565, '44': 625, '45': 650, '46': 635, '47': 630, '48': 610,
    '49': 620, '50': 625, '51': 635, '52': 620, '53': 615, '54': 600, '55': 590, '56': 625,
    '57': 850, '58': 900, '59': 680, '60': 730, '61': 770, '62': 790, '63': 950, '64': 900,
    '65': 820, '66': 770, '67': 850, '68': 730, '69': 720, '70': 750, '71': 780, '72': 770,
    '73': 795, '74': 685, '75': 635, '76': 615, '77': 600, '78': 590, '79': 650, '80': 635,
    '81': 670, '82': 658, '83': 640, '84': 585, '85': 575, '86': 565, '87': 580, '88': 660,
    '89': 645, '90': 675, '91': 680, '92': 665, '93': 640, '94': 670, '95': 605, '96': 690,
    '97': 595, '98': 685, '99': 665, '100': 625, '101': 600, '102': 610, '103': 585, '104': 575,
    '105': 565, '106': 555, '107': 625, '108': 615, '109': 545, '110': 555, '111': 620, '112': 625,
    '113': 595, '114': 645, '115': 635, '116': 640, '117': 535, '118': 545, '119': 540, '120': 510,
    '121': 520, '122': 500, '123': 685, '124': 605, '125': 695, '126': 690, '127': 693, '128': 688,
    '129': 675, '130': 690, '131': 700, '132': 575, '133': 565, '134': 555, '135': 540, '136': 625,
    '137': 615, '138': 640, '139': 630, '140': 645, '141': 610, '142': 605, '143': 625, '144': 635,
    '145': 580, '146': 545, '147': 610, '148': 605, '149': 620,
  },
  'goat': {
    '1': 15000, '2': 14500, '3': 15500, '4': 14000, '5': 14750, '6': 16500, '7': 17000, '8': 16800,
    '9': 15500, '10': 15000, '11': 14600, '12': 14500, '13': 13000, '14': 13500, '15': 14750, '16': 14200,
    '17': 14400, '18': 14800, '19': 15500, '20': 15000, '21': 15100, '22': 15700, '23': 16200, '24': 15800,
    '25': 13600, '26': 13400, '27': 13800, '28': 13400, '29': 14000, '30': 14600, '31': 14400, '32': 12800,
    '33': 14750, '34': 14500, '35': 14300, '36': 13800, '37': 13400, '38': 13000, '39': 13900, '40': 14200,
    '41': 13800, '42': 13400, '43': 13100, '44': 14500, '45': 15000, '46': 14750, '47': 14600, '48': 14200,
    '49': 14400, '50': 14600, '51': 14750, '52': 14400, '53': 14300, '54': 13900, '55': 13600, '56': 14500,
    '57': 19500, '58': 20500, '59': 15700, '60': 17000, '61': 17800, '62': 18200, '63': 21800, '64': 20500,
    '65': 18800, '66': 17800, '67': 19500, '68': 17000, '69': 16800, '70': 17500, '71': 18000, '72': 17800,
    '73': 18400, '74': 15800, '75': 14750, '76': 14300, '77': 13900, '78': 13600, '79': 15000, '80': 14750,
    '81': 15500, '82': 15200, '83': 14800, '84': 13500, '85': 13300, '86': 13100, '87': 13400, '88': 15300,
    '89': 15000, '90': 15600, '91': 15700, '92': 15400, '93': 14850, '94': 15500, '95': 14000, '96': 16000,
    '97': 13700, '98': 15900, '99': 15400, '100': 14600, '101': 13900, '102': 14100, '103': 13500, '104': 13300,
    '105': 13100, '106': 12900, '107': 14600, '108': 14300, '109': 12600, '110': 12900, '111': 14400, '112': 14600,
    '113': 13800, '114': 15000, '115': 14750, '116': 14850, '117': 12400, '118': 12600, '119': 12500, '120': 11800,
    '121': 12000, '122': 11600, '123': 15900, '124': 14050, '125': 16100, '126': 16000, '127': 16050, '128': 15950,
    '129': 15600, '130': 16000, '131': 16200, '132': 13300, '133': 13100, '134': 12900, '135': 12500, '136': 14600,
    '137': 14300, '138': 14850, '139': 14600, '140': 15000, '141': 14100, '142': 14000, '143': 14600, '144': 14750,
    '145': 13400, '146': 12600, '147': 14100, '148': 14000, '149': 14400,
  },
  'coffee': {
    '1': 180, '2': 175, '3': 185, '4': 170, '5': 178, '6': 195, '7': 200, '8': 198,
    '9': 182, '10': 180, '11': 177, '12': 175, '13': 165, '14': 168, '15': 178, '16': 172,
    '17': 174, '18': 178, '19': 182, '20': 180, '21': 181, '22': 185, '23': 188, '24': 183,
    '25': 170, '26': 168, '27': 170, '28': 167, '29': 172, '30': 177, '31': 175, '32': 162,
    '33': 178, '34': 177, '35': 174, '36': 169, '37': 167, '38': 165, '39': 170, '40': 173,
    '41': 169, '42': 167, '43': 164, '44': 177, '45': 180, '46': 178, '47': 177, '48': 173,
    '49': 175, '50': 176, '51': 178, '52': 176, '53': 174, '54': 171, '55': 169, '56': 177,
    '57': 210, '58': 215, '59': 185, '60': 192, '61': 197, '62': 200, '63': 220, '64': 215,
    '65': 205, '66': 198, '67': 210, '68': 192, '69': 190, '70': 195, '71': 198, '72': 196,
    '73': 199, '74': 184, '75': 178, '76': 174, '77': 171, '78': 169, '79': 180, '80': 178,
    '81': 182, '82': 179, '83': 176, '84': 168, '85': 166, '86': 164, '87': 167, '88': 181,
    '89': 179, '90': 183, '91': 184, '92': 181, '93': 178, '94': 182, '95': 172, '96': 185,
    '97': 169, '98': 184, '99': 182, '100': 176, '101': 170, '102': 173, '103': 168, '104': 166,
    '105': 164, '106': 162, '107': 176, '108': 174, '109': 161, '110': 163, '111': 175, '112': 176,
    '113': 170, '114': 179, '115': 178, '116': 179, '117': 160, '118': 162, '119': 161, '120': 157,
    '121': 158, '122': 156, '123': 183, '124': 171, '125': 185, '126': 184, '127': 185, '128': 183,
    '129': 182, '130': 184, '131': 185, '132': 166, '133': 164, '134': 162, '135': 160, '136': 176,
    '137': 174, '138': 177, '139': 176, '140': 178, '141': 173, '142': 172, '143': 176, '144': 177,
    '145': 168, '146': 162, '147': 173, '148': 172, '149': 175,
  },
  'tea': {
    '1': 45, '2': 42, '3': 48, '4': 40, '5': 44, '6': 52, '7': 55, '8': 54,
    '9': 46, '10': 45, '11': 43, '12': 42, '13': 38, '14': 39, '15': 44, '16': 41,
    '17': 42, '18': 44, '19': 46, '20': 45, '21': 45, '22': 48, '23': 50, '24': 47,
    '25': 40, '26': 39, '27': 40, '28': 38, '29': 41, '30': 43, '31': 42, '32': 36,
    '33': 44, '34': 43, '35': 42, '36': 40, '37': 39, '38': 38, '39': 40, '40': 41,
    '41': 40, '42': 39, '43': 37, '44': 43, '45': 45, '46': 44, '47': 43, '48': 41,
    '49': 42, '50': 42, '51': 44, '52': 42, '53': 41, '54': 40, '55': 39, '56': 43,
    '57': 62, '58': 65, '59': 48, '60': 52, '61': 55, '62': 57, '63': 68, '64': 65,
    '65': 60, '66': 56, '67': 62, '68': 52, '69': 51, '70': 54, '71': 56, '72': 55,
    '73': 57, '74': 49, '75': 44, '76': 42, '77': 41, '78': 40, '79': 45, '80': 44,
    '81': 46, '82': 45, '83': 43, '84': 39, '85': 38, '86': 37, '87': 38, '88': 45,
    '89': 44, '90': 46, '91': 47, '92': 45, '93': 44, '94': 46, '95': 41, '96': 48,
    '97': 40, '98': 47, '99': 46, '100': 42, '101': 40, '102': 41, '103': 39, '104': 38,
    '105': 37, '106': 36, '107': 42, '108': 41, '109': 36, '110': 37, '111': 42, '112': 42,
    '113': 40, '114': 44, '115': 43, '116': 44, '117': 35, '118': 36, '119': 35, '120': 33,
    '121': 34, '122': 32, '123': 47, '124': 41, '125': 48, '126': 47, '127': 48, '128': 47,
    '129': 46, '130': 47, '131': 48, '132': 38, '133': 37, '134': 36, '135': 35, '136': 42,
    '137': 41, '138': 43, '139': 42, '140': 44, '141': 41, '142': 40, '143': 42, '144': 43,
    '145': 39, '146': 36, '147': 41, '148': 40, '149': 42,
  },
  'sugarcane': {
    '1': 6500, '2': 6200, '3': 6800, '4': 6000, '5': 6350, '6': 7200, '7': 7500, '8': 7350,
    '9': 6700, '10': 6500, '11': 6300, '12': 6200, '13': 5600, '14': 5800, '15': 6350, '16': 6100,
    '17': 6200, '18': 6400, '19': 6700, '20': 6500, '21': 6550, '22': 6800, '23': 7000, '24': 6750,
    '25': 5900, '26': 5800, '27': 6000, '28': 5800, '29': 6100, '30': 6300, '31': 6200, '32': 5500,
    '33': 6350, '34': 6300, '35': 6150, '36': 6000, '37': 5800, '38': 5600, '39': 6050, '40': 6100,
    '41': 6000, '42': 5800, '43': 5650, '44': 6300, '45': 6500, '46': 6350, '47': 6300, '48': 6100,
    '49': 6200, '50': 6300, '51': 6350, '52': 6200, '53': 6150, '54': 6000, '55': 5900, '56': 6300,
    '57': 8500, '58': 9000, '59': 6800, '60': 7300, '61': 7700, '62': 7900, '63': 9500, '64': 9000,
    '65': 8200, '66': 7700, '67': 8500, '68': 7300, '69': 7200, '70': 7500, '71': 7800, '72': 7700,
    '73': 7950, '74': 6850, '75': 6350, '76': 6150, '77': 6000, '78': 5900, '79': 6500, '80': 6350,
    '81': 6700, '82': 6580, '83': 6400, '84': 5850, '85': 5750, '86': 5650, '87': 5800, '88': 6600,
    '89': 6450, '90': 6750, '91': 6800, '92': 6650, '93': 6400, '94': 6700, '95': 6050, '96': 6900,
    '97': 5950, '98': 6850, '99': 6650, '100': 6300, '101': 6000, '102': 6100, '103': 5850, '104': 5750,
    '105': 5650, '106': 5550, '107': 6300, '108': 6150, '109': 5450, '110': 5550, '111': 6200, '112': 6300,
    '113': 5950, '114': 6450, '115': 6350, '116': 6400, '117': 5350, '118': 5450, '119': 5400, '120': 5100,
    '121': 5200, '122': 5000, '123': 6850, '124': 6050, '125': 6950, '126': 6900, '127': 6930, '128': 6880,
    '129': 6750, '130': 6900, '131': 7000, '132': 5750, '133': 5650, '134': 5550, '135': 5400, '136': 6300,
    '137': 6150, '138': 6400, '139': 6300, '140': 6450, '141': 6100, '142': 6050, '143': 6300, '144': 6350,
    '145': 5800, '146': 5450, '147': 6100, '148': 6050, '149': 6200,
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
