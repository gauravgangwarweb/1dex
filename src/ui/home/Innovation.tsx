import React from "react";

const Innovation:React.FC = () => {
    return (
        <section className="innovation">
    <div className="container">
      <div className="section-title">
        <h3>PATENT-FILED INNOVATION</h3>
        <p>Backed by patent-pending technology, 1DEX Securio isn't just another token - it's a fundamental shift in how digital assets can be structured for stability, growth, and wealth creation.</p>
      </div>
      
      <div className="innovation-content">
        <div className="innovation-text">
          <div className="feature-card">
            <h4>Manipulation-Resistant Architecture</h4>
            <p>Mathematical safeguards that prevent the pump-and-dump schemes that plague other tokens</p>
          </div>
          
          <div className="feature-card mt-[20px]">
            <h4>Perpetual Liquidity Mechanisms</h4>
            <p>Smart contract systems that maintain 100% liquidity availability regardless of market conditions</p>
          </div>
          
          <div className="feature-card mt-[20px]">
            <h4>Value-Generation Tokenomics</h4>
            <p>A revolutionary design where every transaction contributes to sustainable upward price momentum</p>
          </div>
        </div>
        
        <div className="innovation-image">
          <img className="patent-image floating" src="/1dex-patent-visualization-revised.svg" alt="Patent Technology Visualization" />
        </div>
      </div>
    </div>
  </section>
    )
}

export default Innovation;