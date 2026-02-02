import { motion, type Variants } from 'framer-motion';
import { useGlobalAudio } from '../hooks/useGlobalAudio';

const Hero = () => {
  const { playClick } = useGlobalAudio();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const letterAnim: Variants = {
    hidden: { y: 100, opacity: 0, scale: 2 },
    show: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", damping: 10, stiffness: 100 }
    },
  };

  const text = "UNLEASH YOUR BEAST";

  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
      {/* Video Background with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 z-10" />
        <video 
          autoPlay 
          loop 
          muted 
          className="w-full h-full object-cover opacity-60"
          src="https://assets.mixkit.co/videos/preview/mixkit-racing-car-on-a-track-4074-large.mp4"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-wrap justify-center overflow-hidden"
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterAnim}
              className={`text-6xl md:text-9xl font-street text-white drop-shadow-[0_0_15px_rgba(255,0,51,0.5)] ${char === " " ? "mr-4" : ""}`}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-6 text-xl md:text-2xl text-neonYellow font-tech tracking-widest uppercase mb-12"
        >
          Street Racing meets Cyberpunk
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          whileHover={{ scale: 1.05, backgroundColor: "#FF0033", color: "#FFF" }}
          whileTap={{ scale: 0.95 }}
          onClick={playClick}
          className="px-10 py-4 bg-transparent border-2 border-neonRed text-neonRed font-tech font-bold text-lg uppercase -skew-x-12 hover:shadow-[0_0_30px_rgba(255,0,51,0.6)] transition-all duration-300"
        >
          <span className="block skew-x-12">Enter Garage</span>
        </motion.button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 z-20 hidden md:block">
        <div className="text-gray-500 font-tech text-xs">COORDS: 13.7563° N, 100.5018° E</div>
        <div className="text-neonRed font-tech text-sm">AZC ORIGINAL // BKK</div>
      </div>
    </div>
  );
};

export default Hero;
