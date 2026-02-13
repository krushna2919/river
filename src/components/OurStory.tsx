import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import storyImage from "@/assets/our-story-home.png";

const OurStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={storyImage}
                alt="Children learning in rural classroom"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="heading-subsection block mb-4">Our Story</span>
            <h2 className="heading-section text-foreground mb-6">
              Revolutionising Rural Education: Promoting Equity and Social Justice
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              The Rishi Valley Rural Education Centre has spearheaded a rural revolution 
              since 1976 with its widely acclaimed educational initiatives and inclusive 
              teaching methods, fostering social justice and equal opportunities.
            </p>
            <a
              href="#methodology"
              className="inline-flex items-center gap-2 text-primary font-semibold uppercase text-sm tracking-wider hover:gap-3 transition-all"
            >
              View more
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
