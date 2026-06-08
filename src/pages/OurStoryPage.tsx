import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { sanityClient, urlFor } from "@/lib/sanity";

type ImgRef = { asset: { _ref: string } };
type Chronology = { _key: string; year: string; event: string; expandedText?: string };
type GalleryItem = { _key: string; image: ImgRef; caption: string };

type Doc = {
  eyebrow: string; title: string; intro: string;
  heroImage: ImgRef; heroCaption: string;
  introBody: string[];
  facilitatorImage: ImgRef; facilitatorCaption: string;
  bodyAfterFacilitator: string[];
  locationLabel: string; locationHeading: string;
  locationImage: ImgRef; locationCaption: string; locationBody: string[];
  historyLabel: string; historyHeading: string;
  historyImage: ImgRef; historyCaption: string; historyBody: string[];
  chronologyLabel: string; chronologyHeading: string;
  chronology: Chronology[];
  founderLabel: string; founderHeading: string;
  founderImage: ImgRef; founderQuote: string; founderBody: string[];
  galleryLabel: string; galleryHeading: string;
  gallery: GalleryItem[];
};

const ChronologySection = ({ heading, label, items, expandedItems, toggleExpand }: {
  heading: string; label: string;
  items: Chronology[];
  expandedItems: Set<number>;
  toggleExpand: (index: number) => void;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = 288 + 24;

  const scrollToIndex = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * cardWidth, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!isAutoScrolling) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev + 1 >= items.length ? 0 : prev + 1;
        scrollToIndex(next);
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoScrolling, items.length, scrollToIndex]);

  const scrollByCard = (direction: "left" | "right") => {
    setIsAutoScrolling(false);
    setActiveIndex((prev) => {
      const next = direction === "left" ? Math.max(0, prev - 1) : Math.min(items.length - 1, prev + 1);
      scrollToIndex(next);
      return next;
    });
  };

  return (
    <section className="py-16 md:py-24 section-cream">
      <div className="container-wide">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="heading-subsection block mb-4">{label}</span>
            <h2 className="heading-section text-foreground">{heading}</h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => scrollByCard("left")} disabled={activeIndex === 0} className="bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 shadow-md disabled:opacity-30 hover:bg-background transition-colors" aria-label="Scroll left">
              <ChevronLeft size={20} className="text-foreground" />
            </button>
            <button onClick={() => scrollByCard("right")} disabled={activeIndex >= items.length - 1} className="bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 shadow-md disabled:opacity-30 hover:bg-background transition-colors" aria-label="Scroll right">
              <ChevronRight size={20} className="text-foreground" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div ref={scrollRef} className="overflow-x-auto scrollbar-hide snap-x snap-mandatory" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} onMouseEnter={() => setIsAutoScrolling(false)} onMouseLeave={() => setIsAutoScrolling(true)}>
            <div className="flex gap-6 py-4" style={{ width: "max-content" }}>
              {items.map((milestone, index) => (
                <div key={milestone._key} className="w-72 flex-shrink-0 snap-start bg-background rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0" />
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <span className="text-primary font-serif font-bold text-xl block mb-2">{milestone.year}</span>
                  <p className="text-muted-foreground text-sm leading-relaxed">{milestone.event}</p>
                  {milestone.expandedText && (
                    <>
                      <button onClick={() => toggleExpand(index)} className="text-primary text-sm font-semibold mt-2 hover:underline">
                        {expandedItems.has(index) ? "Show less" : "Read more"}
                      </button>
                      <AnimatePresence>
                        {expandedItems.has(index) && (
                          <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-muted-foreground mt-2 text-xs">
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

        <div className="flex justify-center mt-6">
          <button onClick={() => setIsAutoScrolling(!isAutoScrolling)} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
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

  const { data } = useQuery<Doc | null>({
    queryKey: ["page-our-story"],
    queryFn: () => sanityClient.fetch(`*[_id == "page-our-story"][0]`),
  });

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Header isInnerPage />
        <main className="pt-24" />
        <Footer />
      </div>
    );
  }

  const u = (i: ImgRef) => urlFor(i).width(1600).auto("format").url();

  const ImageWithEnlarge = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
    <div className="relative group">
      <div className="overflow-hidden">
        <img src={src} alt={alt} className="w-full h-auto object-cover" />
      </div>
      <button onClick={() => setEnlargedImage(src)} className="absolute top-4 right-4 bg-terracotta hover:bg-terracotta/90 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-all" aria-label="Enlarge image">
        <Maximize2 size={16} />
      </button>
      {caption && <p className="text-muted-foreground italic text-sm mt-3 text-center">{caption}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header isInnerPage />

      <section className="pt-24 md:pt-28 pb-8 bg-background">
        <div className="container-wide max-w-4xl mx-auto text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-terracotta font-semibold uppercase tracking-wider text-sm mb-4">{data.eyebrow}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-8">{data.title}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-muted-foreground leading-relaxed mb-10">{data.intro}</motion.p>
        </div>
      </section>

      <section className="pb-16 bg-background">
        <div className="container-wide max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <ImageWithEnlarge src={u(data.heroImage)} alt="Children racing towards a brighter future" caption={data.heroCaption} />
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide max-w-4xl mx-auto space-y-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="prose prose-lg max-w-none text-muted-foreground">
            {data.introBody.map((p, i) => <p key={i}>{p}</p>)}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <ImageWithEnlarge src={u(data.facilitatorImage)} alt="Teacher as facilitator" caption={data.facilitatorCaption} />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="prose prose-lg max-w-none text-muted-foreground">
            {data.bodyAfterFacilitator.map((p, i) => <p key={i}>{p}</p>)}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 section-cream">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="heading-subsection block mb-4">{data.locationLabel}</span>
            <h2 className="heading-section text-foreground">{data.locationHeading}</h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <ImageWithEnlarge src={u(data.locationImage)} alt={data.locationCaption} caption={data.locationCaption} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="prose prose-lg max-w-none text-muted-foreground">
            {data.locationBody.map((p, i) => <p key={i}>{p}</p>)}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="heading-subsection block mb-4">{data.historyLabel}</span>
            <h2 className="heading-section text-foreground">{data.historyHeading}</h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <ImageWithEnlarge src={u(data.historyImage)} alt={data.historyCaption} caption={data.historyCaption} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="prose prose-lg max-w-none text-muted-foreground">
            {data.historyBody.map((p, i) => <p key={i}>{p}</p>)}
          </motion.div>
        </div>
      </section>

      <ChronologySection
        heading={data.chronologyHeading}
        label={data.chronologyLabel}
        items={data.chronology}
        expandedItems={expandedItems}
        toggleExpand={toggleExpand}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="heading-subsection block mb-4">{data.founderLabel}</span>
            <h2 className="heading-section text-foreground">{data.founderHeading}</h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <ImageWithEnlarge src={u(data.founderImage)} alt={data.founderHeading} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="prose prose-lg max-w-none text-muted-foreground">
            <blockquote className="border-l-4 border-terracotta pl-6 italic text-foreground/80 my-8">
              {data.founderQuote}
            </blockquote>
            {data.founderBody.map((p, i) => <p key={i}>{p}</p>)}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 section-cream">
        <div className="container-wide max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="heading-subsection block mb-4">{data.galleryLabel}</span>
            <h2 className="heading-section text-foreground">{data.galleryHeading}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.gallery.slice(0, 3).map((item, index) => (
              <motion.div key={item._key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}>
                <ImageWithEnlarge src={urlFor(item.image).width(1200).url()} alt={item.caption} caption={item.caption} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="/gallery" className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-primary-foreground px-8 py-3 text-sm uppercase tracking-[0.15em] font-medium transition-colors">
              View All <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-background pt-8">
        <div className="container-wide max-w-4xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2 text-terracotta font-semibold uppercase text-sm tracking-wider hover:gap-3 transition-all">
            <span>←</span> Back to Home
          </a>
        </div>
      </section>

      <AnimatePresence>
        {enlargedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setEnlargedImage(null)}>
            <button onClick={() => setEnlargedImage(null)} className="absolute top-6 right-6 bg-terracotta hover:bg-terracotta/90 text-white p-2 rounded-md transition-all" aria-label="Close enlarged image">
              <X size={24} />
            </button>
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} src={enlargedImage} alt="Enlarged view" className="max-w-full max-h-[90vh] object-contain rounded-lg" />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default OurStoryPage;
