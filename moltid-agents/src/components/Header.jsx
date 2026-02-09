import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MoltIDLogo from '../assets/images/moltid-symbol.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for header background and active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 10);

      const stats = document.getElementById('stats');
      const about = document.getElementById('about');

      if (about && scrollY >= about.offsetTop - 80) {
        setActiveSection('about');
      } else if (stats && scrollY >= stats.offsetTop - 80) {
        setActiveSection('stats');
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b border-zinc-800 ${
        scrolled ? 'bg-zinc-950/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={MoltIDLogo} alt="MoltID Logo" className="w-10 h-10" />
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight leading-tight">
                <span className="text-orange-500">Molt</span>
                <span className="text-white">ID</span>
              </span>
              <p className="text-[0.65rem] text-gray-500 uppercase tracking-widest">
                AI AGENT IDENTITY
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('stats')}
              className={`text-[0.95rem] font-medium transition-colors ${
                activeSection === 'stats'
                  ? 'text-orange-500'
                  : 'text-gray-400 hover:text-orange-500'
              }`}
            >
              Stats
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className={`text-[0.95rem] font-medium transition-colors ${
                activeSection === 'about'
                  ? 'text-orange-500'
                  : 'text-gray-400 hover:text-orange-500'
              }`}
            >
              About
            </button>

            <a
              href="https://x.com/moltid_agent"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors font-medium text-[0.95rem] px-4 py-2 border border-zinc-700 hover:border-zinc-600 rounded-lg"
            >
              Join MoltID
            </a>

            <a
              href="https://gmgn.ai/base/token/0x68b5a255a2c450adfb2fdf610a8605d3966a1c31"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold text-[0.95rem] transition-all hover:-translate-y-0.5"
            >
              Buy on GMGN.AI
            </a>
          </nav>

          {/* Mobile Menu Button - Hamburger to X Animation */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {/* Hamburger line 1 */}
            <span
              className={`absolute w-6 h-0.5 bg-white transition-all duration-300 transform ${
                menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2 rotate-0'
              } group-hover:bg-orange-500`}
            ></span>
            {/* Hamburger line 2 (middle) */}
            <span
              className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              } group-hover:bg-orange-500`}
            ></span>
            {/* Hamburger line 3 */}
            <span
              className={`absolute w-6 h-0.5 bg-white transition-all duration-300 transform ${
                menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2 rotate-0'
              } group-hover:bg-orange-500`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: menuOpen ? '0%' : '100%', opacity: menuOpen ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="
          md:hidden
          fixed
          top-0
          right-0
          h-screen
          w-[90%]
          bg-zinc-950/95
          backdrop-blur-xl
          border-l border-zinc-700/60
          rounded-l-2xl
          z-40
        "
      >
        {/* Menu Header with Logo and Close Button */}
        <div className="flex justify-between items-start p-6 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <img src={MoltIDLogo} alt="MoltID Logo" className="w-10 h-10" />
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight leading-tight">
                <span className="text-orange-500">Molt</span>
                <span className="text-white">ID</span>
              </span>
              <p className="text-[0.6rem] text-gray-500 uppercase tracking-widest">
                AI AGENT IDENTITY
              </p>
            </div>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative group hover:text-orange-500 transition-colors"
            aria-label="Close menu"
          >
            <span className="absolute w-6 h-0.5 bg-white rotate-45 group-hover:bg-orange-500 transition-colors"></span>
            <span className="absolute w-6 h-0.5 bg-white -rotate-45 group-hover:bg-orange-500 transition-colors"></span>
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-4 px-6 pt-8">
          <button
            onClick={() => scrollToSection('stats')}
            className={`text-left text-base font-medium transition-colors py-3 px-4 rounded-lg ${
              activeSection === 'stats'
                ? 'text-orange-500 bg-zinc-900'
                : 'text-gray-300 hover:text-orange-500 hover:bg-zinc-900'
            }`}
          >
            Stats
          </button>

          <button
            onClick={() => scrollToSection('about')}
            className={`text-left text-base font-medium transition-colors py-3 px-4 rounded-lg ${
              activeSection === 'about'
                ? 'text-orange-500 bg-zinc-900'
                : 'text-gray-300 hover:text-orange-500 hover:bg-zinc-900'
            }`}
          >
            About
          </button>

          <div className="mt-4 space-y-3">
            <a
              href="https://x.com/moltid_agent"
              target="_blank"
              rel="noopener noreferrer"
              className="
                block
                text-center
                border border-zinc-600
                rounded-lg
                py-3
                px-4
                text-gray-300
                hover:border-orange-500
                hover:text-white
                hover:bg-orange-500/10
                transition-all
                font-medium
              "
            >
              Join MoltID
            </a>

            <a
              href="https://gmgn.ai/base/token/0x68b5a255a2c450adfb2fdf610a8605d3966a1c31"
              target="_blank"
              rel="noopener noreferrer"
              className="
                block
                bg-orange-500
                hover:bg-orange-600
                text-white
                rounded-lg
                py-3
                px-4
                font-semibold
                text-center
                transition-all
              "
            >
              Buy on GMGN.AI
            </a>
          </div>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
