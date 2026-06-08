import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { sanityClient, urlFor } from "@/lib/sanity";

type GalleryImage = {
  _id: string;
  image: unknown;
  caption: string;
  order: number;
};

const QUERY = `*[_type == "galleryImage"] | order(order asc) { _id, image, caption, order }`;

const GalleryPage = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const { data: images = [] } = useQuery<GalleryImage[]>({
    queryKey: ["gallery-images"],
    queryFn: () => sanityClient.fetch(QUERY),
  });

  const visible = showAll ? images : images.slice(0, 12);

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
                {visible.map((item, index) => (
                  <ImageCard
                    key={item._id}
                    src={urlFor(item.image).width(900).url()}
                    caption={item.caption}
                    index={index}
                  />
                ))}
              </div>
              {!showAll && images.length > 12 && (
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
                {images.map((item, index) => (
                  <ImageCard
                    key={item._id}
                    src={urlFor(item.image).width(900).url()}
                    caption={item.caption}
                    index={index}
                  />
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
