import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const testimonials = [
  {
    quote: "RIVER programme is consistent with the idea of differentiated learning implicit in the Global Monitoring Report",
    source: "DFID",
    location: "UK",
  },
  {
    quote: "The rural education program has been a way of reviving the village commons. The strong focus on ecology and soil conservation has helped to rejuvenate the rural environment",
    source: "The World Bank",
  },
  {
    quote: "Rishi Valley Satellite Schools are a highly systematic and well performing cluster of MGT schools with cultural inputs into the curriculum, well-established time and learning material use routines, vertical grouping and community participation. Offshoot programs of RIVER with the highest learning scores in language and math in the country",
    source: "UNESCO",
  },
  {
    quote: "The Rishi Valley Institute of Educational Resources has emerged as an important centre for hands-on teacher training... The RVREC experimented with alternatives to the traditional textbook. The educational kit 'School-in-a-Box' is a major innovation in teaching/learning materials for multi-grade schools.",
    source: "The World Bank",
  },
  {
    quote: "No school improvement initiative has as successfully designed an operational model for scaling up its innovations, as RIVER.",
    source: "ILO",
  },
  {
    quote: "The RIVER's work has enormous potential for replication in the country. A majority of Indian rural schools are run by single teachers, thereby necessitating multi-grade teaching.",
    source: "The World Bank",
  },
];

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header isInnerPage />

      {/* Hero */}
      <section className="pt-32 pb-16 section-cream">
        <div className="container-wide">
          <motion.h1 {...fadeUp} className="heading-section text-foreground mb-4">
            Testimonials
          </motion.h1>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-secondary/30 rounded-xl p-8 flex flex-col"
              >
                <Quote className="w-10 h-10 text-primary/20 mb-4 shrink-0" />
                <blockquote className="text-foreground leading-relaxed flex-1 mb-6">
                  "{t.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-primary uppercase tracking-wider text-sm">{t.source}</p>
                  {t.location && <p className="text-muted-foreground text-sm">{t.location}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestimonialsPage;
