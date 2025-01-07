import React from 'react';
import { Clock } from 'lucide-react';

const hours = [
  { day: "Mo - Fr", time: "9:00 - 20:00" },
  { day: "Samstag", time: "10:00 - 18:00" },
  { day: "Sonntag", time: "Geschlossen" }
];

export default function Mission() {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Wir geben unser Bestes, um Ihre Erwartungen zu übertreffen</h2>
            <p className="text-gray-600 mb-8">
              Unsere Mission ist es, außergewöhnliche Grooming-Dienstleistungen anzubieten, die das Selbstbewusstsein und den Stil unserer Kunden stärken. 
              Wir verbinden traditionelle Techniken der Barbierkunst mit modernen Trends, um für jeden Kunden einzigartige und personalisierte Erfahrungen zu schaffen. 
              Mit Leidenschaft, Präzision und einem Auge fürs Detail arbeiten wir daran, jeden Besuch zu einem besonderen Erlebnis zu machen.
            </p>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-orange-500" />
                Öffnungszeiten
              </h3>
              {hours.map((schedule, index) => (
                <div key={index} className="flex justify-between mb-2">
                  <span className="font-medium">{schedule.day}</span>
                  <span className="text-gray-600">{schedule.time}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Barbier bei der Arbeit" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
