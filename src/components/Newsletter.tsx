import React from 'react';

export default function Newsletter() {
  return (
    <section className="py-20 bg-orange-500">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-white mb-8">Get 10% Discount on your first visit!</p>
        <div className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full focus:outline-none"
            />
            <button className="bg-orange-900 text-white px-8 py-3 rounded-full hover:bg-orange-800 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}