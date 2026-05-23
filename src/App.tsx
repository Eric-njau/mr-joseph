import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Inventory from './views/Inventory';
import VehicleDetail from './views/VehicleDetail';
import Contact from './views/Contact';
import Financing from './views/Financing';
import gsap from 'gsap';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCar, setSelectedCar] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeView, setActiveView] = useState('home');

  const handleSetView = (view: string) => {
    if (view === currentView) return;
    setIsTransitioning(true);
    gsap.to('.main-content-area', { 
      opacity: 0, 
      y: 10,
      duration: 0.3, 
      ease: 'power2.inOut',
      onComplete: () => {
        setCurrentView(view);
        setActiveView(view);
        if (view !== 'vehicle') setSelectedCar(null);
        gsap.fromTo('.main-content-area', 
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
        );
        setIsTransitioning(false);
      }
    });
  };

  return (
    <div className="min-h-screen bg-[var(--color-obsidian)] text-[var(--color-base)] font-sans relative">
      <div className="noise-overlay" />
      
      <Navbar currentView={activeView} setView={handleSetView} />

      <main className="main-content-area w-full">
        {currentView === 'home' && <Home setView={handleSetView} setSelectedCar={setSelectedCar} />}
        {currentView === 'inventory' && <Inventory setView={handleSetView} setSelectedCar={setSelectedCar} />}
        {currentView === 'vehicle' && selectedCar && <VehicleDetail id={selectedCar} setView={handleSetView} />}
        {currentView === 'contact' && <Contact />}
        {currentView === 'financing' && <Financing setView={handleSetView} />}
      </main>

      {currentView !== 'home' && <Footer setView={handleSetView} />}
      {currentView === 'home' && <Footer setView={handleSetView} />}
    </div>
  );
}
