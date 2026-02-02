import { useState } from 'react';
import { motion } from 'framer-motion';
import { useGlobalAudio } from '../hooks/useGlobalAudio';

const CarVisualizer = () => {
  const [showMods, setShowMods] = useState(false);
  const { playClick } = useGlobalAudio();

  const toggleMods = () => {
    playClick();
    setShowMods(!showMods);
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-4xl md:text-6xl font-street text-center mb-12">
        BUILD YOUR <span className="text-neonRed">WEAPON</span>
      </h2>

      <div className="relative aspect-video w-full bg-[#111] overflow-hidden border-2 border-white/10 shadow-2xl group">
        
        {/* Layer 1: Base Car */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
             {/* Placeholder Image */}
            {/* Stock Car Image */}
            <img 
              src="/cars/base_car.jpg" 
              alt="Stock Toyota Fortuner" 
              className="w-full h-full object-cover"
            />
        </div>

        {/* Layer 2: Modded Car (Absolute on top) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: showMods ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        >
             {/* Placeholder Image with Mods */}
            {/* Modded Car Image */}
            <img 
              src="/cars/modded_car.jpg" 
              alt="Modded Toyota Fortuner" 
              className="w-full h-full object-cover"
            />
        </motion.div>

        {/* Controls Overlay */}
        <div className="absolute bottom-6 left-6 z-30 flex gap-4">
            <button 
                onClick={toggleMods}
                className={`px-8 py-3 font-tech font-bold uppercase -skew-x-12 transition-all duration-300 border border-neonYellow
                ${showMods ? 'bg-neonYellow text-black shadow-[0_0_20px_rgba(250,255,0,0.6)]' : 'bg-black/50 text-neonYellow hover:bg-neonYellow/20'}
                `}
            >
                <div className="skew-x-12 flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${showMods ? 'bg-black' : 'bg-neonYellow'}`} />
                    {showMods ? 'Mods Active' : 'Stock Mode'}
                </div>
            </button>
        </div>

        {/* Grid Overlay Effect */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      </div>
    </div>
  );
};

export default CarVisualizer;
