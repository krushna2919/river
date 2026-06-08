import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import NYTArticleModal from "@/components/NYTArticleModal";
import { useHomePage } from "@/hooks/useHomePage";

const NYTimesSpotlight = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [articleOpen, setArticleOpen] = useState(false);
  const { data } = useHomePage();
  const n = data?.nytSpotlight;

  const publication = n?.publication ?? "The New York Times";
  const heading = n?.heading ?? "Teaching children regardless of grade";
  const quotes = n?.quotes ?? [];
  const ctaLabel = n?.ctaLabel ?? "Read article";
  const statValue = n?.statValue ?? "30%";
  const statCaption = n?.statCaption ?? "Lower dropout rates compared to nearby public schools";

  return (
    <section className="py-20 md:py-28 section-dark" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <span className="font-heading text-2xl md:text-3xl italic text-white/90">
                {publication}
              </span>
            </div>

            <h3 className="heading-section text-white mb-8">{heading}</h3>

            <div className="text-primary text-6xl font-heading mb-4">"</div>

            <div className="space-y-6 text-white/80 text-lg md:text-xl leading-relaxed font-light">
              {quotes.map((q, idx) => (
                <p key={idx}>{q}</p>
              ))}
            </div>

            <button
              onClick={() => setArticleOpen(true)}
              className="inline-flex items-center gap-2 text-primary font-semibold uppercase text-sm tracking-wider mt-8 hover:gap-3 transition-all"
            >
              {ctaLabel}
              <span>→</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-4xl font-heading">{statValue}</span>
                </div>
                <p className="text-white/80 text-lg">{statCaption}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <NYTArticleModal open={articleOpen} onOpenChange={setArticleOpen} />
    </section>
  );
};

export default NYTimesSpotlight;
