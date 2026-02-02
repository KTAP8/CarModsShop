import { useGlobalAudio } from '../hooks/useGlobalAudio';

const products = [
  { name: 'GREDDY TURBO KIT', price: '$2,800' },
  { name: 'HKS SUPER BOV', price: '$350' },
];

const ShoppableVideo = () => {
  const { playClick } = useGlobalAudio();

  return (
    <div className="w-full max-w-5xl mx-auto my-20 px-4">
       <div className="mb-8 flex items-end justify-between border-b border-white/20 pb-4">
          <h2 className="text-4xl font-street text-neonYellow animate-glitch">
            NA JAEM // GARAGE LIFE
          </h2>
          <span className="text-gray-500 font-tech text-sm hidden md:block">EP. 402 - R35 GTR BUILD</span>
       </div>

      <div className="relative border-4 border-neonYellow bg-black p-1 shadow-[0_0_50px_rgba(250,255,0,0.1)]">
        {/* Warning Tape Border */}
        <div className="absolute -top-3 -left-3 w-16 h-16 bg-[repeating-linear-gradient(45deg,#FAFF00,#FAFF00_10px,#000_10px,#000_20px)] z-20 shadow-lg" />
        <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-[repeating-linear-gradient(45deg,#FAFF00,#FAFF00_10px,#000_10px,#000_20px)] z-20 shadow-lg" />

        {/* Video Embed */}
        <div className="aspect-video w-full bg-black relative">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?mute=1" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>
      </div>

      {/* Quick Buy Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {products.map((product, idx) => (
          <div key={idx} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 hover:border-neonYellow transition-colors group">
            <div>
              <div className="text-neonYellow text-xs font-tech mb-1">FEATURED ITEM</div>
              <div className="text-white font-bold font-sans">{product.name}</div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-white font-tech">{product.price}</span>
              <button 
                onClick={playClick}
                className="w-10 h-10 flex items-center justify-center bg-transparent border border-gray-500 text-neonYellow -skew-x-12 hover:bg-neonYellow hover:text-black hover:border-neonYellow transition-all"
              >
                <span className="skew-x-12">+</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppableVideo;
