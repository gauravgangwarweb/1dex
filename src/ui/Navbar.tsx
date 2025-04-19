import React from "react";

const Navbar: React.FC = () => {
  return (
    <header>
    <div className="container">
      <nav>
        <div className="logo">
          <img loading="lazy" src="/logo.png" alt="1DEX Securio Logo" />
          <h1>1DEX SECURIO</h1>
        </div>
        <div className="hamburger">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
        <div className="nav-links">
          <a href="/" className="nav-link active">Home</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/features" className="nav-link">Features</a>
          <a href="/tokenomics" className="nav-link">Tokenomics</a>
          <a href="/how-it-works" className="nav-link">How It Works</a>
          <a href="/roadmap" className="nav-link">Roadmap</a>
          <a href="/faq" className="nav-link">FAQ</a>
          <a href="/join" className="nav-link">Join</a>
        </div>
        <button className="connect-btn">Connect Wallet</button>
      </nav>
    </div>
  </header>
  );
};

export default Navbar;
