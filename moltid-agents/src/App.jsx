import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Footer from './components/Footer';
import './assets/styles/main.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Footer />
    </div>
  );
}

export default App;