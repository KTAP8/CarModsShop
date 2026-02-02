import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
      {/* Video Background Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute inset-0 w-full h-full object-cover"
        // Using a placeholder racing video or abstract dynamic background
        src="https://assets.mixkit.co/videos/preview/mixkit-racing-car-on-a-track-4074-large.mp4"
      />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-street tracking-wider text-white drop-shadow-[0_0_15px_rgba(255,0,51,0.8)]"
        >
          ADRENALINE <span className="text-neonRed drop-shadow-[0_0_20px_rgba(255,0,51,1)]">ZONE</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 text-xl md:text-2xl text-neonYellow tracking-widest font-tech uppercase"
        >
          Tune. Race. Dominate.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(255, 0, 51)" }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-neonRed/20 border-2 border-neonRed text-neonRed font-bold text-lg uppercase clip-path-slant hover:bg-neonRed hover:text-white transition-all duration-300 backdrop-blur-sm"
          style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
        >
          Start Engine
        </motion.button>
      </div>

      {/* Glitch Overlay Effect (Optional CSS/Canvas) */}
      <div className="absolute inset-0 pointer-events-none z-30 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
    </div>
  );
};

export default HeroSection;
