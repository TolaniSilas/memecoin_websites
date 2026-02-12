import Hero from "./components/Hero"
import About from "./components/About"
import Tokenomics from "./components/Tokenomics"
import Header from "./components/Header"
import Footer from "./components/Footer"
import './assets/styles/main.css'

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <Footer />
    </>
  )
}

