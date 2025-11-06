import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(to_bottom,white_0%,transparent_100%)]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Building a <span className="text-emerald-400">Sustainable Future</span> Together
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl mx-auto md:mx-0">
              Eco-Connect KIET is a movement toward a greener, more connected campus community where every transaction, ride, and interaction contributes to a sustainable future.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#services" className="bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/30">
                Explore Services
              </a>
              <a href="#" className="bg-slate-700 text-slate-200 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Join Now
              </a>
            </div>
          </div>
          <div className="relative w-full h-80 md:h-96">
            <div className="absolute inset-0 bg-slate-800 rounded-3xl transform -rotate-6 transition hover:rotate-0 duration-500"></div>
            <div className="absolute inset-0 bg-slate-700 rounded-3xl flex items-center justify-center p-8 shadow-2xl">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                        <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#1e293b" />
                            <stop offset="100%" stopColor="#0f172a" />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
                            <feFlood floodColor="#34d399" floodOpacity="0.5" result="flood" />
                            <feComposite in="flood" in2="blur" operator="in" result="glow" />
                            <feMerge>
                                <feMergeNode in="glow" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    
                    {/* Background circuit */}
                    <path d="M 50,50 Q 100,20 150,50 M 50,150 Q 100,180 150,150 M 50,50 V 150 M 150,50 V 150 M 20,100 H 180" stroke="#334155" strokeWidth="1" fill="none" />
                    <circle cx="50" cy="50" r="3" fill="#38bdf8" />
                    <circle cx="150" cy="50" r="3" fill="#38bdf8" />
                    <circle cx="50" cy="150" r="3" fill="#38bdf8" />
                    <circle cx="150" cy="150" r="3" fill="#38bdf8" />
                    <circle cx="100" cy="100" r="3" fill="#38bdf8" />

                    {/* Central Shield */}
                    <g transform="translate(70, 65)">
                        <path d="M30 0 L60 10 L60 40 C60 60 30 70 30 70 C30 70 0 60 0 40 L0 10 Z" fill="url(#shield-gradient)" stroke="#475569" strokeWidth="2" filter="url(#glow)"/>
                        {/* Leaf inside shield */}
                        <path d="M30 15 C15 25, 15 45, 30 55 C45 45, 45 25, 30 15 Z M30 25 C35 35, 35 45, 30 50" fill="#34d399" />
                    </g>

                    {/* Service Icons */}
                    {/* Marketplace Icon */}
                    <g transform="translate(40, 40)">
                        <circle r="12" fill="#1e293b" stroke="#475569"/>
                        <path d="M -6 -5 L -4.5 2 L 4.5 2 L 6 -3 H -4" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                        <circle cx="-3" cy="5" r="1" stroke="white" strokeWidth="1" fill="none" />
                        <circle cx="3" cy="5" r="1" stroke="white" strokeWidth="1" fill="none" />
                    </g>
                    {/* E-Cart Icon */}
                    <g transform="translate(160, 40)">
                        <circle r="12" fill="#1e293b" stroke="#475569"/>
                        <rect x="-5" y="-5" width="10" height="6" rx="1" fill="none" stroke="white" strokeWidth="1.5" />
                        <circle cx="-3" cy="4" r="1.5" stroke="white" strokeWidth="1" fill="none" />
                        <circle cx="3" cy="4" r="1.5" stroke="white" strokeWidth="1" fill="none" />
                    </g>
                    {/* Skills Icon */}
                    <g transform="translate(40, 160)">
                        <circle r="12" fill="#1e293b" stroke="#475569"/>
                        <path d="M-5 -2 l 4 4 l -4 4 M 0 -2 l 4 4 l -4 4" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    {/* Photocopy Icon */}
                    <g transform="translate(160, 160)">
                        <circle r="12" fill="#1e293b" stroke="#475569"/>
                        <path d="M-5 -6 h10 v12 h-10z M-8 -3 h16" fill="none" stroke="white" strokeWidth="1.5"/>
                        <rect x="-3" y="-4" width="6" height="3" fill="white"/>
                    </g>
                </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
