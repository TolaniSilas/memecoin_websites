import React, { useState } from 'react'
import MoltIDSymbol from '../assets/images/moltid-symbol.png';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <span className="logo-text">
              <span className="molt">Molt</span>
              <span className="id">ID</span>
            </span>
            <p className="tagline">AI AGENT IDENTITY</p>
          </div>
{/*           
          <div className="logo">
            <img
            src={MoltIDSymbol}
            alt="MoltID symbol"
            className="logo-symbol"
            />

            <div className="logo-text-wrapper">
                <span className="logo-text">
                <span className="molt">Molt</span>
                <span className="id">ID</span>
                </span>
                <p className="tagline">AI AGENT IDENTITY</p>
            </div>
          </div> */}


          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <button onClick={() => scrollToSection('stats')} className="nav-link">
              Stats
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About
            </button>
            <a 
              href="https://x.com/moltid_agent" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-link"
            >
              Join MoltID
            </a>
            <a 
              href="https://gmgn.ai/base/token/0x68b5a255a2c450adfb2fdf610a8605d3966a1c31" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="buy-button"
            >
              Buy on GMGN.AI
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="nav-mobile">
            <button onClick={() => scrollToSection('stats')} className="nav-link-mobile">
              Stats
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link-mobile">
              About
            </button>
            <a 
              href="https://x.com/moltid_agent" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-link-mobile"
            >
              Join MoltID
            </a>
            <a 
              href="https://pump.fun" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="buy-button-mobile"
            >
              Buy on Pump
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;