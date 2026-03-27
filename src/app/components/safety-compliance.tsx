import { ShieldCheck, Wrench, FileCheck, Globe } from 'lucide-react';

export function SafetyCompliance() {
  const items = [
    {
      icon: ShieldCheck,
      title: 'Certified Drivers',
      description: 'All drivers undergo rigorous background checks, licensing verification, and continuous professional certification to ensure passenger safety.',
    },
    {
      icon: Wrench,
      title: 'Vehicle Maintenance',
      description: 'Systematic preventive maintenance schedules and regular inspections ensure optimal vehicle condition and reliability at all times.',
    },
    {
      icon: FileCheck,
      title: 'UAE Compliance',
      description: 'Full adherence to all UAE transportation regulations, licensing requirements, and operational standards set by local authorities.',
    },
    {
      icon: Globe,
      title: 'System Integration',
      description: 'Ready to integrate with leading digital platforms and transportation management systems for seamless operations and tracking.',
    },
  ];

  return (
    <section id="safety" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Safety & Compliance
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Unwavering commitment to safety standards and regulatory excellence
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-6" />
        </div>

        {/* Items Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} className="text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
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
