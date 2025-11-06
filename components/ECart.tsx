
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

const CampusServices: React.FC = () => {
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
            <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800 rounded-lg p-6 flex flex-col items-center justify-center text-center col-span-2">
                     <svg viewBox="0 0 100 50" className="w-2/3 h-auto" aria-hidden="true">
                        <path d="M10 45 Q 50 0, 90 45" stroke="#334155" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                        <path d="M 20 70 L 80 70 L 90 50 L 70 30 L 30 30 L 10 50 Z" fill="#1e293b" stroke="#475569" strokeWidth="1" transform="translate(-5, -5) scale(0.6)" />
                        <circle cx="15" cy="45" r="3" fill="#38bdf8"/>
                        <text x="15" y="42" fill="#e2e8f0" fontSize="5" textAnchor="middle">Hostel</text>
                        <circle cx="85" cy="45" r="3" fill="#38bdf8"/>
                        <text x="85" y="42" fill="#e2e8f0" fontSize="5" textAnchor="middle">Library</text>
                        <circle cx="50" cy="18" r="3" fill="#34d399"/>
                        <text x="50" y="15" fill="#e2e8f0" fontSize="5" textAnchor="middle">Academics</text>
                    </svg>
                    <h3 className="text-lg font-bold text-white mt-4">Campus E-Cart Network</h3>
                    <p className="text-slate-400 text-sm">Connecting all major campus locations.</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                    <FileCheckIcon className="w-12 h-12 text-emerald-400 mb-4"/>
                    <h3 className="text-lg font-bold text-white">Upload Document</h3>
                    <p className="text-slate-400 text-sm">PDF, DOCX</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                    <TruckIcon className="w-12 h-12 text-emerald-400 mb-4"/>
                    <h3 className="text-lg font-bold text-white">Campus Delivery</h3>
                    <p className="text-slate-400 text-sm">To your location</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CampusServices;
