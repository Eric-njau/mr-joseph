import { useState, useEffect } from 'react';
import { useInventory, Car } from '../data';
import CarCard from '../components/CarCard';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import gsap from 'gsap';

export default function Inventory({ setView, setSelectedCar, initialFilter = 'All' }: { setView: (v: string) => void, setSelectedCar: (id: number | string) => void, initialFilter?: string }) {
  const INVENTORY = useInventory();
  const [filter, setFilter] = useState(initialFilter);
  const [sort, setSort] = useState('newest');

  useEffect(() => {
    setFilter(initialFilter);
  }, [initialFilter]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.fromTo('.inv-header', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
      gsap.fromTo('.inv-card', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.2 });
    });
    return () => ctx.revert();
  }, []);

  const types = ['All', 'Kenya', 'Incoming', 'Sedan', 'SUV', 'Coupe', 'GT'];

  let filteredCars = INVENTORY.filter(c => filter === 'All' || c.type === filter || (c.status === filter));
  
  // Sorting logic
  if (sort === 'price-low') filteredCars.sort((a, b) => a.price - b.price);
  if (sort === 'price-high') filteredCars.sort((a, b) => b.price - a.price);
  if (sort === 'mileage-low') filteredCars.sort((a, b) => a.mileage - b.mileage);
  if (sort === 'newest') filteredCars.sort((a, b) => b.year - a.year);

  return (
    <div className="min-h-screen pt-40 px-6 pb-24 max-w-7xl mx-auto w-full">
      <div className="inv-header flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div>
           <h1 className="font-serif italic text-5xl md:text-6xl text-[var(--color-base)] mb-4">The Collection</h1>
           <p className="font-medium text-[var(--color-slate)]/70 max-w-md">Our current inventory of exceptional motorcars, available for immediate acquisition.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          {/* Virtual Filters */}
          <div className="flex items-center gap-2 bg-transparent px-4 py-3 border border-[var(--color-base)]/20">
            <SlidersHorizontal size={18} className="text-[var(--color-champagne)]" />
            <select 
              className="bg-[var(--color-obsidian)] text-sm font-medium outline-none text-[var(--color-base)]"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {types.map(t => <option key={t} value={t}>{t} Models</option>)}
            </select>
          </div>

          {/* Virtual Sort */}
          <div className="flex items-center gap-2 bg-transparent px-4 py-3 border border-[var(--color-base)]/20">
            <span className="text-sm font-medium text-[var(--color-slate)]">Sort by:</span>
            <select 
              className="bg-[var(--color-obsidian)] text-sm font-medium outline-none text-[var(--color-base)]"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="newest">Newest Arrivals</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="mileage-low">Mileage: Low to High</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCars.map((car) => (
          <div key={car.id} className="inv-card">
             <CarCard car={car} onClick={(id) => { setSelectedCar(id); setView('vehicle'); }} />
          </div>
        ))}
      </div>

      {filteredCars.length === 0 && (
        <div className="text-center py-24">
           <p className="text-lg text-[var(--color-slate)]/60 font-medium">No vehicles found matching your criteria.</p>
           <button onClick={() => setFilter('All')} className="mt-4 text-[var(--color-champagne)] font-medium hover:underline">Clear Filters</button>
        </div>
      )}
    </div>
  );
}
