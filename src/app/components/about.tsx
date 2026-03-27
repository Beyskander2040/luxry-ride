import { Eye, Target, Award } from 'lucide-react';

export function About() {
  const items = [
    {
      icon: Eye,
      title: 'Vision',
      description: 'To become the leading luxury transportation provider in the UAE, recognized for exceptional service quality, innovation, and commitment to excellence in every journey.',
    },
    {
      icon: Target,
      title: 'Mission',
      description: 'To deliver premium transportation solutions that exceed expectations through state-of-the-art vehicles, professional drivers, and unwavering dedication to customer satisfaction and safety.',
    },
    {
      icon: Award,
      title: 'Values',
      description: 'Excellence, Reliability, Professionalism, Innovation, and Safety are the core principles that guide every decision and interaction at LuxVIP Ride.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About Our Company
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto" />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-blue-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
