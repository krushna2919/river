import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Maximize2, X } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { sanityClient, urlFor } from "@/lib/sanity";

type ImgRef = { asset: { _ref: string } };
type GalleryItem = { _key: string; image: ImgRef; caption: string };

type Doc = {
  eyebrow: string; title: string; intro: string;
  heroImage: ImgRef; heroCaption: string;
  campusImage: ImgRef; campusCaption: string; locationBody: string[];
  natureImage: ImgRef; natureCaption: string; philosophyBody: string[];
  healthImage: ImgRef; healthCaption: string; missionBody: string[];
  gallery: GalleryItem[];
};

const ImageWithEnlarge = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => {
  const [enlarged, setEnlarged] = useState(false);
  return (
    <>
      <div className="my-10">
        <div className="relative group">
          <img src={src} alt={alt} className="w-full h-auto object-cover" />
          <button onClick={() => setEnlarged(true)} className="absolute bottom-4 right-4 bg-terracotta hover:bg-terracotta/90 text-white p-2 rounded-md transition-all opacity-80 group-hover:opacity-100" aria-label="Enlarge image">
            <Maximize2 size={20} />
          </button>
        </div>
        <p className="text-muted-foreground italic text-base md:text-lg mt-4 text-center">{caption}</p>
      </div>
      <AnimatePresence>
        {enlarged && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setEnlarged(false)}>
            <button onClick={() => setEnlarged(false)} className="absolute top-6 right-6 bg-terracotta hover:bg-terracotta/90 text-white p-2 rounded-md transition-all" aria-label="Close enlarged image">
              <X size={24} />
            </button>
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} src={src} alt={`${alt} - enlarged`} className="max-w-full max-h-[90vh] object-contain rounded-lg" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const RishiValleySchool = () => {
  const { data } = useQuery<Doc | null>({
    queryKey: ["page-rishi-valley-school"],
    queryFn: () => sanityClient.fetch(`*[_id == "page-rishi-valley-school"][0]`),
  });

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Header isInnerPage />
        <main className="pt-28" />
        <Footer />
      </div>
    );
  }

  const u = (i: ImgRef) => urlFor(i).width(1600).auto("format").url();

  return (
    <div className="min-h-screen bg-background">
      <Header isInnerPage />

      <section className="pt-24 md:pt-28 pb-8 bg-background">
        <div className="container-wide max-w-4xl mx-auto text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-terracotta font-semibold uppercase tracking-wider text-sm mb-4">{data.eyebrow}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-8">{data.title}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-muted-foreground leading-relaxed mb-10">{data.intro}</motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="container-wide max-w-5xl mx-auto">
          <ImageWithEnlarge src={u(data.heroImage)} alt="Rishi Valley School outdoor learning" caption={data.heroCaption} />
        </motion.div>
      </section>

      <section className="pb-16 md:pb-24 bg-background">
        <div className="container-wide max-w-5xl mx-auto">
          <ImageWithEnlarge src={u(data.campusImage)} alt="Rishi Valley School campus" caption={data.campusCaption} />

          <div className="max-w-4xl mx-auto">
            {data.locationBody.map((p, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-6">{p}</p>
            ))}
          </div>

          <ImageWithEnlarge src={u(data.natureImage)} alt="Rishi Valley nature" caption={data.natureCaption} />

          <div className="max-w-4xl mx-auto">
            {data.philosophyBody.map((p, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-6">{p}</p>
            ))}
          </div>

          <ImageWithEnlarge src={u(data.healthImage)} alt="Rural Health Centre" caption={data.healthCaption} />

          <div className="max-w-4xl mx-auto">
            {data.missionBody.map((p, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-6">{p}</p>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-10 text-center">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.gallery.map((item, index) => (
                <motion.div key={item._key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="group">
                  <div className="overflow-hidden rounded-lg">
                    <img src={urlFor(item.image).width(800).url()} alt={item.caption} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 italic">{item.caption}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/gallery" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-2 text-terracotta font-semibold uppercase text-sm tracking-wider hover:gap-3 transition-all">
              View All <span>→</span>
            </Link>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-16">
            <a href="/" className="inline-flex items-center gap-2 text-terracotta font-semibold uppercase text-sm tracking-wider hover:gap-3 transition-all">
              <span>←</span> Back to Home
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RishiValleySchool;
