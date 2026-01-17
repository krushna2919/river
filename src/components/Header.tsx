import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CircularLogo from "./CircularLogo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container-wide">
        <div className="flex items-center justify-between h-36 md:h-40">
          {/* Left Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#about"
              className="text-white/90 hover:text-white text-sm uppercase tracking-[0.15em] font-medium transition-colors"
            >
              About Us
            </a>
            <a
              href="#methodology"
              className="text-white/90 hover:text-white text-sm uppercase tracking-[0.15em] font-medium transition-colors"
            >
              What We Do
            </a>
          </nav>

          {/* Center Logo */}
          <a href="#home" className="absolute left-1/2 -translate-x-1/2 hover:scale-105 transition-transform">
            <CircularLogo size={180} />
          </a>

          {/* Right Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#impact"
              className="text-white/90 hover:text-white text-sm uppercase tracking-[0.15em] font-medium transition-colors"
            >
              Our Impact
            </a>
            <a
              href="#donate"
              className="text-white/90 hover:text-white text-sm uppercase tracking-[0.15em] font-medium transition-colors"
            >
              Donate
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg ml-auto"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-sm overflow-hidden"
          >
            <nav className="container-wide py-6 flex flex-col gap-1">
              {[
                { label: "About Us", href: "#about" },
                { label: "What We Do", href: "#methodology" },
                { label: "Our Impact", href: "#impact" },
                { label: "Donate", href: "#donate" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 text-sm uppercase tracking-[0.15em] font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
