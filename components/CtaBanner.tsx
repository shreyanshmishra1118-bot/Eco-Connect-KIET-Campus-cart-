
import React from 'react';

const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="relative bg-slate-800 rounded-2xl p-10 md:p-16 text-center overflow-hidden">
         <div className="absolute inset-0 bg-grid-slate-700/40 [mask-image:linear-gradient(to_bottom,white_0%,transparent_70%)]"></div>
          <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join the Campus Sustainability Movement</h2>
              <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">Be a part of the change. Create your account today to start buying, selling, learning, and contributing to a greener campus.</p>
              <a href="#" className="bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/30">
                Create Your Account
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;