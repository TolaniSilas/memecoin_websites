import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-12">
          <div className="max-w-xs">
            <h3 className="text-3xl font-extrabold mb-4">
              <span className="text-orange-500">Molt</span>
              <span className="text-white">ID</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              🦞One agent. One identity. Real reputation starts here.🦞
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#stats" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Stats
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Community</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://x.com/moltid_agent" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  X
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Trade</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://gmgn.ai/base/token/0x68b5a255a2c450adfb2fdf610a8605d3966a1c31" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  GMGN.AI
                </a>
              </li>
              <li>
                <a 
                  href="https://dexscreener.com/base/0x2a8e5321a54dbeb948c23bd2eb0dd970241af6a50367bbac05319110cdbf21bb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Dexscreener
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-6 sm:gap-8 pt-8 border-t border-zinc-800 text-gray-500 text-sm">
          <p>&copy; 2026 MoltID. All rights reserved.🦀</p>
          <p>Data powered by <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 transition-colors">DexScreener</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;