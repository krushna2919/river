import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { School, Users, Baby, Calendar } from "lucide-react";

const stats = [
  {
    icon: School,
    number: "250,000+",
    label: "Schools Covered",
  },
  {
    icon: Users,
    number: "500,000+",
    label: "Teachers Trained",
  },
  {
    icon: Baby,
    number: "125,000,000+",
    label: "Children Impacted",
  },
  {
    icon: Calendar,
    number: "3,300+",
    label: "Training Days",
  },
];

const OurImpact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="py-20 md:py-32 section-cream" ref={ref}>
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="heading-subsection block mb-4"
          >
            Our Impact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-section text-foreground max-w-4xl mx-auto"
          >
            Rishi Valley Rural Education Centre: Inspiring Change, Transforming Education, Enriching Communities
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="w-10 h-10 md:w-12 md:h-12 text-primary" strokeWidth={1.5} />
              </div>
              <div className="stat-number mb-2">
                {stat.number}
              </div>
              <h4 className="text-muted-foreground font-medium text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="/achievements"
            className="inline-flex items-center gap-2 text-primary font-semibold uppercase text-sm tracking-wider hover:gap-3 transition-all"
          >
            View all Achievement
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OurImpact;
