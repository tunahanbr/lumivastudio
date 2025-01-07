import React from 'react';

const services = [
  {
    category: 'Haarschnitte',
    items: [
      { name: 'Klassischer Herrenhaarschnitt', price: 29 },
      { name: 'Fade / Übergang', price: 35 },
      { name: 'Maschinenschnitt', price: 25 },
      { name: 'Waschen & Stylen', price: 10 }
    ]
  },
  {
    category: 'Bartpflege',
    items: [
      { name: 'Barttrimmen', price: 15 },
      { name: 'Bartkontur', price: 12 },
      { name: 'Luxusrasur', price: 35 },
      { name: 'Bartfärbung', price: 25 }
    ]
  },
  {
    category: 'Extras',
    items: [
      { name: 'Augenbrauenpflege', price: 8 },
      { name: 'Kopfmassage', price: 15 },
      { name: 'Gesichtsmaske', price: 20 },
      { name: 'Komplettpaket', price: 75 }
    ]
  }
];

export default function Pricing() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-barber-500 font-semibold mb-4 block">PREISE</span>
          <h2 className="text-4xl font-bold mt-6 relative inline-block">
          Unsere Leistungen
            <span className="absolute w-16 h-[3px] bg-orange-500 bottom-[-8px] left-1/2 transform -translate-x-1/2"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-display font-bold mb-6 text-center">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-800">{item.name}</span>
                    <span className="font-semibold text-barber-500">€{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-barber-500 text-white px-8 py-4 rounded-lg">
            <p className="text-lg font-semibold">Komplettpaket nur €75!</p>
            <p className="text-sm">Beinhaltet Haarschnitt, Bartpflege und alle Extras</p>
          </div>
        </div>
      </div>
    </section>
  );
}
