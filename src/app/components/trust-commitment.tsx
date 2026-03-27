import { CheckCircle2, Smartphone, BarChart3, Star } from 'lucide-react';

export function TrustCommitment() {
  const commitments = [
    {
      icon: CheckCircle2,
      title: 'Service Level Agreements',
      description: 'Binding commitments to response times, service quality, and customer satisfaction metrics with transparent reporting.',
    },
    {
      icon: Smartphone,
      title: 'Digital Platform Integration',
      description: 'Seamless integration with leading ride-hailing platforms and corporate transportation management systems.',
    },
    {
      icon: BarChart3,
      title: 'High Operational Standards',
      description: 'Continuous monitoring and improvement of operational KPIs to maintain excellence in all service dimensions.',
    },
    {
      icon: Star,
      title: 'Excellence Guarantee',
      description: 'Unwavering commitment to exceeding expectations through attention to detail and proactive service delivery.',
    },
  ];

  return (
    <section id="trust" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Trust & Commitment
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building lasting partnerships through reliability, transparency, and exceptional service
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-6" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {commitments.map((item, index) => {
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

        {/* Background Image */}
        <div className="mt-16 rounded-2xl overflow-hidden relative h-80">
          <img
            src="https://images.unsplash.com/photo-1726533765275-a69cfd7f9897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMGNpdHlzY2FwZSUyMGJ1c2luZXNzJTIwZGlzdHJpY3R8ZW58MXx8fHwxNzc0NTM0NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Dubai cityscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent flex items-center">
            <div className="px-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Your Trusted Partner in the UAE
              </h3>
              <p className="text-lg text-gray-300 max-w-xl">
                Committed to excellence, innovation, and sustainable growth in the region's transportation sector
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
