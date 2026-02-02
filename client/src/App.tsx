import Hero from './components/Hero';
import CarVisualizer from './components/CarVisualizer';
import ExhaustCard from './components/ExhaustCard';
import ShoppableVideo from './components/ShoppableVideo';

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-neonRed selection:text-white pb-20">
      <Hero />
      
      {/* Product Highlight Section */}
      <section className="py-20 flex flex-col items-center justify-center bg-black/50">
        <h2 className="text-3xl font-street text-white mb-10 tracking-widest">LATEST DROPS</h2>
        <ExhaustCard />
      </section>

      <CarVisualizer />
      
      <ShoppableVideo />

      {/* Footer / Credits */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10 font-tech">
        <p>AZC ORIGINAL &copy; 2026 // STREET KINGS</p>
      </footer>
    </div>
  );
}

export default App;
