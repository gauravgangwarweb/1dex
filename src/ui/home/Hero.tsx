import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#3B82F6" />
            <stop offset="100%" stop-color="#10B981" />
          </linearGradient>
        </defs>
      </svg>
      <div className="hero-background"></div>
      <div className="container">
        <h2>THE FIRST PATENT-PROTECTED TOKEN THAT ENSURES TRADER SECURITY</h2>
        <p>TRADING REIMAGINED. SECURITY ASSURED.</p>
        <p>THE CRYPTO REVOLUTION YOU'VE BEEN WAITING FOR</p>

        <div className="container max-w-[900px] mt-[50px]">
          <p>
            Introducing 1DEX Securio - the world's first patent-filed token
            technology specifically designed to eliminate the biggest problems
            in cryptocurrency trading:
          </p>

          <div className="features-grid mt-[40px]">
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  style={{ background: "" }}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"></path>
                </svg>
              </div>
              <h4>100% Pump-and-Dump Protection</h4>
              <p>
                Our technology is designed to prevent market manipulations and
                price inflation followed by sudden crashes
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z" />
                </svg>
              </div>
              <h4>100% Liquidity Assured, Always</h4>
              <p>
                Never worry about being unable to sell your tokens. Our contract
                will buy your tokens any time, all time
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z" />
                </svg>
              </div>
              <h4>Focused on Growth</h4>
              <p>
                Every transaction contributes to sustainable token growth and
                value appreciation
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z" />
                </svg>
              </div>
              <h4>5% Referral Rewards</h4>
              <p>
                Huge rewards. Earn from every transaction your referrals make.
                Build wealth by growing our community
              </p>
            </div>
          </div>
        </div>

        <div className="cta-buttons">
          <button className="primary-btn">GET WHITEPAPER</button>
          <button className="secondary-btn">CONNECT WALLET</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
