import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import methodologyImage from "@/assets/methodology-image.jpg";
import { useHomePage } from "@/hooks/useHomePage";
import { urlFor } from "@/lib/sanity";

const Methodology = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { data } = useHomePage();
  const m = data?.methodology;

  const eyebrow = m?.eyebrow ?? "Methodology";
  const title = m?.title ?? "Discover MGML: Revolutionising Learning for Every Child";
  const body = m?.body ?? "";
  const imageUrl = m?.image ? urlFor(m.image).width(1200).auto("format").url() : methodologyImage;
  const imageAlt = m?.imageAlt ?? "Children learning with MGML methodology";
  const linkLabel = m?.linkLabel ?? "View more";
  const linkHref = m?.linkHref ?? "/methodology";

  return (
    <section id="methodology" className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="heading-subsection block mb-4">{eyebrow}</span>
            <h2 className="heading-section text-foreground mb-6">{title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{body}</p>
            <a
              href={linkHref}
              className="inline-flex items-center gap-2 text-primary font-semibold uppercase text-sm tracking-wider hover:gap-3 transition-all"
            >
              {linkLabel}
              <span>→</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
