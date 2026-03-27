import { TrendingUp, Calendar, Target } from 'lucide-react';

export function ExpansionPlan() {
  const phases = [
    {
      phase: 'Phase 1',
      period: 'Q1 2026',
      fleet: '20 Vehicles',
      status: 'Current',
      description: 'Initial fleet deployment with core operations in Dubai',
    },
    {
      phase: 'Phase 2',
      period: 'Q3 2026',
      fleet: '75 Vehicles',
      status: 'Planned',
      description: 'Expansion to Abu Dhabi and Sharjah markets',
    },
    {
      phase: 'Phase 3',
      period: 'Q1 2027',
      fleet: '150 Vehicles',
      status: 'Planned',
      description: 'Regional coverage across major Emirates',
    },
    {
      phase: 'Phase 4',
      period: 'Q4 2027',
      fleet: '250 Vehicles',
      status: 'Target',
      description: 'Comprehensive UAE network establishment',
    },
    {
      phase: 'Phase 5',
      period: 'Q4 2028',
      fleet: '500 Vehicles',
      status: 'Goal',
      description: 'Market leadership position and service excellence',
    },
  ];

  return (
    <section id="expansion" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Strategic Expansion Plan
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ambitious growth trajectory from 20 to 500 vehicles over 3 years
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-6" />
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-slate-950/50 border border-slate-800 rounded-xl text-center">
            <TrendingUp size={32} className="text-blue-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">25x</div>
            <div className="text-gray-400">Growth Multiplier</div>
          </div>
          <div className="p-6 bg-slate-950/50 border border-slate-800 rounded-xl text-center">
            <Calendar size={32} className="text-blue-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">3 Years</div>
            <div className="text-gray-400">Timeline</div>
          </div>
          <div className="p-6 bg-slate-950/50 border border-slate-800 rounded-xl text-center">
            <Target size={32} className="text-blue-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">500</div>
            <div className="text-gray-400">Target Fleet Size</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 hidden md:block" />

          {/* Phases */}
          <div className="space-y-8">
            {phases.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-0 w-16 h-16 bg-slate-900 border-4 border-blue-500 rounded-full flex items-center justify-center hidden md:flex">
                  <span className="text-blue-400 font-bold">{index + 1}</span>
                </div>

                {/* Content */}
                <div className="md:ml-24 p-6 bg-slate-950/50 border border-slate-800 rounded-xl hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <h3 className="text-2xl font-bold text-white">{item.phase}</h3>
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium">
                      {item.status}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mb-3">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Period</div>
                      <div className="text-white font-semibold">{item.period}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Fleet Size</div>
                      <div className="text-white font-semibold">{item.fleet}</div>
                    </div>
                  </div>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
