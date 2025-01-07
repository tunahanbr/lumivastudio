import React from 'react';
import { Phone, Mail, MapPin, Clock, Scissors } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-orange-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Scissors className="w-8 h-8 text-orange-500" />
              <span className="ml-2 text-2xl font-bold">METT</span>
            </div>
            <p className="text-gray-300">
              Premium Barber-Dienstleistungen für den modernen Gentleman.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Schnellzugriffe</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-orange-500">Startseite</a></li>
              <li><a href="#about" className="hover:text-orange-500">Über uns</a></li>
              <li><a href="#services" className="hover:text-orange-500">Dienstleistungen</a></li>
              <li><a href="#contact" className="hover:text-orange-500">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Öffnungszeiten</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Mo - Fr: 9:00 - 20:00 Uhr
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Samstag: 10:00 - 18:00 Uhr
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Sonntag: Geschlossen
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Kontaktinformation</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +43 123 456789
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                info@mettbarber.com
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                123 Barber Street, NY 10001
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-orange-800">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} METT Barber Shop. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
