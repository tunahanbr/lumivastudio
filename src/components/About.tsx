import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Barber tools" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-500 rounded-lg -z-10"></div>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Wir sind hier, um deinen Alltag zu verändern</h2>
          <p className="text-gray-600 mb-6">
            Unsere erfahrenen Friseure kombinieren traditionelle Techniken mit modernen Stilen, um dir den perfekten Look zu verleihen. 
            Mit über einem Jahrzehnt Erfahrung wissen wir, dass ein großartiger Haarschnitt mehr ist als nur ein Service – es ist ein Erlebnis. 
            Bei uns stehst du im Mittelpunkt, und wir legen besonderen Wert auf Präzision, Qualität und deinen individuellen Stil. 
            Ganz gleich, ob du einen klassischen Look oder etwas Trendiges möchtest – wir sind hier, um deine Erwartungen zu übertreffen.
          </p>
        </div>
      </div>
    </section>
  );
}
