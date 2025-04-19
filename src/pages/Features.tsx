import React from "react";
import CTA from "../ui/home/CTA";

const Features: React.FC = () => {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <div className="section-title">
            <h2>1DEX SECURIO TOKEN FEATURES</h2>
          </div>
        </div>
      </section>

      <section className="features-detail">
        <div className="container">
          <div className="feature-section">
            <div className="feature-content">
              <div className="feature-text">
                <h3 className="text-[#3B82F6] text-[28px] mb-[30px]">
                  100% PUMP-AND-DUMP PROTECTION
                </h3>

                <div className="problem-solution">
                  <h4>The Problem:</h4>
                  <p>
                    Traditional tokens are susceptible to coordinated
                    manipulation where prices are artificially inflated,
                    followed by massive selling that leaves regular traders with
                    worthless holdings.
                  </p>
                </div>

                <div className="problem-solution">
                  <h4>Our Solution:</h4>
                  <p>
                    1DEX Securio's patent-filed technology includes mathematical
                    safeguards that prevent artificial price inflation and
                    detect abnormal trading patterns. These mechanisms actually
                    benefit all investors from pump-and-dump situations.
                  </p>
                </div>

                <div className="problem-solution">
                  <h4>The Benefit:</h4>
                  <p>
                    Trade with complete confidence knowing your investment is
                    protected against the most common form of cryptocurrency
                    scam. 1DEX Securio creates a truly fair trading environment
                    where market value reflects genuine adoption and use rather
                    than manipulation.
                  </p>
                </div>
              </div>

              <div className="feature-image">
                <img
                  className="floating"
                  src="/1dex-pump-dump-protection.svg"
                  alt="Pump and Dump Protection"
                />
              </div>
            </div>
          </div>

          <div className="feature-section">
            <div className="feature-content flex-row-reverse">
              <div className="feature-text">
                <h3 className="text-[#3B82F6] text-[28px] mb-[30px]">
                  100% LIQUIDITY ASSURED, ALWAYS
                </h3>

                <div className="problem-solution">
                  <h4>The Problem:</h4>
                  <p>
                    Many tokens suffer from liquidity crises where traders
                    cannot sell their holdings during critical moments because
                    liquidity pools have been drained.
                  </p>
                </div>

                <div className="problem-solution">
                  <h4>Our Solution:</h4>
                  <p>
                    1DEX Securio's revolutionary smart contract includes
                    permanent liquidity mechanisms that always ensure trading
                    capability, regardless of market conditions or trading
                    volume.
                  </p>
                </div>

                <div className="problem-solution">
                  <h4>The Benefit:</h4>
                  <p>
                    Never experience the nightmare scenario of being unable to
                    exit a position when needed. With 1DEX Securio, your freedom
                    to trade is guaranteed by design, not by promise.
                  </p>
                </div>
              </div>

              <div className="feature-image">
                <img
                  className="floating"
                  src="/1dex-liquidity-assurance-revised.svg"
                  alt="Liquidity Assurance"
                />
              </div>
            </div>
          </div>

          <div className="feature-section">
            <div className="feature-content">
              <div className="feature-text">
                <h3 className="text-[28px] mb-[30px]">
                  CONTINUOUS UPWARD PRICE MOMENTUM
                </h3>

                <div className="problem-solution">
                  <h4>The Problem:</h4>
                  <p>
                    Traditional token designs typically face downward price
                    pressure when selling activity increases, creating
                    inevitable cycles of boom and bust.
                  </p>
                </div>

                <div className="problem-solution">
                  <h4>Our Solution:</h4>
                  <p>
                    Through groundbreaking tokenomics engineering, 1DEX Securio
                    has created a system where every transaction - whether
                    buying or selling - contributes to upward price pressure
                    through our unique fee redistribution mechanism.
                  </p>
                </div>

                <div className="problem-solution">
                  <h4>The Benefit:</h4>
                  <p>
                    Experience sustainable token appreciation over time as the
                    natural result of trading activity. 1DEX Securio's design
                    creates inherent value growth without requiring constant new
                    investment to maintain price levels.
                  </p>
                </div>
              </div>

              <div className="feature-image">
                <img
                  className="floating"
                  src="/1dex-price-momentum.jpg"
                  alt="Price Momentum"
                />
              </div>
            </div>
          </div>

          <div className="feature-section">
            <div className="feature-content flex-row-reverse">
              <div className="feature-text">
                <h3 className="text-[#3B82F6] text-[28px] mb-[30px]">
                  5% REFERRAL REWARDS
                </h3>

                <div className="problem-solution">
                  <h4>The Problem:</h4>
                  <p>
                    Most tokens offer minimal incentives for community building,
                    relying solely on price speculation to drive adoption.
                  </p>
                </div>

                <div className="problem-solution">
                  <h4>Our Solution:</h4>
                  <p>
                    1DEX Securio's integrated referral system automatically
                    rewards community builders with a substantial 5% commission
                    on every transaction made by referred users - both buying
                    AND selling.
                  </p>
                </div>

                <div className="problem-solution">
                  <h4>The Benefit:</h4>
                  <p>
                    Build a passive income stream by growing the 1DEX Securio
                    community. Your earnings multiply as your network expands,
                    creating significant wealth-building potential alongside
                    your token holdings.
                  </p>
                </div>
              </div>

              <div className="feature-image">
                <img
                  className="floating"
                  src="/1dex-referral-rewards.svg"
                  alt="Referral Rewards"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default Features;
