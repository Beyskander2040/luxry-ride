import logo from "@/assets/logo.png";
export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      
      {/* Logo container */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 p-2 rounded-xl shadow-lg">
        <img 
          src={logo} 
          alt="LuxVIP Ride Logo"
          className="h-17 w-auto object-contain"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col leading-tight">
        <span className="text-lg font-semibold tracking-wide text-white">
          LuxVIP <span className="text-blue-400">Ride</span>
        </span>
        <span className="text-xs text-gray-400 tracking-wider uppercase">
          Luxury Motor Vehicles
        </span>
      </div>

    </div>
  );
}