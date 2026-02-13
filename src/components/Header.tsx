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

interface HeaderProps {
  isInnerPage?: boolean;
}

const Header = ({ isInnerPage = false }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // For inner pages, always show compact header style
  const showCompactHeader = isInnerPage || isScrolled;

  const aboutLinks = [
    { label: "Our Story", href: "/our-story" },
    { label: "Rishi Valley School", href: "/rishi-valley-school" },
    { label: "Our Team", href: "/our-team" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const whatWeDoLinks = [
    { label: "Methodology", href: "/what-we-do" },
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

  // Reusable dropdown component (matches original: first item highlighted, others dark)
  const NavDropdown = ({
    label,
    links,
    isWhiteText = true,
  }: {
    label: string;
    links: { label: string; href: string }[];
    isWhiteText?: boolean;
  }) => {
    const [open, setOpen] = useState(false);

    return (
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="relative"
        >
          <DropdownMenuTrigger
            className={`flex items-center gap-1 text-sm uppercase tracking-[0.15em] font-medium transition-colors outline-none ${
              isWhiteText
                ? "text-hero-text/90 hover:text-hero-text"
                : "text-foreground hover:text-foreground/80"
            }`}
          >
            {label}
            <ChevronDown size={16} />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="z-50 bg-background border-none shadow-strong rounded-none min-w-[280px] p-0">
            {links.map((link, index) => (
              <DropdownMenuItem
                key={link.href}
                asChild
                className={`group p-0 focus:bg-transparent rounded-none ${
                  index !== links.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <a
                  href={link.href}
                  className="flex items-center justify-between w-full px-6 py-4 cursor-pointer transition-colors"
                >
                  {/* Dark by default, terracotta on hover */}
                  <span className="text-base font-normal text-foreground group-hover:text-terracotta transition-colors">
                    {link.label}
                  </span>

                  {/* Diagonal arrow by default, horizontal arrow on hover */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-muted-foreground group-hover:hidden"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="hidden text-terracotta group-hover:block"
                    aria-hidden="true"
                  >
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" />
                  </svg>
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </div>
      </DropdownMenu>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-visible ${
        showCompactHeader ? "bg-background shadow-md py-2" : "bg-transparent pt-6"
      }`}
    >
      <div className="container-wide">
        <div
          className={`relative flex items-center justify-between transition-all duration-300 ${
            showCompactHeader ? "h-16" : "h-24 md:h-28"
          }`}
        >
          {/* Left Navigation (shown when not compact) */}
          {!showCompactHeader && (
            <nav className="hidden lg:flex items-center gap-8">
              <NavDropdown label="About Us" links={aboutLinks} isWhiteText />
              <NavDropdown label="What We Do" links={whatWeDoLinks} isWhiteText />
            </nav>
          )}

          {/* Center Logo (large, when not compact) */}
          {!showCompactHeader && (
            <a
              href="/"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-transform"
              aria-label="Home"
            >
              <CircularLogo size={160} />
            </a>
          )}

          {/* Left Logo (compact style) */}
          {showCompactHeader && (
            <a
              href="/"
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

          {/* Right Navigation (shown when not compact) */}
          {!showCompactHeader && (
            <nav className="hidden lg:flex items-center gap-8">
              <NavDropdown label="Our Impact" links={ourImpactLinks} isWhiteText />
              <a
                href="#donate"
                className="text-hero-text/90 hover:text-hero-text text-sm uppercase tracking-[0.15em] font-medium transition-colors"
              >
                Donate
              </a>
            </nav>
          )}

          {/* Compact Navigation (right side) */}
          {showCompactHeader && (
            <nav className="hidden lg:flex items-center gap-8">
              <NavDropdown label="About Us" links={aboutLinks} isWhiteText={false} />
              <NavDropdown label="What We Do" links={whatWeDoLinks} isWhiteText={false} />
              <NavDropdown label="Our Impact" links={ourImpactLinks} isWhiteText={false} />
              <a
                href="#donate"
                className="bg-terracotta hover:bg-terracotta-dark text-primary-foreground px-6 py-2.5 text-sm uppercase tracking-[0.15em] font-medium transition-colors"
              >
                Donate
              </a>
            </nav>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ml-auto ${
              showCompactHeader
                ? "text-foreground hover:bg-muted"
                : "text-hero-text hover:bg-white/10"
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
              showCompactHeader ? "bg-background" : "bg-black/95 backdrop-blur-sm"
            }`}
          >
            <nav className="container-wide py-6 flex flex-col gap-1">
              <MobileNavSection
                title="About Us"
                links={aboutLinks}
                isScrolled={showCompactHeader}
                setIsOpen={setIsOpen}
              />
              <MobileNavSection
                title="What We Do"
                links={whatWeDoLinks}
                isScrolled={showCompactHeader}
                setIsOpen={setIsOpen}
              />
              <MobileNavSection
                title="Our Impact"
                links={ourImpactLinks}
                isScrolled={showCompactHeader}
                setIsOpen={setIsOpen}
              />
              <a
                href="#donate"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 text-sm uppercase tracking-[0.15em] font-medium transition-colors ${
                  showCompactHeader
                    ? "text-foreground hover:bg-muted"
                    : "text-hero-text/90 hover:text-hero-text hover:bg-white/5"
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
        isScrolled ? "text-foreground" : "text-hero-text/90"
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
              ? "text-foreground/80 hover:text-foreground"
              : "text-hero-text/70 hover:text-hero-text"
          }`}
        >
          {link.label}
        </a>
      ))}
    </div>
  </div>
);

export default Header;
