
import React from 'react';
import { RecycleIcon, HandshakeIcon, VanIcon, PrinterIcon } from './icons';

interface SolutionItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SolutionItem: React.FC<SolutionItemProps> = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-emerald-400">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-slate-400 mt-1">{description}</p>
    </div>
  </div>
);

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: <RecycleIcon className="w-6 h-6" />,
      title: 'Product Resale',
      description: 'Marketplace for books, electronics, and furniture—giving items a second life and reducing waste.',
    },
    {
      icon: <HandshakeIcon className="w-6 h-6" />,
      title: 'Skill Sharing',
      description: 'Peer-to-peer platform connecting students for tutoring, music lessons, coding workshops, and more.',
    },
    {
      icon: <VanIcon className="w-6 h-6" />,
      title: 'E-Cart Transport',
      description: 'Electric vehicle fleet providing convenient, eco-friendly campus mobility with flexible memberships.',
    },
    {
      icon: <PrinterIcon className="w-6 h-6" />,
      title: 'Eco Photocopy Service',
      description: 'Sustainable printing using recycled paper, with convenient digital ordering and campus delivery.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Comprehensive Solution</h2>
          <p className="text-lg text-slate-400 mt-4">Eco-Connect integrates four powerful components into one seamless digital platform, creating an ecosystem where sustainability meets convenience.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            {solutions.map((s, i) => (
              <SolutionItem key={i} {...s} />
            ))}
          </div>
          <div className="relative flex items-center justify-center h-96">
              <div className="absolute w-80 h-80 bg-emerald-500/10 rounded-full animate-pulse"></div>
              <div className="absolute w-60 h-60 bg-sky-500/10 rounded-full animate-pulse delay-1000"></div>
              <div className="relative w-96 h-96 flex items-center justify-center">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 p-4 bg-slate-800 rounded-full shadow-lg"><RecycleIcon className="w-8 h-8 text-emerald-400"/></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 p-4 bg-slate-800 rounded-full shadow-lg"><VanIcon className="w-8 h-8 text-emerald-400"/></div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-4 bg-slate-800 rounded-full shadow-lg"><HandshakeIcon className="w-8 h-8 text-emerald-400"/></div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-4 bg-slate-800 rounded-full shadow-lg"><PrinterIcon className="w-8 h-8 text-emerald-400"/></div>
                  <div className="w-40 h-40 bg-slate-800 rounded-full flex items-center justify-center">
                    <div className="text-center">
                        <span className="font-bold text-xl text-emerald-400">Eco</span>
                        <span className="font-bold text-xl text-sky-400">-Connect</span>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;