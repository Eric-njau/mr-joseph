import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({
  currentView,
  setView,
}: {
  currentView: string;
  setView: (v: string) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", value: "home" },
    { label: "Inventory", value: "inventory" },
    { label: "Cars in Kenya", value: "inventory-kenya" },
    { label: "Incoming Cars", value: "inventory-incoming" },
    { label: "Financing", value: "financing" },
    { label: "Concierge", value: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-6"
      }`}
    >
      <div className="w-full px-4 md:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-500 px-4 py-3 rounded-2xl ${
            scrolled || currentView !== "home"
              ? "bg-[var(--color-obsidian)]/90 backdrop-blur-xl border border-[var(--color-base)]/10 shadow-2xl"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => setView("home")}
            className="flex flex-col items-center justify-center transition-colors text-white"
          >
            <span
              style={{
                fontFamily: "'Alex Brush', cursive",
                transform: "rotate(-2deg)",
              }}
              className="text-5xl sm:text-6xl leading-none inline-block pb-1 pr-2"
            >
              Mr Joseph
            </span>
            <span className="font-sans text-[11px] sm:text-[13px] font-light tracking-[0.2em] uppercase text-white/95 mt-[-4px]">
              Elite Personal Agent
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setView(item.value)}
                className={`text-[11px] font-medium tracking-[0.2em] uppercase transition-colors hover:text-[var(--color-champagne)] text-[var(--color-base)]/80 ${currentView === item.value ? "!text-[var(--color-champagne)]" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Desktop */}
          <button
            onClick={() => setView("contact")}
            className="hidden md:block px-6 py-3 border border-[var(--color-champagne)] text-[var(--color-champagne)] text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[var(--color-champagne)] hover:text-[var(--color-obsidian)] transition-colors"
          >
            Schedule Viewing
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu
                size={24}
                color={
                  scrolled || currentView !== "home"
                    ? "var(--color-base)"
                    : "white"
                }
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-6 right-6 mt-2 p-6 rounded-2xl bg-[var(--color-obsidian)] border border-[var(--color-chrome)] flex flex-col space-y-4 md:hidden shadow-2xl backdrop-blur-xl">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                setView(item.value);
                setMobileMenuOpen(false);
              }}
              className="text-left text-[var(--color-base)] text-lg font-medium tracking-wide uppercase"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              setView("contact");
              setMobileMenuOpen(false);
            }}
            className="w-full text-center mt-4 px-6 py-3 rounded-full border border-[var(--color-champagne)] text-[var(--color-champagne)] font-medium uppercase tracking-wide"
          >
            Schedule Viewing
          </button>
        </div>
      )}
    </header>
  );
}
