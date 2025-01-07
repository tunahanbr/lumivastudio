import React from 'react';
import { Phone, Mail, Clock, Scissors } from 'lucide-react';

export default function Header() {
  return (
    <header>
      <div className="bg-orange-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>info@mettbarber.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>+43 123 456789</span>
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>10 Jahre Erfahrung</span>
          </div>
        </div>
      </div>
      
      <nav className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <Scissors className="w-8 h-8 text-orange-500" />
            <span className="ml-2 text-2xl font-bold">METT</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="hover:text-orange-500">Startseite</a>
            <a href="#about" className="hover:text-orange-500">Über uns</a>
            <a href="#services" className="hover:text-orange-500">Dienstleistungen</a>
            <a href="#mission" className="hover:text-orange-500">Unsere Mission</a>
            <a href="#contact" className="hover:text-orange-500">Kontakt</a>
          </div>
          
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
            Termin buchen
          </button>
        </div>
      </nav>
    </header>
  );
}
