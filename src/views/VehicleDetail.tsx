import { useEffect } from 'react';
import { useInventory } from '../data';
import { ArrowLeft, Check, Gauge, Calendar, ShieldCheck, MapPin } from 'lucide-react';
import gsap from 'gsap';

export default function VehicleDetail({ id, setView }: { id: number | string, setView: (v: string) => void }) {
  const INVENTORY = useInventory();
  const car = INVENTORY.find(c => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.fromTo('.vd-img', { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: 'power3.out' });
      gsap.fromTo('.vd-text', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out', delay: 0.3 });
    });
    return () => ctx.revert();
  }, [id]);

  if (!car) return <div className="pt-40 text-center">Vehicle not found.</div>;

  return (
    <div className="min-h-screen pt-32 px-6 pb-24 max-w-7xl mx-auto w-full">
      <button 
        onClick={() => setView('inventory')}
        className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-[var(--color-slate)]/70 hover:text-[var(--color-obsidian)] transition-colors mb-10"
      >
        <ArrowLeft size={16} /> Back to Collection
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Gallery */}
        <div className="vd-img">
          <div className="aspect-[4/3] bg-[var(--color-chrome)] border border-[var(--color-base)]/10">
             <img src={car.images?.[0] || car.image} alt={car.model} className="w-full h-full object-cover" />
          </div>
          {car.images && car.images.length > 1 && (
            <div className="grid grid-cols-3 gap-4 mt-4">
               {car.images.slice(1, 4).map((img, i) => (
                 <div key={i} className="aspect-video bg-[var(--color-chrome)] opacity-60 hover:opacity-100 transition-opacity cursor-pointer border border-[var(--color-base)]/10">
                   <img src={img} alt={car.model} className="w-full h-full object-cover" />
                 </div>
               ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <p className="vd-text font-mono text-xs text-[var(--color-slate)]/60 uppercase tracking-widest mb-4">Stock #MJ-{car.id.toString().substring(0,6)}</p>
          <h1 className="vd-text font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-base)] italic font-light mb-2">
            {car.year} {car.make}
          </h1>
          <h2 className="vd-text font-sans text-2xl md:text-3xl text-[var(--color-slate)] font-light mb-4">{car.model}</h2>
          
          {car.spec && (
             <p className="vd-text text-[var(--color-champagne)] font-medium text-lg mb-4">{car.spec}</p>
          )}

          <div className="vd-text flex items-end gap-6 mb-12">
            {car.price ? (
              <>
                <p className="text-4xl text-[var(--color-champagne)] font-serif italic">Ksh {car.price.toLocaleString()}</p>
                <p className="text-lg text-[var(--color-slate)] font-medium mb-1 line-through">Ksh {(car.price * 1.05).toLocaleString()}</p>
              </>
            ) : (
                <p className="text-4xl text-[var(--color-champagne)] font-serif italic">POA</p>
            )}
          </div>

          <div className="vd-text grid grid-cols-3 gap-6 mb-12 border-y border-[var(--color-base)]/10 py-8">
            <div className="flex flex-col items-center justify-center text-center">
               <Calendar className="text-[var(--color-champagne)] mb-3" size={24} />
               <p className="font-mono text-xs text-[var(--color-slate)]/60 uppercase tracking-widest mb-1">Year</p>
               <p className="font-medium text-[var(--color-base)]">{car.year}</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center border-l border-r border-[var(--color-base)]/10 px-2">
               <Gauge className="text-[var(--color-champagne)] mb-3" size={24} />
               <p className="font-mono text-xs text-[var(--color-slate)]/60 uppercase tracking-widest mb-1">Mileage</p>
               <p className="font-medium text-[var(--color-base)]">{car.mileage ? car.mileage.toLocaleString() : 'N/A'}</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-2">
               {car.location ? (
                 <>
                   <MapPin className="text-[var(--color-champagne)] mb-3" size={24} />
                   <p className="font-mono text-xs text-[var(--color-slate)]/60 uppercase tracking-widest mb-1">Location</p>
                   <p className="font-medium text-[var(--color-base)]">{car.location}</p>
                 </>
               ) : (
                 <>
                   <ShieldCheck className="text-[var(--color-champagne)] mb-3" size={24} />
                   <p className="font-mono text-xs text-[var(--color-slate)]/60 uppercase tracking-widest mb-1">Condition</p>
                   <p className="font-medium text-[var(--color-base)]">Pristine</p>
                 </>
               )}
            </div>
          </div>

          <p className="vd-text text-[var(--color-slate)] leading-relaxed font-medium mb-10">
             {car.description}
          </p>

          <div className="vd-text mb-12">
            <h3 className="font-serif text-2xl mb-6">Premium Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {car.features.map(f => (
                <li key={f} className="flex items-center gap-3 text-[var(--color-slate)] font-medium">
                  <div className="w-5 h-5 rounded-full bg-[var(--color-champagne)]/20 flex items-center justify-center">
                    <Check size={12} className="text-[var(--color-champagne)]" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="vd-text flex flex-col sm:flex-row gap-4 mt-8">
            <button 
              onClick={() => setView('contact')}
              className="flex-1 px-8 py-4 bg-[var(--color-champagne)] border border-[var(--color-champagne)] text-[var(--color-obsidian)] text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-transparent hover:text-[var(--color-champagne)] text-center"
            >
              Request Viewing
            </button>
            <button 
              onClick={() => setView('financing')}
              className="flex-1 px-8 py-4 border border-[var(--color-base)]/30 text-[var(--color-base)] text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:border-[var(--color-champagne)] hover:text-[var(--color-champagne)] text-center"
            >
              Calculate Finance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
