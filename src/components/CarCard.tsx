import { Car } from '../data';

export default function CarCard({ car, onClick }: { car: Car; onClick: (id: number) => void }) {
  return (
    <div 
      className="group cursor-pointer bg-[var(--color-obsidian)] border border-[var(--color-base)]/10 transition-all duration-500 ease-out hover:border-[var(--color-champagne)]/50"
      onClick={() => onClick(car.id)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={car.images[0]} 
          alt={`${car.year} ${car.make} ${car.model}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-[var(--color-obsidian)]/80 backdrop-blur-md text-[var(--color-champagne)] text-[10px] tracking-widest uppercase px-3 py-1 font-medium border border-[var(--color-base)]/10">
          {car.year}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif justify-between text-2xl font-light italic text-[var(--color-base)] group-hover:text-[var(--color-champagne)] transition-colors">
          {car.make} {car.model}
        </h3>
        <div className="flex justify-between items-end mt-4 pt-4 border-t border-[var(--color-base)]/10">
          <div>
            <p className="font-mono text-[10px] text-[var(--color-slate)]/80 uppercase tracking-widest mb-1">Price</p>
            <p className="text-lg font-light text-[var(--color-base)]">Ksh {car.price.toLocaleString()}</p>
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] text-[var(--color-slate)]/80 uppercase tracking-widest mb-1">Mileage</p>
            <p className="font-light text-[var(--color-base)]">{car.mileage.toLocaleString()} mi</p>
          </div>
        </div>
        <div className="mt-6 flex gap-2">
          <button className="flex-1 py-3 border border-[var(--color-base)]/20 text-[var(--color-base)] text-[11px] font-bold uppercase tracking-[0.2em] group-hover:border-[var(--color-champagne)] group-hover:text-[var(--color-champagne)] transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
