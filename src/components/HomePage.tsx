import { useState } from 'react'
import './HomePage.css'

interface HomePageProps {
  onGetStarted: () => void
}

export function HomePage({ onGetStarted }: HomePageProps) {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="homepage">
      <div className="hero-section">
        
        <h1 className="hero-title">AgriMarket Intelligence System</h1>
        <p className="hero-subtitle">
          Empowering Kenyan Farmers with AI-Driven Market Insights
        </p>
        <button className="cta-button" onClick={onGetStarted}>
          Get Started →
        </button>
      </div>

      <div className="info-section">
        <div className="info-card">
          
          <h3>What is This System?</h3>
          <p>
            AgriMarket Intelligence is a location-based agricultural market intelligence 
            platform that helps Kenyan farmers maximize profits by providing real-time 
            AI recommendations on when and where to sell their produce.
          </p>
        </div>

        <div className="info-card">
         
          <h3>How Does It Work?</h3>
          <ol className="steps-list">
            <li><strong>Select Your Market:</strong> Choose from 149 markets across all 47 Kenyan counties</li>
            <li><strong>Choose Your Product:</strong> Pick from 37 agricultural products (crops, vegetables, fruits, dairy, livestock)</li>
            <li><strong>Enter Quantity:</strong> Specify how much you want to sell</li>
            <li><strong>Get AI Recommendations:</strong> Receive intelligent insights on pricing, timing, and alternative markets</li>
          </ol>
        </div>

        <div className="info-card">
          
          <h3>Key Features</h3>
          <ul className="features-list">
            <li><strong>Price Analytics:</strong> Historical trends with 90-day data analysis</li>
            <li><strong>Price Forecasting:</strong> 7-day and 14-day predictions</li>
            <li><strong>Transport Cost Optimization:</strong> Distance calculations and net profit analysis</li>
            <li><strong>Market Volatility:</strong> Risk assessment and stability indicators</li>
            <li><strong>Alternative Markets:</strong> Discover better selling opportunities nearby</li>
            <li><strong>AI-Powered:</strong> Intelligent recommendations using Raxcore AI</li>
          </ul>
        </div>
      </div>

      {showMore && (
        <div className="detailed-section">
          <div className="coverage-grid">
            <div className="coverage-item">
              <h4> Cereals & Grains</h4>
              <p>Maize, Beans, Rice, Wheat, Sorghum</p>
            </div>
            <div className="coverage-item">
              <h4> Tubers & Roots</h4>
              <p>Potatoes, Sweet Potatoes, Cassava, Arrowroots</p>
            </div>
            <div className="coverage-item">
              <h4> Vegetables</h4>
              <p>Tomatoes, Cabbage, Kales, Onions, Carrots, Spinach, Lettuce, Peppers, and more</p>
            </div>
            <div className="coverage-item">
              <h4>Fruits</h4>
              <p>Bananas, Avocado, Mangoes, Pineapples, Watermelon, Passion Fruit, and more</p>
            </div>
            <div className="coverage-item">
              <h4>Dairy & Poultry</h4>
              <p>Milk (per liter), Eggs (tray of 30)</p>
            </div>
            <div className="coverage-item">
              <h4> Livestock</h4>
              <p>Chicken, Goat</p>
            </div>
          </div>

          <div className="benefits-section">
            <h3>Why Use AgriMarket Intelligence?</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <span className="benefit-icon"></span>
                <h4>Maximize Profits</h4>
                <p>Get the best prices by knowing when and where to sell</p>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon"></span>
                <h4>Save Time</h4>
                <p>No need to visit multiple markets to compare prices</p>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon"></span>
                <h4>Easy to Use</h4>
                <p>Simple interface designed for farmers</p>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon"></span>
                <h4>Data-Driven</h4>
                <p>Make informed decisions based on real market data</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="toggle-section">
        <button 
          className="toggle-button" 
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show Less ↑' : 'Learn More ↓'}
        </button>
      </div>

      <div className="quick-start-section">
        <h3>Ready to Start?</h3>
        <p>Click the button below to begin analyzing your market opportunities</p>
        <button className="cta-button-secondary" onClick={onGetStarted}>
          Start Analyzing Markets →
        </button>
      </div>
    </div>
  )
}
