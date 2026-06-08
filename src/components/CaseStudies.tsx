import { motion, useInView } from "framer-motion";
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
import { useHomePage } from "@/hooks/useHomePage";
import { urlFor } from "@/lib/sanity";

type Item = { _key?: string; title: string; image?: { asset: { _ref: string; _type: "reference" } }; fallbackImage?: string; href: string };

const fallbackCaseStudies: Item[] = [
  { _key: "c1", title: "Snehabala and SLIM Cards for Competency-Based Learning in combined Andhra Pradesh: A Case Study", fallbackImage: caseStudyAndhra, href: "/case-studies/andhra-pradesh" },
  { _key: "c2", title: "Implementing Vertical Competency Based Learning in Bihar: A Case Study", fallbackImage: caseStudyBihar, href: "/case-studies/bihar" },
  { _key: "c3", title: "Multi-Grade, Multi-Level (MGML) learning in Jharkhand: A Case Study", fallbackImage: caseStudyJharkhand, href: "/case-studies/jharkhand" },
];

const fallbackBlogPosts: Item[] = [
  { _key: "b1", title: "Unlocking the Potential of RIVER's MGML Methodology: Harnessing Local Knowledge and Experiences", fallbackImage: blog2, href: "/blog/unlocking-mgml-methodology" },
  { _key: "b2", title: "Unleashing Individual Potential: Exploring RIVER's Structured Learning Path", fallbackImage: blog3, href: "/blog/unleashing-individual-potential" },
  { _key: "b3", title: "Enhancing Learning Diversity: Exploring RIVER's MGML System for Educational Growth", fallbackImage: blog4, href: "/blog/enhancing-learning-diversity" },
  { _key: "b4", title: "Embarking on the Journey of Educational Excellence with RIVER: Recognising Achievements", fallbackImage: blog6, href: "/blog/embarking-on-educational-excellence" },
  { _key: "b5", title: "Fostering Community and Transforming Lives: The Impact of RIVER Schools", fallbackImage: blog5, href: "/blog/fostering-community" },
];

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"case-studies" | "blog">("case-studies");
  const { data } = useHomePage();
  const c = data?.caseStudiesSection;

  const heading = c?.heading ?? "Case Studies";
  const caseStudies: Item[] = c?.caseStudies?.length ? c.caseStudies : fallbackCaseStudies;
  const blogPosts: Item[] = c?.blogPosts?.length ? c.blogPosts : fallbackBlogPosts;
  const csViewAll = c?.caseStudiesViewAllHref ?? "/case-studies";
  const blogViewAll = c?.blogViewAllHref ?? "/blog";

  const items = activeTab === "case-studies" ? caseStudies : blogPosts;
  const resolveImage = (item: Item) =>
    item.image ? urlFor(item.image).width(800).auto("format").url() : item.fallbackImage ?? "";

  return (
    <section className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="heading-section text-foreground text-center mb-12"
        >
          {heading}
        </motion.h2>

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

        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.slice(0, 3).map((item, index) => (
            <motion.div
              key={item._key ?? item.title}
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
                  <img src={resolveImage(item)} alt={item.title} className="w-full h-full object-cover" />
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href={activeTab === "case-studies" ? csViewAll : blogViewAll}
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
