import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Award, Users, Building } from "lucide-react";

const impactStats = [
  {
    icon: Building,
    number: "250,000+",
    label: "Schools Reached",
    description: "Government and non-government schools across India using our methodology",
  },
  {
    icon: Users,
    number: "500,000+",
    label: "Teachers Trained",
    description: "Educators equipped with multi-grade, multi-level teaching skills",
  },
  {
    icon: TrendingUp,
    number: "12,000+",
    label: "SSA Schools",
    description: "Schools under Sarva Shiksha Abhiyaan implementing RIVER methodology",
  },
  {
    icon: Award,
    number: "15+",
    label: "States Covered",
    description: "From Karnataka to West Bengal, our impact spans across India",
  },
];

const milestones = [
  { year: "1976", event: "REC established with first satellite schools" },
  { year: "1988", event: "School in a Box methodology developed" },
  { year: "1994", event: "Nalli Kalli program launched in Karnataka" },
  { year: "2004", event: "SSA-UNICEF nationwide quality package project" },
  { year: "2009", event: "Schwab Foundation Social Entrepreneur Award" },
  { year: "2011", event: "Jindal Prize for MGML methodology" },
];

const Impact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container-wide">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4"
          >
            Our Impact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-section text-foreground mb-6"
          >
            Inspiring Change, Transforming Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-muted-foreground"
          >
            For nearly five decades, our innovative approach has touched 
            millions of lives, creating lasting change in rural communities.
          </motion.p>
        </div>

        {/* Impact Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="relative p-6 bg-card rounded-2xl border border-border overflow-hidden group card-hover"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full" />
              <stat.icon className="w-10 h-10 text-primary mb-4" />
              <div className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-1">
                {stat.number}
              </div>
              <div className="text-lg font-medium text-foreground mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="heading-card text-center text-foreground mb-10">
            Key Milestones
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className={`relative flex items-center gap-6 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background" />
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}>
                    <span className="text-primary font-heading font-bold text-xl">
                      {milestone.year}
                    </span>
                    <p className="text-muted-foreground mt-1">
                      {milestone.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;
