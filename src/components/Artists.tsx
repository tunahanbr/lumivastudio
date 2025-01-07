import React from 'react';

const artists = [
  {
    name: "Michael Stone",
    role: "Master-Barbier",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Robert Morgan",
    role: "Stilexperte",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Sarah Copperfield",
    role: "Haarspezialistin",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Artists() {
  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Lernen Sie unsere Künstler kennen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <img 
                src={artist.image} 
                alt={`Foto von ${artist.name}`} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{artist.name}</h3>
                <p className="text-orange-500 font-medium">{artist.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
