import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import methodologyImage from "@/assets/methodology-image.jpg";

const Methodology = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="methodology" className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="heading-subsection block mb-4">Methodology</span>
            <h2 className="heading-section text-foreground mb-6">
              Discover MGML: Revolutionising Learning for Every Child
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Experience the transformative power of MGML methodology that revolutionises 
              education, empowering every child to learn, grow, and excel. Explore our 
              innovative approach and unlock limitless possibilities today.
            </p>
            <a
              href="/methodology"
              className="inline-flex items-center gap-2 text-primary font-semibold uppercase text-sm tracking-wider hover:gap-3 transition-all"
            >
              View more
              <span>→</span>
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={methodologyImage}
                alt="Children learning with MGML methodology"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
