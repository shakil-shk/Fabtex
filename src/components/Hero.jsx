import React, { useEffect, useState } from "react";
import HeroFabric from "../assets/pile-textiles-background.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${HeroFabric})` }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/40 to-black/60 animate-gradient-x"></div>
      
      {/* Floating fabric particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-float animate-pulse" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-white/15 rounded-full animate-float animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-white/25 rounded-full animate-float animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-white/20 rounded-full animate-float animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Content */}
      <div className="relative text-center px-4 z-10 text-white max-w-4xl mx-auto">
        {/* Welcome text with staggered animation */}
        <div className={`transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            Welcome to <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">FABTEX</span>
          </h1>
        </div>

        {/* GALLERY title with scale and glow effect */}
        <h2 className={`text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-widest transform transition-all duration-1000 delay-300 ease-out ${
          isVisible ? 'scale-100 opacity-100 translate-y-0 drop-shadow-2xl' : 'scale-90 opacity-0 translate-y-8'
        }`}>
          GALLERY
        </h2>

        {/* Subtitle with slide-up animation */}
        <p className={`text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed transform transition-all duration-1000 delay-500 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          Premium Fabric Sourcing Solutions Across Bangladesh
        </p>

        {/* Animated button */}
        <div className={`transform transition-all duration-1000 delay-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
        }`}>
          <Link to="/fabrics">
            <button className="group relative bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-purple-800 text-white font-semibold py-4 px-12 rounded-xl text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Explore Our Gallery
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-40 group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
