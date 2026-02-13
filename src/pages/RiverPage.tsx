import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import riverHero from "@/assets/river-hero.jpg";
import riverTransformation from "@/assets/river-transformation.png";
import riverRecognition from "@/assets/river-recognition.png";
import riverIndiaMap from "@/assets/river-india-map.png";
import riverMgmlModel from "@/assets/river-mgml-model.png";
import riverMonitoring from "@/assets/river-monitoring.jpg";
import riverGallery1 from "@/assets/river-gallery-1.jpg";
import riverGallery2 from "@/assets/river-gallery-2.jpg";
import riverGallery3 from "@/assets/river-gallery-3.jpg";
import riverGallery4 from "@/assets/river-gallery-4.jpg";
import riverGallery5 from "@/assets/river-gallery-5.jpg";
import riverGallery6 from "@/assets/river-gallery-6.png";
import riverGallery7 from "@/assets/river-gallery-7.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const galleryItems = [
  { src: riverGallery1, caption: "In MGML learning, children embrace local culture and context through interactive classroom activities." },
  { src: riverGallery2, caption: "Hands-on arithmetic: Mastering concepts through tactile learning with the help of pebbles." },
  { src: riverGallery3, caption: "Transformative education: RIVER students are benefited by the holistic and inclusive MGML learning approach." },
  { src: riverGallery4, caption: "Balancing fun and learning: Children take a break, bonding with pet dogs, fostering empathy and responsibility." },
  { src: riverGallery5, caption: "Experiential learning in action: Children explore balance and teamwork while enjoying a seesaw adventure." },
  { src: riverGallery6, caption: "A joyful journey to knowledge: Excited children eagerly embark on their path to education." },
  { src: riverGallery7, caption: "Unleashing personalised learning: MGML classrooms empower students to learn at their own pace with dedicated teacher support." },
];

const RiverPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header isInnerPage />

      <main className="pt-28 md:pt-32 pb-20 md:pb-32">
        {/* Hero Section */}
        <section className="container-wide text-center mb-16 md:mb-24">
          <motion.span {...fadeUp} className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            What We Do
          </motion.span>
          <motion.h1 {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 italic">
            RIVER
          </motion.h1>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="text-muted-foreground uppercase tracking-widest text-sm mb-8">
            Rishi Valley Institute for Educational Resources
          </motion.p>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-12">
            The Rishi Valley Institute for Educational Resources (RIVER) is an initiative undertaken by the Rishi Valley Rural Education Centre (REC), under the overall umbrella of the Rishi Valley Education Centre (RVEC). Located in 14 acres of land on the REC campus, it is home to RIVER's innovative Multi-Grade, Multi-Level (MGML) methodology, which has gained widespread acclaim as an innovative solution to address the gaps in rural education.
          </motion.p>
          <motion.img {...fadeUp} transition={{ duration: 0.6, delay: 0.25 }} src={riverHero} alt="RIVER campus with children learning under trees" className="w-full rounded-xl" />
        </section>

        {/* Community Education */}
        <section className="container-wide mb-16 md:mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <p className="text-muted-foreground leading-relaxed mb-6">
                RIVER's community-based educational model fosters identity, tolerance, environmentalism, and preserves folklore and traditions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                RIVER believes education strengthens students' identities, customs, and roots while expanding their knowledge. This community-based educational paradigm also promotes tolerance, environmental stewardship, and preserves folklore and indigenous medicinal traditions. It does not consider education as striving to raise all students to a uniform level dictated by textbooks with uniform content. This traditional education model erases cultural differences and alienates students from their roots.
              </p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              {/* placeholder spacing */}
            </motion.div>
          </div>
        </section>

        {/* Transformation */}
        <section className="container-wide mb-16 md:mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.img {...fadeUp} src={riverTransformation} alt="RIVER transformation" className="w-full rounded-xl" />
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">Transformation</h2>
              <p className="text-muted-foreground leading-relaxed italic mb-6">
                RIVER's training modules provide practical teaching approaches to universal basic education.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Between 1989 and 2009, RIVER grew from a small centre with seven satellite schools to a learning methodology used to teach over 6.5 million students on three continents, thanks to the tireless guidance and support of the Rishi Valley Rural Education Centre.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, its programme, procedures, pedagogy, and teacher training provide hope to people seeking learning innovations and practical approaches to universal primary education. RIVER's innovative methodology has reached 2,50,000+ schools impacting 12,50,00,000+ children, and 5,00,000+ teachers trained in 3300+ training days.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Recognition */}
        <section className="container-wide mb-16 md:mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">Recognition</h2>
              <p className="text-muted-foreground leading-relaxed italic mb-6">
                Clinton Global Foundation, New York recognises RIVER and its MGML methodology for its impact on rural education.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                RIVER's MGML methodology is recognised as having the highest potential to achieve the national objectives specified in the Right of Children to Free and Compulsory Education (RTE) Act 2009 and National Curriculum Framework 2005. Implementation in 14 of India's 28 states represents a remarkable adoption rate.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                It has been awarded numerous awards for its pioneering efforts, including the Jindal Prize in 2011 and the Global Development Network (GDN) Award in 2004. RIVER's impact was famously acknowledged by UNESCO in 2003 and the New York Times in a 2018 article.
              </p>
            </motion.div>
            <motion.img {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} src={riverRecognition} alt="Clinton Global Foundation recognition" className="w-full rounded-xl" />
          </div>
        </section>

        {/* International Partnerships */}
        <section className="container-wide mb-16 md:mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.img {...fadeUp} src={riverRecognition} alt="International partnerships" className="w-full rounded-xl" />
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The programme's success has attracted attention of institutions in Germany, France, England, and the United States, who visit and learn from its impressive accomplishments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The University of Regensburg in Germany and the University of Metz in France have initiated long-term cooperation with RIVER. A group of students and professors from Harvard Business School and the Graduate School of Education at Harvard University partnered with RIVER to establish a sustainable rural school in northern India.
              </p>
            </motion.div>
          </div>
        </section>

        {/* India Map */}
        <section className="container-wide mb-16 md:mb-24 text-center">
          <motion.img {...fadeUp} src={riverIndiaMap} alt="RIVER state-wise partnerships across India" className="max-w-2xl mx-auto w-full mb-4" />
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-sm italic max-w-2xl mx-auto">
            RIVER's state-wise partnerships with governmental institutions for implementation of MGML educational packages.
          </motion.p>
        </section>

        {/* MGML Dissemination Model */}
        <section className="container-wide mb-16 md:mb-24">
          <motion.h2 {...fadeUp} className="font-heading text-2xl md:text-3xl text-foreground mb-8 text-center">
            Multi-Grade Multi-Level Dissemination Model
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <motion.img {...fadeUp} src={riverMgmlModel} alt="MGML Dissemination Model" className="w-full rounded-xl" />
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Multi-Grade Multi-Level Dissemination Model (MDM) is a valuable support tool developed with support from Michael and Susan Dell Foundation for agencies seeking to implement and strengthen the impact of RIVER's MGML methodology in elementary schools.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The MDM provides clear guidance for agencies engaged in introducing and monitoring the MGML classroom, including details on pedagogy, content development, and model school set-up. It also contains films and explanatory notes to highlight essential elements of the pedagogy.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeUp}>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With help from UNICEF and collaboration with various state government agencies, the MGML pedagogy has been extended to cover over 250,000 primary schools across the country, impacting more than 10 million children in over 13 states.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                RIVER's MGML pedagogy is a flexible tool in the hands of teachers, accommodating local cultures in the classroom. Its ability to recognise India's rich heritage of cultures is one of its exceptional features. With its clear guidance, support tools, and structured guidelines, the MDM ensures the methodology's core elements are maintained during scaling.
              </p>
            </motion.div>
            <motion.img {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} src={riverMonitoring} alt="MGML monitoring and implementation" className="w-full rounded-xl" />
          </div>
        </section>

        {/* Gallery */}
        <section className="container-wide">
          <motion.h2 {...fadeUp} className="font-heading text-2xl md:text-3xl text-foreground mb-10 text-center">
            Gallery
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
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

export default RiverPage;
