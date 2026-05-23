import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import gsap from 'gsap';

export default function Financing({ setView }: { setView: (v: string) => void }) {
  const [price, setPrice] = useState(15000000);
  const [downPayment, setDownPayment] = useState(3000000);
  const [tradeIn, setTradeIn] = useState(0);
  const [term, setTerm] = useState(60);
  const [rate, setRate] = useState(5.5);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.fromTo('.fin-card', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out' });
    });
    return () => ctx.revert();
  }, []);

  const principal = price - downPayment - tradeIn;
  const monthlyRate = (rate / 100) / 12;
  const monthlyPayment = principal > 0 
    ? (principal * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1)
    : 0;

  return (
    <div className="min-h-screen pt-32 px-6 pb-24 max-w-7xl mx-auto w-full">
      <button 
        onClick={() => setView('inventory')}
        className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-[var(--color-slate)]/70 hover:text-[var(--color-obsidian)] hover:text-white transition-colors mb-10 fin-card"
      >
        <ArrowLeft size={16} /> Back to Collection
      </button>

      <div className="max-w-3xl mx-auto text-center mb-16 fin-card">
         <p className="font-mono text-xs text-[var(--color-champagne)] uppercase tracking-widest mb-4">Financial Services</p>
         <h1 className="font-serif italic text-5xl md:text-6xl text-[var(--color-base)] mb-6">Structured Acquisition.</h1>
         <p className="font-light text-[var(--color-slate)] text-lg">
           We offer bespoke financing solutions tailored to your portfolio. Estimate your monthly commitment below or speak to our advisors for custom structures.
         </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
        
        {/* Calculator Form */}
        <div className="lg:col-span-7 bg-[var(--color-chrome)]/20 p-8 md:p-12 border border-[var(--color-base)]/10 fin-card">
          <h3 className="font-sans font-semibold text-xl mb-8 text-[var(--color-base)]">Finance Calculator</h3>
          
          <div className="space-y-8">
            <div>
               <div className="flex justify-between mb-2">
                 <label className="font-mono text-[10px] text-[var(--color-slate)] uppercase tracking-widest">Vehicle Price</label>
                 <span className="font-medium text-[var(--color-base)]">Ksh {price.toLocaleString()}</span>
               </div>
               <input 
                 type="range" min="2000000" max="50000000" step="500000" 
                 value={price} onChange={(e) => setPrice(Number(e.target.value))}
                 className="w-full accent-[var(--color-champagne)] h-1 bg-[var(--color-obsidian)] rounded-[0] appearance-none cursor-pointer" 
               />
            </div>

            <div>
               <div className="flex justify-between mb-2">
                 <label className="font-mono text-[10px] text-[var(--color-slate)] uppercase tracking-widest">Down Payment</label>
                 <span className="font-medium text-[var(--color-base)]">Ksh {downPayment.toLocaleString()}</span>
               </div>
               <input 
                 type="range" min="0" max={price} step="500000" 
                 value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))}
                 className="w-full accent-[var(--color-champagne)] h-1 bg-[var(--color-obsidian)] rounded-[0] appearance-none cursor-pointer" 
               />
            </div>

            <div>
               <div className="flex justify-between mb-2">
                 <label className="font-mono text-[10px] text-[var(--color-slate)] uppercase tracking-widest">Trade-In Value</label>
                 <span className="font-medium text-[var(--color-base)]">Ksh {tradeIn.toLocaleString()}</span>
               </div>
               <input 
                 type="range" min="0" max="25000000" step="100000" 
                 value={tradeIn} onChange={(e) => setTradeIn(Number(e.target.value))}
                 className="w-full accent-[var(--color-champagne)] h-1 bg-[var(--color-obsidian)] rounded-[0] appearance-none cursor-pointer" 
               />
            </div>

            <div>
               <div className="flex justify-between mb-2">
                 <label className="font-mono text-[10px] text-[var(--color-slate)] uppercase tracking-widest">Term (Months)</label>
                 <span className="font-medium text-[var(--color-base)]">{term} mo</span>
               </div>
               <input 
                 type="range" min="12" max="84" step="12" 
                 value={term} onChange={(e) => setTerm(Number(e.target.value))}
                 className="w-full accent-[var(--color-champagne)] h-1 bg-[var(--color-obsidian)] rounded-[0] appearance-none cursor-pointer" 
               />
            </div>

            <div>
               <div className="flex justify-between mb-2">
                 <label className="font-mono text-[10px] text-[var(--color-slate)] uppercase tracking-widest">Estimated APR</label>
                 <span className="font-medium text-[var(--color-base)]">{rate}%</span>
               </div>
               <input 
                 type="range" min="2" max="15" step="0.1" 
                 value={rate} onChange={(e) => setRate(Number(e.target.value))}
                 className="w-full accent-[var(--color-champagne)] h-1 bg-[var(--color-obsidian)] rounded-[0] appearance-none cursor-pointer" 
               />
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-5 bg-black/40 p-8 md:p-12 border border-[var(--color-champagne)]/30 text-[var(--color-base)] flex flex-col justify-center fin-card">
           <p className="font-mono text-[10px] text-[var(--color-champagne)] uppercase tracking-widest mb-4">Estimated Payment</p>
           <h2 className="font-serif text-6xl font-light italic mb-2">Ksh {Math.round(monthlyPayment).toLocaleString()}</h2>
           <p className="text-[var(--color-base)]/60 font-light mb-10">per month</p>
           
           <div className="space-y-4 pt-8 border-t border-[var(--color-base)]/20 mb-10">
             <div className="flex justify-between text-sm">
                <span className="text-[var(--color-slate)] font-light">Principal</span>
                <span className="font-medium">Ksh {Math.max(0, principal).toLocaleString()}</span>
             </div>
             <div className="flex justify-between text-sm">
                <span className="text-[var(--color-slate)] font-light">Estimated Interest</span>
                <span className="font-medium">Ksh {principal > 0 ? Math.round((monthlyPayment * term) - principal).toLocaleString() : 0}</span>
             </div>
           </div>

           <button className="w-full py-4 border border-[var(--color-champagne)] text-[var(--color-champagne)] text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[var(--color-champagne)] hover:text-[var(--color-obsidian)] transition-colors">
              Apply for Pre-Approval
           </button>
        </div>

      </div>
    </div>
  );
}
