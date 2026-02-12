import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ChevronDown, ChevronUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import methodologyImage from "@/assets/methodology-image.jpg";

const WhatWeDo = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

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
            What We Do
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-8"
          >
            Methodology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed mb-10"
          >
            RIVER has created a one-of-a-kind system for elementary education after two decades of sustained effort and research. The structure consists of a network of satellite schools where village youth are trained in a specially designed education methodology, known as the multi-grade, multi-level (MGML), to teach a community-based curriculum.
          </motion.p>
        </div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="container-wide max-w-4xl mx-auto"
        >
          <div className="relative group">
            <img
              src={methodologyImage}
              alt="With RIVER's MGML Teaching methodology, students advance at their own speed"
              className="w-full h-auto rounded-lg object-cover"
            />
            <button
              onClick={() => setEnlargedImage(methodologyImage)}
              className="absolute bottom-4 right-4 bg-terracotta hover:bg-terracotta/90 text-white p-2 rounded-md transition-all opacity-80 group-hover:opacity-100"
              aria-label="Enlarge image"
            >
              <Maximize2 size={20} />
            </button>
          </div>
        </motion.div>

        <div className="container-wide max-w-4xl mx-auto mt-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground italic text-base md:text-lg"
          >
            With RIVER's MGML Teaching methodology, students advance at their own speed, and instructors can devote more one-on-one time to them.
          </motion.p>
        </div>
      </section>

      {/* Expandable MGML Description */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-wide max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Generally, in rural elementary schools, one or two teachers educate children from different grades in a single classroom, creating an inertia-filled environment that results in delayed or non-existent growth in the early grades. It is widely believed that teacher-led education results in a passive classroom, whereas textbooks alone are incapable of conveying the complexities of the local context and culture. Communities have a very limited or non-existent stake in the education of their children leading to learning gaps and high-dropout rates.
            </p>

            <AnimatePresence>
              {isExpanded && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-lg text-muted-foreground leading-relaxed mb-6"
                >
                  RIVER's multi-grade, multi-level (MGML) teaching system addresses rural education's most pressing concerns. This strategy allows students to progress at their own pace and teachers to spend more time with individual students, while simultaneously promoting teamwork and teacher capacity building. This method makes the teacher a mentor, friend, storyteller, and creative. In RIVER classrooms, everyone is both a teacher and a learner at some point. This method measures — what is learned, not what has been taught.
                </motion.p>
              )}
            </AnimatePresence>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 text-primary font-semibold uppercase text-sm tracking-wider hover:gap-3 transition-all"
            >
              {isExpanded ? "Read Less" : "Read More"}
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Methodology Flow Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-section text-foreground mb-6 lg:hidden">
                Methodology Flow
              </h2>
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                <p className="text-muted-foreground italic text-center px-8">
                  The methodology highlights a seamless web of learning from preschool to grade 5.
                </p>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="heading-section text-foreground mb-6 hidden lg:block">
                Methodology Flow
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A typical MGML classroom walls are covered with Ladder graphics, and with shelves containing cards. Multiple low-placed blackboards allow each child to write, sparking significant peer discussions. Children's drawings, paper folds, and miscellaneous objects hang from the ceiling. Children sit in clusters on the floor. Teachers move between these groups.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                RIVER classrooms can accommodate up to 45 students but typically have 30-35, and are frequently divided into four sections based on student need and progress: a teacher-directed group for introductory activities or concepts; a partially teacher-supported group; a peer-supported group; and a self-supported or self-directed group.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trans-creation Section */}
      <section className="py-16 md:py-24 section-cream">
        <div className="container-wide max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The MGML teaching methodology is encapsulated in a seamless web of time and interaction, starting from preschool or kindergarten and extending up to grade 4 or even 5. The curriculum based on this approach is founded on locally relevant knowledge, skills, and information, considering the child's context. Through a process of "trans-creation," key concepts such as language, mathematics, health, and environmental awareness are reimagined in a set of relevant and meaningful experiences rooted in local events, history, culture, and customs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The village life is integrated into learning as much as possible. For example, language lessons incorporate important local topics such as farming, animals, and events. Mathematics concepts are taught using real-life situations, such as counting, combining, and sorting rice/seeds, stones, friends, goats, and pine cones. In a country with many reasons to celebrate—harvest, birth, good rains—the programme has found a way to involve children and the community in celebrating the metric system. 'Metric Mela,' a community-based event celebrating arithmetic, is part of the learning activities.
              </p>
            </motion.div>

            {/* Right - Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                <p className="text-muted-foreground italic text-center px-8">
                  Local context drives arithmetic problem solving for students.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Ladder Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-section text-foreground mb-6 lg:hidden">
                Learning Ladder
              </h2>
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                <p className="text-muted-foreground italic text-center px-8">
                  Personalised learning progression in MGML methodology.
                </p>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="heading-section text-foreground mb-6 hidden lg:block">
                Learning Ladder
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                RIVER's learning methodology provides activity-rich programmes that are both highly structured and flexible. Each student has a personalised learning path, carefully planned and assessed through a subject-specific 'learning ladder' chart. The methodology follows a regimented path shared by all students, but the pace is individualised to meet each student's needs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each subject has its own dedicated learning ladder, including language, mathematics, and environmental science. The ladder is a specific series of steps and instructions for both teacher and student, indicating exercise styles, levels of competence, and grouping plans. The chart uses a succession of animal and insect icons to show progress, assessments, and results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Ladder Detail Section */}
      <section className="py-16 md:py-24 section-cream">
        <div className="container-wide max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The 'learning ladder' visualises a subject-specific sequence of progress steps that learners must complete. Each benchmark covers activities from introduction to practice and evaluation. The ladder captures the child's progress in a simple visual display that conveys a sense of achievement. The programme offers 40% of ladder areas to teachers for customisation. This allows them to add local content or activities tailored to student needs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The MGML approach is known for its adaptability, with teachers able to skip activities for fast learners or add activities to fill learning gaps. The methodology has become a multi-dimensional alternative to traditional schooling, thanks to its experiential learning and reflective approach. It has gained acceptance in various educational settings, from government and non-governmental organisations to private urban schools, and found acceptance in other settings and contexts.
              </p>
            </motion.div>

            {/* Right - Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                <p className="text-muted-foreground italic text-center px-8">
                  Personalised learning progression in MGML methodology.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-16 bg-background">
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

export default WhatWeDo;
