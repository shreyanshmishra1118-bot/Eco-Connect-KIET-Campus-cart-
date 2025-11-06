
import React from 'react';

const ProgressCircle: React.FC<{ percentage: number; label: string; description: string }> = ({ percentage, label, description }) => {
    const sqSize = 160;
    const strokeWidth = 12;
    const radius = (sqSize - strokeWidth) / 2;
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - dashArray * percentage / 100;

    return (
        <div className="flex flex-col items-center text-center">
            <svg width={sqSize} height={sqSize} viewBox={viewBox}>
                <circle
                    className="fill-transparent stroke-slate-700"
                    cx={sqSize / 2}
                    cy={sqSize / 2}
                    r={radius}
                    strokeWidth={`${strokeWidth}px`} />
                <circle
                    className="fill-transparent stroke-emerald-400 transition-all duration-1000"
                    cx={sqSize / 2}
                    cy={sqSize / 2}
                    r={radius}
                    strokeLinecap="round"
                    strokeWidth={`${strokeWidth}px`}
                    transform={`rotate(-90 ${sqSize/2} ${sqSize/2})`}
                    style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }} />
                <text
                    className="fill-white text-4xl font-bold"
                    x="50%"
                    y="50%"
                    dy=".3em"
                    textAnchor="middle">
                    {`${percentage}%`}
                </text>
            </svg>
            <h3 className="text-xl font-bold text-white mt-4">{label}</h3>
            <p className="text-slate-400 max-w-xs">{description}</p>
        </div>
    );
};

const ImpactDashboard: React.FC = () => {
  return (
    <section id="impact" className="py-20 md:py-28 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Environmental Impact & Sustainability</h2>
          <p className="text-lg text-slate-400 mt-4">Every feature is designed with sustainability in mind. We track and display real-time impact metrics so every user can see how their participation contributes to campus-wide goals.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
            <ProgressCircle percentage={75} label="Waste Reduction Goal" description="Target decrease in campus item disposal." />
            <ProgressCircle percentage={60} label="Emission Reduction" description="Projected CO₂ savings from e-cart adoption." />
            <ProgressCircle percentage={50} label="Paper Conservation" description="Reduction through double-sided printing." />
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard;