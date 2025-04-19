import React from "react";

const Roadmap: React.FC = () => {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <div className="section-title">
            <h2>1DEX SECURIO TOKEN ROADMAP</h2>
            <p>OUR JOURNEY TO REVOLUTIONIZE CRYPTO TRADING</p>
          </div>
        </div>
      </section>

      <section className="roadmap-detail">
        <div className="container">
          <div className="roadmap-intro">
            <p className="text-center text-[#94A3B8] max-w-[800px] mt-0 mb-[0px] mx-auto text-[18px]">
              Our strategic roadmap outlines the key milestones in the 1DEX
              Securio Token journey, from development and launch to global
              expansion and ecosystem growth.
            </p>
          </div>

          <div className="roadmap-container">
            <div className="roadmap-line"></div>

            <div className="roadmap-phase">
              <div className="phase-content completed">
                <h3>PHASE 1: FOUNDATION</h3>
                <p className="text-[#94A3B8] mb-5">COMPLETED</p>

                <ul>
                  <li>Patent filing completion</li>
                  <li>Smart contract development and testing</li>
                  <li>Security audits by leading firms</li>
                  <li>Website and brand launch</li>
                  <li>Strategic partnerships</li>
                </ul>
              </div>
              <div className="phase-date">
                <div className="phase-dot"></div>
              </div>
            </div>

            <div className="roadmap-phase">
              <div className="phase-content">
                <h3>PHASE 2: LAUNCH</h3>
                <p className="text-[#94A3B8] mb-5">Q3 2025</p>
                <ul>
                  <li>Community building initiatives</li>
                  <li>Exchange listings</li>
                  <li>Marketing campaign rollout</li>
                  <li>Launch the DEX and 1DEX SECURIO token</li>
                </ul>
              </div>
              <div className="phase-date">
                <div className="phase-dot"></div>
              </div>
            </div>

            <div className="roadmap-phase">
              <div className="phase-content">
                <h3>PHASE 3: EXPANSION</h3>
                <p className="text-[#94A3B8] mb-5">Q4 2025</p>

                <ul>
                  <li>Expand, acquire more customers</li>
                  <li>Additional exchange listings</li>
                  <li>Allow Listing of additional tokens</li>
                </ul>
              </div>
              <div className="phase-date">
                <div className="phase-dot"></div>
              </div>
            </div>

            <div className="roadmap-phase">
              <div className="phase-content">
                <h3>PHASE 4: ECOSYSTEM</h3>
                <p className="text-[#94A3B8] mb-5">Q1-Q2 2026</p>

                <ul>
                  <li>
                    Expand partnerships for utilization of the 1DEX Securio
                    token
                  </li>
                  <li>Merchant adoption program</li>
                  <li>Institutional partnerships</li>
                  <li>Advanced trading features</li>
                  <li>Enhanced security protocols</li>
                  <li>Global marketing expansion</li>
                </ul>
              </div>
              <div className="phase-date">
                <div className="phase-dot"></div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h3 className="mb-8 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent inline-block text-2xl font-bold">
              FUTURE VISION
            </h3>

            <div className="flex flex-wrap gap-8 max-w-4xl mx-auto">
              <div className="feature-card flex-1 min-w-[300px] p-4 bg-gray-100 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-2">Cross-Chain Integration</h4>
                <p className="text-gray-600">
                  Expanding 1DEX Securio functionality across multiple
                  blockchain networks to increase accessibility and utility
                </p>
              </div>

              <div className="feature-card flex-1 min-w-[300px] p-4 bg-gray-100 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-2">Governance System</h4>
                <p className="text-gray-600">
                  Implementing community-driven decision making for future
                  development and ecosystem expansion
                </p>
              </div>

              <div className="feature-card flex-1 min-w-[300px] p-4 bg-gray-100 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-2">Advanced DeFi Products</h4>
                <p className="text-gray-600">
                  Introducing innovative financial instruments built on the
                  secure foundation of 1DEX technology
                </p>
              </div>

              <div className="feature-card flex-1 min-w-[300px] p-4 bg-gray-100 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-2">Global Adoption</h4>
                <p className="text-gray-600">
                  Strategic initiatives to drive widespread adoption and
                  establish 1DEX Securio as the standard for secure trading
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h3>JOIN THE FUTURE OF SECURE TRADING</h3>
          <p>
            Be among the first to experience the revolution in crypto security
            and sustainable growth
          </p>
          <button className="primary-btn">GET WHITEPAPER</button>
        </div>
      </section>
    </main>
  );
};

export default Roadmap;
