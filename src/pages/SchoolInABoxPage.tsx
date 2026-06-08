import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { sanityClient, urlFor } from "@/lib/sanity";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

type ImgRef = { asset: { _ref: string } };
type GalleryItem = { _key: string; image: ImgRef; caption: string };

type Doc = {
  eyebrow: string; title: string; intro: string;
  heroImage: ImgRef; heroCaption: string;
  description: string;
  howItWorksHeading: string; howItWorksImage: ImgRef; howItWorksCaption: string; howItWorksBody: string[];
  classroomImage: ImgRef; classroomCaption: string; classroomBody: string[];
  gallery: GalleryItem[];
};

const SchoolInABoxPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { data } = useQuery<Doc | null>({
    queryKey: ["page-school-in-a-box"],
    queryFn: () => sanityClient.fetch(`*[_id == "page-school-in-a-box"][0]`),
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
      <main className="pt-28 md:pt-32 pb-20 md:pb-32">
        <section className="container-wide text-center mb-16 md:mb-24">
          <motion.span {...fadeUp} className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">{data.eyebrow}</motion.span>
          <motion.h1 {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 italic">{data.title}</motion.h1>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-12">{data.intro}</motion.p>
          <motion.img {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} src={u(data.heroImage)} alt="School in a Box" className="w-full rounded-xl" />
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.25 }} className="text-muted-foreground text-sm italic mt-4 max-w-3xl mx-auto">{data.heroCaption}</motion.p>
        </section>

        <section className="container-wide max-w-4xl mx-auto mb-16 md:mb-24">
          <motion.p {...fadeUp} className="text-muted-foreground leading-relaxed">{data.description}</motion.p>
        </section>

        <section className="container-wide mb-16 md:mb-24">
          <motion.h2 {...fadeUp} className="font-heading text-2xl md:text-3xl text-foreground mb-8 text-center">{data.howItWorksHeading}</motion.h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.img {...fadeUp} src={u(data.howItWorksImage)} alt="Learning Ladder chart" className="w-full rounded-xl" />
            <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-sm italic">{data.howItWorksCaption}</motion.p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {data.howItWorksBody.map((p, i) => (
              <motion.p key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.05 }} className="text-muted-foreground leading-relaxed">{p}</motion.p>
            ))}
          </div>
        </section>

        <section className="container-wide mb-16 md:mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.img {...fadeUp} src={u(data.classroomImage)} alt="MGML classroom" className="w-full rounded-xl" />
            <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-sm italic">{data.classroomCaption}</motion.p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {data.classroomBody.map((p, i) => (
              <motion.p key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.05 }} className="text-muted-foreground leading-relaxed">{p}</motion.p>
            ))}
          </div>
        </section>

        <section className="container-wide">
          <motion.h2 {...fadeUp} className="font-heading text-2xl md:text-3xl text-foreground mb-10 text-center">Gallery</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.gallery.map((item, index) => (
              <motion.div key={item._key} {...fadeUp} transition={{ duration: 0.5, delay: index * 0.05 }} className="group cursor-pointer" onClick={() => setSelectedImage(index)}>
                <div className="overflow-hidden rounded-xl mb-3">
                  <img src={urlFor(item.image).width(800).url()} alt={item.caption} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.caption}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/gallery" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-2 text-terracotta font-semibold uppercase text-sm tracking-wider hover:gap-3 transition-all">
              View All <span>→</span>
            </Link>
          </div>
        </section>

        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 text-white/80 hover:text-white"><X className="w-8 h-8" /></button>
            <img src={urlFor(data.gallery[selectedImage].image).width(1920).url()} alt={data.gallery[selectedImage].caption} className="max-w-full max-h-[85vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default SchoolInABoxPage;
