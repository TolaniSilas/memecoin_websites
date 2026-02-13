import { Flame, Crown, Gem, Coins } from "lucide-react"

export default function Tokenomics() {
  const features = [
    {
      icon: <Flame className="text-pink-500" size={36} />,
      title: "LP Burned",
      desc: "Liquidity Pool permanently burned. This isn't just a meme, it's a love letter to the community."
    },
    {
      icon: <Crown className="text-pink-500" size={36} />,
      title: "Ownership Renounced",
      desc: "Thecontract is now for public good. It's community driven forever."
    },
    {
      icon: <Coins className="text-pink-500" size={36} />,
      title: "0% Tax",
      desc: "Pure trading freedom. Real love should come with no hidden fees or transaction costs."
    },
    {
      icon: <Gem className="text-pink-500" size={36} />,
      title: "Diamond Hands",
      desc: "Built for eternal holders. It turns diamond hands into pure on-chain love."
    }
  ]

  return (
    <section className="py-18 bg-[#0f0f1a]">
      
      {/* Section Title */}
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-pink-500 italic mb-16">
        Pure On-Chain Love
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 max-w-7xl mx-auto">
        {features.map((item, i) => (
          <div
            key={i}
            className="
              p-10 
              bg-[#111122] 
              rounded-3xl 
              border border-pink-500/20 
              shadow-lg 
              hover:shadow-pink-500/30 
              hover:-translate-y-2 
              transition-all 
              duration-300
              min-h-55
              flex flex-col
              justify-start
            "
          >
            <div className="mb-6">
              {item.icon}
            </div>

            <h3 className="text-white font-bold text-xl mb-3">
              {item.title}
            </h3>

            <p className="text-gray-400 text-base font-normal leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
