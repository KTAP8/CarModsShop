import { useRef, useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { useGlobalAudio } from '../hooks/useGlobalAudio';

const ExhaustCard = () => {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { playClick } = useGlobalAudio();

  useEffect(() => {
    if (waveformRef.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: '#444444',
        progressColor: '#FF0033',
        cursorColor: 'transparent',
        barWidth: 3,
        barGap: 3,
        height: 60,
      });

      // Load dummy loopable engine sound
      wavesurfer.current.load('https://assets.mixkit.co/active_storage/sfx/2544/2544-preview.mp3');
      
      wavesurfer.current.on('finish', () => {
         wavesurfer.current?.play(); // Loop
      });
    }

    return () => {
      wavesurfer.current?.destroy();
    };
  }, []);

  const handleMouseEnter = () => {
    if (wavesurfer.current) {
      wavesurfer.current.setOptions({ waveColor: '#FF0033' });
      wavesurfer.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (wavesurfer.current) {
      wavesurfer.current.setOptions({ waveColor: '#444444' });
      wavesurfer.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div 
      className="group relative w-full md:w-96 bg-secondary/80 border border-white/10 p-6 overflow-hidden transition-all duration-300 hover:border-neonRed hover:shadow-[0_0_30px_rgba(255,0,51,0.2)]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute top-0 right-0 p-2 bg-neonRed text-black font-bold font-tech text-xs transform translate-x-4 -translate-y-2 rotate-12">
        POPULAR
      </div>

      <h3 className="text-2xl font-street text-white mb-2 group-hover:text-neonRed transition-colors">
        TITANIUM FULL RACE
      </h3>
      <p className="text-gray-400 font-tech text-sm mb-6">
        Full titanium exhaust system for maximum flow and aggressive sound.
      </p>

      {/* Waveform Container */}
      <div 
        ref={waveformRef} 
        className="w-full h-[60px] mb-6 opacity-80"
      />

      <div className="flex justify-between items-center mt-4">
        <span className="text-neonYellow font-tech text-xl">$1,250</span>
        <button 
          onClick={playClick}
          className="px-6 py-2 bg-white/10 text-white font-tech uppercase text-sm -skew-x-12 hover:bg-neonRed hover:text-black transition-colors duration-300"
        >
          <span className="block skew-x-12">Add to Cart</span>
        </button>
      </div>
      
      {/* Glitch Overlay on Hover */}
      <div className={`absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 bg-neonRed mix-blend-overlay transition-opacity duration-300 ${isPlaying ? 'animate-pulse' : ''}`} />
    </div>
  );
};

export default ExhaustCard;
