import React from "react";

const Features: React.FC = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="section-title">
          <h3>HOW 1DEX SECURIO CHANGES EVERYTHING</h3>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z" />
              </svg>
            </div>
            <h4>Revolutionary Tokenomics</h4>
            <p>
              Our patent-pending design ensures value appreciation with every
              trade
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z" />
              </svg>
            </div>
            <h4>Trader-First Protection</h4>
            <p>Finally, a token that protects and grows all investors</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z" />
              </svg>
            </div>
            <h4>Dual-Income Potential</h4>
            <p>
              Earn from both token appreciation and powerful referral rewards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
