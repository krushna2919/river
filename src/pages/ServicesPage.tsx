import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import heroImg from "@/assets/services-hero.jpg";
import trainingImg from "@/assets/services-training.png";
import trainingPhoto from "@/assets/services-training-photo.png";
import modelSchoolImg from "@/assets/services-model-school.png";
import rtepImg from "@/assets/services-rtep.png";
import puppetryImg from "@/assets/services-puppetry.png";
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

const ServicesPage = () => {
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
            Services
          </motion.h1>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-12">
            Rishi Valley Institute for Educational Resources (RIVER) offers a range of services to revolutionise rural education, including training programmes, creative workshops, model schools, and follow-up support. The focus is on the multi-grade multi-level (MGML) methodology, the revolutionary teaching approach that emphasises hands-on, activity-based learning.
          </motion.p>
          <motion.img {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} src={heroImg} alt="Nurturing young minds through revolutionary teaching approaches" className="w-full rounded-xl" />
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.25 }} className="text-muted-foreground text-sm italic mt-4">
            Nurturing young minds through revolutionary teaching approaches.
          </motion.p>
        </section>

        {/* Training Programmes */}
        <section className="container-wide mb-16 md:mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <motion.div {...fadeUp}>
              <img src={trainingPhoto} alt="Training workshop in session" className="w-full rounded-xl" />
              <p className="text-muted-foreground text-sm italic mt-4">
                Building capacity through workshops for innovative teaching approaches.
              </p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-6">
              <div className="flex gap-4">
                <span className="text-primary font-bold text-lg mt-0.5 shrink-0">•</span>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Capacity building through hands-on, activity-based training programmes:</strong> We provide comprehensive training to resource teachers in classroom transactions suited to the new methodology. Our three to five-day exposure visits acquaint teachers with an overall sense of the program, which they can then disseminate on their home ground.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-primary font-bold text-lg mt-0.5 shrink-0">•</span>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Creative forums for transcreation of learning material:</strong> We offer fifteen-day workshops for trained teachers to provide hands-on training in the multi-grade, multi-level methodology, and orient them in classroom management. We also provide long-term Designers' Workshops for creating multi-grade, multi-level learning materials in languages other than Telugu.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Model Schools */}
        <section className="container-wide mb-16 md:mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.img {...fadeUp} src={modelSchoolImg} alt="Model schools showcasing MGML methodology" className="w-full rounded-xl" />
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <p className="text-muted-foreground text-sm italic mb-6">
                Inspiring success: Model schools showcasing the power of MGML methodology.
              </p>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div {...fadeUp} className="flex gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 shrink-0">•</span>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Setting up 'Model Schools' for immediate demonstration:</strong> We provide living illustrations of a successful MGML classroom to serve as a learning model for teachers not exposed to the methodology. Our focus is on communicating to project administrators that the physical design of MGML classrooms is child-friendly and promotes a non-authoritarian pedagogy and a democratic spirit in schools.
              </p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.05 }} className="flex gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 shrink-0">•</span>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Follow-up support:</strong> We develop mechanisms of transparent evaluation and supportive monitoring, designing a monitoring and support supervision framework to monitor RIVER model classroom process. We also create tools for periodic classroom monitoring and support supervision to implement the RIVER model.
              </p>
            </motion.div>
          </div>
        </section>

        {/* RTEP */}
        <section className="container-wide mb-16 md:mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.img {...fadeUp} src={rtepImg} alt="Inspiring educators with innovative pedagogy" className="w-full rounded-xl" />
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <p className="text-muted-foreground text-sm italic">
                Inspiring educators with innovative pedagogy and best practices.
              </p>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeUp} className="flex gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 shrink-0">•</span>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Rishi Valley Teacher Enrichment Programme (RTEP):</strong> Based on the National Curriculum Framework for Teachers Education (NCFTE) 2009 and National Council for Teachers Education (NCTE) 2014, RTEP (duration: 6 months to a year) blends unique pedagogy with perspectives from great thinkers in education, government requirements, and best practices in teaching from diverse contexts. For a start, 7-day initial training for master-trainers are provided, including a face-to-face workshop and optional online modules. Consistent support is extended over 6 months for queries, doubts, clarifications, and suggestions to improve weekly.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Arts & Crafts */}
        <section className="container-wide mb-16 md:mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.img {...fadeUp} src={puppetryImg} alt="Learning through puppetry" className="w-full rounded-xl" />
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <p className="text-muted-foreground text-sm italic">
                Learning through puppetry: Reviving tradition and inspiring participation.
              </p>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div {...fadeUp} className="flex gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 shrink-0">•</span>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Arts & Crafts programme:</strong> Offers a Panchatantra Puppetry and Crafts kit to introduce shadow puppetry, Andhra folk music, Indian classical music and language to first-generation children, while also reinforcing values in human behaviour through workbook exercises. Puppetry has become an integral part of the learning methodology in the Telugu-medium schools, motivating students to actively participate, reviving the dying art form of storytelling in rural areas, and creating opportunities for didactic theatre.
              </p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.05 }} className="flex gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 shrink-0">•</span>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Building a critical mass of people to sustain the spirit and vision of the project:</strong> Our three-day workshops for administrators provide insights into the organisational structure and working of the program.
              </p>
            </motion.div>
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

export default ServicesPage;
