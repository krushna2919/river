import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CircularLogo from "./CircularLogo";
import innerpageLogo from "@/assets/innerpage-logo.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const aboutLinks = [
    { label: "Our Story", href: "#story" },
    { label: "Rishi Valley School", href: "#school" },
    { label: "Our Team", href: "#team" },
    { label: "Contact Us", href: "#contact" },
  ];

  const whatWeDoLinks = [
    { label: "Our Methodology", href: "#methodology" },
    { label: "Programs", href: "#programs" },
    { label: "Schools", href: "#schools" },
    { label: "Partnerships", href: "#partnerships" },
  ];

  const ourImpactLinks = [
    { label: "Impact Overview", href: "#impact" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Reports", href: "#reports" },
  ];

  // Reusable dropdown component
  const NavDropdown = ({
    label,
    links,
    isScrolled,
    isWhiteText = true,
  }: {
    label: string;
    links: { label: string; href: string }[];
    isScrolled: boolean;
    isWhiteText?: boolean;
  }) => (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`flex items-center gap-1 text-sm uppercase tracking-[0.15em] font-medium transition-colors outline-none ${
          isWhiteText
            ? "text-white/90 hover:text-white"
            : "text-[#420d09] hover:text-[#420d09]/80"
        }`}
      >
        {label}
        <ChevronDown size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border-none shadow-xl rounded-none min-w-[280px] p-0 z-50">
        {links.map((link, index) => (
          <DropdownMenuItem key={link.href} asChild className="p-0 focus:bg-gray-50">
            <a
              href={link.href}
              className={`group flex items-center justify-between w-full px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors text-[#333] hover:text-[#a0522d] ${
                index !== links.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <span className="text-base font-normal">{link.label}</span>
              {/* Diagonal arrow - shown by default, hidden on hover */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 group-hover:hidden">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
              {/* Horizontal arrow - hidden by default, shown on hover */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#a0522d] hidden group-hover:block">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" />
              </svg>
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-visible ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent pt-6"
      }`}
    >
      <div className="container-wide">
        <div
          className={`relative flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-16" : "h-24 md:h-28"
          }`}
        >
          {/* Left Navigation (shown when not scrolled) */}
          {!isScrolled && (
            <nav className="hidden lg:flex items-center gap-8">
              <NavDropdown label="About Us" links={aboutLinks} isScrolled={isScrolled} isWhiteText={true} />
              <NavDropdown label="What We Do" links={whatWeDoLinks} isScrolled={isScrolled} isWhiteText={true} />
            </nav>
          )}

          {/* Center Logo (large, when not scrolled) */}
          {!isScrolled && (
            <a
              href="#home"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-transform"
              aria-label="Home"
            >
              <CircularLogo size={160} />
            </a>
          )}

          {/* Left Logo (compact, when scrolled) */}
          {isScrolled && (
            <a
              href="#home"
              className="hover:opacity-80 transition-opacity"
              aria-label="Home"
            >
              <img
                src={innerpageLogo}
                alt="Rishi Valley Rural Education Centre"
                className="h-12 md:h-14"
              />
            </a>
          )}

          {/* Right Navigation (shown when not scrolled) */}
          {!isScrolled && (
            <nav className="hidden lg:flex items-center gap-8">
              <NavDropdown label="Our Impact" links={ourImpactLinks} isScrolled={isScrolled} isWhiteText={true} />
              <a
                href="#donate"
                className="text-white/90 hover:text-white text-sm uppercase tracking-[0.15em] font-medium transition-colors"
              >
                Donate
              </a>
            </nav>
          )}

          {/* Scrolled Navigation (right side) */}
          {isScrolled && (
            <nav className="hidden lg:flex items-center gap-8">
              <NavDropdown label="About Us" links={aboutLinks} isScrolled={isScrolled} isWhiteText={false} />
              <NavDropdown label="What We Do" links={whatWeDoLinks} isScrolled={isScrolled} isWhiteText={false} />
              <NavDropdown label="Our Impact" links={ourImpactLinks} isScrolled={isScrolled} isWhiteText={false} />
              <a
                href="#donate"
                className="bg-[#a0522d] hover:bg-[#8b4726] text-white px-6 py-2.5 text-sm uppercase tracking-[0.15em] font-medium transition-colors"
              >
                Donate
              </a>
            </nav>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ml-auto ${
              isScrolled
                ? "text-[#420d09] hover:bg-[#420d09]/10"
                : "text-white hover:bg-white/10"
            }`}
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
            className={`lg:hidden overflow-hidden ${
              isScrolled ? "bg-white" : "bg-black/95 backdrop-blur-sm"
            }`}
          >
            <nav className="container-wide py-6 flex flex-col gap-1">
              {/* About Us with sub-links */}
              <MobileNavSection title="About Us" links={aboutLinks} isScrolled={isScrolled} setIsOpen={setIsOpen} />
              <MobileNavSection title="What We Do" links={whatWeDoLinks} isScrolled={isScrolled} setIsOpen={setIsOpen} />
              <MobileNavSection title="Our Impact" links={ourImpactLinks} isScrolled={isScrolled} setIsOpen={setIsOpen} />
              <a
                href="#donate"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 text-sm uppercase tracking-[0.15em] font-medium transition-colors ${
                  isScrolled
                    ? "text-[#420d09] hover:bg-[#420d09]/5"
                    : "text-white/90 hover:text-white hover:bg-white/5"
                }`}
              >
                Donate
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Mobile navigation section component
const MobileNavSection = ({
  title,
  links,
  isScrolled,
  setIsOpen,
}: {
  title: string;
  links: { label: string; href: string }[];
  isScrolled: boolean;
  setIsOpen: (open: boolean) => void;
}) => (
  <div className="px-4 py-2">
    <span
      className={`text-sm uppercase tracking-[0.15em] font-medium ${
        isScrolled ? "text-[#420d09]" : "text-white/90"
      }`}
    >
      {title}
    </span>
    <div className="mt-2 ml-4 flex flex-col gap-1">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setIsOpen(false)}
          className={`py-2 text-sm tracking-wide transition-colors ${
            isScrolled
              ? "text-[#420d09]/80 hover:text-[#420d09]"
              : "text-white/70 hover:text-white"
          }`}
        >
          {link.label}
        </a>
      ))}
    </div>
  </div>
);

export default Header;
