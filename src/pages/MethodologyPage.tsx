import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import heroImg from "@/assets/methodology-hero.jpg";
import flow1 from "@/assets/methodology-flow-1.png";
import flow2 from "@/assets/methodology-flow-2.png";
import ladder1 from "@/assets/methodology-ladder-1.png";
import ladder2 from "@/assets/methodology-ladder-2.jpg";
import gallery1 from "@/assets/methodology-gallery-1.jpg";
import gallery2 from "@/assets/methodology-gallery-2.jpg";
import gallery3 from "@/assets/methodology-gallery-3.jpg";
import gallery4 from "@/assets/methodology-gallery-4.jpg";
import riverGallery1 from "@/assets/river-gallery-1.jpg";
import riverGallery2 from "@/assets/river-gallery-2.jpg";
import riverGallery3 from "@/assets/river-gallery-3.jpg";
import riverGallery4 from "@/assets/river-gallery-4.jpg";

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
  { src: riverGallery4, caption: "Balancing fun and learning: Children take a break, bonding with pet dogs, fostering empathy and responsibility." },
  { src: riverGallery3, caption: "Transformative education: RIVER students are benefited by the holistic and inclusive MGML learning approach." },
  { src: riverGallery2, caption: "Hands-on arithmetic: Mastering concepts through tactile learning with the help of pebbles." },
  { src: riverGallery1, caption: "In MGML learning, children embrace local culture and context through interactive classroom activities." },
  { src: gallery4, caption: "Nourishing young minds: Nutritious mid-day meals play a significant role in rural education scenarios." },
];

const MethodologyPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

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
            Methodology
          </motion.h1>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-12">
            RIVER has created a one-of-a-kind system for elementary education after two decades of sustained effort and research. The structure consists of a network of satellite schools where village youth are trained in a specially designed education methodology, known as the multi-grade, multi-level (MGML), to teach a community-based curriculum.
          </motion.p>
          <motion.img {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} src={heroImg} alt="MGML methodology classroom" className="w-full rounded-xl" />
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.25 }} className="text-muted-foreground text-sm italic mt-4 max-w-3xl mx-auto">
            With RIVER's MGML Teaching methodology, students advance at their own speed, and instructors can devote more one-on-one time to them.
          </motion.p>
        </section>

        {/* Description with Read More */}
        <section className="container-wide max-w-4xl mx-auto mb-16 md:mb-24">
          <motion.p {...fadeUp} className="text-muted-foreground leading-relaxed mb-4">
            Generally, in rural elementary schools, one or two teachers educate children from different grades in a single classroom, creating an inertia-filled environment that results in delayed or non-existent growth in the early grades. It is widely believed that teacher-led education results in a passive classroom, whereas textbooks alone are incapable of conveying the complexities of the local context and culture.
          </motion.p>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="text-muted-foreground leading-relaxed mb-4">
              RIVER's multi-grade, multi-level (MGML) teaching system addresses rural education's most pressing concerns. This strategy allows students to progress at their own pace and teachers to spend more time with individual students, while simultaneously promoting teamwork and teacher capacity building.
            </p>
            {expanded && (
              <p className="text-muted-foreground leading-relaxed mb-4">
                This method makes the teacher a mentor, friend, storyteller, and creative. In RIVER classrooms, everyone is both a teacher and a learner at some point. This method measures — what is learned, not what has been taught.
              </p>
            )}
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-primary font-medium text-sm uppercase tracking-wider hover:underline"
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          </motion.div>
        </section>

        {/* Methodology Flow */}
        <section className="container-wide mb-16 md:mb-24">
          <motion.h2 {...fadeUp} className="font-heading text-2xl md:text-3xl text-foreground mb-8 text-center">
            Methodology Flow
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.img {...fadeUp} src={flow1} alt="Methodology flow diagram" className="w-full rounded-xl" />
            <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-sm italic">
              The methodology highlights a seamless web of learning from preschool to grade 5.
            </motion.p>
          </div>

          <motion.p {...fadeUp} className="text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
            A typical MGML classroom walls are covered with Ladder graphics, and with shelves containing cards. Multiple low-placed blackboards allow each child to write, sparking significant peer discussions. Children's drawings, paper folds, and miscellaneous objects hang from the ceiling. Children sit in clusters on the floor. Teachers move between these groups.
          </motion.p>

          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.05 }} className="text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-12">
            RIVER classrooms can accommodate up to 45 students but typically have 30-35, and are frequently divided into four sections based on student need and progress: a teacher-directed group for introductory activities or concepts; a partially teacher-supported group; a peer-supported group; and a self-supported or self-directed group.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.img {...fadeUp} src={flow2} alt="Local context arithmetic" className="w-full rounded-xl" />
            <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-sm italic">
              Local context drives arithmetic problem solving for students.
            </motion.p>
          </div>

          <motion.p {...fadeUp} className="text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-4">
            The MGML teaching methodology is encapsulated in a seamless web of time and interaction, starting from preschool or kindergarten and extending up to grade 4 or even 5. The curriculum is founded on locally relevant knowledge, skills, and information, considering the child's context.
          </motion.p>

          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.05 }} className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            The village life is integrated into learning as much as possible. Language lessons incorporate important local topics such as farming, animals, and events. Mathematics concepts are taught using real-life situations. 'Metric Mela,' a community-based event celebrating arithmetic, is part of the learning activities.
          </motion.p>
        </section>

        {/* Learning Ladder */}
        <section className="container-wide mb-16 md:mb-24">
          <motion.h2 {...fadeUp} className="font-heading text-2xl md:text-3xl text-foreground mb-8 text-center">
            Learning Ladder
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.img {...fadeUp} src={ladder1} alt="Learning ladder personalised progression" className="w-full rounded-xl" />
            <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-sm italic">
              Personalised learning progression in MGML methodology.
            </motion.p>
          </div>

          <motion.p {...fadeUp} className="text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-4">
            RIVER's learning methodology provides activity-rich programmes that are both highly structured and flexible. Each student has a personalised learning path, carefully planned and assessed through a subject-specific 'learning ladder' chart. The methodology follows a regimented path shared by all students, but the pace is individualised to meet each student's needs.
          </motion.p>

          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.05 }} className="text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-12">
            Each subject has its own dedicated learning ladder, including language, mathematics, and environmental science. The ladder is a specific series of steps and instructions for both teacher and student, indicating exercise styles, levels of competence, and grouping plans. The chart uses a succession of animal and insect icons to show progress, assessments, and results.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.img {...fadeUp} src={ladder2} alt="Learning Ladder for Grade I Mathematics" className="w-full rounded-xl" />
            <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-sm italic">
              Learning Ladder for Grade I Mathematics.
            </motion.p>
          </div>

          <motion.p {...fadeUp} className="text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-4">
            The 'learning ladder' visualises a subject-specific sequence of progress steps that learners must complete. Each benchmark covers activities from introduction to practice and evaluation. The programme offers 40% of ladder areas to teachers for customisation, allowing them to add local content or activities tailored to student needs.
          </motion.p>

          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.05 }} className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            The MGML approach is known for its adaptability, with teachers able to skip activities for fast learners or add activities to fill learning gaps. It has gained acceptance in various educational settings, from government and non-governmental organisations to private urban schools, and found acceptance in other settings and contexts.
          </motion.p>
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

export default MethodologyPage;
