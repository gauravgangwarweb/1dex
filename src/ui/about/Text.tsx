import React from "react";

const Text: React.FC = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-intro">
          <p>
            1DEX Securio Token was born from a simple observation: the
            cryptocurrency market is plagued by manipulation, liquidity crises,
            and unsustainable tokenomics that ultimately harm legitimate
            traders.
          </p>
          <p>
            Our team of blockchain engineers and financial mathematicians set
            out to solve these fundamental problems, resulting in a
            revolutionary token design that has been filed for patent protection
            due to its innovative approach.
          </p>
        </div>

        <div className="mission-values">
          <div className="mission-card">
            <h3>OUR MISSION</h3>
            <p>
              To create a token that truly protects traders, guarantees
              liquidity, generates sustainable growth, and rewards community
              building - transforming cryptocurrency from a speculative gamble
              into a secure investment opportunity.
            </p>
          </div>
        </div>

        <div className="difference-list">
          <h3>THE 1DEX SECURIO DIFFERENCE</h3>
          <p className="text-[#94A3B8] text-center mb-[40px]">
            While most tokens claim innovation through minor adjustments to
            existing models, 1DEX Securio represents a fundamental reimagining
            of how tokens can function.
          </p>

          <div className="difference-item">
            <h4>Manipulation-Resistant Architecture</h4>
            <p>
              Mathematical safeguards that prevent the pump-and-dump schemes
              that plague other tokens
            </p>
          </div>

          <div className="difference-item">
            <h4>Perpetual Liquidity Mechanisms</h4>
            <p>
              Smart contract systems that maintain 100% liquidity availability
              regardless of market conditions
            </p>
          </div>

          <div className="difference-item">
            <h4>Value-Generation Tokenomics</h4>
            <p>
              A revolutionary design where every transaction contributes to
              sustainable upward price momentum
            </p>
          </div>

          <div className="difference-item">
            <h4>Community-Building Incentives</h4>
            <p>
              Powerful 5% referral rewards that build wealth for those who help
              grow the 1DEX Securio ecosystem
            </p>
          </div>

          <div className="text-center mt-[40px]">
            <h4>SECURITY WITHOUT COMPROMISE</h4>
            <p className="text-[#94A3B8] mt-[15px]">
              Securio doesn't sacrifice functionality or potential for security.
              Instead, it proves that when tokens are designed correctly from
              the ground up, security enhances growth potential and creates
              sustainable value for all participants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text;
