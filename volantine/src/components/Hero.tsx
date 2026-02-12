import { useState } from "react"
import { Gift, Copy, Rocket, Check } from "lucide-react"

const CONTRACT =
  "5fRPUQKVZEYUe66QT9UCmeGPcA2ijsRNAvCwbuZSpump"

export default function Hero() {
  const [isHappy, setIsHappy] = useState(false)
  const [showGift, setShowGift] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleGift = () => {
    setShowGift(true)
    setTimeout(() => {
      setIsHappy(true)
      setShowGift(false)
    }, 1500)
  }

  const truncated =
    CONTRACT.slice(0, 6) + "..." + CONTRACT.slice(-4)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(CONTRACT)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="min-h-screen pt-32 md:pt-36 flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-[#0b0b14] via-[#140a1f] to-black">

      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
        $VALONTINE
      </h1>

      <p className="mt-4 text-lg text-gray-300">
        Where Love Meets Moonshots on Solana
      </p>

      {/* Video */}
      <div className="relative mt-10 w-full max-w-xl rounded-2xl overflow-hidden border border-pink-500/30 shadow-2xl shadow-pink-500/20">

        {showGift && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10 animate-pulse">
            <Gift size={60} className="text-pink-500" />
          </div>
        )}

        {!isHappy ? (
          <video autoPlay loop muted playsInline className="w-full">
            <source src="/videos/val_crying.mp4" type="video/mp4" />
          </video>
        ) : (
          <video autoPlay loop muted playsInline className="w-full">
            <source src="/videos/val_excited.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      {/* Gift Button */}
      {!isHappy && (
        <button
          onClick={handleGift}
          className="mt-6 flex items-center gap-2 px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-500 transition shadow-lg shadow-pink-500/30"
        >
          <Gift size={18} />
          Present a Gift
        </button>
      )}

      {/* Contract Box */}
      <div className="mt-10 w-full max-w-xl border-2 border-pink-500/60 rounded-3xl p-6 md:p-8 bg-[#0f0f1a] shadow-[0_0_40px_rgba(236,72,153,0.15)] text-center">

        <p className="text-sm tracking-widest text-pink-400 mb-4">
          CA
        </p>

        {/* Address Box */}
        <div className="bg-[#111122] border border-pink-500/20 rounded-xl px-4 py-3 mb-6">

          {/* Mobile */}
          <code className="block text-pink-300 text-sm md:hidden break-all">
            {truncated}
          </code>

          {/* Desktop */}
          <code className="hidden md:block text-pink-300 text-sm break-all">
            {CONTRACT}
          </code>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="mx-auto flex items-center justify-center p-3 rounded-xl border border-pink-500/40 hover:bg-pink-500/10 transition"
        >
          {copied ? (
            <Check size={20} className="text-green-400" />
          ) : (
            <Copy size={20} className="text-pink-400" />
          )}
        </button>

        {copied && (
          <div className="mt-3 text-xs text-pink-400">
            Copied to clipboard
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <a
          href={`https://pump.fun/${CONTRACT}`}
          target="_blank"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:scale-105 transition"
        >
          <Rocket size={18} />
          Buy on Pump.fun
        </a>

        <a
          href={`https://gmgn.ai/sol/token/${CONTRACT}`}
          target="_blank"
          className="px-6 py-3 border border-pink-500 text-pink-400 rounded-full hover:bg-pink-500/10 transition"
        >
          Trade on GMGN
        </a>
      </div>
    </section>
  )
}
