import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, BookMarked, Globe } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "RIVER",
    subtitle: "Institute for Educational Resources",
    description:
      "The teacher training and resource development wing of REC. RIVER has developed a unique structure for elementary education consisting of a network of Satellite Schools where a community-based curriculum is taught.",
    features: ["Teacher Training", "Curriculum Development", "Research & Innovation"],
    color: "primary",
  },
  {
    icon: MapPin,
    title: "Satellite Schools",
    subtitle: "Community Learning Centers",
    description:
      "A network of 12 schools serving remote villages, using the multi-grade methodology. Each school serves as a resource centre with adult literacy programmes, health projects, and community engagement.",
    features: ["7 Active Schools", "Community Owned", "Green Public Spaces"],
    color: "accent",
  },
  {
    icon: BookMarked,
    title: "School in a Box",
    subtitle: "Complete Learning Package",
    description:
      "Our innovative educational package includes Language and Math kits, teaching aids, and the 'Ladder of Learning' system, enabling quality education in any setting.",
    features: ["Multi-language Support", "Self-paced Learning", "Visual Aids"],
    color: "terracotta",
  },
  {
    icon: Globe,
    title: "Outreach & Training",
    subtitle: "Scaling Impact Nationwide",
    description:
      "We partner with state governments, NGOs, and international agencies to implement MGML methodology across India and in countries like Ethiopia, Nepal, and Germany.",
    features: ["15+ States", "International Projects", "Government Partnerships"],
    color: "forest",
  },
];

const Programs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" className="py-20 md:py-32 bg-secondary/50" ref={ref}>
      <div className="container-wide">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4"
          >
            Our Programs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-section text-foreground mb-6"
          >
            Comprehensive Educational Initiatives
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-muted-foreground"
          >
            From local satellite schools to international partnerships, our 
            programs create lasting change in rural education.
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden card-hover"
            >
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                    program.color === 'primary' ? 'bg-primary/10' :
                    program.color === 'accent' ? 'bg-accent/10' :
                    program.color === 'terracotta' ? 'bg-terracotta/10' :
                    'bg-forest/10'
                  }`}>
                    <program.icon className={`w-7 h-7 ${
                      program.color === 'primary' ? 'text-primary' :
                      program.color === 'accent' ? 'text-accent' :
                      program.color === 'terracotta' ? 'text-terracotta' :
                      'text-forest'
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {program.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {program.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {program.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
