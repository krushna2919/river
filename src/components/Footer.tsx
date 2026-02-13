import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="container-wide py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
                <span className="font-heading text-xl font-medium">RV</span>
              </div>
              <div>
                <h3 className="font-heading font-medium text-lg">Rishi Valley</h3>
                <p className="text-white/60 text-sm">Rural Education Centre</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Krishnamurti Foundation India's initiative for revolutionizing 
              rural education since 1976.
            </p>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-heading font-medium text-lg mb-6 uppercase tracking-wider">About Us</h4>
            <ul className="space-y-3">
              {[
                { label: "Our Story", href: "/our-story" },
                { label: "Rishi Valley School", href: "/rishi-valley-school" },
                { label: "Our Team", href: "/our-team" },
                { label: "Contact Us", href: "/contact-us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Do */}
          <div>
            <h4 className="font-heading font-medium text-lg mb-6 uppercase tracking-wider">What We Do</h4>
            <ul className="space-y-3">
              {[
                { label: "RIVER", href: "/river" },
                { label: "Methodology", href: "/methodology" },
                { label: "School in a Box", href: "/school-in-a-box" },
                { label: "Services", href: "/services" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Impact */}
          <div>
            <h4 className="font-heading font-medium text-lg mb-6 uppercase tracking-wider">Our Impact</h4>
            <ul className="space-y-3">
              {[
                { label: "Achievements", href: "/achievements" },
                { label: "Awards & Recognitions", href: "/awards-recognitions" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Testimonials", href: "/testimonials" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-medium text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-white/60 text-sm">
                  Rishi Valley - 517 352,<br />
                  Chittoor District,<br />
                  Andhra Pradesh, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:office@rishivalley.org"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  office@rishivalley.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-white/60 text-sm">
                  (08571) 280622
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>
            © {currentYear} Rishi Valley Rural Education Centre. All rights reserved.
          </p>
          <p>
            A Krishnamurti Foundation India Initiative
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
