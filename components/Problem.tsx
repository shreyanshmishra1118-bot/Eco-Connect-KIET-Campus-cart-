
import React from 'react';

const Problem: React.FC = () => {
  const problems = [
    {
      title: 'Linear Consumption Cycle',
      description: 'Students often buy new items like textbooks, furniture, and electronics, only to discard them after a short period, creating significant waste and financial strain.'
    },
    {
      title: 'Underutilized Skills & Knowledge',
      description: 'A vast pool of student talent—from academic tutoring to creative skills—remains untapped, preventing valuable peer-to-peer knowledge sharing.'
    },
    {
      title: 'Inefficient Campus Logistics',
      description: 'Navigating campus can be a daily hassle. Inefficient transportation and resource access, like printing, waste time and contribute to a larger carbon footprint.'
    },
  ];

  return (
    <section id="challenge" className="py-20 md:py-28 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Challenge: Rethinking Campus Life</h2>
            <p className="text-lg text-slate-400 mb-10">
              While vibrant and full of potential, our campus ecosystem faces significant sustainability and efficiency hurdles. These challenges aren't just about environmental impact—they affect student finances, well-being, and the overall campus experience.
            </p>
            <div className="space-y-8">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-emerald-400 font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{problem.title}</h3>
                    <p className="text-slate-400 mt-1">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
            {/* Visual representation of problems */}
            <div className="absolute w-72 h-72 border-4 border-dashed border-slate-700 rounded-full animate-spin [animation-duration:20s]"></div>
            <div className="absolute w-48 h-48 border-4 border-dashed border-slate-700 rounded-full animate-spin [animation-duration:20s] [animation-direction:reverse]"></div>
            
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 bg-slate-800 p-4 rounded-lg shadow-lg">
              <p className="text-sm">📚 Discarded Books</p>
            </div>
            <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 bg-slate-800 p-4 rounded-lg shadow-lg">
              <p className="text-sm">💻 Unused Gadgets</p>
            </div>
            <div className="absolute bottom-1/4 left-1/3 -translate-x-1/2 translate-y-1/2 bg-slate-800 p-4 rounded-lg shadow-lg">
              <p className="text-sm">🕒 Wasted Time</p>
            </div>
             <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 bg-slate-800 p-4 rounded-lg shadow-lg">
              <p className="text-sm">📄 Paper Waste</p>
            </div>

            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-red-500/50 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-slate-500 mt-2">Inefficiency Loop</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
