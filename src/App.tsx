import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Gallery from './components/Gallery';
import Roadmap from './components/Roadmap';
import Partners from './components/Partners';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen text-white selection:bg-neon-green selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tokenomics />
        <Gallery />
        <Roadmap />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
