import Hero from "./components/Hero"
import About from "./components/About"
import Tokenomics from "./components/Tokenomics"
import Stats from "./components/Stats"
import Header from "./components/Header"
import Footer from "./components/Footer"
import './assets/styles/main.css'
import FloatingHearts from "./components/FloatingHearts"


function App() {
  return (
    <div className="relative">
      {/* floating hearts in the background */}
      <FloatingHearts />

      {/* main content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Stats />
        <Tokenomics />
        <Footer />
      </div>
    </div>
  )
}

export default App