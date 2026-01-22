import { useState, useMemo } from 'react';
import { KENYAN_MARKETS, CROPS } from '../data/mockData.js';
import type { Market, Crop } from '../types/index.js';

interface MarketInputProps {
  onSubmit: (market: Market, crop: Crop, quantity: number) => void;
}

export const MarketInput = ({ onSubmit }: MarketInputProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMarket, setSelectedMarket] = useState<Market | null>(null);
  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);
  const [quantity, setQuantity] = useState<number>(10);
  const [showMarketDropdown, setShowMarketDropdown] = useState(false);

  const filteredMarkets = useMemo(() => {
    if (!searchTerm) return [];
    return KENYAN_MARKETS.filter(market =>
      market.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      market.county.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 5);
  }, [searchTerm]);

  const handleMarketSelect = (market: Market) => {
    setSelectedMarket(market);
    setSearchTerm(market.name);
    setShowMarketDropdown(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form validation:', { 
      selectedMarket, 
      selectedCrop, 
      quantity,
      isValid: selectedMarket && selectedCrop && quantity > 0 
    });
    
    if (selectedMarket && selectedCrop && quantity > 0) {
      console.log('Calling onSubmit with:', { selectedMarket, selectedCrop, quantity });
      onSubmit(selectedMarket, selectedCrop, quantity);
    } else {
      console.warn('Form validation failed');
    }
  };

  const isFormValid = selectedMarket && selectedCrop && quantity > 0;

  return (
    <div className="market-input-container">
      <h2>🌾 Farmer Market Intelligence</h2>
      <p className="subtitle">Get AI-powered selling recommendations for your produce</p>
      
      <form onSubmit={handleSubmit} className="input-form">
        <div className="form-group">
          <label htmlFor="market">Market Location</label>
          <div className="autocomplete-wrapper">
            <input
              id="market"
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowMarketDropdown(true);
                setSelectedMarket(null);
              }}
              onFocus={() => setShowMarketDropdown(true)}
              placeholder="Type market name (e.g., Nairobi City Market)"
              className="input-field"
              required
            />
            {showMarketDropdown && filteredMarkets.length > 0 && (
              <div className="dropdown">
                {filteredMarkets.map(market => (
                  <div
                    key={market.id}
                    className="dropdown-item"
                    onClick={() => handleMarketSelect(market)}
                  >
                    <div className="market-name">{market.name}</div>
                    <div className="market-county">{market.county} County</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {selectedMarket && (
            <div className="selected-info">
              ✓ Selected: {selectedMarket.name}, {selectedMarket.county}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="crop">Crop Type</label>
          <select
            id="crop"
            value={selectedCrop?.id || ''}
            onChange={(e) => {
              const crop = CROPS.find(c => c.id === e.target.value);
              setSelectedCrop(crop || null);
            }}
            className="input-field"
            required
          >
            <option value="">Select a crop</option>
            {CROPS.map(crop => (
              <option key={crop.id} value={crop.id}>
                {crop.name} ({crop.unit})
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <div className="quantity-input">
            <input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
              className="input-field"
              required
            />
            {selectedCrop && (
              <span className="unit-label">{selectedCrop.unit}</span>
            )}
          </div>
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={!isFormValid}
        >
          Get Selling Recommendation
        </button>
      </form>
    </div>
  );
};
