import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-hero text-primary-foreground">
      <div className="container-wide py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <span className="font-heading text-primary-foreground text-xl font-bold">RV</span>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl">
                  Rishi Valley
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  Rural Education Centre
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed mb-6">
              Krishnamurti Foundation India's initiative for revolutionizing 
              rural education through innovative multi-grade, multi-level 
              teaching methodology since 1976.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "#about" },
                { label: "Programs", href: "#programs" },
                { label: "Our Impact", href: "#impact" },
                { label: "Partnerships", href: "#partnerships" },
                { label: "Get Involved", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                { label: "RIVER Institute", href: "#programs" },
                { label: "Satellite Schools", href: "#programs" },
                { label: "Teacher Resources", href: "#contact" },
                { label: "Publications", href: "#" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-primary-foreground/20 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>
            © {currentYear} Rishi Valley Rural Education Centre. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-terracotta fill-current" /> for rural education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
