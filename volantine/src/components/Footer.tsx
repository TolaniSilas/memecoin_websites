import { Heart, ExternalLink } from "lucide-react"

const CONTRACT =
  "5fRPUQKVZEYUe66QT9UCmeGPcA2ijsRNAvCwbuZSpump"

export default function Footer() {
  return (
    <footer className="bg-[#070710] border-t border-pink-500/20 px-6 py-16">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
                $VALONTINE
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              The memecoin for lovers & pumpers.
              The first luxury meme protocol on Solana.
              "Love is the only candle that doesn't wick."
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-4">Navigate</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-pink-500 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#tokenomics"
                  className="text-gray-400 hover:text-pink-500 transition"
                >
                  Tokenomics
                </a>
              </li>
            </ul>
          </div>

          {/* Trade */}
          <div>
            <h4 className="text-white font-bold mb-4">Trade</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://pump.fun/${CONTRACT}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-pink-500 transition"
                >
                  Pump.fun <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href={`https://gmgn.ai/sol/token/${CONTRACT}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-pink-500 transition"
                >
                  GMGN.ai <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href='https://dexscreener.com/solana/3b4s8ee14fcm1acg4vhsm22sgcregfauqepfqkzjpzai'
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-pink-500 transition"
                >
                  DexScreener <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-pink-500/10 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © 2026 $VALONTINE. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            Built with <Heart size={14} className="text-pink-500" /> on Solana
          </p>
        </div>
      </div>
    </footer>
  )
}
