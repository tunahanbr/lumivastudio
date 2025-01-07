import React from 'react';
import { Scissors, SwatchBook, UserPlus, Shield } from 'lucide-react';

const services = [
  {
    icon: <Scissors className="w-12 h-12" />,
    title: 'Premium-Haarschnitte',
    description: 'Perfekte Haarschnitte, abgestimmt auf deine Gesichtsform und deinen Stil. Unsere Meisterfriseure sorgen für Präzision und Perfektion – von klassisch bis modern.',
    features: ['Individuelle Beratung', 'Präzisionsschnitt', 'Styling', 'Hot-Towel-Service']
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'Bartpflege',
    description: 'Professionelle Bartpflege und Styling für einen makellosen Look. Wir formen und pflegen deinen Bart mit größter Sorgfalt und Detailgenauigkeit.',
    features: ['Barttrimmen', 'Rasur mit geradem Rasiermesser', 'Bartöl-Behandlung', 'Formgebung']
  },
  {
    icon: <SwatchBook className="w-12 h-12" />,
    title: 'Farbservices',
    description: 'Hochwertige Haarfärbungen, Grauabdeckung und Highlights, die dein Aussehen verbessern – mit den besten Produkten für natürliche Ergebnisse.',
    features: ['Farbberatung', 'Grauabdeckung', 'Highlights', 'Toner-Anwendung']
  },
  {
    icon: <UserPlus className="w-12 h-12" />,
    title: 'Luxus-Behandlungen',
    description: 'Gönn dir unsere exklusiven Pflegebehandlungen, die traditionelles Handwerk mit modernem Luxus kombinieren – für ultimative Entspannung.',
    features: ['Kopfhautbehandlung', 'Gesichtsmassage', 'Hot-Towel-Service', 'Premium-Produkte']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-barber-500 font-semibold mb-4 block">UNSERE SERVICES</span>
          <h2 className="text-4xl font-bold mt-6 relative inline-block">
            Meisterliches Handwerk
            <span className="absolute w-16 h-[3px] bg-orange-500 bottom-[-8px] left-1/2 transform -translate-x-1/2"></span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {services.map((service, index) => (
            <div key={index} className="group p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-barber-200">
              <div className="text-barber-500 flex justify-center mb-6 transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-semibold mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-barber-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
