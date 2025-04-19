import React from "react";
import CTA from "../ui/home/CTA";

const Tokenomics: React.FC = () => {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <div className="section-title">
            <h2>SECURIO TOKEN ECONOMICS</h2>
            <p>REVOLUTIONARY BY DESIGN</p>
          </div>
        </div>
      </section>

      <section className="tokenomics-detail">
        <div className="container">
          <div className="tokenomics-overview">
            <p>
              1DEX Securio's tokenomics represent a fundamental reimagining of
              how cryptocurrency tokens can function. Our patent-filed approach
              creates a sustainable ecosystem that benefits all legitimate
              participants.
            </p>
          </div>

          <div className="token-allocation">
            <h3>VALUE-GENERATION FOCUS</h3>

            <div className="allocation-item">
              <div className="allocation-name">Referral System</div>
              <div className="allocation-value">5%</div>
            </div>

            <div className="allocation-item">
              <div className="allocation-name">Token Support System</div>
              <div className="allocation-value">10%</div>
            </div>

            <div className="allocation-item">
              <div className="allocation-name">Total Trading Fee</div>
              <div className="allocation-value">15%</div>
            </div>

            <p className="text-[#94A3B8] mt-[30px]">
              Unlike traditional tokens with large pre-allocations for teams or
              investors, 1DEX Securio creates value through its mathematical
              trading formula and active participation within the ecosystem.
            </p>

            <p className="text-[#94A3B8] mt-[20px] font-semibold">
              The revenue model of the 1DEX Securio Token is based on the
              trading fees. 1DEX Securio founders DO NOT PRE-MINT and HOLD
              SUPPLY OF ANY TOKENS.
            </p>
          </div>

          <div className="trading-efficiency">
            <h3>TRADING EFFICIENCY</h3>

            <p className="text-[#94A3B8] mb-[30px]">
              Our fee structure is carefully optimized to:
            </p>

            <ul>
              <li>Support a self-sustaining growth model</li>
              <li>Create balanced buy/sell dynamics</li>
              <li>Reward long-term participation</li>
              <li>Ensure trading accessibility for all participants</li>
            </ul>

            <p className="text-[#94A3B8] mt-[30px]">
              The mathematical foundation of 1DEX Securio creates a system where
              value is derived from the token's inherent design rather than
              speculative pressure, establishing a new standard for token
              economics.
            </p>
          </div>

          <div className="tokenomics-graphic text-center mt-[60px]">
            <h3 className="mb-[30px]">TOKENOMICS VISUALIZATION</h3>
            <div className="max-w-[800px] my-0 mx-auto">
              <img
                className="w-full rounded-xl"
                src="/1dex-tokenomics-visualization.svg"
                alt="Tokenomics Visualization"
                style={{ boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
              />
            </div>
            <p className="max-w-[700px] text-[#94A3B8] mt-5 mx-auto">
              The 1DEX Securio token distribution model ensures that value flows
              to all participants in the ecosystem, with a focus on sustainable
              growth and long-term stability.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
};

export default Tokenomics;
