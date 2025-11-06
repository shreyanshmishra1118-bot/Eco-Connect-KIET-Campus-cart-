
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solutions from './components/Solutions';
import Marketplace from './components/Marketplace';
import SkillSharing from './components/SkillSharing';
import ECart from './components/ECart';
import ImpactDashboard from './components/ImpactDashboard';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Problem />
        <SkillSharing />
        <Marketplace />
        <ECart />
        <ImpactDashboard />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
};

export default App;