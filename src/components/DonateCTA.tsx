import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useHomePage } from "@/hooks/useHomePage";

const DonateCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { data } = useHomePage();
  const d = data?.donateCta;

  const title = d?.title ?? "Transform Lives with Your Contribution";
  const body = d?.body ?? "";
  const ctaLabel = d?.ctaLabel ?? "Donate Now";
  const ctaHref = d?.ctaHref ?? "/donate";

  return (
    <section id="donate" className="py-20 md:py-32 section-dark" ref={ref}>
      <div className="container-narrow text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="heading-section text-white mb-6"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          {body}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to={ctaHref} onClick={() => window.scrollTo(0, 0)} className="btn-terracotta inline-block">
            {ctaLabel}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DonateCTA;
