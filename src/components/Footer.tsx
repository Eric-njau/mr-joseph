import { Facebook, Instagram, Phone, MessageSquare, Mail } from "lucide-react";

export default function Footer({ setView }: { setView: (v: string) => void }) {
  return (
    <footer className="bg-[var(--color-obsidian)] border-t border-[var(--color-base)]/10 text-[var(--color-base)] pt-24 pb-12 px-6 mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[var(--color-base)]/10 pb-12">
        {/* Brand */}
        <div className="md:col-span-1 space-y-6">
          <h2 className="font-serif text-3xl font-semibold tracking-wide">
            Mr Joseph.
          </h2>
          <p className="text-sm font-medium text-[var(--color-base)]/60 leading-relaxed max-w-sm">
            Prestige vehicles. A highly curated selection of the world's most
            luxurious vehicles, tailored for the discerning few.
          </p>
        </div>

        {/* Explore */}
        <div className="space-y-6">
          <h3 className="font-mono text-xs text-[var(--color-champagne)] uppercase tracking-widest">
            Explore
          </h3>
          <ul className="space-y-4 text-sm">
            <li>
              <button
                onClick={() => setView("inventory")}
                className="text-[var(--color-base)]/70 hover:text-[var(--color-base)] transition-colors"
              >
                Inventory Collection
              </button>
            </li>
            <li>
              <button
                onClick={() => setView("financing")}
                className="text-[var(--color-base)]/70 hover:text-[var(--color-base)] transition-colors"
              >
                Valuation & Finance
              </button>
            </li>
            <li>
              <button
                onClick={() => setView("contact")}
                className="text-[var(--color-base)]/70 hover:text-[var(--color-base)] transition-colors"
              >
                Private Concierge
              </button>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h3 className="font-mono text-xs text-[var(--color-champagne)] uppercase tracking-widest">
            Contact
          </h3>
          <ul className="space-y-4 text-sm text-[var(--color-base)]/70">
            <li>
              <a
                href="tel:0713583829"
                className="hover:text-[var(--color-base)] transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                0713583829
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/254713583829"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-base)] transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="mailto:info@mrjoseph.co.ke"
                className="hover:text-[var(--color-base)] transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                info@mrjoseph.co.ke
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h3 className="font-mono text-xs text-[var(--color-champagne)] uppercase tracking-widest">
            Exclusive Access
          </h3>
          <p className="text-sm text-[var(--color-base)]/70">
            Receive private previews of rare arrivals.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent border-b border-[var(--color-base)]/20 pb-2 text-sm text-[var(--color-base)] w-full focus:outline-none focus:border-[var(--color-champagne)] transition-colors"
            />
            <button className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-champagne)] hover:text-white transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8 text-xs text-[var(--color-base)]/40 font-mono">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Concierge Active</span>
        </div>
        <p className="mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Mr Joseph Premium Cars. All rights
          reserved.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/MrJosephPremiumCars/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-base)] transition-colors"
            title="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/mrjoseph_premiumcars/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-base)] transition-colors"
            title="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.tiktok.com/tag/mrjosephpremiumcars"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-base)] transition-colors"
            title="TikTok"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.35 6.32 6.32 6.32 0 0 0 6.22-6.22v-5.6a8.27 8.27 0 0 0 4.74 1.53v-3.45a5.06 5.06 0 0 1-2.72-.57z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
