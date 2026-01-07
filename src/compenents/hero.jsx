import React, { useState, useRef } from 'react';
export default function Hero(){
  const [Index, setIndex] = useState(0);
  const audioRef = useRef(null);
  const images = [
    { 
      id: 0, 
      src: "https://i.pinimg.com/736x/dd/f8/b9/ddf8b92f8d5b297311bd0b9ba18a632c.jpg", 
      bg: "https://i.pinimg.com/736x/dd/f8/b9/ddf8b92f8d5b297311bd0b9ba18a632c.jpg",
      location: "Taghazout",
      title: "Taghazout Bay"
    },
    { 
      id: 1, 
      src: "https://i.pinimg.com/736x/4f/20/8a/4f208a572529f0b68ef3b909ddd7ed63.jpg", 
      bg: "https://wallpapercave.com/wp/wp11052825.jpg",
      location: "Agadir City",
      title: "Agadir Night"
    },
    {
      id: 2, 
      src: "https://i.pinimg.com/736x/1e/b0/80/1eb0809bd99d30180428a90fb6e6a2d3.jpg", 
      bg: "https://i.pinimg.com/736x/1e/b0/80/1eb0809bd99d30180428a90fb6e6a2d3.jpg",
      location: "Souk Lhed",
      title: "Traditional Market"
    },
    { 
        id: 3, 
        src: "https://media-cdn.tripadvisor.com/media/photo-s/24/a1/0a/10/entree-principale.jpg", 
      bg: "https://media-cdn.tripadvisor.com/media/photo-s/24/a1/0a/10/entree-principale.jpg",
      location: "Drarga City",
      title: "Agadir Night"
    },
    { 
        id: 4   , 
        src: "https://cdn.guidedusurfeur.com/wp-content/uploads/2023/02/taghazout-by-night-cta.jpg?strip=all&lossy=1&ssl=1", 
      bg: "https://cdn.guidedusurfeur.com/wp-content/uploads/2023/02/taghazout-by-night-cta.jpg?strip=all&lossy=1&ssl=1",
      location: "Imsouane",
      title: "Agadir Night"
    },
];
  const handleExplore = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; 
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(err => console.log(err));
    }
  };
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-black font-sans">
      <audio ref={audioRef} src="https://www.myinstants.com/media/sounds/merhba-biiiik.mp3" />
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out scale-110"
        style={{ backgroundImage: `url('${images[Index].bg}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent"></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        <div className="text-white space-y-8">
          <div className="flex items-center gap-2 text-blue-400 font-medium tracking-widest uppercase text-xs">
            <span className="w-8 h-[1px] bg-blue-400"></span>
            Discover Morocco
          </div>
          <h1 className="text-7xl md:text-8xl font-black leading-[0.85] tracking-tighter italic uppercase">
            <span className="block text-white drop-shadow-2xl">Things to do</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.7)]">
              in {images[Index].location}
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-md leading-relaxed border-l-2 border-blue-500/50 pl-6">
            Immerse yourself in the golden coast of {images[Index].location}. Handpicked stays and curated adventures for the ultimate escape.
          </p>
          <button 
            onClick={handleExplore}
            className="group relative px-10 py-4 overflow-hidden rounded-full bg-white text-black font-extrabold transition-all hover:bg-blue-50"
          >
            <span className="relative z-10 flex items-center gap-2">
              MERHBA BIIK <span className="rotate-[-45deg] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">→</span>
            </span>
          </button>
        </div>
        <div className="relative h-[500px] flex items-center justify-center">
          <div className="relative w-full h-full flex items-center">
            {images.map((img, index) => {
              let position = index - Index;
              if (position < 0) position += images.length;
              return (
                <div
                  key={img.id}
                  className={`absolute w-72 h-[420px] rounded-[2.5rem] overflow-hidden border-2 tra nsition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-2xl ${
                    index === Index 
                    ? 'z-20 opacity-100 scale-105 border-blue-400/50 rotate-3' 
                    : 'z-10 opacity-20 scale-90 blur-md border-white/5 -rotate-3'
                  }`}
                  style={{ 
                    transform: `translateX(${position * 340}px)`,
                    display: position > 1 ? 'none' : 'block'
                  }}
                >
                  <img src={img.src} alt={img.location} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <p className="text-xs text-blue-300 font-bold uppercase tracking-widest mb-1">Location</p>
                    <p className="text-2xl font-black text-white tracking-tight italic uppercase">{img.location}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button 
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 z-30 w-16 h-16 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all hover:scale-110 active:scale-95"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};