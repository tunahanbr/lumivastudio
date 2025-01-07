import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import Mission from './components/Mission';
import Artists from './components/Artists';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Mission />
        <Artists />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}

export default App;