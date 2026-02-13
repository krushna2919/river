import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const caseStudies = [
  {
    title: "Snehabala and SLIM Cards for Competency-Based Learning in combined Andhra Pradesh: A Case Study",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
  },
  {
    title: "Implementing Vertical Competency Based Learning in Bihar: A Case Study",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
  },
  {
    title: "Multi-Grade, Multi-Level (MGML) learning in Jharkhand: A Case Study",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&q=80",
  },
];

const blogPosts = [
  {
    title: "Unlocking the Potential of RIVER's MGML Methodology: Harnessing Local Knowledge and Experiences",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
  },
  {
    title: "Unleashing Individual Potential: Exploring RIVER's Structured Learning Path",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80",
  },
  {
    title: "Enhancing Learning Diversity: Exploring RIVER's MGML System for Educational Growth",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80",
  },
  {
    title: "Embarking on the Journey of Educational Excellence with RIVER: Recognising Achievements",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
  },
  {
    title: "Fostering Community and Transforming Lives: The Impact of RIVER Schools",
    image: "https://images.unsplash.com/photo-1529390079861-591f14f18f19?w=600&q=80",
  },
];

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"case-studies" | "blog">("case-studies");

  const items = activeTab === "case-studies" ? caseStudies : blogPosts;

  return (
    <section className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="heading-section text-foreground text-center mb-12"
        >
          Case Studies
        </motion.h2>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-8 mb-12 border-b border-border"
        >
          <button
            onClick={() => setActiveTab("case-studies")}
            className={`pb-4 text-sm uppercase tracking-wider font-semibold transition-colors ${
              activeTab === "case-studies"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Case Studies
          </button>
          <button
            onClick={() => setActiveTab("blog")}
            className={`pb-4 text-sm uppercase tracking-wider font-semibold transition-colors ${
              activeTab === "blog"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Blog
          </button>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.slice(0, 3).map((item, index) => (
            <motion.a
              key={item.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group case-study-card overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-light-gray">
                <h3 className="font-heading text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href={activeTab === "case-studies" ? "/case-studies" : "/blog"}
            className="inline-flex items-center gap-2 text-primary font-semibold uppercase text-sm tracking-wider hover:gap-3 transition-all"
          >
            View all
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
