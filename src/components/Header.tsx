import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Impact", href: "#impact" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "Get Involved", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 gradient-hero">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <span className="font-heading text-primary-foreground text-lg md:text-xl font-bold">RV</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-primary-foreground font-heading font-semibold text-lg md:text-xl leading-tight">
                Rishi Valley
              </h1>
              <p className="text-primary-foreground/80 text-xs md:text-sm">
                Rural Education Centre
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-lg transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <a
            href="#contact"
            className="hidden lg:block px-5 py-2.5 bg-primary-foreground text-primary rounded-lg font-medium text-sm hover:bg-primary-foreground/90 transition-colors"
          >
            Support Us
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-lg"
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
            className="lg:hidden bg-primary overflow-hidden"
          >
            <nav className="container-wide py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-lg transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-4 py-3 bg-primary-foreground text-primary rounded-lg font-medium text-center"
              >
                Support Us
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
