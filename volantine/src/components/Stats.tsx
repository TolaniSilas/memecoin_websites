import { useEffect, useState } from "react"
import { Activity, Globe, Droplet, BarChart3 } from "lucide-react"

// Solana token contract address
const CONTRACT = "5fRPUQKVZEYUe66QT9UCmeGPcA2ijsRNAvCwbuZSpump"

export default function Stats() {
  // State variables for live stats
  const [price, setPrice] = useState("---")
  const [change, setChange] = useState("0.00%")
  const [marketCap, setMarketCap] = useState("---")
  const [liquidity, setLiquidity] = useState("---")
  const [volume, setVolume] = useState("---")
  const [error, setError] = useState(false) // track API error

  useEffect(() => {
    /**
     * Fetch live stats from DexScreener API
     */
    const fetchStats = async () => {
      try {
        const res = await fetch(
          `https://api.dexscreener.com/latest/dex/tokens/${CONTRACT}`
        )
        if (!res.ok) throw new Error("Network response was not ok")
        const data = await res.json()

        const pair = data.pairs?.[0]
        if (pair) {
          setPrice(
            pair.priceUsd
              ? `$${parseFloat(pair.priceUsd).toFixed(6)}`
              : "---"
          )
          setChange(
            pair.priceChange?.h24 !== undefined
              ? `${parseFloat(pair.priceChange.h24).toFixed(2)}%`
              : "0.00%"
          )
          setMarketCap(
            pair.marketCap
              ? `$${parseInt(pair.marketCap).toLocaleString()}`
              : "---"
          )
          setLiquidity(
            pair.liquidity?.usd
              ? `$${parseInt(pair.liquidity.usd).toLocaleString()}`
              : "---"
          )
          setVolume(
            pair.volume?.h24
              ? `$${parseInt(pair.volume.h24).toLocaleString()}`
              : "---"
          )
          setError(false) // reset error state on success
        }
      } catch (err) {
        console.error("Error fetching DexScreener stats:", err)
        setError(true)

        // Fallback UI values
        setPrice("N/A")
        setChange("N/A")
        setMarketCap("N/A")
        setLiquidity("N/A")
        setVolume("N/A")
      }
    }

    fetchStats()
    const interval = setInterval(fetchStats, 30_000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="stats" className="py-24 bg-[#0b0b14] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12 items-start">
        
        {/* DexScreener Embed */}
        <div className="w-full lg:w-2/3">
          <div className="rounded-3xl overflow-hidden border border-white/10 h-[600px] w-full">
            <iframe
              src={`https://dexscreener.com/solana/${CONTRACT}?embed=1&theme=dark&trades=0&info=0`}
              className="w-full h-full border-none"
              title="Live DexScreener Chart"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Stats Boxes */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          {/* Live Price */}
          <div
            className={`glass p-8 rounded-3xl border-l-4 border-pink-500 relative overflow-hidden group bg-[#111122]/80 ${
              error ? "opacity-70" : ""
            }`}
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Activity size={96} className="text-pink-500" />
            </div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 flex items-center gap-2">
              <span
                className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                  error ? "bg-red-500" : "bg-green-500"
                }`}
              ></span>{" "}
              Live Price
            </p>
            <h4 className="text-5xl font-bold serif tracking-tight mb-1">{price}</h4>
            <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 text-xs font-bold">
              {change}
            </div>
            {error && (
              <p className="mt-2 text-red-400 text-xs">
                Failed to fetch live stats.
              </p>
            )}
          </div>

          {/* Market Cap, Liquidity, Volume */}
          <div className="grid grid-cols-1 gap-4">
            <div className="glass p-5 rounded-2xl flex justify-between items-center border border-white/5 hover:border-pink-500/30 transition-all">
              <div>
                <p className="text-[9px] uppercase tracking-widest text-gray-400 mb-1">Market Cap</p>
                <h4 className="text-2xl font-bold serif">{marketCap}</h4>
              </div>
              <Globe size={20} className="text-pink-500 opacity-60" />
            </div>

            <div className="glass p-5 rounded-2xl flex justify-between items-center border border-white/5 hover:border-pink-500/30 transition-all">
              <div>
                <p className="text-[9px] uppercase tracking-widest text-gray-400 mb-1">Liquidity</p>
                <h4 className="text-2xl font-bold serif">{liquidity}</h4>
              </div>
              <Droplet size={20} className="text-pink-500 opacity-60" />
            </div>

            <div className="glass p-5 rounded-2xl flex justify-between items-center border border-white/5 hover:border-pink-500/30 transition-all">
              <div>
                <p className="text-[9px] uppercase tracking-widest text-gray-400 mb-1">24h Volume</p>
                <h4 className="text-2xl font-bold serif">{volume}</h4>
              </div>
              <BarChart3 size={20} className="text-pink-500 opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
