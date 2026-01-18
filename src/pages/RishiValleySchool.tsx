import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/rishi-valley-school-hero.png";

const RishiValleySchool = () => {
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header isInnerPage />
      
      {/* Hero Section - Header structure */}
      <section className="pt-24 md:pt-28 pb-8 bg-background">
        <div className="container-wide max-w-4xl mx-auto">
          {/* ABOUT US Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-terracotta font-semibold uppercase tracking-wider text-sm mb-4"
          >
            About Us
          </motion.p>
          
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-8"
          >
            Rishi Valley School
          </motion.h1>
        </div>
        
        {/* Image - Centered with enlarge button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container-wide max-w-4xl mx-auto"
        >
          <div className="relative group">
            <img
              src={heroImage}
              alt="Rishi Valley School outdoor learning"
              className="w-full h-auto rounded-lg object-cover"
            />
            {/* Enlarge Button */}
            <button
              onClick={() => setIsImageEnlarged(true)}
              className="absolute bottom-4 right-4 bg-terracotta hover:bg-terracotta/90 text-white p-2 rounded-md transition-all opacity-80 group-hover:opacity-100"
              aria-label="Enlarge image"
            >
              <Maximize2 size={20} />
            </button>
          </div>
        </motion.div>
        
        {/* Image Description in Italics */}
        <div className="container-wide max-w-4xl mx-auto mt-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground italic text-base md:text-lg"
          >
            Education at Rishi Valley School focuses on peaceful coexistence with nature and its flora and fauna.
          </motion.p>
          
          {/* J. Krishnamurti Quote */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-foreground leading-relaxed mt-8 font-medium"
          >
            Rishi Valley School strives to incorporate J. Krishnamurti's thought-provoking educational vision in its daily learning practices.
          </motion.p>
        </div>
      </section>

      {/* Enlarged Image Modal */}
      <AnimatePresence>
        {isImageEnlarged && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setIsImageEnlarged(false)}
          >
            <button
              onClick={() => setIsImageEnlarged(false)}
              className="absolute top-6 right-6 bg-terracotta hover:bg-terracotta/90 text-white p-2 rounded-md transition-all"
              aria-label="Close enlarged image"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={heroImage}
              alt="Rishi Valley School outdoor learning - enlarged"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>

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
