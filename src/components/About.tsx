import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Users, Leaf, Heart } from "lucide-react";

const aims = [
  {
    icon: BookOpen,
    title: "Village-Based Education",
    description: "Promoting accessible education in rural communities through satellite schools and local resources.",
  },
  {
    icon: Users,
    title: "Teacher Training",
    description: "Training teachers in multi-grade multi-level methodology (MGML) developed by RIVER.",
  },
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    description: "Creating green spaces for conservation of biodiversity and medicinal plants.",
  },
  {
    icon: Heart,
    title: "Community Engagement",
    description: "Actively involving communities in managing their children's education and well-being.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container-wide">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4"
          >
            Our Story
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-section text-foreground mb-6"
          >
            Transforming Rural Education Since 1976
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-muted-foreground"
          >
            The Rishi Valley Rural Education Centre (REC) consists of RIVER 
            (Rishi Valley Institute for Educational Resources), a residential 
            Middle School, and twelve Satellite Schools, working together to 
            revolutionize education in rural India.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-secondary to-muted overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl text-foreground mb-3">
                    School in a Box
                  </h3>
                  <p className="text-muted-foreground max-w-sm">
                    Our innovative MGML methodology brings quality education 
                    to the most remote villages
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border-2 border-primary/20 rounded-full" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent/10 rounded-lg" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-strong">
              <div className="text-3xl font-heading font-bold">14</div>
              <div className="text-sm opacity-90">Acres of Campus</div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="heading-card text-foreground mb-4">
              Pioneering Multi-Grade Education
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Located in a sheltered valley in rural Andhra Pradesh, chosen by 
              philosopher J. Krishnamurti for its remarkable atmosphere of peace 
              and serenity, our centre has developed unique educational methods 
              that have been adopted across India and internationally.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our multi-grade multi-level (MGML) methodology allows children of 
              different ages and learning levels to learn together effectively, 
              making quality education accessible even in the most resource-constrained 
              settings.
            </p>
            <a
              href="#programs"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Explore Our Programs
              <span>→</span>
            </a>
          </motion.div>
        </div>

        {/* Aims Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aims.map((aim, index) => (
            <motion.div
              key={aim.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="p-6 bg-card rounded-xl border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <aim.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-2">
                {aim.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {aim.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
