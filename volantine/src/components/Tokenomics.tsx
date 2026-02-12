import { Flame, Crown, Gem, Coins } from "lucide-react"

export default function Tokenomics() {
  const features = [
    {
      icon: <Flame className="text-pink-500" size={32} />,
      title: "LP Burned",
      desc: "Liquidity permanently burned."
    },
    {
      icon: <Crown className="text-pink-500" size={32} />,
      title: "Ownership Renounced",
      desc: "Community driven forever."
    },
    {
      icon: <Coins className="text-pink-500" size={32} />,
      title: "0% Tax",
      desc: "Pure trading freedom."
    },
    {
      icon: <Gem className="text-pink-500" size={32} />,
      title: "Diamond Hands",
      desc: "Built for eternal holders."
    }
  ]

  return (
    <section className="py-20 bg-[#0f0f1a]">
      <h2 className="text-2xl font-bold text-center text-pink-500 mb-12">
        Pure On-Chain Love
      </h2>

      <div className="grid md:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
        {features.map((item, i) => (
          <div
            key={i}
            className="p-6 bg-[#111122] rounded-2xl border border-pink-500/20 text-center hover:scale-105 transition"
          >
            <div className="mb-4 flex justify-center">
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
