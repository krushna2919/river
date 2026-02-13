import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const allImages = [
  { src: gallery1, caption: "Nourishing young minds: Nutritious mid-day meals play a significant role in rural education scenarios." },
  { src: gallery2, caption: "In MGML learning, children embrace local culture and context through interactive classroom activities." },
  { src: gallery3, caption: "Hands-on arithmetic: Mastering concepts through tactile learning with the help of pebbles." },
  { src: gallery4, caption: "Transformative education: RIVER students are benefited by the holistic and inclusive MGML learning approach." },
  { src: gallery5, caption: "Building knowledge step by step: Students engage in discussions on the staircase, symbolising the ladder of learning in MGML." },
  { src: gallery6, caption: "Balancing fun and learning: Children take a break, bonding with pet dogs, fostering empathy and responsibility." },
  { src: gallery7, caption: "Breaks ensure students recharge and connect with nature, fostering a balanced and joyful learning environment." },
  { src: gallery8, caption: "Connecting with local wisdom: Students listen to a cowherd, blending traditional knowledge into their everyday learning." },
  { src: gallery1, caption: "Celebrating heritage through puppetry: Girl students discover culture and learning with joy." },
  { src: gallery3, caption: "Creative expression through art: Students explore their imagination using colours and craft." },
  { src: gallery5, caption: "Peer learning in action: Older students guide younger ones through collaborative activities." },
  { src: gallery7, caption: "Outdoor classrooms: Nature becomes the teacher as students learn under open skies." },
  { src: gallery2, caption: "Community engagement: Parents participate in school activities, strengthening the education ecosystem." },
  { src: gallery4, caption: "Music and rhythm: Students discover the joy of learning through traditional instruments." },
  { src: gallery6, caption: "Reading circles: Children gather to share stories, building language skills together." },
  { src: gallery8, caption: "Science experiments: Hands-on discovery brings textbook concepts to life." },
  { src: gallery1, caption: "Morning assembly: Students start their day with songs and collective activities." },
  { src: gallery3, caption: "Garden learning: Students cultivate plants, understanding ecosystems firsthand." },
  { src: gallery5, caption: "Sports day: Physical activities promote teamwork and healthy competition." },
  { src: gallery7, caption: "Cultural festivals: Celebrations bring the community together in learning." },
  { src: gallery2, caption: "Library time: Students explore the world through books and stories." },
  { src: gallery4, caption: "Village mapping: Students learn geography by mapping their own surroundings." },
  { src: gallery6, caption: "Graduation day: Celebrating the achievements of young learners." },
];

const GalleryPage = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const ImageCard = ({ src, caption, index }: { src: string; caption: string; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
      className="relative group"
    >
      <div className="overflow-hidden">
        <img src={src} alt={caption} className="w-full h-auto object-cover" />
      </div>
      <button
        onClick={() => setEnlargedImage(src)}
        className="absolute top-4 right-4 bg-terracotta hover:bg-terracotta/90 text-primary-foreground p-2 rounded-md opacity-0 group-hover:opacity-100 transition-all"
        aria-label="Enlarge image"
      >
        <Maximize2 size={16} />
      </button>
      <p className="text-muted-foreground text-sm mt-3">{caption}</p>
    </motion.div>
  );

  const allTabImages = showAll ? allImages : allImages.slice(0, 12);

  return (
    <div className="min-h-screen bg-background">
      <Header isInnerPage />

      <section className="pt-24 md:pt-28 pb-16 md:pb-24 bg-background">
        <div className="container-wide max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-section text-foreground mb-10"
          >
            Gallery
          </motion.h1>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-transparent p-0 h-auto border-b border-border rounded-none mb-10">
              <TabsTrigger
                value="all"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-terracotta data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 text-base font-medium data-[state=active]:text-foreground text-muted-foreground"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="image-gallery"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-terracotta data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 text-base font-medium data-[state=active]:text-foreground text-muted-foreground"
              >
                Image gallery
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {allTabImages.map((item, index) => (
                  <ImageCard key={index} src={item.src} caption={item.caption} index={index} />
                ))}
              </div>
              {!showAll && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setShowAll(true)}
                    className="inline-flex items-center gap-2 text-terracotta font-semibold uppercase text-sm tracking-wider hover:gap-3 transition-all"
                  >
                    View More
                    <span>→</span>
                  </button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="image-gallery">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {allImages.map((item, index) => (
                  <ImageCard key={index} src={item.src} caption={item.caption} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
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
              className="absolute top-6 right-6 bg-terracotta hover:bg-terracotta/90 text-primary-foreground p-2 rounded-md transition-all"
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

export default GalleryPage;
