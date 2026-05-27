import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInventory } from "../data";
import CarCard from "../components/CarCard";

gsap.registerPlugin(ScrollTrigger);

export default function Home({
  setView,
  setSelectedCar,
}: {
  setView: (v: string) => void;
  setSelectedCar: (id: number | string) => void;
}) {
  const container = useRef<HTMLDivElement>(null);
  const INVENTORY = useInventory();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo(
        ".hero-text",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2,
        },
      );

      // Fade up elements on scroll
      gsap.utils.toArray(".fade-up").forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      });

      // Shuffler cards animation
      const shufflerCards = gsap.utils.toArray(".shuffler-card");
      gsap.fromTo(
        shufflerCards,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".shuffler-container",
            start: "top 80%",
          },
        },
      );
    }, container);

    return () => ctx.revert();
  }, []);

  const featuredCars = INVENTORY.slice(0, 3);

  return (
    <div ref={container} className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-[100dvh] min-h-[600px] w-full bg-[var(--color-obsidian)] flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Car"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)] via-[var(--color-obsidian)]/50 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 md:pb-24">
          <div className="max-w-3xl">
            <h1 className="hero-text text-white leading-tight mb-6">
              <span className="block font-serif italic text-5xl md:text-8xl text-[var(--color-champagne)] font-semibold mt-2">
                Home of Luxury Cars.
              </span>
            </h1>
            <p className="hero-text text-[var(--color-base)]/80 text-base md:text-xl font-medium max-w-lg mb-8 md:mb-10 leading-relaxed">
              A highly curated selection of the world's most luxurious vehicles,
              tailored for the discerning few.
            </p>
            <button
              onClick={() => setView("inventory")}
              className="hero-text px-8 py-4 border border-[var(--color-champagne)] text-[var(--color-champagne)] text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold hover:bg-[var(--color-champagne)] hover:text-[var(--color-obsidian)] transition-colors"
            >
              View Inventory
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED ARRIVALS */}
      <section className="py-32 px-6 border-t border-[var(--color-base)]/10 bg-[var(--color-obsidian)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 fade-up">
            <div>
              <h2 className="font-serif italic text-4xl md:text-5xl text-[var(--color-base)] mb-4">
                Featured Arrivals
              </h2>
              <p className="text-[var(--color-slate)] font-medium max-w-md">
                Our latest acquisitions, thoroughly inspected and ready for
                private viewing.
              </p>
            </div>
            <button
              onClick={() => setView("inventory")}
              className="hidden md:block pb-1 border-b border-[var(--color-base)]/30 font-bold tracking-[0.2em] uppercase text-[11px] text-[var(--color-base)] hover:text-[var(--color-champagne)] hover:border-[var(--color-champagne)] transition-colors"
            >
              See All Collection
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <div
                key={car.id}
                className="fade-up"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CarCard
                  car={car}
                  onClick={(id) => {
                    setSelectedCar(id);
                    setView("vehicle");
                  }}
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <button
              onClick={() => setView("inventory")}
              className="px-6 py-3 border border-[var(--color-champagne)] text-[var(--color-champagne)] text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[var(--color-champagne)] hover:text-[var(--color-obsidian)] transition-colors"
            >
              See All Collection
            </button>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY & WHY US */}
      <section className="py-32 border-t border-[var(--color-base)]/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1614165936126-2c94ad825dbf?auto=format&fit=crop&q=80&w=1600"
            alt="Texture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-obsidian)]/80" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 shuffler-container space-y-12">
            <div className="fade-up">
              <p className="font-mono text-xs text-[var(--color-champagne)] uppercase tracking-widest mb-6">
                The Philosophy
              </p>

              <h2 className="font-serif italic text-3xl md:text-4xl text-white leading-tight mb-8">
                Business strategist. Marketing consultant.{" "}
                <span className="text-[var(--color-champagne)]">
                  Premium auto specialist.
                </span>
              </h2>

              <div className="space-y-6 text-[var(--color-base)]/80 text-base md:text-lg font-light leading-relaxed">
                <p>
                  I empower brands and entrepreneurs through tailored business
                  strategy and high-impact marketing solutions that drive
                  growth, visibility, and profitability. With a strong focus on
                  results, I help businesses structure for sustainability and
                  scale.
                </p>
                <p>
                  I also deal in premium and luxury cars, offering trusted,
                  high-end car solutions for elite clients.
                </p>
                <div className="pt-6 border-t border-[var(--color-base)]/20 mt-8 font-medium">
                  <p className="mb-3 text-[var(--color-champagne)] uppercase tracking-widest text-[11px]">
                    Business. Strategy. Luxury. All in one.
                  </p>
                  <p className="font-serif italic text-2xl md:text-3xl text-white">
                    Let's build your business, let's drive your dream.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 gap-6 w-full shuffler-container">
            {[
              {
                title: "Curated Selection",
                desc: "Every car in our collection is handpicked and thoroughly vetted by Mr Joseph himself.",
              },
              {
                title: "Transparent Pricing",
                desc: "No hidden fees, no games. Absolute market clarity from the very first conversation.",
              },
              {
                title: "White-Glove Delivery",
                desc: "Delivered to your door in an enclosed transporter, detailed to perfection.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="shuffler-card bg-[var(--color-chrome)]/50 backdrop-blur-md border border-[var(--color-base)]/10 p-8"
              >
                <h4 className="font-sans font-semibold text-xl text-[var(--color-base)] mb-3 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-[var(--color-base)]/70 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
