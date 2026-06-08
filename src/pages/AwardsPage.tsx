// Awards & Recognitions Page
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import NYTArticleModal from "@/components/NYTArticleModal";
import { sanityClient, urlFor } from "@/lib/sanity";
import awardsHero from "@/assets/awards-hero.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

type Award = {
  _id: string;
  year: string;
  title: string;
  description: string;
  image: unknown;
  linkUrl?: string;
  order: number;
};

const QUERY = `*[_type == "award"] | order(order asc) { _id, year, title, description, image, linkUrl, order }`;

// Reimagine 2018/19 is the one that should show the NYT article CTA (per original)
const ARTICLE_LINKS = new Set(["Silver Award Winner - Hybrid Learning Category by Reimagine Education"]);

const citations = [
  { year: "1996", text: 'Kaplan, Robert D. 1996. "Rishi Valley and human ingenuity". The Ends of the Earth. A Journey at the Dawn of the 21st Century. P 354–368. Random House. New York' },
  { year: "1997", text: "Bringing Within Reach: A Document on Universalization of Girls' Education (UNICEF, 1997)" },
  { year: "1999", text: "Article in a Spanish Magazine Human Planet: Ideas to Change the World August 1999 by Nuria Verde" },
  { year: "2000", text: "A Valley of Learning by Julia Ponsonby, Resurgence, Sep-Oct 2000." },
  { year: "2018", text: 'Article on RIVER Programmes in New York Times: "Teaching Children Regardless of Grade" by Alia Dharssi.', hasArticle: true },
];

const partnershipsLeft = [
  "University of Regensburg, Germany",
  "University of St. Gallen, Switzerland",
  "University of Cambridge, UK",
];
const partnershipsRight = [
  "University of Lorraine (formerly Paul Verlaine University, Metz, France)",
  "Teachers College, Columbia University",
  "Brookings Institution, Washington DC",
];
const academicLeft = [
  "Harvard Kennedy School",
  "University of Oxford, UK",
  "India School Fund of Harvard Business School",
  "Kent State University, Ohio",
];
const academicRight = [
  "City University of New York",
  "University of New England, Australia",
  "The Chulalongkorn University, Bangkok",
  "Cape Peninsula University of Technology, South Africa",
];

const AwardsPage = () => {
  const [articleOpen, setArticleOpen] = useState(false);
  const { data: awards = [] } = useQuery<Award[]>({
    queryKey: ["awards"],
    queryFn: () => sanityClient.fetch(QUERY),
  });

  return (
    <div className="min-h-screen bg-background">
      <Header isInnerPage />

      {/* Hero */}
      <section className="pt-32 pb-16 section-cream">
        <div className="container-wide text-center">
          <motion.span {...fadeUp} className="heading-subsection block mb-4">Our Impact</motion.span>
          <motion.h1 {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="heading-section text-foreground max-w-4xl mx-auto mb-8">
            Awards & Recognitions
          </motion.h1>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            The Rishi Valley Institute for Educational Resources has been a pioneer in the field of elementary education for several decades, setting new benchmarks and establishing innovative approaches to learning. Our MGML (Multi-Grade Multi-Level) methodology has been successful in promoting social and gender equity in education and has impacted over 20 million children across more than 900,000 schools.
          </motion.p>
          <motion.img {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} src={awardsHero} alt="Awards & Recognitions" className="w-full rounded-xl" />
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.4 }} className="text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-8">
            With an impressive outreach, RIVER has been able to positively impact education in many rural areas, providing children with access to quality education that would otherwise be unavailable to them. The MGML pedagogy has received widespread recognition and appreciation from education experts and institutions globally for its innovative approach. The institute has been recognised by the Indian government and various international press and organisations for its remarkable contributions to the field of education.
          </motion.p>
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="py-16 md:py-24">
        <div className="container-wide max-w-5xl mx-auto">
          <div className="space-y-16">
            {awards.map((award, i) => {
              const hasArticle = ARTICLE_LINKS.has(award.title);
              const Content = (
                <>
                  <span className="font-cormorant text-2xl md:text-3xl font-bold text-primary block mb-2">{award.year}</span>
                  <h3 className="font-cormorant text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                    {award.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{award.description}</p>
                </>
              );
              return (
                <motion.div
                  key={award._id}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
                >
                  <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                    <img
                      src={urlFor(award.image).width(900).url()}
                      alt={award.title}
                      className="w-full rounded-xl max-h-[300px] object-cover"
                    />
                  </div>
                  <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                    {award.linkUrl ? (
                      <a href={award.linkUrl} target="_blank" rel="noopener noreferrer" className="group block">
                        {Content}
                      </a>
                    ) : (
                      <div className="group">{Content}</div>
                    )}
                    {hasArticle && (
                      <button
                        onClick={() => setArticleOpen(true)}
                        className="mt-4 text-primary font-semibold underline underline-offset-4 hover:text-primary/80 transition-colors"
                      >
                        Read Article →
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Citations */}
      <section className="py-16 md:py-24 section-cream">
        <div className="container-wide max-w-5xl mx-auto">
          <motion.h2 {...fadeUp} className="heading-section text-foreground text-center mb-12">Important Citations</motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {citations.map((c, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.05 }} className="bg-background rounded-xl p-6 shadow-sm">
                <span className="font-cormorant text-2xl font-bold text-primary block mb-3">{c.year}</span>
                <p className="text-muted-foreground leading-relaxed text-sm">{c.text}</p>
                {c.hasArticle && (
                  <button
                    onClick={() => setArticleOpen(true)}
                    className="mt-3 text-primary font-semibold underline underline-offset-4 hover:text-primary/80 transition-colors text-sm"
                  >
                    Read Article →
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Partnerships - Dark Section */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container-wide max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <motion.div {...fadeUp}>
              <h2 className="font-cormorant text-2xl md:text-3xl font-bold mb-6">International Partnerships & Collaborations</h2>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <p className="text-background/80 leading-relaxed">
                We have initiated collaborative research projects with various universities in order to understand the implications of multi-grade education in diverse communities and to benefit from contemporary pedagogical theories and practices.
              </p>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.ul {...fadeUp} className="space-y-4">
              {partnershipsLeft.map((p, i) => (
                <li key={i} className="flex gap-3 text-background/80">
                  <span className="text-primary shrink-0">•</span>{p}
                </li>
              ))}
            </motion.ul>
            <motion.ul {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-4">
              {partnershipsRight.map((p, i) => (
                <li key={i} className="flex gap-3 text-background/80">
                  <span className="text-primary shrink-0">•</span>{p}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Academic Acclaim */}
      <section className="py-16 md:py-24">
        <div className="container-wide max-w-5xl mx-auto">
          <motion.h2 {...fadeUp} className="font-cormorant text-2xl md:text-3xl font-bold text-foreground mb-8">Academic Acclaim</motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.ul {...fadeUp} className="space-y-4">
              {academicLeft.map((a, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary shrink-0">•</span>{a}
                </li>
              ))}
            </motion.ul>
            <motion.ul {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-4">
              {academicRight.map((a, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary shrink-0">•</span>{a}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      <NYTArticleModal open={articleOpen} onOpenChange={setArticleOpen} />

      <Footer />
    </div>
  );
};

export default AwardsPage;
