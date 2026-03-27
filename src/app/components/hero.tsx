import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1747176367536-c9cf668a5390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBEdWJhaSUyMHNreWxpbmUlMjBuaWdodHxlbnwxfHx8fDE3NzQ1MzQ0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Capital Badge */}
          {/* <div className="inline-block">
            <div className="px-6 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full">
              <span className="text-blue-300 text-sm font-medium tracking-wide">
                Capital: 3,000,000 AED
              </span>
            </div>
          </div> */}

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block text-white mb-2">
              Luxury Transportation
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent">
              Solutions in the UAE
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
            Setting new standards in premium, reliable, and professional transportation services 
            for the United Arab Emirates
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:scale-105"
            >
              Discover Our Company
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
}
