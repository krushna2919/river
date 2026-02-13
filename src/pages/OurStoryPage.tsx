import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImg from "@/assets/our-story-hero.jpg";
import facilitatorImg from "@/assets/our-story-facilitator.png";
import locationImg from "@/assets/our-story-location.png";
import historyImg from "@/assets/our-story-history.png";
import founderImg from "@/assets/our-story-founder.png";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const chronologyData = [
  { year: "1975–1976", event: "The Rural Education Centre (REC) was set up on the Rishi Valley campus in 1976 on 14 acres of land." },
  { year: "1985–1990", event: "The first satellite schools established in two hamlets near Rishi Valley." },
  { year: "1988", event: "Grant from the Government of India to the Satellite Schools. Development of a multigrade package with distinctive features, based on a close study of local schools, textbooks and children's achievement levels.", expandedText: "Over the next five years, the material is field tested. Results suggest it helped reduce dropout rates, increased school enrollment, and enabled students to easily clear the class 5 state examinations." },
  { year: "1993", event: "RVEC develops the multigrade programme. The Telugu version of the field-tested 'School in a Box' is published with Action Aid loan assistance.", expandedText: "The first outreach programme held in schools administered by The Bhagavatula Charitable Trust in Vishakhapatnam as part of an ILO-sponsored child labour education project." },
  { year: "1994", event: "Two thousand girls from ten mandals tutored to grade 2 levels in a 12-week summer school programme in Meboobnagar district, Andhra Pradesh.", expandedText: "Official figures show that 'roughly 95% of the students given a test were found to have mastered MLLs (Minimum Levels of Learning).'" },
  { year: "1995", event: "Karnataka Education Department implements MGML methodology in HD Kote Block, followed by all 600 formal schools in Sira and Holenarsipura Blocks.", expandedText: "It is now adopted in all state-run schools (around 45,000 schools)." },
  { year: "1995", event: "ITDA, UNICEF, and RVEC worked together to develop and carry out a large-scale programme in the remote tribal districts of Paderu and Rampachudavaram." },
  { year: "1996", event: "Thirty multigrade facilities established in Kerala's distant and economically deprived districts of Kasargode, Mallapuram, and Wayanad." },
  { year: "1998", event: "DPEP Tamil Nadu partners with RIVER to establish a thousand pilot schools across the state." },
  { year: "1999", event: "Andhra Pradesh's DPEP administers a programme at 800 bridge schools across 34 mandals in 15 districts to prevent child labour.", expandedText: "A new colour version of the RIVER Telugu teaching-learning material has been supplied for use in non-formal schools." },
  { year: "1999–2001", event: "The RIVER team created a Hindi version of 'The School in a Box', titled 'Apna Path Pitara,' with original contributions from commissioned children's writers." },
  { year: "2003", event: "The Multigrade Trainers Resource Pack published with Sir Ratan Tata Trust grant support." },
  { year: "2003", event: "Universities of Regensburg (Germany) and Metz (France) launched long-term exchange programmes and collaborations with RIVER." },
  { year: "2004", event: "UNICEF collaborates with RIVER to launch the Quality Package Project in about 1,000 schools across twelve states." },
  { year: "2005", event: "RIVER awarded the Global Development Network Prize 'Most Innovative Development Project'." },
  { year: "2007–2010", event: "RIVER team created a 'School in a Box' Learning Ladder for English as a Second Language.", expandedText: "After field testing in Rishi Valley Satellite Schools, creatively enriched in 2012-15 in partnership with AIF Fellows." },
  { year: "2010–2011", event: "Marathi 'Support Package' for slow learners designed by the RIVER Team for Mumbai Municipal Corporation schools (MCGM)." },
  { year: "2012–2013", event: "Uttarakhand Education Kit for Class III to V adapted from 'School in a Box' and published with Plan International support." },
  { year: "2013–2015", event: "'The School in a Box' for Pre-Primary Schools designed and developed in collaboration with Wuerzburg University, Germany." },
  { year: "2013–2015", event: "RIVER Multigrade Multilevel Dissemination Model (MDM) developed with Michael and Susan Dell Foundation financing." },
  { year: "2016–2018", event: "Anandalahari Abyasana Education Kit for Classes I-V developed from RIVER 'School in a Box' for Andhra Pradesh's government schools." },
];

