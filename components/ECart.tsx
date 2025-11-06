import React from 'react';
import { CalendarDaysIcon, TicketIcon, FileCheckIcon, TruckIcon } from './icons';

const ServiceItem: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 text-emerald-400 mt-1">{icon}</div>
        <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-slate-400">{description}</p>
        </div>
    </div>
);

const ECart: React.FC = () => {
  return (
    <section id="e-cart" className="py-20 md:py-28 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Innovative Campus Services</h2>
                <p className="text-lg text-slate-400 mb-10">Beyond the marketplace, Eco-Connect provides essential services that transform daily campus life, from eliminating long walks to providing sustainable printing on demand.</p>
                <div className="space-y-8">
                    <ServiceItem icon={<CalendarDaysIcon className="w-7 h-7"/>} title="E-Cart Scheduling" description="Reserve rides in advance or book on-demand based on real-time vehicle availability."/>
                    <ServiceItem icon={<TicketIcon className="w-7 h-7"/>} title="Membership Plans" description="Daily, weekly, or semester passes with discounted rates for frequent riders."/>
                    <ServiceItem icon={<FileCheckIcon className="w-7 h-7"/>} title="Smart Printing" description="Default double-sided on 100% recycled paper with digital queue management."/>
                    <ServiceItem icon={<TruckIcon className="w-7 h-7"/>} title="Campus Delivery" description="Photocopy orders delivered to your specified campus location within hours."/>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="h-60 bg-slate-800 rounded-lg flex items-center justify-center p-4">
                    <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
                        <path d="M 20 70 L 80 70 L 90 50 L 70 30 L 30 30 L 10 50 Z" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                        <rect x="15" y="32" width="70" height="3" fill="#475569"/>
                        <line x1="40" y1="30" x2="40" y2="20" stroke="#475569" strokeWidth="2" />
                        <line x1="60" y1="30" x2="60" y2="20" stroke="#475569" strokeWidth="2" />
                        <rect x="35" y="15" width="30" height="5" rx="2" fill="#475569" />
                        <circle cx="30" cy="75" r="8" fill="#334155" stroke="#94a3b8" strokeWidth="2"/>
                        <circle cx="70" cy="75" r="8" fill="#334155" stroke="#94a3b8" strokeWidth="2"/>
                        <path d="M 20 50 H 80" stroke="#34d399" strokeWidth="2" strokeDasharray="4 2" />
                        <path d="M 50 30 V 50 H 35 L 30 65" fill="none" stroke="#475569" strokeWidth="2" />
                        <path d="M 50 50 H 65 L 70 65" fill="none" stroke="#475569" strokeWidth="2" />
                    </svg>
                </div>
                <div className="h-60 bg-slate-800 rounded-lg flex items-center justify-center p-4 mt-8">
                    <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
                        <rect x="20" y="40" width="60" height="40" rx="5" fill="#334155" stroke="#475569" strokeWidth="2"/>
                        <rect x="15" y="30" width="70" height="10" rx="3" fill="#475569"/>
                        <rect x="25" y="20" width="50" height="10" rx="3" fill="#475569"/>
                        <rect x="30" y="45" width="40" height="20" fill="#1e293b"/>
                        <rect x="35" y="50" width="30" height="10" fill="#0f172a"/>
                        <rect x="25" y="70" width="50" height="5" rx="2.5" fill="#1e293b"/>
                        <path d="M 20 80 H 80" stroke="#e2e8f0" strokeWidth="2" />
                        <path d="M 15 85 L 85 85 L 80 95 L 20 95 Z" fill="#e2e8f0" />
                        <g transform="translate(70, 25) scale(0.15)">
                            <path d="M30 15 C15 25, 15 45, 30 55 C45 45, 45 25, 30 15 Z M30 25 C35 35, 35 45, 30 50" fill="#34d399" />
                        </g>
                    </svg>
                </div>
                <div className="h-60 bg-slate-800 rounded-lg flex items-center justify-center col-span-2 p-4">
                    <svg viewBox="0 0 200 100" className="w-full h-full" aria-hidden="true">
                        <path d="M 0 90 H 200" stroke="#475569" strokeWidth="2" />
                        <rect x="140" y="30" width="60" height="60" fill="#1e293b" />
                        <rect x="150" y="50" width="10" height="15" fill="#334155" />
                        <rect x="170" y="50" width="10" height="15" fill="#334155" />
                        <g transform="translate(60, 60)">
                            <circle cx="0" cy="-10" r="5" fill="#38bdf8" />
                            <path d="M -7 0 L 7 0 L 5 25 L -5 25 Z" fill="#38bdf8" />
                            <rect x="10" y="5" width="15" height="10" fill="#e2e8f0" rx="2" />
                            <line x1="10" y1="10" x2="25" y2="10" stroke="#34d399" strokeWidth="1.5" />
                        </g>
                        <g transform="translate(120, 60)">
                            <circle cx="0" cy="-10" r="5" fill="#34d399" />
                            <path d="M -7 0 L 7 0 L 5 25 L -5 25 Z" fill="#34d399" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ECart;