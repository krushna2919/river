import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/rishi-valley-school-hero.png";

const RishiValleySchool = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Rishi Valley School outdoor learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white text-center px-4"
          >
            Rishi Valley School
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* Founding */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              The Rishi Valley School was founded in 1926 by J. Krishnamurti, widely considered 
              one of the twentieth century's greatest philosophical and spiritual luminaries. 
              The school functions under the aegis of the Rishi Valley Education Centre (RVEC), 
              an initiative of the Krishnamurti Foundation India.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Rishi Valley School strives to incorporate J. Krishnamurti's thought-provoking 
              educational vision in its daily learning practices.
            </p>

            {/* Location */}
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mt-12 mb-6">
              The Campus
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Rishi Valley School campus is in a sheltered valley near the Eastern Ghats 
              in rural Andhra Pradesh.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Rishi Valley School is nestled in a sheltered valley at the edge of the 
              Eastern Ghats in rural Andhra Pradesh, roughly 15 kilometres north of Madanapalle 
              and 140 kilometres north of Bangalore. The school's location, chosen by 
              Krishnamurti for its unique environment of peace and tranquillity, was an 
              undulating landscape of fields, rain-fed streams, and scattered villages, 
              surrounded by ancient granite hills with striking rock formations.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              In a drought-prone area, the hill slopes are sparse in vegetation, and the 
              valley floor is dotted with an occasional banyan or tamarind tree. Years of 
              sustained reforestation and water conservation measures have transformed the 
              campus into a beautiful landscape. Rishi Valley was officially designated a 
              bird sanctuary in 1991 and cited by the International Council for Bird Preservation.
            </p>

            {/* Krishnamurti's Legacy */}
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mt-12 mb-6">
              Krishnamurti's Legacy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Until his passing in 1986, Krishnamurti spent practically every winter in 
              Rishi Valley. He did not establish a 'blue-print' for what a school should be. 
              His inquiry into the human condition and educational insights were passed down 
              through multiple generations of students, teachers, and others concerned in 
              sustainability, and continue to serve as the foundation for the institution 
              and all of its endeavours.
            </p>

            {/* School Today */}
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mt-12 mb-6">
              The School Today
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Rishi Valley School, affiliated to the ICSE Board, has 350+ boarding students 
              from various Indian states and over fifty highly competent faculty members. 
              The school, regarded as one of the leading residential schools in India, offers 
              a unique educational atmosphere in which young people can grow not just 
              intellectually, but also in other dimensions of their being. The school's 
              instructional programme has seen significant evolution, including pioneering 
              advances in educational techniques, infrastructure development, and a meaningful 
              curriculum that is reviewed and revised on a regular basis.
            </p>

            {/* Blockquote */}
            <blockquote className="border-l-4 border-terracotta pl-6 my-10 italic text-xl text-foreground/80">
              Education at Rishi Valley School focuses on peaceful coexistence with nature 
              and its flora and fauna.
            </blockquote>

            {/* Mission */}
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mt-12 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Rishi Valley School aims to cultivate self-aware, responsible, and sensitive 
              individuals committed to lifelong learning. The school strives to awaken students' 
              intelligence and generosity of spirit, enabling them to confront an increasingly 
              complex world without losing their sense of humanity.
            </p>

            {/* Rural Development */}
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mt-12 mb-6">
              Rural Development Initiatives
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Rishi Valley Education Centre (RVEC) also runs rural development initiatives, 
              such as the Rishi Valley Rural Education Centre (REC), which consists of RIVER 
              (Rishi Valley Institute for Educational Resources), a residential middle school 
              for students from the immediate neighbourhood, and seven 'Satellite Primary Schools' 
              and two 'Pre-Primary Schools'.
            </p>

            {/* Rural Health Centre */}
            <blockquote className="border-l-4 border-terracotta pl-6 my-10 italic text-xl text-foreground/80">
              The Rural Health Centre addresses healthcare of the population around Rishi Valley School.
            </blockquote>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Rishi Valley Education Centre (RVEC) established the Rural Health Centre (RHC) 
              in 1999 to serve the needs of the rural people in the areas surrounding Rishi Valley 
              School. The centre treats 22,000 patients annually from 60 revenue villages across 
              neighbouring districts.
            </p>
          </motion.div>

          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <a
              href="/"
              className="inline-flex items-center gap-2 text-terracotta font-semibold uppercase text-sm tracking-wider hover:gap-3 transition-all"
            >
              <span>←</span>
              Back to Home
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RishiValleySchool;
