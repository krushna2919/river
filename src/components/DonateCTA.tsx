import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const DonateCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="donate" className="py-20 md:py-32 section-dark" ref={ref}>
      <div className="container-narrow text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="heading-section text-white mb-6"
        >
          Transform Lives with Your Contribution
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          By becoming a donor, you can make a profound difference in the lives of many children, 
          helping us transform communities and create lasting impact. Join us today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/donate" onClick={() => window.scrollTo(0, 0)} className="btn-terracotta inline-block">
            Donate Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DonateCTA;
