import { useCarStore } from '../store/useCarStore';
import { motion, AnimatePresence } from 'framer-motion';

const CarConfigurator = () => {
  const { model, hasSpoiler, hasHood, toggleSpoiler, toggleHood } = useCarStore();

  return (
    <div className="min-h-screen py-20 px-4 flex flex-col items-center bg-gradient-to-b from-background to-secondary">
      <h2 className="text-4xl md:text-6xl font-street mb-12 text-center tracking-wide">
        VIRTUAL <span className="text-neonYellow">GARAGE</span>
      </h2>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Visualizer */}
        <div className="relative aspect-video w-full bg-secondary/50 rounded-xl border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="relative w-full h-full flex items-center justify-center p-8">
            {/* Layer 1: Base Car */}
            <motion.div
              layout
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Placeholder for Base Car Image */}
              <div className="w-[80%] h-[50%] bg-gray-700/50 rounded-lg flex items-center justify-center border-2 border-white/20">
                <span className="text-white/30 font-tech text-4xl">{model} Base</span>
              </div>
            </motion.div>

            {/* Layer 2: Hood */}
            <AnimatePresence>
              {hasHood && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute inset-0 flex items-center justify-center z-10"
                >
                  {/* Placeholder for Carbon Hood */}
                  <div className="w-[30%] h-[15%] bg-black/80 border border-neonRed translate-y-[-20%] rounded shadow-[0_0_20px_rgba(255,0,51,0.3)] flex items-center justify-center">
                    <span className="text-neonRed text-xs font-bold">CARBON HOOD</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Layer 3: Spoiler */}
            <AnimatePresence>
              {hasSpoiler && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 flex items-center justify-center z-20"
                >
                  {/* Placeholder for Spoiler */}
                  <div className="w-[20%] h-[5%] bg-neonYellow/20 border border-neonYellow translate-x-[90%] translate-y-[-80%] rounded shadow-[0_0_20px_rgba(250,255,0,0.3)] flex items-center justify-center">
                    <span className="text-neonYellow text-xs font-bold">GT WING</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-8">
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur border border-white/10">
            <h3 className="text-xl font-tech mb-4 text-neonRed">Modifications</h3>
            
            <div className="space-y-4">
              <ToggleRow 
                label="Carbon Hood" 
                active={hasHood} 
                onClick={toggleHood} 
                color="red"
              />
              <ToggleRow 
                label="GT Wing Spoiler" 
                active={hasSpoiler} 
                onClick={toggleSpoiler} 
                color="yellow"
              />
            </div>
          </div>

          {/* Stats Mockup */}
          <div className="grid grid-cols-2 gap-4">
            <StatBox label="Horsepower" value={hasHood ? "420 HP" : "400 HP"} />
            <StatBox label="Aerodynamics" value={hasSpoiler ? "High Downforce" : "Stock"} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ToggleRow = ({ label, active, onClick, color }: { label: string, active: boolean, onClick: () => void, color: 'red' | 'yellow' }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center justify-between p-4 rounded border transition-all duration-300 group
      ${active 
        ? (color === 'red' ? 'bg-neonRed/10 border-neonRed shadow-[0_0_15px_rgba(255,0,51,0.2)]' : 'bg-neonYellow/10 border-neonYellow shadow-[0_0_15px_rgba(250,255,0,0.2)]')
        : 'bg-black/40 border-white/10 hover:border-white/30'
      }
    `}
  >
    <span className={`font-tech uppercase ${active ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
      {label}
    </span>
    <div className={`w-4 h-4 rounded-sm transition-colors ${
      active 
        ? (color === 'red' ? 'bg-neonRed' : 'bg-neonYellow') 
        : 'bg-gray-800'
    }`} />
  </button>
);

const StatBox = ({ label, value }: { label: string, value: string }) => (
  <div className="p-4 bg-black/60 border border-white/10 rounded">
    <div className="text-gray-500 text-xs uppercase mb-1">{label}</div>
    <div className="text-xl font-tech text-white">{value}</div>
  </div>
);

export default CarConfigurator;
