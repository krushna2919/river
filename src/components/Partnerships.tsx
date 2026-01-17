import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  {
    name: "Nalli Kalli - Karnataka",
    description: "Thousands of schools across Mysore District using MGML methodology since 1994.",
  },
  {
    name: "UNICEF India",
    description: "Quality Package Project reaching 12,000+ schools in 12 states.",
  },
  {
    name: "Sarva Shiksha Abhiyaan",
    description: "Nationwide implementation of RIVER methodology for universal education.",
  },
  {
    name: "Tamil Nadu Corporation",
    description: "MGML methodology in all Corporation Schools across the state.",
  },
  {
    name: "International Programs",
    description: "Collaborative projects in Ethiopia, Nepal, Germany, and more.",
  },
  {
    name: "Harvard University",
    description: "Academic collaboration with Harvard Business School and Graduate School of Education.",
  },
];

const awards = [
  {
    year: "2011",
    title: "Jindal Prize",
    description: "For achievements in education with emphasis on value education",
  },
  {
    year: "2009",
    title: "Schwab Foundation Award",
    description: "Social Entrepreneurs of the Year, India Winner",
  },
  {
    year: "2005",
    title: "GDN Award",
    description: "Most Innovative Development Project - Government of Japan",
  },
];

const Partnerships = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partnerships" className="py-20 md:py-32 bg-secondary/50" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Partnerships */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4"
            >
              Partnerships
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-section text-foreground mb-8"
            >
              Building Capacity Together
            </motion.h2>

            <div className="space-y-4">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                  className="p-5 bg-card rounded-xl border border-border"
                >
                  <h4 className="font-heading font-semibold text-foreground mb-1">
                    {partner.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {partner.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards & Recognition */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4"
            >
              Recognition
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-section text-foreground mb-8"
            >
              Awards & Honors
            </motion.h2>

            <div className="space-y-6">
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative p-6 bg-card rounded-xl border border-border overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-heading font-bold text-xl">
                        {award.year}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-foreground mb-1">
                        {award.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 p-6 bg-primary/5 rounded-xl border-l-4 border-primary"
            >
              <p className="text-foreground italic font-heading text-lg mb-3">
                "Regenerating landscapes, conserving bio-diversity and local cultures 
                are built into a vision that places the child at the centre of classroom 
                activities."
              </p>
              <cite className="text-sm text-muted-foreground not-italic">
                — GDN Award Citation, 2005
              </cite>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
