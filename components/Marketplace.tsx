import React from 'react';

const FeatureList: React.FC<{title: string, items: string[]}> = ({ title, items }) => (
    <div className="bg-slate-800 p-8 rounded-lg">
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <ul className="space-y-2">
            {items.map(item => (
                <li key={item} className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">&#10003;</span>
                    <span className="text-slate-400">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const Marketplace: React.FC = () => {
    const productCategories = ['Academic textbooks and course materials', 'Electronics: laptops, tablets, accessories', 'Clothing and fashion items', 'Dorm furniture and appliances'];
    const listingProcess = ['Upload photos directly from your phone', 'Add detailed descriptions and pricing', 'Set availability and contact methods', 'Edit or remove listings anytime'];
    const skillCategories = ['Academic tutoring across all subjects', 'Music lessons: guitar, piano, vocals', 'Programming and tech skills', 'Cooking, art, fitness, and creative skills'];
    const paymentModels = ['Direct monetary transactions', 'Skill-for-skill barter system', 'Club membership fee options', 'Package deals for regular sessions'];

  return (
    <section id="marketplace" className="py-20 md:py-28 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Product & Skill Marketplace</h2>
          <p className="text-lg text-slate-400 mt-4">The heart of Eco-Connect is our vibrant marketplace where students can buy, sell, and exchange everything they need for campus life, from textbooks to tutoring.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <FeatureList title="Diverse Product Categories" items={productCategories} />
            <FeatureList title="Simple Listing Process" items={listingProcess} />
            <FeatureList title="Rich Skill Categories" items={skillCategories} />
            <FeatureList title="Flexible Payment Models" items={paymentModels} />
        </div>
        <div className="h-80 w-full bg-slate-800 rounded-2xl flex items-center justify-center p-8 overflow-hidden">
            <svg viewBox="0 0 400 200" className="w-full h-full" aria-hidden="true">
                <defs>
                    <linearGradient id="marketplace-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1e293b" />
                        <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                </defs>
                <rect width="400" height="200" rx="16" fill="url(#marketplace-bg)" />
                
                {/* Abstract background elements */}
                <path d="M 0 150 C 100 200, 200 100, 400 150" stroke="#334155" strokeWidth="2" fill="none" opacity="0.5" />
                <circle cx="50" cy="50" r="30" stroke="#334155" strokeWidth="1" fill="none" />
                <circle cx="350" cy="80" r="40" stroke="#334155" strokeWidth="1" fill="none" />

                {/* Student 1 (left) */}
                <g transform="translate(80, 80)">
                    <circle cx="0" cy="-20" r="10" fill="#38bdf8" />
                    <path d="M -15 0 L 15 0 L 10 50 L -10 50 Z" fill="#38bdf8" />
                </g>
                
                {/* Student 2 (right) */}
                <g transform="translate(200, 80)">
                    <circle cx="0" cy="-20" r="10" fill="#34d399" />
                    <path d="M -15 0 L 15 0 L 10 50 L -10 50 Z" fill="#34d399" />
                </g>
                
                {/* Exchanged Item (Book) */}
                <g transform="translate(140, 90)">
                    <rect x="-15" y="-10" width="30" height="20" fill="#e2e8f0" rx="2"/>
                    <rect x="-13" y="-8" width="26" height="4" fill="#475569" />
                    <path d="M -13 -2 H 13 M -13 2 H 13 M -13 6 H 13" stroke="#475569" strokeWidth="1" />
                </g>
                
                {/* Floating Icons */}
                {/* Laptop */}
                <g transform="translate(300, 120)">
                    <rect x="-20" y="-10" width="40" height="25" rx="3" fill="#475569" stroke="#94a3b8" />
                    <rect x="-25" y="15" width="50" height="4" rx="2" fill="#475569" stroke="#94a3b8" />
                    <rect x="-15" y="-5" width="30" height="15" fill="#1e293b"/>
                </g>
                
                {/* Phone */}
                <g transform="translate(40, 150)">
                    <rect x="-8" y="-15" width="16" height="30" rx="3" fill="#475569" stroke="#94a3b8"/>
                    <rect x="-6" y="-13" width="12" height="26" fill="#1e293b"/>
                </g>
            </svg>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;