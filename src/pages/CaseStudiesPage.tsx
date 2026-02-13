import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import jharkhandImg from "@/assets/case-study-jharkhand.jpg";
import biharImg from "@/assets/case-study-bihar.jpg";
import andhraImg from "@/assets/case-study-andhra.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const caseStudies = [
  {
    image: jharkhandImg,
    title: "Multi-Grade, Multi-Level (MGML) Learning in Jharkhand: A Case Study",
    date: "September 2, 2022",
  },
  {
    image: biharImg,
    title: "Implementing Vertical Competency Based Learning in Bihar: A Case Study",
    date: "September 2, 2022",
  },
  {
    image: andhraImg,
    title: "Snehabala and SLIM Cards for Competency-Based Learning in combined Andhra Pradesh: A Case Study",
    date: "September 2, 2022",
  },
];

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header isInnerPage />

      {/* Hero */}
      <section className="pt-32 pb-16 section-cream">
        <div className="container-wide">
          <motion.h1 {...fadeUp} className="heading-section text-foreground mb-4">
            Case Studies
          </motion.h1>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-cormorant text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {study.title}
                </h3>
                <p className="text-muted-foreground text-sm">{study.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
