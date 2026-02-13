import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import heroImg from "@/assets/siab-hero.jpg";
import howItWorks from "@/assets/siab-how-it-works.png";
import classroom from "@/assets/siab-classroom.png";
import gallery1 from "@/assets/methodology-gallery-1.jpg";
import gallery2 from "@/assets/methodology-gallery-2.jpg";
import gallery3 from "@/assets/methodology-gallery-3.jpg";
import gallery4 from "@/assets/river-gallery-4.jpg";
import gallery5 from "@/assets/river-gallery-3.jpg";
import gallery6 from "@/assets/river-gallery-2.jpg";
import gallery7 from "@/assets/river-gallery-1.jpg";
import gallery8 from "@/assets/methodology-gallery-4.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const galleryItems = [
  { src: gallery1, caption: "Breaks ensure students recharge and connect with nature, fostering a balanced and joyful learning environment." },
  { src: gallery2, caption: "Connecting with local wisdom: Students listen to a cowherd, blending traditional knowledge into their everyday learning." },
  { src: gallery3, caption: "Celebrating heritage through puppetry: Girl students discover culture and learning with joy." },
  { src: gallery4, caption: "Balancing fun and learning: Children take a break, bonding with pet dogs, fostering empathy and responsibility." },
  { src: gallery5, caption: "Transformative education: RIVER students are benefited by the holistic and inclusive MGML learning approach." },
  { src: gallery6, caption: "Hands-on arithmetic: Mastering concepts through tactile learning with the help of pebbles." },
  { src: gallery7, caption: "In MGML learning, children embrace local culture and context through interactive classroom activities." },
  { src: gallery8, caption: "Nourishing young minds: Nutritious mid-day meals play a significant role in rural education scenarios." },
];

const SchoolInABoxPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header isInnerPage />

      <main className="pt-28 md:pt-32 pb-20 md:pb-32">
        {/* Hero */}
        <section className="container-wide text-center mb-16 md:mb-24">
          <motion.span {...fadeUp} className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            What We Do
          </motion.span>
          <motion.h1 {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 italic">
            School in a Box
          </motion.h1>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-12">
            Rishi Valley Institute for Educational Resources (RIVER) developed the innovative 'School in a Box' educational kit in 1993 using the pioneering multi-grade, multi-level (MGML) approach after considerable research.
          </motion.p>
          <motion.img {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} src={heroImg} alt="School in a Box - children with educational kit" className="w-full rounded-xl" />
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.25 }} className="text-muted-foreground text-sm italic mt-4 max-w-3xl mx-auto">
            'School in a Box' revolutionises education by bringing learning to students in remote locations.
          </motion.p>
        </section>

        {/* Description */}
        <section className="container-wide max-w-4xl mx-auto mb-16 md:mb-24">
          <motion.p {...fadeUp} className="text-muted-foreground leading-relaxed">
            A community-based curriculum taught by village youth trained in multi-grade, multi-level methodologies, graded according to individual learning levels, grounded in current information, and presented in the local idiom, was advocated. The rural education kit is a practical and appealing alternative to traditional village schooling, where children of the same age have drastically disparate levels of understanding yet are forced to be on the same page by a single teacher.
          </motion.p>
        </section>

        {/* How it Works */}
        <section className="container-wide mb-16 md:mb-24">
          <motion.h2 {...fadeUp} className="font-heading text-2xl md:text-3xl text-foreground mb-8 text-center">
            How it Works
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.img {...fadeUp} src={howItWorks} alt="Learning Ladder trajectory chart" className="w-full rounded-xl" />
            <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-sm italic">
              'Learning Ladder', a trajectory chart, indicates students' learning progression.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.p {...fadeUp} className="text-muted-foreground leading-relaxed">
              The 'School in a Box' teaching kit substitutes language, math, and environmental science textbooks with meticulously graded cards. Each graded series card has a logo (rabbit, elephant, or dog) and a subject-specific 'Learning Ladder', a trajectory chart that indicates students' learning progression. Certified by the United Nations as a pedagogical innovation, the ladder's spaces are subdivided into a series of milestones.
            </motion.p>
            <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.05 }} className="text-muted-foreground leading-relaxed">
              These milestones feature activities and cards that describe a concept, cards to demonstrate how it's applied, cards to evaluate students' comprehension, and cards to provide opportunities for testing, remediation, or enrichment. Puppets, novels, folk art, folk songs, local myths and legends, studies on village life and natural environment are used to aid learning along with the card series in classrooms.
            </motion.p>
          </div>
        </section>

        {/* Classroom section */}
        <section className="container-wide mb-16 md:mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.img {...fadeUp} src={classroom} alt="MGML classroom approach" className="w-full rounded-xl" />
            <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-sm italic">
              MGML approach promotes individual learning, yet instructor supervision and group activity are essential components.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.p {...fadeUp} className="text-muted-foreground leading-relaxed">
              A student determines her position on the ladder and crafts her own path from grade one to grade five within the broad boundaries of the milestones. Teachers can use the empty areas on the ladder to incorporate independent content into the learning process. Indeed, the ladder can be structured in such a way that different trajectories are available for teachers and students to choose from, as long as the sequence required by academic disciplines is preserved.
            </motion.p>
            <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.05 }} className="text-muted-foreground leading-relaxed">
              Simultaneously, our approaches promote silent self-study and individualised learning, yet instructor teaching and group activity are equally essential components of the learning process. The system allows rapid learners to grow while allowing slower learners to work at their own speed. Students absent from school do not lose out, as they are able to start from the space in the 'Learning Ladder' where they left off.
            </motion.p>
          </div>
        </section>

        {/* Gallery */}
        <section className="container-wide">
          <motion.h2 {...fadeUp} className="font-heading text-2xl md:text-3xl text-foreground mb-10 text-center">
            Gallery
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="overflow-hidden rounded-xl mb-3">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.caption}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/gallery" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-2 text-terracotta font-semibold uppercase text-sm tracking-wider hover:gap-3 transition-all">
              View All
              <span>→</span>
            </Link>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={galleryItems[selectedImage].src}
              alt={galleryItems[selectedImage].caption}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default SchoolInABoxPage;
