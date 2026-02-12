import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const chronologyData = [
  { year: "1976", event: "REC established with first satellite schools" },
  { year: "1988", event: "School in a Box methodology developed" },
  { year: "1994", event: "Nalli Kalli program launched in Karnataka" },
  { year: "2004", event: "SSA-UNICEF nationwide quality package project" },
  { year: "2009", event: "Schwab Foundation Social Entrepreneur Award" },
  { year: "2011", event: "Jindal Prize for MGML methodology" },
];

const AboutUs = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header isInnerPage />

      {/* Hero Section */}
      <section className="pt-24 md:pt-28 pb-8 bg-background">
        <div className="container-wide max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-terracotta font-semibold uppercase tracking-wider text-sm mb-4"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-8"
          >
            Reasons For Existence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed mb-10"
          >
            The Rishi Valley Rural Education Centre (REC) consists of RIVER (Rishi Valley Institute for Educational Resources), a residential Middle School, and twelve Satellite Schools, working together to revolutionize education in rural India.
          </motion.p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
                  <p className="text-muted-foreground italic text-center px-8">
                    Community-based education in action
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="heading-subsection block mb-4">Our Approach</span>
              <h2 className="heading-section text-foreground mb-6">
                Collaboration with the Community
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                One decade after the approach was adopted in schools run by the Rishi Valley Rural Education Centre, dropout rates were 30 percent lower than in nearby public schools, while student achievement was significantly higher. The MGML methodology has proven that quality education is possible even in the most resource-constrained settings.
              </p>
              <a
                href="/what-we-do"
                className="inline-flex items-center gap-2 text-primary font-semibold uppercase text-sm tracking-wider hover:gap-3 transition-all"
              >
                Read More
                <span>→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chronology Section */}
      <section className="py-16 md:py-24 section-cream">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="heading-subsection block mb-4">Chronology</span>
            <h2 className="heading-section text-foreground">
              Our Journey
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            <div className="space-y-8">
              {chronologyData.map((milestone, index) => (
                <motion.div
                  key={milestone.year + index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background" />
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <span className="text-primary font-serif font-bold text-xl">
                      {milestone.year}
                    </span>
                    <p className="text-muted-foreground mt-1">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Krishnamurti Foundation India Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="heading-subsection block mb-4">
              Krishnamurti Foundation India
            </span>
            <h2 className="heading-section text-foreground mb-8">
              Collaboration with the Foundation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              The Rishi Valley Education Centre functions under the aegis of the Krishnamurti Foundation India. J. Krishnamurti's educational philosophy emphasises the development of the whole human being — intellectually, emotionally, and in relationship with nature and society. This vision continues to guide all of REC's educational endeavours.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 text-primary font-semibold uppercase text-sm tracking-wider hover:gap-3 transition-all"
            >
              Read More
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Back Link */}
      <section className="pb-16 bg-background">
        <div className="container-wide max-w-4xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-terracotta font-semibold uppercase text-sm tracking-wider hover:gap-3 transition-all"
          >
            <span>←</span>
            Back to Home
          </a>
        </div>
      </section>

      {/* Enlarged Image Modal */}
      <AnimatePresence>
        {enlargedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setEnlargedImage(null)}
          >
            <button
              onClick={() => setEnlargedImage(null)}
              className="absolute top-6 right-6 bg-terracotta hover:bg-terracotta/90 text-white p-2 rounded-md transition-all"
              aria-label="Close enlarged image"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={enlargedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default AboutUs;
