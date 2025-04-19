import React, { useState } from "react";
import CTA from "../ui/home/CTA";

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const faqs = [
    {
      question: "What makes 1DEX Securio different from other tokens?",
      answer: (
        <>
          1DEX Securio is the only token with patent-filed technology that
          guarantees pump-and-dump protection, 100% liquidity availability,
          continuous upward price momentum, and 5% referral rewards.
          <span className="block mt-2">
            While other tokens may offer individual features, only 1DEX Securio
            combines all four innovations in a single revolutionary design.
          </span>
        </>
      ),
    },
    {
      question: "How does Securio prevent pump-and-dump schemes?",
      answer: (
        <>
          Our patent-filed smart contract technology includes mathematical
          algorithms that help enhance the token price with every trade (buy or
          sell), effectively benefiting from every trade, including trades from
          pump-and-dump.
          <span className="mt-2">
            The system automatically adjusts parameters to detect those large
            manipulation attempts before they can harm legitimate traders.
          </span>
        </>
      ),
    },
    {
      question: "Is my liquidity always guaranteed?",
      answer: (
        <>
          Yes, 1DEX Securio's innovative pool management system ensures 100%
          liquidity is available at all times, regardless of market conditions
          or trading volume. This is achieved through protected liquidity pools,
          smart contract reserves, and automatic rebalancing mechanisms that
          maintain optimal trading conditions.
        </>
      ),
    },
    {
      question: "How does 1DEX Securio make the price go up from both buying and selling?",
      answer: (
        <>
          Traditional tokens see price decreases when selling exceeds buying.
          1DEX Securio's revolutionary design includes a fee redistribution
          system where a portion of every transaction is used to support the
          token's floor price through strategic buy-pressure. Additionally, our
          deflationary structure decreases total supply over time, enhancing
          scarcity value.
        </>
      ),
    },
    {
      question: "How does the referral program work?",
      answer: (
        <>
          When you share your unique referral link, anyone who purchases 1DEX
          Securio through that link becomes permanently associated with your
          wallet. You automatically receive 5% of every transaction they make -
          both buying AND selling - directly to your wallet. There's no limit to
          how many people you can refer or how much you can earn.
        </>
      ),
    },
    {
      question: "What are the transaction fees for 1DEX Securio?",
      answer: (
        <>
          1DEX Securio has a total transaction fee strategically allocated to
          protect, grow and make sure every trader earns from investing into
          1DEX Securio. Trading fee of 5% during Buy and Sell along with 5% of
          referral and 10% towards administration, liquidity management and
          protection. These fees ensure both security and sustainable growth.
        </>
      ),
    },
    {
      question: "Is Securio audited and secure?",
      answer: (
        <>
          Yes, Securio's smart contracts undergo rigorous security audits by
          leading blockchain security firms before launch. Additionally, our
          patent-filed technology provides an extra layer of protection and
          verification for all users. It is certified by the security experts
          for its protection and security.
        </>
      ),
    },
    {
      question: "When is the presale and how can I participate?",
      answer: (
        <>
          There is NO Presale for the 1DEX Securio token. Everyone including
          founders, promoters, investors will be buying tokens at launch along
          with everyone else. There are NO PREMINTED tokens and no supply is
          held by the founders, promoters and investors.
        </>
      ),
    },
    {
      question: "Where can I trade 1DEX Securio after launch?",
      answer: (
        <>
          1DEX Securio will be available on 1DEX Exchange at the launch. It will
          be listed on multiple exchanges following our launch event. Specific
          exchange listings will be announced on our official channels as launch
          approaches.
        </>
      ),
    },
    {
      question: "How do I track my referral earnings?",
      answer: (
        <>
          1DEX Securio provides a dedicated dashboard on your 1DEX login screen,
          where you can track all aspects of your referral performance,
          including total earnings, network size, transaction history, and
          real-time commission payments. This dashboard is accessible through
          our website once you connect your wallet.
        </>
      ),
    },
  ];

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <div className="section-title">
            <h2>FREQUENTLY ASKED QUESTIONS</h2>
          </div>
        </div>
      </section>
      <section className="faq-section">
        <div className="container">
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  {faq.question}
                </div>
                <div 
                  className="faq-answer"
                  style={{
                    maxHeight: activeIndex === index ? '500px' : '0',
                    opacity: activeIndex === index ? 1 : 0,
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
};

export default FAQ;
