import { Users, Award, Headphones, Building2 } from 'lucide-react';

export function Operations() {
  const features = [
    {
      icon: Users,
      title: 'Professional Team',
      description: 'Experienced management team with deep expertise in transportation, operations, and customer service excellence.',
    },
    {
      icon: Award,
      title: 'Driver Training Programs',
      description: 'Comprehensive training initiatives covering customer service, safety protocols, vehicle operation, and local regulations.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock operational support ensuring seamless service delivery and immediate response to any situation.',
    },
    {
      icon: Building2,
      title: 'Organizational Structure',
      description: 'Clear hierarchical framework with defined responsibilities promoting efficiency, accountability, and professional growth.',
    },
  ];

  return (
    <section id="operations" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Operations & Management
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Operational excellence through systematic processes and professional management
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-6" />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex gap-6 p-8 bg-slate-950/50 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Image Section */}
        <div className="mt-16 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc3NDUwNjY0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Professional team"
            className="w-full h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
