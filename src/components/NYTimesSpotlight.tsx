import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const NYTimesSpotlight = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 section-dark" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* NY Times Quote */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* NY Times Logo Placeholder */}
            <div className="mb-8">
              <span className="font-heading text-2xl md:text-3xl italic text-white/90">
                The New York Times
              </span>
            </div>

            <h3 className="heading-section text-white mb-8">
              Teaching children regardless of grade
            </h3>

            {/* Quote Icon */}
            <div className="text-primary text-6xl font-heading mb-4">"</div>

            <div className="space-y-6 text-white/80 text-lg md:text-xl leading-relaxed font-light">
              <p>
                "To help children relate to concepts, activities incorporate local dialects, 
                folklore and natural materials from the local environment. The curriculum 
                also incorporates community festivals and group activities .…."
              </p>
              <p>
                "One decade after the approach was adopted in schools run by the Rishi Valley 
                Rural Education Center, dropout rates were 30 percent lower than in nearby 
                public schools, while student achievement in reading and math was up to 
                40 percent higher..…"
              </p>
            </div>

            <motion.a
              href="#"
              className="inline-flex items-center gap-2 text-primary font-semibold uppercase text-sm tracking-wider mt-8 hover:gap-3 transition-all"
            >
              Read article
              <span>→</span>
            </motion.a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-4xl font-heading">30%</span>
                </div>
                <p className="text-white/80 text-lg">
                  Lower dropout rates compared to nearby public schools
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NYTimesSpotlight;
