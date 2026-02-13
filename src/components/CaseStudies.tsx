import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import caseStudyAndhra from "@/assets/case-study-andhra.jpg";
import caseStudyBihar from "@/assets/case-study-bihar.jpg";
import caseStudyJharkhand from "@/assets/case-study-jharkhand.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blog6 from "@/assets/blog-6.jpg";

const caseStudies = [
  {
    title: "Snehabala and SLIM Cards for Competency-Based Learning in combined Andhra Pradesh: A Case Study",
    image: caseStudyAndhra,
    href: "/case-studies/andhra-pradesh",
  },
  {
    title: "Implementing Vertical Competency Based Learning in Bihar: A Case Study",
    image: caseStudyBihar,
    href: "/case-studies/bihar",
  },
  {
    title: "Multi-Grade, Multi-Level (MGML) learning in Jharkhand: A Case Study",
    image: caseStudyJharkhand,
    href: "/case-studies/jharkhand",
  },
];

const blogPosts = [
  {
    title: "Unlocking the Potential of RIVER's MGML Methodology: Harnessing Local Knowledge and Experiences",
    image: blog2,
    href: "/blog/unlocking-mgml-methodology",
  },
  {
    title: "Unleashing Individual Potential: Exploring RIVER's Structured Learning Path",
    image: blog3,
    href: "/blog/unleashing-individual-potential",
  },
  {
    title: "Enhancing Learning Diversity: Exploring RIVER's MGML System for Educational Growth",
    image: blog4,
    href: "/blog/enhancing-learning-diversity",
  },
  {
    title: "Embarking on the Journey of Educational Excellence with RIVER: Recognising Achievements",
    image: blog6,
    href: "/blog/embarking-on-educational-excellence",
  },
  {
    title: "Fostering Community and Transforming Lives: The Impact of RIVER Schools",
    image: blog5,
    href: "/blog/fostering-community",
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
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Link
                to={item.href}
                onClick={() => window.scrollTo(0, 0)}
                className="group case-study-card overflow-hidden rounded-lg block"
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
              </Link>
            </motion.div>
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
