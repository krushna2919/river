import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "The rural education program has been a way of reviving the village commons. The strong focus on ecology and soil conservation has helped to rejuvenate the rural environment",
    source: "The World Bank",
  },
  {
    quote: "No school improvement initiative has as successfully designed an operational model for scaling up its innovations, as RIVER.",
    source: "ILO",
  },
  {
    quote: "RIVER programme is consistent with the idea of differentiated learning implicit in the Global Monitoring Report",
    source: "DFID, UK",
  },
  {
    quote: "Rishi Valley Satellite Schools are a highly systematic and well performing cluster of MGT schools with cultural inputs into the curriculum, well-established time and learning material use routines, vertical grouping and community participation. Offshoot programs of RIVER with the highest learning scores in language and math in the country",
    source: "UNESCO",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-32 section-cream" ref={ref}>
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="heading-section text-foreground text-center mb-16"
        >
          Testimonials
        </motion.h2>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-12 rounded-lg shadow-soft text-center"
          >
            <blockquote className="quote-text text-foreground mb-6">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <cite className="not-italic font-semibold text-primary uppercase tracking-wider text-sm">
              {testimonials[currentIndex].source}
            </cite>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
