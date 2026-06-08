import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { School, Users, Baby, Calendar, type LucideIcon } from "lucide-react";
import { useHomePage } from "@/hooks/useHomePage";

const iconMap: Record<string, LucideIcon> = {
  school: School,
  users: Users,
  baby: Baby,
  calendar: Calendar,
};

const fallbackStats = [
  { _key: "s1", icon: "school", number: "250,000+", label: "Schools Covered" },
  { _key: "s2", icon: "users", number: "500,000+", label: "Teachers Trained" },
  { _key: "s3", icon: "baby", number: "125,000,000+", label: "Children Impacted" },
  { _key: "s4", icon: "calendar", number: "3,300+", label: "Training Days" },
];

const OurImpact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { data } = useHomePage();
  const i = data?.impact;

  const eyebrow = i?.eyebrow ?? "Our Impact";
  const title = i?.title ?? "Rishi Valley Rural Education Centre: Inspiring Change, Transforming Education, Enriching Communities";
  const stats = i?.stats?.length ? i.stats : fallbackStats;
  const linkLabel = i?.linkLabel ?? "View all Achievement";
  const linkHref = i?.linkHref ?? "/achievements";

  return (
    <section id="impact" className="py-20 md:py-32 section-cream" ref={ref}>
      <div className="container-wide">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="heading-subsection block mb-4"
          >
            {eyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-section text-foreground max-w-4xl mx-auto"
          >
            {title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon] ?? School;
            return (
              <motion.div
                key={stat._key ?? stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 flex items-center justify-center">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-primary" strokeWidth={1.5} />
                </div>
                <div className="stat-number mb-2">{stat.number}</div>
                <h4 className="text-muted-foreground font-medium text-sm md:text-base uppercase tracking-wider">
                  {stat.label}
                </h4>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href={linkHref}
            className="inline-flex items-center gap-2 text-primary font-semibold uppercase text-sm tracking-wider hover:gap-3 transition-all"
          >
            {linkLabel}
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OurImpact;
