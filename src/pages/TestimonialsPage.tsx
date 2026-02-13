import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import dfidLogo from "@/assets/testimonial-dfid.png";
import worldbankLogo from "@/assets/testimonial-worldbank.png";
import unescoLogo from "@/assets/testimonial-unesco.png";
import iloLogo from "@/assets/testimonial-ilo.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const testimonials = [
  {
    quote:
      "RIVER programme is consistent with the idea of differentiated learning implicit in the Global Monitoring Report",
    source: "DFID",
    location: "UK",
    logo: dfidLogo,
  },
  {
    quote:
      "The rural education program has been a way of reviving the village commons. The strong focus on ecology and soil conservation has helped to rejuvenate the rural environment",
    source: "The World Bank",
    logo: worldbankLogo,
  },
  {
    quote:
      "Rishi Valley Satellite Schools are a highly systematic and well performing cluster of MGT schools with cultural inputs into the curriculum, well-established time and learning material use routines, vertical grouping and community participation. Offshoot programs of RIVER with the highest learning scores in language and math in the country",
    source: "UNESCO",
    logo: unescoLogo,
  },
  {
    quote:
      "The Rishi Valley Institute of Educational Resources has emerged as an important centre for hands-on teacher training... The RVREC experimented with alternatives to the traditional textbook. The educational kit 'School-in-a-Box' is a major innovation in teaching/learning materials for multi-grade schools....",
    source: "The World Bank",
    logo: worldbankLogo,
  },
  {
    quote:
      "No school improvement initiative has as successfully designed an operational model for scaling up its innovations, as RIVER.",
    source: "ILO",
    logo: iloLogo,
  },
  {
    quote:
      "The RIVER's work has enormous potential for replication in the country. A majority of Indian rural schools are run by single teachers, thereby necessitating multi-grade teaching.",
    source: "The World Bank",
    logo: worldbankLogo,
  },
];

const TRUNCATE_LENGTH = 120;

const TestimonialCard = ({
  t,
  index,
}: {
  t: (typeof testimonials)[0];
  index: number;
}) => {
  const [expanded, setExpanded] = useState(false);
  const needsTruncation = t.quote.length > TRUNCATE_LENGTH;
  const displayText =
    !expanded && needsTruncation
      ? t.quote.slice(0, TRUNCATE_LENGTH) + "..."
      : t.quote;

  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-secondary/30 rounded-xl p-8 flex flex-col justify-between"
    >
      {/* Quote icon */}
      <div className="mb-6">
        <svg
          width="40"
          height="32"
          viewBox="0 0 40 32"
          fill="none"
          className="text-primary/15"
        >
          <path
            d="M0 32V19.2C0 15.467 0.533 12.133 1.6 9.2C2.667 6.267 4.4 3.6 6.8 1.2L12 4.8C10.267 6.8 8.933 8.933 8 11.2C7.067 13.467 6.6 15.733 6.6 18H16V32H0ZM24 32V19.2C24 15.467 24.533 12.133 25.6 9.2C26.667 6.267 28.4 3.6 30.8 1.2L36 4.8C34.267 6.8 32.933 8.933 32 11.2C31.067 13.467 30.6 15.733 30.6 18H40V32H24Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Quote text */}
      <blockquote className="text-foreground leading-relaxed flex-1 mb-2 text-[15px]">
        {displayText}
      </blockquote>

      {needsTruncation && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-primary font-semibold text-sm mb-6 text-left hover:underline"
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      )}
      {!needsTruncation && <div className="mb-6" />}

      {/* Logo + source */}
      <div className="flex items-center gap-3 pt-4 border-t border-border/50">
        <img
          src={t.logo}
          alt={t.source}
          className="w-10 h-10 object-contain rounded"
        />
        <div>
          <p className="font-semibold text-foreground text-sm">{t.source}</p>
          {t.location && (
            <p className="text-muted-foreground text-xs">{t.location}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header isInnerPage />

      {/* Hero */}
      <section className="pt-32 pb-8 section-cream">
        <div className="container-wide">
          <motion.h1
            {...fadeUp}
            className="heading-section text-foreground mb-6"
          >
            Testimonials
          </motion.h1>

          {/* Tab indicator */}
          <div className="border-b border-border">
            <span className="inline-block pb-3 border-b-2 border-foreground font-semibold text-foreground text-sm tracking-wide">
              Testimonials
            </span>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} t={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestimonialsPage;
