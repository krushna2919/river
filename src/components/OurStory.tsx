import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import storyImage from "@/assets/our-story-home.png";
import { useHomePage } from "@/hooks/useHomePage";
import { urlFor } from "@/lib/sanity";

const OurStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { data } = useHomePage();
  const s = data?.ourStory;

  const eyebrow = s?.eyebrow ?? "Our Story";
  const title = s?.title ?? "Revolutionising Rural Education: Promoting Equity and Social Justice";
  const body = s?.body ?? "";
  const imageUrl = s?.image ? urlFor(s.image).width(1200).auto("format").url() : storyImage;
  const imageAlt = s?.imageAlt ?? "Children learning in rural classroom";
  const linkLabel = s?.linkLabel ?? "View more";
  const linkHref = s?.linkHref ?? "/our-story";

  return (
    <section id="story" className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
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
        </div>
      </div>
    </section>
  );
};

export default OurStory;
