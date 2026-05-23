import { useEffect } from "react";
import gsap from "gsap";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".con-text",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
      );
      gsap.fromTo(
        ".con-form",
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power3.out" },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen pt-40 px-6 pb-24 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="max-w-xl">
          <p className="con-text font-mono text-xs text-[var(--color-champagne)] uppercase tracking-widest mb-6">
            Private Concierge
          </p>
          <h1 className="con-text font-serif italic text-5xl md:text-6xl text-[var(--color-base)] mb-6">
            At your absolute service.
          </h1>
          <p className="con-text font-light text-[var(--color-slate)] text-lg leading-relaxed mb-12">
            Whether you seek to acquire a vehicle from our collection, require
            discreet sourcing for a rare model, or wish to schedule a private
            viewing, our concierge team is available.
          </p>

          <div className="space-y-8">
            <div className="con-text flex items-start gap-4">
              <div className="w-12 h-12 border border-[var(--color-base)]/20 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-[var(--color-champagne)]" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-[var(--color-base)] mb-1">
                  Direct Line & WhatsApp
                </h3>
                <p className="text-[var(--color-slate)]">0713583829</p>
              </div>
            </div>
            <div className="con-text flex items-start gap-4">
              <div className="w-12 h-12 border border-[var(--color-base)]/20 flex items-center justify-center shrink-0">
                <Mail size={20} className="text-[var(--color-champagne)]" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-[var(--color-base)] mb-1">
                  Electronic Mail
                </h3>
                <p className="text-[var(--color-slate)]">info@mrjoseph.co.ke</p>
              </div>
            </div>
          </div>
        </div>

        <div className="con-form bg-[var(--color-chrome)]/20 backdrop-blur-md p-10 md:p-14 border border-[var(--color-base)]/10">
          <h3 className="font-serif text-3xl text-[var(--color-base)] italic font-light mb-8">
            Send an Inquiry
          </h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-xs text-[var(--color-slate)] uppercase tracking-widest mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-[var(--color-base)]/20 pb-3 text-[var(--color-base)] focus:outline-none focus:border-[var(--color-champagne)] transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-[var(--color-slate)] uppercase tracking-widest mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-[var(--color-base)]/20 pb-3 text-[var(--color-base)] focus:outline-none focus:border-[var(--color-champagne)] transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block font-mono text-xs text-[var(--color-slate)] uppercase tracking-widest mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-[var(--color-base)]/20 pb-3 text-[var(--color-base)] focus:outline-none focus:border-[var(--color-champagne)] transition-colors"
              />
            </div>
            <div>
              <label className="block font-mono text-xs text-[var(--color-slate)] uppercase tracking-widest mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full bg-transparent border-b border-[var(--color-base)]/20 pb-3 text-[var(--color-base)] focus:outline-none focus:border-[var(--color-champagne)] transition-colors"
              />
            </div>
            <div>
              <label className="block font-mono text-xs text-[var(--color-slate)] uppercase tracking-widest mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-[var(--color-base)]/20 pb-3 text-[var(--color-base)] focus:outline-none focus:border-[var(--color-champagne)] transition-colors resize-none"
              ></textarea>
            </div>
            <button className="w-full mt-6 py-4 border border-[var(--color-champagne)] text-[var(--color-champagne)] text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-[var(--color-champagne)] hover:text-[var(--color-obsidian)]">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
