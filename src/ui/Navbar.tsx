import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 bg-white/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between md:h-20">
          {/* Hamburger Menu Button */}
          <button
            className="lg:hidden px-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <img
              className="h-10 w-auto rounded-full"
              loading="lazy"
              src="/round-coin-logo.png"
              alt="1DEX Securio Logo"
            />
            <h1 className="sr-only">1DEX SECURIO</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="nav-link active">
              Home
            </a>
            <a href="/about" className="nav-link">
              About
            </a>
            <a href="/features" className="nav-link">
              Features
            </a>
            <a href="/tokenomics" className="nav-link">
              Tokenomics
            </a>
            <a href="/how-it-works" className="nav-link">
              How It Works
            </a>
            <a href="/roadmap" className="nav-link">
              Roadmap
            </a>
            <a href="/faq" className="nav-link">
              FAQ
            </a>
            <a href="/join" className="nav-link">
              Join
            </a>
          </div>

          {/* Connect Wallet Button */}
          <button className="hidden lg:block px-6 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full hover:opacity-90 transition-opacity">
            Connect Wallet
          </button>
        </nav>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`
          fixed top-0 right-0 min-h-screen w-full bg-black shadow-lg transform transition-transform duration-300 ease-in-out z-50 overflow-y-hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2 text-white hover:opacity-75 transition-opacity"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col justify-between h-full mt-8">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col items-center justify-center pt-12 pb-8 px-6 space-y-4">
            <a href="/" className="mobile-nav-link">
              Home
            </a>
            <a href="/about" className="mobile-nav-link">
              About
            </a>
            <a href="/features" className="mobile-nav-link">
              Features
            </a>
            <a href="/tokenomics" className="mobile-nav-link">
              Tokenomics
            </a>
            <a href="/how-it-works" className="mobile-nav-link">
              How It Works
            </a>
            <a href="/roadmap" className="mobile-nav-link">
              Roadmap
            </a>
            <a href="/faq" className="mobile-nav-link">
              FAQ
            </a>
            <a href="/join" className="mobile-nav-link">
              Join
            </a>
          </div>

          {/* Mobile Connect Wallet Button */}
          <div className="mt-auto p-6 justify-end">
            <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full hover:opacity-90 transition-opacity">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
