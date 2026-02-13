import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/rishi-valley-school-hero.png";
import campusImage from "@/assets/rvs-campus.png";
import natureImage from "@/assets/rvs-nature.png";
import healthImage from "@/assets/rvs-health.png";
import gallery1 from "@/assets/rvs-gallery-1.jpg";
import gallery2 from "@/assets/rvs-gallery-2.jpg";
import gallery3 from "@/assets/rvs-gallery-3.jpg";
import gallery4 from "@/assets/rvs-gallery-4.jpg";
import gallery5 from "@/assets/rvs-gallery-5.jpg";
import gallery6 from "@/assets/rvs-gallery-6.jpg";
import gallery7 from "@/assets/rvs-gallery-7.jpg";
import gallery8 from "@/assets/rvs-gallery-8.jpg";
import gallery9 from "@/assets/rvs-gallery-9.jpg";

const galleryItems = [
  { src: gallery1, caption: "In MGML learning, children embrace local culture and context through interactive classroom activities." },
  { src: gallery2, caption: "Nourishing young minds: Nutritious mid-day meals play a significant role in rural education scenarios." },
  { src: gallery3, caption: "Hands-on arithmetic: Mastering concepts through tactile learning with the help of pebbles." },
  { src: gallery4, caption: "Transformative education: RIVER students are benefited by the holistic and inclusive MGML learning approach." },
  { src: gallery5, caption: "Balancing fun and learning: Children take a break, bonding with pet dogs, fostering empathy and responsibility." },
  { src: gallery6, caption: "Experiential learning in action: Children explore balance and teamwork while enjoying a seesaw adventure." },
  { src: gallery7, caption: "Learning through art: Panchatantra shadow puppetry enhances MGML's holistic learning methodology." },
  { src: gallery8, caption: "Reviving roots through music and storytelling: Children embrace the magic of Andhra folk and classical melodies." },
  { src: gallery9, caption: "Unleashing personalised learning: MGML classrooms empower students to learn at their own pace with dedicated teacher support." },
];

const ImageWithEnlarge = ({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) => {
  const [enlarged, setEnlarged] = useState(false);

  return (
    <>
      <div className="my-10">
        <div className="relative group">
          <img src={src} alt={alt} className="w-full h-auto object-cover" />
          <button
            onClick={() => setEnlarged(true)}
            className="absolute bottom-4 right-4 bg-terracotta hover:bg-terracotta/90 text-white p-2 rounded-md transition-all opacity-80 group-hover:opacity-100"
            aria-label="Enlarge image"
          >
            <Maximize2 size={20} />
          </button>
        </div>
        <p className="text-muted-foreground italic text-base md:text-lg mt-4 text-center">
          {caption}
        </p>
      </div>

      <AnimatePresence>
        {enlarged && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setEnlarged(false)}
          >
            <button
              onClick={() => setEnlarged(false)}
              className="absolute top-6 right-6 bg-terracotta hover:bg-terracotta/90 text-white p-2 rounded-md transition-all"
              aria-label="Close enlarged image"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={src}
              alt={`${alt} - enlarged`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const RishiValleySchool = () => {
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
            About Us
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-8"
          >
            Rishi Valley School
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed mb-10"
          >
            The Rishi Valley School was founded in 1926 by J. Krishnamurti, widely considered one of the twentieth century's greatest philosophical and spiritual luminaries. The school functions under the aegis of the Rishi Valley Education Centre (RVEC), an initiative of the Krishnamurti Foundation India.
          </motion.p>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="container-wide max-w-5xl mx-auto"
        >
          <ImageWithEnlarge
            src={heroImage}
            alt="Rishi Valley School outdoor learning"
            caption="Rishi Valley School strives to incorporate J. Krishnamurti's thought-provoking educational vision in its daily learning practices."
          />
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="pb-16 md:pb-24 bg-background">
        <div className="container-wide max-w-5xl mx-auto">
          {/* Campus Image */}
          <ImageWithEnlarge
            src={campusImage}
            alt="Rishi Valley School campus"
            caption="The Rishi Valley School campus is in a sheltered valley near the Eastern Ghats in rural Andhra Pradesh."
          />

          {/* Location Text */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Rishi Valley School is nestled in a sheltered valley at the edge of the Eastern Ghats in rural Andhra Pradesh, roughly 15 kilometres north of Madanapalle and 140 kilometres north of Bangalore. The school's location, chosen by Krishnamurti for its unique environment of peace and tranquillity, was an undulating landscape of fields, rain-fed streams, and scattered villages, surrounded by ancient granite hills with striking rock formations.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              In a drought-prone area, the hill slopes are sparse in vegetation, and the valley floor is dotted with an occasional banyan or tamarind tree. Years of sustained reforestation and water conservation measures have transformed the campus into a beautiful landscape. Rishi Valley was officially designated a bird sanctuary in 1991 and cited by the International Council for Bird Preservation.
            </p>
          </div>

          {/* Nature Image */}
          <ImageWithEnlarge
            src={natureImage}
            alt="Rishi Valley nature and coexistence"
            caption="Education at Rishi Valley School focuses on peaceful coexistence with nature and its flora and fauna."
          />

          {/* Krishnamurti & School Today */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Until his passing in 1986, Krishnamurti spent practically every winter in Rishi Valley. He did not establish a 'blue-print' for what a school should be. His inquiry into the human condition and educational insights were passed down through multiple generations of students, teachers, and others concerned in sustainability, and continue to serve as the foundation for the institution and all of its endeavours.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Rishi Valley School, affiliated to the ICSE Board, has 350+ boarding students from various Indian states and over fifty highly competent faculty members. The school, regarded as one of the leading residential schools in India, offers a unique educational atmosphere in which young people can grow not just intellectually, but also in other dimensions of their being. The school's instructional programme has seen significant evolution, including pioneering advances in educational techniques, infrastructure development, and a meaningful curriculum that is reviewed and revised on a regular basis.
            </p>
          </div>

          {/* Second Nature Image */}
          <ImageWithEnlarge
            src={natureImage}
            alt="Rishi Valley peaceful coexistence"
            caption="Education at Rishi Valley School focuses on peaceful coexistence with nature and its flora and fauna."
          />

          {/* Health Centre Image */}
          <ImageWithEnlarge
            src={healthImage}
            alt="Rishi Valley Rural Health Centre"
            caption="The Rural Health Centre addresses healthcare of the population around Rishi Valley School."
          />

          {/* Mission & Rural Development */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Rishi Valley School aims to cultivate self-aware, responsible, and sensitive individuals committed to lifelong learning. The school strives to awaken students' intelligence and generosity of spirit, enabling them to confront an increasingly complex world without losing their sense of humanity.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Rishi Valley Education Centre (RVEC) also runs rural development initiatives, such as the Rishi Valley Rural Education Centre (REC), which consists of RIVER (Rishi Valley Institute for Educational Resources), a residential middle school for students from the immediate neighbourhood, and seven 'Satellite Primary Schools' and two 'Pre-Primary Schools'. The Rishi Valley Education Centre (RVEC) established the Rural Health Centre (RHC) in 1999 to serve the needs of the rural people in the areas surrounding Rishi Valley School. The centre treats 22,000 patients annually from 60 revenue villages across neighbouring districts.
            </p>
          </div>

          {/* Gallery Section */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-10 text-center">
              Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 italic">
                    {item.caption}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

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
