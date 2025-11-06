
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'The Challenge', href: '#challenge' },
    { name: 'Features', href: '#features' },
    { name: 'Impact', href: '#impact' },
  ];

  return (
    <header className="bg-slate-900/70 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold font-montserrat text-slate-100">
            <a href="#home">
              <span className="text-emerald-400">Eco</span>-
              <span className="text-sky-400">Connect</span> KIET
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 font-medium">
                {link.name}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 font-medium">Login</a>
            <a href="#" className="bg-emerald-500 text-white px-5 py-2 rounded-lg hover:bg-emerald-600 transition-colors duration-300 font-semibold shadow-lg shadow-emerald-500/20">
              Get Started
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-200 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 bg-slate-800 rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 font-medium text-center py-2" onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              ))}
              <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 font-medium text-center py-2">Login</a>
              <a href="#" className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors duration-300 font-semibold shadow-md text-center">
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;