import React from "react";
import CTA from "../ui/home/CTA";

const HowItWorks:React.FC = () => {
    return (
        <main>
    <section className="page-header">
      <div className="container">
        <div className="section-title">
          <h2>HOW 1DEX SECURIO TOKEN WORKS</h2>
          <p>THE TECHNOLOGY BEHIND THE REVOLUTION</p>
        </div>
      </div>
    </section>
    
    <section className="how-it-works-detail">
      <div className="container">
        <div className="mechanism-overview">
          <p>1DEX SECURIO patent-filed technology combines advanced smart contract architecture with innovative economic mechanisms to revolutionize token functionality - TO PROTECT and GROW.</p>
        </div>
        
        <div className="mechanism-section">
          <div className="mechanism-card">
            <h3>STRATEGIC TRADING MECHANISM</h3>
            
            <p className="text-[#94A3B8] mb-[30px]">Our token operates on a principle of active circulation to generate sustainable growth:</p>
            
            <ul>
              <li>Regular Trading Incentives: The system is designed to reward consistent trading activity</li>
              <li>2% Biweekly Trading Recommendation: This creates healthy market dynamics and portfolio growth</li>
              <li>Mathematical Growth Model: Ensures overall portfolio appreciation even during market fluctuations</li>
            </ul>
            
            <div className="step-process">
              <h4>The 2% Trading Advantage</h4>
              <p className="text-[#94A3B8] mb-[20px]">When traders maintain consistent 2% portfolio trading every two weeks:</p>
              
              <ol className="step-list">
                <li className="step-item">
                  <div className="step-number">1</div>
                  <div className="step-content">The mathematical model ensures the remaining 98% of holdings continues to grow in value as the token price increases</div>
                </li>
                
                <li className="step-item">
                  <div className="step-number">2</div>
                  <div className="step-content">This appreciation typically exceeds any temporary losses that may happen due to 2% bi-weekly trading</div>
                </li>
                
                <li className="step-item">
                  <div className="step-number">3</div>
                  <div className="step-content">Long-term portfolio value grows steadily through this balanced approach</div>
                </li>
              </ol>
              
              <p className="text-[#94A3B8] mb-[20px]">This creates a self-reinforcing cycle where regular trading activity supports ecosystem health and benefits all participants.</p>
            </div>
          </div>
        </div>
        
        <div className="mechanism-section">
          <div className="mechanism-card">
            <h3>REFERRAL SYSTEM MECHANICS</h3>
            
            <p className="text-[#94A3B8] mb-[30px]">Our innovative 5% referral program operates through:</p>
            
            <ol className="step-list">
              <li className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">Smart Contract Attribution: Wallet addresses are permanently linked to their referrers</div>
              </li>
              
              <li className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">Automatic Commission Distribution: 5% of referred users' transactions are instantly sent to referrers</div>
              </li>
              
              <li className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">Multi-Level Network Building: Build a growing community that generates passive income</div>
              </li>
              
              <li className="step-item">
                <div className="step-number">4</div>
                <div className="step-content">Lifetime Earning Potential: Referral connections never expire, creating ongoing revenue</div>
              </li>
            </ol>
            
            <h4 className="text-[#3B82F6] mt-[40px] mb-[20px]">PROJECTED REFERRAL INCOME</h4>
            <p className="text-[#94A3B8] mt-[20px]">Build a sustainable passive income stream through the Securio referral program:</p>
            
            <table className="income-table">
              <thead>
                <tr>
                  <th>Network Size</th>
                  <th>Monthly Income Potential</th>
                  <th>Annual Income Potential</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3 Active Direct Referrals</td>
                  <td>$300-$900</td>
                  <td>$3,600-$10,800</td>
                </tr>
                <tr>
                  <td>Network of 9 Active Traders</td>
                  <td>$500-$1,500</td>
                  <td>$6,000-$18,000</td>
                </tr>
                <tr>
                  <td>Growing Network (25+ traders)</td>
                  <td>$1,000-$5,000+</td>
                  <td>$12,000-$60,000+</td>
                </tr>
              </tbody>
            </table>
            
            <p className="text-[#94A3B8] mt-[20px]">The power of the referral program multiplies as more participants join and actively trade within your network.</p>
          </div>
        </div>
        
        <div className="mechanism-section">
          <div className="mechanism-card">
            <h3>TECHNICAL ARCHITECTURE</h3>
            
            <p className="text-[#94A3B8] mt-[30px]">The 1DEX Securio token is built on a foundation of secure, audited smart contract technology:</p>
            
            <div className="flex flex-wrap gap-[30px] mb-[30px]">
              <div className="flex-1/2 min-w-[300px]">
                <h4 className="text-[#3B82F6] mb-[20px]">Smart Contract Security</h4>
                <ul className="list-none text-[#94A3B8]">
                  <li className="mb-[10px] flex items-start">
                    <span className="text-[#10B981] mr-[10px]">✓</span> Thoroughly audited by leading security firms
                  </li>
                  <li className="mb-[10px] flex items-start;">
                    <span className="text-[#10B981] mr-[10px]">✓</span> Protected against common vulnerabilities
                  </li>
                  <li className="mb-[10px] flex items-start">
                    <span className="text-[#10B981] mr-[10px]">✓</span> Ownership controls with multi-signature governance
                  </li>
                </ul>
              </div>
              
              <div className="flex-1/2 min-w-[300px]">
                <h4 className="text-[#3B82F6] mb-[20px]">Transaction Processing</h4>
                <ul className="list-none text-[#94A3B8]">
                  <li className="mb-[10px] flex items-start">
                    <span className="text-[#10B981] mr-[10px]">✓</span> Efficient gas optimization
                  </li>
                  <li className="mb-[10px] flex items-start">
                    <span className="text-[#10B981] mr-[10px]">✓</span> Automated fee distribution system
                  </li>
                  <li className="mb-[10px] flex items-start">
                    <span className="text-[#10B981] mr-[10px]">✓</span> Built-in liquidity management algorithms
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center mt-[40px]">
              <img className="max-w-full rounded-[12px]" style={{ boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }} src="/1dex-securio.png" alt="Technical Architecture Diagram" />
              <p className="text-[#94A3B8] mt-[20px] italic">The 1DEX Securio token smart contract architecture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <CTA />
  </main>
    )
}

export default HowItWorks;