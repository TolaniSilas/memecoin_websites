export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* text including phase boxes. */}
        <div className="flex-1">
          {/* heading. */}
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-pink-500 text-center lg:text-left">
            The <span className="italic">Love</span> Story
          </h2>

          {/* description. */}
          <div className="text-gray-300 space-y-4 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            <p>
              $Valontine mashes Valentine's romance with Solana meme culture.
              Inspired by “Alon needs a girlfriend for Valentines,” it turns
              diamond hands into pure on-chain <span className="italic">love</span>.
            </p>

            <p className="text-gray-400">
              Since Love is the only candle that doesn't wick, we launched a love letter to every diamond hand that refused to let go.
            </p>
          </div> 

          {/* phase boexs. */}
          <div className="mt-10 flex flex-col lg:flex-row gap-6 justify-center lg:justify-start">
            {/* phase box 1. */}
            <div className="flex-1 bg-[#111122] border border-pink-500 rounded-2xl p-6 text-left shadow-lg hover:shadow-pink-500/30 transition-all">
              <h3 className="text-pink-500 font-semibold mb-2 italic">Initial Phase: The Infatuation</h3>
              <p className="text-gray-300 text-sm lg:text-base">
                When the first 1,000 holders realized this wasn't just another meme - it was a lifestyle.
              </p>
            </div>

            {/* phase box 2. */}
            <div className="flex-1 bg-[#111122] border border-pink-500 rounded-2xl p-6 text-left shadow-lg hover:shadow-pink-500/30 transition-all">
              <h3 className="text-pink-500 font-semibold mb-2 italic">Ultimate Phase: The Commitment</h3>
              <p className="text-gray-300 text-sm lg:text-base">
                Building the largest decentralized heart-shaped ecosystem on Solana.
              </p>
            </div>
          </div>
        </div>

        {/* image box. */}
        <div className="flex-1 w-full max-w-lg mx-auto lg:mx-0">
          <img
            src="/valontine_image.png"
            alt="$Valontine Illustration"
            className="rounded-3xl shadow-2xl border border-pink-500/20 w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}