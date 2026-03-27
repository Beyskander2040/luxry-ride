import { Mail, User, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Connect with us to explore partnership opportunities and investment prospects
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="p-8 bg-slate-950/50 border border-slate-800 rounded-2xl">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <User size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Contact Person</div>
                    <div className="text-white font-semibold">MOHAMMED BENSOLTANE</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Email</div>
                    <a 
                      href="mailto:info@luxvipride.com"
                      className="text-white font-semibold hover:text-blue-400 transition-colors"
                    >
                      info@luxvipride.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Location</div>
                    <div className="text-white font-semibold">United Arab Emirates</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-blue-600/20 to-blue-500/20 border border-blue-500/30 rounded-2xl">
              <h4 className="text-xl font-semibold text-white mb-3">
                Investment Opportunities
              </h4>
              <p className="text-gray-300">
                We welcome discussions with investors, government authorities, and business partners 
                interested in the UAE's growing transportation sector.
              </p>
            </div>
          </div>

          {/* Company Details */}
          <div className="p-8 bg-slate-950/50 border border-slate-800 rounded-2xl">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Company Details
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="text-sm text-gray-400 mb-2">Legal Name</div>
                <div className="text-white font-semibold text-lg">
                  LuxVIP Ride Luxury Motor Vehicles Services L.L.C S.O.C
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-400 mb-2">Registered Capital</div>
                <div className="text-white font-semibold text-lg">
                  3,000,000 AED
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-400 mb-2">Business Type</div>
                <div className="text-white font-semibold">
                  Luxury Transportation Services
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-400 mb-2">Current Fleet</div>
                <div className="text-white font-semibold">
                  20 Premium Vehicles
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-400 mb-2">Service Area</div>
                <div className="text-white font-semibold">
                  United Arab Emirates
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <div className="text-sm text-gray-400 mb-2">Interested In</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                    Partnerships
                  </span>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                    Investment
                  </span>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                    Collaboration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
