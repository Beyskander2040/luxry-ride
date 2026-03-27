import { Logo } from './logo';
import { Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <Logo />
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Setting new standards in luxury transportation services across the United Arab Emirates.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#fleet" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Our Fleet
                </a>
              </li>
              <li>
                <a href="#business" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Business Overview
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-3 mb-4">
              <a 
                href="mailto: info@luxvipride.com"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 text-sm transition-colors"
              >
                <Mail size={16} />
                 info@luxvipride.com
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-slate-900 hover:bg-blue-600/20 border border-slate-800 hover:border-blue-500/50 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Linkedin size={18} className="text-gray-400 hover:text-blue-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-900 hover:bg-blue-600/20 border border-slate-800 hover:border-blue-500/50 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Twitter size={18} className="text-gray-400 hover:text-blue-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-900 hover:bg-blue-600/20 border border-slate-800 hover:border-blue-500/50 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Facebook size={18} className="text-gray-400 hover:text-blue-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} LuxVIP Ride Luxury Motor Vehicles Services L.L.C S.O.C. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
