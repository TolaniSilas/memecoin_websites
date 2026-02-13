import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Heart, X } from "lucide-react"


// solana token contract address.
const CONTRACT = "5fRPUQKVZEYUe66QT9UCmeGPcA2ijsRNAvCwbuZSpump"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)

  // improved scroll detection for making real-time live stats.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ["about", "stats", "tokenomics"]

      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()

          // section is considered active when middle of viewport touches it.
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setMenuOpen(false)
      setActiveSection(id)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#0b0b14]/90 backdrop-blur-lg border-pink-500/20"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">

          {/* logo. */}
          <div className="flex items-center gap-2">
            <Heart className="text-pink-500" size={26} />
            <span className="text-2xl font-extrabold">
              <span className="bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
                VALON
              </span>
              <span className="text-white">TINE</span>
            </span>
          </div>

          {/* desktop navigation. */}
          <nav className="hidden md:flex items-center gap-10 absolute left-1/2 transform -translate-x-1/2">
            {["about", "stats", "tokenomics"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item
                    ? "text-pink-500"
                    : "text-gray-400 hover:text-pink-400"
                }`}
              >
                {item === "stats"
                  ? "Live Stats"
                  : item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>

          {/* buy button. */}
          <div className="hidden md:block">
            <a
              href={`https://pump.fun/${CONTRACT}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-pink-500/30"
            >
              Buy Now
            </a>
          </div>

          {/* hamburger. */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            ></span>

            <span
              className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>

            <span
              className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* mobile drawer. */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="md:hidden fixed top-0 right-0 h-screen w-[90%] bg-[#0b0b14]/95 backdrop-blur-xl border-l border-pink-500/20 rounded-l-2xl z-40 p-8"
      >
        {/* close button. */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#111122] transition"
          aria-label="Close menu"
        >
          <X size={26} className="text-gray-300 hover:text-pink-500 transition" />
        </button>

        <div className="flex flex-col gap-6 mt-20">
          {["about", "stats", "tokenomics"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-left text-lg font-medium transition-colors py-3 px-4 rounded-lg ${
                activeSection === item
                  ? "text-pink-500 bg-[#111122]"
                  : "text-gray-300 hover:text-pink-500 hover:bg-[#111122]"
              }`}
            >
              {item === "stats"
                ? "Live Stats"
                : item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}

          <a
            href={`https://pump.fun/${CONTRACT}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl py-3 text-center font-semibold"
          >
            Buy on Pump.fun
          </a>
        </div>
      </motion.div>
    </header>
  )
}
