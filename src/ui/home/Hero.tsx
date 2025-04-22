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
        <h2 className="text-base">
          THE FIRST PATENT-PROTECTED TOKEN THAT ENSURES{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              TRADER SECURITY
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-green-500"></span>
          </span>
        </h2>
        <p>TRADING REIMAGINED. SECURITY ASSURED.</p>
        <p>THE CRYPTO REVOLUTION YOU'VE BEEN WAITING FOR</p>
        <div className="cta-buttons mb-10">
          <button className="secondary-btn">CONNECT WALLET</button>
          <button className="primary-btn">GET WHITEPAPER</button>
        </div>
        <div className="container max-w-[900px] mt-[50px]">
          <p>
            Introducing 1DEX Securio - the world's first patent-filed token
            technology specifically designed to eliminate the biggest problems
            in cryptocurrency trading:
          </p>

          <div className="features-grid mt-[40px]">
            <div className="feature-card">
              <div className="feature-icon">
                <img className="rounded-full" loading="lazy" src="round-coin-logo.png" alt="round-coin" />
              </div>
              <h4>100% Pump-and-Dump Protection</h4>
              <p>
                Our technology is designed to prevent market manipulations and
                price inflation followed by sudden crashes
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
              <img className="rounded-full" loading="lazy" src="round-coin-logo.png" alt="round-coin" />
              </div>
              <h4>100% Liquidity Assured, Always</h4>
              <p>
                Never worry about being unable to sell your tokens. Our contract
                will buy your tokens any time, all time
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
              <img className="rounded-full" loading="lazy" src="round-coin-logo.png" alt="round-coin" />
              </div>
              <h4>Focused on Growth</h4>
              <p>
                Every transaction contributes to sustainable token growth and
                value appreciation
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
              <img className="rounded-full" loading="lazy" src="round-coin-logo.png" alt="round-coin" />
              </div>
              <h4>5% Referral Rewards</h4>
              <p>
                Huge rewards. Earn from every transaction your referrals make.
                Build wealth by growing our community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
