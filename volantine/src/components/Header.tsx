import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Heart, Menu } from "lucide-react"

const CONTRACT = "5fRPUQKVZEYUe66QT9UCmeGPcA2ijsRNAvCwbuZSpump"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 20)

      const about = document.getElementById("about")
      const tokenomics = document.getElementById("tokenomics")

      if (tokenomics && scrollY >= tokenomics.offsetTop - 100) {
        setActiveSection("tokenomics")
      } else if (about && scrollY >= about.offsetTop - 100) {
        setActiveSection("about")
      } else {
        setActiveSection("")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setMenuOpen(false)
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
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Heart className="text-pink-500" size={28} />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-extrabold">
                <span className="bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
                  VALON
                </span>
                <span className="text-white">TINE</span>
              </span>
              <span className="text-[0.65rem] text-gray-500 uppercase tracking-widest">
                Pure On-Chain Love
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className={`font-medium transition-colors ${
                activeSection === "about"
                  ? "text-pink-500"
                  : "text-gray-400 hover:text-pink-400"
              }`}
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("tokenomics")}
              className={`font-medium transition-colors ${
                activeSection === "tokenomics"
                  ? "text-pink-500"
                  : "text-gray-400 hover:text-pink-400"
              }`}
            >
              Tokenomics
            </button>

            <a
              href={`https://pump.fun/${CONTRACT}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 text-white px-6 py-2.5 rounded-xl font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-pink-500/30"
            >
              Buy Now
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <Menu className="text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
        className="md:hidden fixed top-0 right-0 h-screen w-[85%] bg-[#0b0b14]/95 backdrop-blur-xl border-l border-pink-500/20 z-40 p-8"
      >
        <div className="flex flex-col gap-6 mt-16">

          <button
            onClick={() => scrollToSection("about")}
            className="text-left text-lg text-gray-300 hover:text-pink-500 transition"
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("tokenomics")}
            className="text-left text-lg text-gray-300 hover:text-pink-500 transition"
          >
            Tokenomics
          </button>

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
