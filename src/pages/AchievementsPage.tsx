import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { sanityClient, urlFor } from "@/lib/sanity";
import achievementsHero from "@/assets/achievements-hero.jpg";
import recognitionImg from "@/assets/achievements-recognition.png";
import gallery1 from "@/assets/methodology-gallery-1.jpg";
import gallery2 from "@/assets/methodology-gallery-2.jpg";
import gallery3 from "@/assets/methodology-gallery-3.jpg";
import gallery4 from "@/assets/river-gallery-4.jpg";
import gallery5 from "@/assets/river-gallery-3.jpg";
import gallery6 from "@/assets/river-gallery-2.jpg";
import gallery7 from "@/assets/river-gallery-1.jpg";
import gallery8 from "@/assets/methodology-gallery-4.jpg";

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

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const recognitionPoints = [
  'MGML seems to be key in making teachers more friendly and making classrooms attractive and "free from fear and anxiety." It also improves social equity by reducing learning gaps among students, promoting social interaction, and reducing social barriers and discrimination.',
  "MGML enables every child to participate in activities, games, and songs, interact within groups, move at their own pace, and track their own learning progress. It also provides a simple model of how to integrate continuous assessment into children's everyday learning to check for understanding.",
  "Several studies identified a direct positive correlation between features of MGML (e.g., low-level blackboards, display of children's work, use of TLMs, peer interaction, group work, fear-free assessment, children's enjoyment and confidence in learning), and increased learning outcomes for children.",
];

type Achievement = {
  _id: string;
  title: string;
  image: unknown;
  caption: string;
  body: string;
  order: number;
};

const QUERY = `*[_type == "achievement"] | order(order asc) { _id, title, image, caption, body, order }`;

const AchievementsPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { data: sections = [] } = useQuery<Achievement[]>({
    queryKey: ["achievements"],
    queryFn: () => sanityClient.fetch(QUERY),
  });

  return (
    <div className="min-h-screen bg-background">
      <Header isInnerPage />

      {/* Hero */}
      <section className="pt-32 pb-16 section-cream">
        <div className="container-wide text-center">
          <motion.span {...fadeUp} className="heading-subsection block mb-4">
            Our Impact
          </motion.span>
          <motion.h1 {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="heading-section text-foreground max-w-4xl mx-auto mb-8">
            Achievements
          </motion.h1>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            RIVER (Rishi Valley Institute for Educational Resources)'s Multi-Grade Multi-Level (MGML) methodology is an innovative teaching programme that has impacted over 250,000 schools in India, leading to the training of 500,000 teachers over 3,300 training days and impacting 12,500,000 students.
          </motion.p>
          <motion.img {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} src={achievementsHero} alt="Achievements" className="w-full rounded-xl" />
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.4 }} className="text-muted-foreground text-sm italic mt-4">
            MGML: Transforming education in India, boosting academic performance and confidence.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <motion.p {...fadeUp} className="text-muted-foreground max-w-4xl mx-auto text-center leading-relaxed">
            The MGML methodology has significantly impacted the academic levels of children, their confidence levels, and the overall success of the educational system in India. A comprehensive overview of the impact of MGML on academic performance, student confidence levels, stakeholder approval, and education policy is given below:
          </motion.p>
        </div>
      </section>

      {/* Achievement Sections - Two Column with Images */}
      {sections.map((section, index) => {
        const imageFirst = index % 2 === 0;
        return (
          <section
            key={section._id}
            className={`py-16 md:py-24 ${imageFirst ? "section-cream" : ""}`}
          >
            <div className="container-wide">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${!imageFirst ? "lg:[direction:rtl]" : ""}`}>
                <motion.div {...fadeUp} className={!imageFirst ? "lg:[direction:ltr]" : ""}>
                  <img
                    src={urlFor(section.image).width(1000).url()}
                    alt={section.title}
                    className="w-full rounded-xl"
                  />
                  <p className="text-muted-foreground text-sm italic mt-4 text-center">
                    {section.caption}
                  </p>
                </motion.div>

                <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className={!imageFirst ? "lg:[direction:ltr]" : ""}>
                  <h2 className="font-cormorant text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg whitespace-pre-line">
                    {section.body}
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Recognition */}
      <section className="py-16 md:py-24 section-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeUp}>
              <img src={recognitionImg} alt="Recognition" className="w-full rounded-xl" />
              <p className="text-muted-foreground text-sm italic mt-4 text-center">
                MGML's impact on education: fostering equity, engagement, and empowerment.
              </p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <h2 className="font-cormorant text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Recognition
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A recent UNICEF report summarises multiple assessments of RIVER's achievements:
              </p>
              <div className="space-y-5">
                {recognitionPoints.map((point, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-primary font-bold text-lg mt-0.5 shrink-0">•</span>
                    <p className="text-muted-foreground leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <motion.h2 {...fadeUp} className="font-heading text-2xl md:text-3xl text-foreground mb-10 text-center">
            Gallery
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3 italic">{item.caption}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/gallery" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-2 text-terracotta font-semibold uppercase text-sm tracking-wider hover:gap-3 transition-all">
              View All
              <span>→</span>
            </Link>
          </div>
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

      <Footer />
    </div>
  );
};

export default AchievementsPage;
