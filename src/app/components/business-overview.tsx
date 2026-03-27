import { Briefcase, DollarSign, Users, TrendingUp, Shield, GraduationCap } from 'lucide-react';

export function BusinessOverview() {
  const sections = [
    {
      icon: Briefcase,
      title: 'Operational Model',
      description: 'Strategic taxi service operations optimized for efficiency, customer satisfaction, and market demand in key UAE locations.',
    },
    {
      icon: DollarSign,
      title: 'Financial Planning',
      description: 'Comprehensive budget management with clear allocation for vehicle acquisition, operations, maintenance, and sustainable growth.',
    },
    {
      icon: Users,
      title: 'HR Strategy',
      description: 'Robust organizational structure with defined roles, responsibilities, and professional development pathways for all team members.',
    },
    {
      icon: TrendingUp,
      title: 'Fleet Acquisition',
      description: 'Phased vehicle procurement strategy ensuring optimal fleet composition aligned with market demands and service excellence.',
    },
    {
      icon: Shield,
      title: 'Insurance Strategy',
      description: 'Comprehensive coverage plans protecting assets, drivers, and passengers while ensuring regulatory compliance across all operations.',
    },
    {
      icon: GraduationCap,
      title: 'Driver Training',
      description: 'Structured recruitment and continuous training programs ensuring professional service delivery and adherence to safety standards.',
    },
  ];

  return (
    <section id="business" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Business Overview
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Strategic framework driving operational excellence and sustainable growth
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-6" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className="text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {section.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
