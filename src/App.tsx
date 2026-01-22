import { useState } from 'react'
import './App.css'
import { MarketInput } from './components/MarketInput.js'
import { RecommendationDisplay } from './components/RecommendationDisplay.js'
import { PriceChart } from './components/PriceChart.js'
import type { Market, Crop, SellingRecommendation } from './types/index.js'
import { getRecommendation, isRaxcoreConfigured, type AIProvider } from './services/aiService.js'

function App() {
  const [recommendation, setRecommendation] = useState<SellingRecommendation | null>(null)
  const [selectedMarket, setSelectedMarket] = useState<Market | null>(null)
  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null)
  const [quantity, setQuantity] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(false)
  const [aiProvider, setAiProvider] = useState<AIProvider>(
    isRaxcoreConfigured() ? 'raxcore' : 'local'
  )

  const handleSubmit = async (market: Market, crop: Crop, qty: number) => {
    console.log('Form submitted:', { market, crop, qty, aiProvider });
    setIsLoading(true)
    setSelectedMarket(market)
    setSelectedCrop(crop)
    setQuantity(qty)

    try {
      const rec = await getRecommendation(aiProvider, market, crop.id, crop.name, qty);
      console.log('Recommendation generated:', rec);
      setRecommendation(rec)
      setIsLoading(false)
    } catch (error) {
      console.error('Error generating recommendation:', error);
      setIsLoading(false)
      alert('Failed to generate recommendation. Please try again.')
    }
  }

  const handleNewSearch = () => {
    setRecommendation(null)
    setSelectedMarket(null)
    setSelectedCrop(null)
    setQuantity(0)
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🌾 AgriMarket Intelligence</h1>
        <p className="tagline">Empowering Kenyan Farmers with AI-Driven Market Insights</p>
        
        {/* AI Provider Toggle */}
        <div className="ai-toggle">
          <label>
            <input
              type="radio"
              value="local"
              checked={aiProvider === 'local'}
              onChange={(e) => setAiProvider(e.target.value as AIProvider)}
            />
            💻 Local AI
          </label>
          <label>
            <input
              type="radio"
              value="raxcore"
              checked={aiProvider === 'raxcore'}
              onChange={(e) => setAiProvider(e.target.value as AIProvider)}
              disabled={!isRaxcoreConfigured()}
            />
            🤖 Raxcore AI
            {!isRaxcoreConfigured() && <span className="config-needed"> (Configure API key)</span>}
          </label>
        </div>
      </header>

      <main className="app-main">
        {isLoading ? (
          <div className="loading-container">
            <div className="loader"></div>
            <p>Analyzing market data and generating recommendations...</p>
          </div>
        ) : !recommendation ? (
          <MarketInput onSubmit={handleSubmit} />
        ) : (
          <>
            <button onClick={handleNewSearch} className="new-search-button">
              ← New Search
            </button>
            
            {selectedMarket && selectedCrop && (
              <PriceChart
                marketId={selectedMarket.id}
                marketName={selectedMarket.name}
                cropId={selectedCrop.id}
                cropName={selectedCrop.name}
              />
            )}

            <RecommendationDisplay
              recommendation={recommendation}
              cropName={selectedCrop?.name || ''}
              quantity={quantity}
              unit={selectedCrop?.unit || ''}
            />
          </>
        )}
      </main>

      <footer className="app-footer">
        <p>Powered by AI | Data from Kenyan Agricultural Markets</p>
        <p className="disclaimer">
          This is a demonstration system. For production use, integrate with real-time market data.
        </p>
      </footer>
    </div>
  )
}

export default App
