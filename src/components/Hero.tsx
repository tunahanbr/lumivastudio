import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          filter: 'brightness(0.65)'
        }}
      />
      
      <div className="relative max-w-[1440px] mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <span className="text-barber-400 font-semibold mb-4 block">SEIT 2013</span>
          <h1 className="text-6xl font-bold mb-6 leading-tight">Die Kunst des klassischen Friseurhandwerks</h1>
          <p className="text-xl mb-8 text-gray-200">Wo traditionelles Handwerk auf modernen Stil trifft. Unsere Meisterfriseure bringen Jahrzehnte an Erfahrung in jeden Haarschnitt ein und verbinden klassische Techniken perfekt mit modernen Trends.</p>
          <div className="flex gap-4">
            <button className="bg-barber-500 text-white px-8 py-3 rounded-full text-lg hover:bg-barber-600 transition-all transform hover:scale-105">
              Termin buchen
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-barber-900 transition-all">
              Unsere Dienstleistungen
            </button>
          </div>
          <div className="mt-12 flex gap-8">
            <div>
              <span className="text-4xl font-display font-bold">10+</span>
              <p className="text-sm text-gray-300">Jahre Erfahrung</p>
            </div>
            <div>
              <span className="text-4xl font-display font-bold">5k+</span>
              <p className="text-sm text-gray-300">Zufriedene Kunden</p>
            </div>
            <div>
              <span className="text-4xl font-display font-bold">15+</span>
              <p className="text-sm text-gray-300">Erfahrene Friseure</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
