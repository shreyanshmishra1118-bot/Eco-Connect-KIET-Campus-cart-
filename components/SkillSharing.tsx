
import React from 'react';
import { UserCircleIcon, UploadCloudIcon, ShieldCheckIcon, LayoutDashboardIcon, SmartphoneIcon, BellIcon } from './icons';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; number: string; }> = ({ icon, title, description, number }) => (
    <div className="relative bg-slate-800 p-8 rounded-lg overflow-hidden h-full">
        <div className="absolute top-6 right-6 text-5xl font-bold text-slate-700">{number}</div>
        <div className="relative z-10">
            <div className="text-emerald-400 mb-4">{icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-400">{description}</p>
        </div>
    </div>
);

const Features: React.FC = () => {
    const features = [
        { icon: <UserCircleIcon className="w-8 h-8"/>, title: 'User Registration & Profiles', description: 'Quick sign-up with KIET credentials and customizable student profiles.', number: '01' },
        { icon: <UploadCloudIcon className="w-8 h-8"/>, title: 'Easy Listing System', description: 'Simple forms for products and skills with photo uploads and descriptions.', number: '02' },
        { icon: <ShieldCheckIcon className="w-8 h-8"/>, title: 'Secure Payments', description: 'Integrated wallet system with multiple payment options and transaction security.', number: '03' },
        { icon: <LayoutDashboardIcon className="w-8 h-8"/>, title: 'Personal Dashboard', description: 'Track orders, bookings, earnings, and your environmental impact metrics.', number: '04' },
        { icon: <SmartphoneIcon className="w-8 h-8"/>, title: 'Responsive Design', description: 'Optimized experience across desktop, tablet, and mobile devices.', number: '05' },
        { icon: <BellIcon className="w-8 h-8"/>, title: 'Real-Time Notifications', description: 'Instant alerts for bookings, deliveries, messages, and service updates.', number: '06' },
    ];
  return (
    <section id="features" className="py-20 md:py-28 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="w-full h-96 lg:h-[500px] flex items-center justify-center [perspective:1000px]">
                <div className="w-full h-full bg-slate-800/50 rounded-2xl p-4 sm:p-6 shadow-2xl transition-transform duration-500 transform hover:rotate-x-0 hover:rotate-y-0 hover:scale-100 rotate-x-12 -rotate-y-12 -rotate-z-6 scale-90">
                    <svg viewBox="0 0 400 300" className="w-full h-full">
                        <rect x="0" y="0" width="400" height="300" rx="16" fill="#1e293b" stroke="#334155" />

                        {/* Sidebar */}
                        <rect x="0" y="0" width="60" height="300" rx="16" ry="0" fill="#0f172a" />
                        <g transform="translate(22, 22)">
                            <path d="M16 4 C8 10, 8 20, 16 26 C24 20, 24 10, 16 4 Z M16 10 C19 15, 19 21, 16 24" fill="#34d399" transform="scale(0.5)" />
                        </g>
                        <rect x="20" y="70" width="20" height="20" rx="4" fill="#334155" />
                        <rect x="20" y="110" width="20" height="20" rx="4" fill="#34d399" />
                        <rect x="20" y="150" width="20" height="20" rx="4" fill="#334155" />
                        <rect x="20" y="250" width="20" height="20" rx="4" fill="#334155" />

                        {/* Main content area */}
                        <text x="80" y="35" fill="#e2e8f0" fontSize="14" fontFamily="Inter, sans-serif" fontWeight="bold">Dashboard</text>
                        <rect x="240" y="20" width="100" height="20" rx="10" fill="#334155" />
                        <circle cx="370" cy="30" r="12" fill="#334155" />

                        {/* Content cards */}
                        <rect x="80" y="70" width="140" height="80" rx="8" fill="#334155" />
                        <text x="90" y="90" fill="#94a3b8" fontSize="10" fontFamily="Inter, sans-serif">Items Sold</text>
                        <text x="90" y="120" fill="#ffffff" fontSize="24" fontWeight="bold" fontFamily="Inter, sans-serif">12</text>
                        
                        <rect x="240" y="70" width="140" height="80" rx="8" fill="#334155" />
                        <text x="250" y="90" fill="#94a3b8" fontSize="10" fontFamily="Inter, sans-serif">Earnings</text>
                        <text x="250" y="120" fill="#ffffff" fontSize="24" fontWeight="bold" fontFamily="Inter, sans-serif">$85</text>
                        
                        {/* Chart section */}
                        <rect x="80" y="170" width="300" height="110" rx="8" fill="#334155" />
                        <text x="90" y="185" fill="#e2e8f0" fontSize="12" fontWeight="bold" fontFamily="Inter, sans-serif">Impact Growth</text>
                        <path d="M 100 260 L 150 220 L 200 240 L 250 200 L 300 210 L 350 190" stroke="#34d399" strokeWidth="2" fill="none" />
                        <line x1="100" y1="260" x2="350" y2="260" stroke="#475569" strokeWidth="1" />
                        <line x1="100" y1="220" x2="350" y2="220" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
                    </svg>
                </div>
            </div>
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Powerful Platform Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {features.map(f => <FeatureCard key={f.number} {...f} />)}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
