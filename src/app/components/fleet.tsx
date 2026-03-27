import { Car } from 'lucide-react';

export function Fleet() {
  const vehicles = [
    {
      name: 'BYD SEAL 7',
      count: 10,
      image: 'https://images.unsplash.com/photo-1760435107985-40b6872c8c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCWUQlMjBTRUFMJTIwZWxlY3RyaWMlMjBzZWRhbiUyMGx1eHVyeXxlbnwxfHx8fDE3NzQ1MzQ0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Premium electric sedan',
    },
    {
      name: 'Toyota Highlander',
      count: 5,
      image: 'https://images.unsplash.com/photo-1642635852887-05a76551216a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3lvdGElMjBIaWdobGFuZGVyJTIwU1VWJTIwc2lsdmVyfGVufDF8fHx8MTc3NDUzNDQ5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Luxury SUV comfort',
    },
    {
      name: 'Tesla Model 3',
      count: 5,
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUZXNsYSUyME1vZGVsJTIwMyUyMHdoaXRlJTIwcHJlbWl1bXxlbnwxfHx8fDE3NzQ1MzQ0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Electric innovation',
    },
  ];

  return (
    <section id="fleet" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Premium Fleet
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A carefully curated selection of luxury vehicles designed for comfort, safety, and style
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-6" />
        </div>

        {/* Fleet Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="group bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Vehicle Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Count Badge */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-blue-600/90 backdrop-blur-sm rounded-full">
                  <div className="flex items-center gap-2">
                    <Car size={16} className="text-white" />
                    <span className="text-white font-semibold">{vehicle.count} Vehicles</span>
                  </div>
                </div>
              </div>

              {/* Vehicle Info */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {vehicle.name}
                </h3>
                <p className="text-gray-400">
                  {vehicle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Total Count */}
        <div className="mt-12 text-center">
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600/20 to-blue-500/20 border border-blue-500/30 rounded-2xl">
            <p className="text-3xl font-bold text-white">
              Total Fleet: <span className="text-blue-400">20 Vehicles</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