const galleryData = [
  { src: gallery1, caption: "Breaks ensure students recharge and connect with nature, fostering a balanced and joyful learning environment." },
  { src: gallery2, caption: "Connecting with local wisdom: Students listen to a cowherd, blending traditional knowledge into their everyday learning." },
  { src: gallery3, caption: "Celebrating heritage through puppetry: Girl students discover culture and learning with joy." },
  { src: gallery4, caption: "Balancing fun and learning: Children take a break, bonding with pet dogs, fostering empathy and responsibility." },
  { src: gallery5, caption: "Transformative education: RIVER students are benefited by the holistic and inclusive MGML learning approach." },
  { src: gallery6, caption: "Hands-on arithmetic: Mastering concepts through tactile learning with the help of pebbles." },
  { src: gallery7, caption: "In MGML learning, children embrace local culture and context through interactive classroom activities." },
  { src: gallery8, caption: "Nourishing young minds: Nutritious mid-day meals play a significant role in rural education scenarios." },
];

/* Horizontal Auto-Scrolling Chronology */
const ChronologySection = ({
  chronologyData,
  expandedItems,
  toggleExpand,
}: {
  chronologyData: { year: string; event: string; expandedText?: string }[];
  expandedItems: Set<number>;
  toggleExpand: (index: number) => void;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = 288 + 24; // w-72 (288px) + gap-6 (24px)

  const scrollToIndex = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * cardWidth, behavior: "smooth" });
  }, []);

  // Auto-advance one card at a time
  useEffect(() => {
    if (!isAutoScrolling) return;
    const interval = setInterval(() => {
      setActiveIndex(prev => {
        const next = prev + 1 >= chronologyData.length ? 0 : prev + 1;
        scrollToIndex(next);
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoScrolling, chronologyData.length, scrollToIndex]);

  const scrollByCard = (direction: "left" | "right") => {
    setIsAutoScrolling(false);
    setActiveIndex(prev => {
      const next = direction === "left"
        ? Math.max(0, prev - 1)
        : Math.min(chronologyData.length - 1, prev + 1);
      scrollToIndex(next);
      return next;
    });
  };

  return (
    <section className="py-16 md:py-24 section-cream">
      <div className="container-wide">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="heading-subsection block mb-4">Chronology</span>
            <h2 className="heading-section text-foreground">Timeline of Achievements</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scrollByCard("left")}
              disabled={activeIndex === 0}
              className="bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 shadow-md disabled:opacity-30 hover:bg-background transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} className="text-foreground" />
            </button>
            <button
              onClick={() => scrollByCard("right")}
              disabled={activeIndex >= chronologyData.length - 1}
              className="bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 shadow-md disabled:opacity-30 hover:bg-background transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} className="text-foreground" />
            </button>
          </div>
        </div>

        <div className="relative">

          {/* Horizontal scrolling container */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
          >
            <div className="flex gap-6 py-4" style={{ width: "max-content" }}>
              {chronologyData.map((milestone, index) => (
                <div
                  key={index}
                  className="w-72 flex-shrink-0 snap-start bg-background rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  {/* Timeline dot and line */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0" />
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <span className="text-primary font-serif font-bold text-xl block mb-2">
                    {milestone.year}
                  </span>
                  <p className="text-muted-foreground text-sm leading-relaxed">{milestone.event}</p>
                  {milestone.expandedText && (
                    <>
                      <button
                        onClick={() => toggleExpand(index)}
                        className="text-primary text-sm font-semibold mt-2 hover:underline"
                      >
                        {expandedItems.has(index) ? "Show less" : "Read more"}
                      </button>
                      <AnimatePresence>
                        {expandedItems.has(index) && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-muted-foreground mt-2 text-xs"
                          >
                            {milestone.expandedText}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Play/Pause control */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAutoScrolling(!isAutoScrolling)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {isAutoScrolling ? <Pause size={14} /> : <Play size={14} />}
            {isAutoScrolling ? "Pause" : "Play"} auto-scroll
          </button>
        </div>
      </div>
    </section>
  );
};

const OurStoryPage = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleExpand = (index: number) => {
    setExpandedItems(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const ImageWithEnlarge = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
    <div className="relative group">
      <div className="overflow-hidden">
        <img src={src} alt={alt} className="w-full h-auto object-cover" />
      </div>
      <button
        onClick={() => setEnlargedImage(src)}
        className="absolute top-4 right-4 bg-terracotta hover:bg-terracotta/90 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-all"
        aria-label="Enlarge image"
      >
        <Maximize2 size={16} />
      </button>
      {caption && (
        <p className="text-muted-foreground italic text-sm mt-3 text-center">{caption}</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header isInnerPage />

      {/* Hero */}
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
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed mb-10"
          >
            Over the past four decades, the Rishi Valley Rural Education Centre (REC) has been at the vanguard of a rural revolution through its widely acclaimed educational initiatives and teaching methodologies that promote social justice, equity, and inclusion.
          </motion.p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-16 bg-background">
        <div className="container-wide max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ImageWithEnlarge
              src={heroImg}
              alt="Children racing towards a brighter future"
              caption="Empowered by REC's educational initiatives, these children race towards a brighter future with joy and enthusiasm."
            />
          </motion.div>
        </div>
      </section>

      {/* Body Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none text-muted-foreground"
          >
            <p>
              The Rishi Valley Rural Education Centre (REC), established in 1976, functions under the aegis of The Rishi Valley Education Centre (RVEC), an educational institution located in rural Andhra Pradesh, India. In addition to the REC, the Rishi Valley School is also part of RVEC. The Rishi Valley Rural Education Centre (REC) comprises RIVER (Rishi Valley Institute for Educational Resources), a residential 'Middle School' for students from the immediate vicinity, seven 'Satellite Primary Schools', and two 'Pre-Primary Schools'.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ImageWithEnlarge
              src={facilitatorImg}
              alt="Teacher as facilitator in MGML methodology"
              caption="The teacher as facilitator fosters independent learning in MGML methodology."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none text-muted-foreground"
          >
            <p>
              At the heart of REC's initiatives is the RIVER-developed multi-grade, multi-level methodology (MGML), which powers a unique structure for elementary education from first to fifth grade, culminating in the highly acclaimed tool — 'School in a Box.' 'School in a Box' has been widely implemented in numerous parts of India and abroad, besides serving as a model for various agencies including UNICEF and state governments who have joined with REC to expand this approach throughout the country.
            </p>
            <p>
              Over the years, REC has successfully met its stated goals of promoting village-based education, training teachers and teacher trainers in MGML, attracting working children to the school system, creating green spaces around the school campus for biodiversity conservation, raising awareness about health, nutrition, and sanitation, and actively involving the community in the day-to-day management of their children's school.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-24 section-cream">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="heading-subsection block mb-4">Location</span>
            <h2 className="heading-section text-foreground">Where We Are</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <ImageWithEnlarge
              src={locationImg}
              alt="Local context drives arithmetic problem solving"
              caption="Local context drives arithmetic problem solving for students."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none text-muted-foreground"
          >
            <p>
              Rishi Valley Rural Education Centre is nestled in a sheltered valley in rural Andhra Pradesh, roughly 15 kilometres north of Madanapalle and 140 kilometres north of Bangalore. While RIVER, one 'Satellite Primary School', a 'Pre-Primary School', and the 'Middle School' are housed on REC's 14-acre campus, the remaining schools are spread over neighbouring hamlets.
            </p>
            <p>
              Flanked by the Eastern Ghats in the Rayalaseema area of southern Andhra Pradesh and chosen for its peaceful atmosphere by Jiddu Krishnamurti, the name 'Rishi Valley' derives from legends of sages who used to meditate in the area. The campus is surrounded by ancient granite hills with striking formations, and a large banyan tree that used to be a centrepiece of the campus.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="heading-subsection block mb-4">History</span>
            <h2 className="heading-section text-foreground">Our Origins</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <ImageWithEnlarge
              src={historyImg}
              alt="Students enrolled in REC's rural initiatives"
              caption="Students enrolled in REC's rural initiatives are also provided nutritious meals to fuel their learning."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none text-muted-foreground"
          >
            <p>
              Much before Rishi Valley Rural Education Centre's inception in 1976, there was the Rishi Valley School, founded in 1926 by J. Krishnamurti, widely considered one of the twentieth century's greatest philosophical and spiritual luminaries.
            </p>
            <p>
              The Rishi Valley School's instructional programme developed through pioneering advances in educational techniques, infrastructure development, and the creation of a meaningful curriculum that is reviewed and revised on a regular basis. Conserving and enhancing the natural environment continues to be important components. All of these aspects remain the inspiration behind the birth of REC and its successful initiatives.
            </p>
            <p>
              The Rishi Valley Rural Education Centre was founded in 1976 under the aegis of the Rishi Valley Education Centre. The fledgling rural education initiative received a boost in the 1980s thanks to a Government of India grant. This facilitated the development of a multi-grade learning system that solves a number of rural education's entrenched difficulties. The REC has established strong ties with the local village community over the past three decades through its work in rural education, rural health, reforestation, biodiversity conservation, and watershed management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chronology Section - Horizontal Auto-Scroll */}
      <ChronologySection
        chronologyData={chronologyData}
        expandedItems={expandedItems}
        toggleExpand={toggleExpand}
      />

      {/* Founder Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="heading-subsection block mb-4">Founder</span>
            <h2 className="heading-section text-foreground">J. Krishnamurti</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <ImageWithEnlarge
              src={founderImg}
              alt="J. Krishnamurti"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none text-muted-foreground"
          >
            <blockquote className="border-l-4 border-terracotta pl-6 italic text-foreground/80 my-8">
              "A school is a place where one learns both the importance of knowledge and its limitations. It is a place where one learns to observe the world without a particular point of view or conclusion... The purpose, the aim and drive of these schools, is to equip the child with the most excellent technological proficiency so that the student may function with clarity and efficiency in the modern world."
            </blockquote>
            <p>
              Jiddu Krishnamurti (1895–1986), whose life and teachings spanned the greater part of the 20th century, is considered one of the most presciently original philosophers of our time. Identified in his youth as the future world teacher by the Theosophists, Krishnamurti emerged as a radical thinker who sought to give new meanings and direction to human life.
            </p>
            <p>
              He pointed the way to an inner reality freed from the petty emotions that govern human actions, for he held that inner freedom was necessary for regenerating individuals and the society they create. His timeless teaching is deeply relevant to the chaotic and violent time in which we live and educate students.
            </p>
            <p>
              Krishnamurti travelled around the world for more than fifty years, giving talks and engaging in discussions with people from all walks of life, including school and college students, writers, scientists, and philosophers. He spoke to them as a friend, and not in a guru's authoritarian voice. His message has profound implications for how we live and how children are educated.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 section-cream">
        <div className="container-wide max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="heading-subsection block mb-4">Gallery</span>
            <h2 className="heading-section text-foreground">Life at REC</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <ImageWithEnlarge
                  src={item.src}
                  alt={item.caption}
                  caption={item.caption}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="pb-16 bg-background pt-8">
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

export default OurStoryPage;
