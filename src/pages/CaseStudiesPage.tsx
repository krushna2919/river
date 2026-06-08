import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { sanityClient, urlFor } from "@/lib/sanity";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

type CaseStudyListItem = {
  _id: string;
  slug: { current: string };
  title: string;
  image: unknown;
  // No date field in schema — use updatedAt or fixed date from summary
  _updatedAt: string;
};

const QUERY = `*[_type == "caseStudy"] | order(order asc) { _id, slug, title, image, _updatedAt }`;

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
};

const CaseStudiesPage = () => {
  const { data: caseStudies = [] } = useQuery<CaseStudyListItem[]>({
    queryKey: ["case-studies-list"],
    queryFn: () => sanityClient.fetch(QUERY),
  });

  return (
    <div className="min-h-screen bg-background">
      <Header isInnerPage />

      {/* Hero */}
      <section className="pt-32 pb-16 section-cream">
        <div className="container-wide">
          <motion.h1 {...fadeUp} className="heading-section text-foreground mb-4">
            Case Studies
          </motion.h1>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study._id}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link to={`/case-studies/${study.slug.current}`} className="group block">
                  <div className="overflow-hidden rounded-xl mb-4">
                    <img
                      src={urlFor(study.image).width(800).url()}
                      alt={study.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-cormorant text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{formatDate(study._updatedAt)}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
