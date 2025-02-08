import React, { useEffect, useState } from 'react';
import { Heart, Flower, Sparkles, Stars } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [showRose, setShowRose] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-100 via-pink-200 to-purple-200 flex items-center justify-center p-4 overflow-hidden">
      {/* Glitter container */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <Stars className="text-fuchsia-300 animate-pulse" size={Math.random() * 10 + 10} />
          </div>
        ))}
      </div>

      {/* Growing Rose */}
      {showRose && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="relative">
            <button 
              onClick={() => setShowRose(false)}
              className="absolute -top-20 right-0 text-white hover:text-pink-200 transition-colors"
            >
              Close
            </button>
            <div className="rose-container">
              <div className="rose-bloom"></div>
              <div className="petal-container">
                {[...Array(24)].map((_, i) => (
                  <div 
                    key={i} 
                    className="petal" 
                    style={{ 
                      '--rotation': `${i * 15}deg`,
                      transform: `rotate(${i * 15}deg)`,
                      animationDelay: `${i * 0.1}s`
                    } as React.CSSProperties}
                  ></div>
                ))}
              </div>
              <div className="stem">
                <div className="leaf leaf-right"></div>
                <div className="leaf leaf-left"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={`max-w-md w-full transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border-2 border-pink-200">
          {/* Animated roses */}
          <div className="absolute -top-6 -left-6 text-fuchsia-500 animate-spin-slow">
            <Flower size={48} className="transform -rotate-45" />
          </div>
          <div className="absolute -top-6 -right-6 text-fuchsia-500 animate-spin-slow">
            <Flower size={48} className="transform rotate-45" />
          </div>
          
          {/* Main content */}
          <div className="pt-12 px-8 pb-8">
            <div className="text-center">
              <h1 className={`text-4xl font-bold text-fuchsia-600 mb-2 font-serif transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                Happy Rose Day
              </h1>
              <div className={`flex justify-center items-center gap-2 mb-6 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                <Sparkles className="text-fuchsia-400 animate-sparkle" />
                <span className="text-lg text-fuchsia-500 font-semibold">My Love</span>
                <Sparkles className="text-fuchsia-400 animate-sparkle" />
              </div>
            </div>

            {/* Photo Frame */}
            <div className={`relative mb-6 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-pink-300 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400"
                  alt="Your Love"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4">
                <Flower size={32} className="text-pink-400 animate-floating" />
              </div>
              <div className="absolute -bottom-4 -left-4">
                <Flower size={32} className="text-pink-400 animate-floating" />
              </div>
            </div>

            {/* Show Rose Button */}
            <button
              onClick={() => setShowRose(true)}
              className="w-full py-3 px-6 mb-6 bg-gradient-to-r from-pink-400 to-fuchsia-500 text-white rounded-lg shadow-lg hover:from-pink-500 hover:to-fuchsia-600 transform hover:scale-105 transition-all duration-300 font-semibold"
            >
              🌹 Some Roses For You
            </button>

            {/* Message */}
            <div className={`text-center space-y-4 transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <p className="text-xl font-medium text-fuchsia-700 italic bg-pink-50/50 py-3 px-4 rounded-lg shadow-inner">
                "Forget Batman, Superman...
                <br />
                Because I am Your Man"
              </p>
              
              <div className="flex justify-center items-center gap-2 mt-4">
                <Heart className="text-pink-500 animate-bounce" size={24} />
                <Heart className="text-fuchsia-600 animate-bounce animation-delay-200" size={28} />
                <Heart className="text-pink-500 animate-bounce animation-delay-400" size={24} />
              </div>
            </div>
          </div>

          {/* Bottom animated roses */}
          <div className="absolute -bottom-6 -left-6 text-fuchsia-500 animate-spin-slow">
            <Flower size={48} className="transform rotate-45" />
          </div>
          <div className="absolute -bottom-6 -right-6 text-fuchsia-500 animate-spin-slow">
            <Flower size={48} className="transform -rotate-45" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;