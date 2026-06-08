import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
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

type CaseStudyDoc = {
  _id: string;
  slug: { current: string };
  title: string;
  image: unknown;
  body: string;
  _updatedAt: string;
};

const QUERY = `*[_type == "caseStudy"] | order(order asc) { _id, slug, title, image, body, _updatedAt }`;

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
};

const CaseStudyDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();

  const { data: caseStudies = [] } = useQuery<CaseStudyDoc[]>({
    queryKey: ["case-studies-all"],
    queryFn: () => sanityClient.fetch(QUERY),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const study = caseStudies.find((s) => s.slug?.current === slug);

  if (!caseStudies.length) {
    return (
      <div className="min-h-screen bg-background">
        <Header isInnerPage />
        <div className="pt-32 pb-16 container-wide text-center">
          <p className="text-muted-foreground">Loading…</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!study) {
    return (
      <div className="min-h-screen bg-background">
        <Header isInnerPage />
        <div className="pt-32 pb-16 container-wide text-center">
          <h1 className="heading-section text-foreground mb-4">Case Study Not Found</h1>
          <Link to="/case-studies" className="text-primary underline">
            ← Back to Case Studies
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = caseStudies.filter((s) => s.slug?.current !== slug);

  return (
    <div className="min-h-screen bg-background">
      <Header isInnerPage />

      {/* Article Content */}
      <section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h1
            {...fadeUp}
            className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4"
          >
            {study.title}
          </motion.h1>

          <motion.p {...fadeUp} className="text-muted-foreground text-sm mb-8">
            {formatDate(study._updatedAt)}
          </motion.p>

          <motion.img
            {...fadeUp}
            src={urlFor(study.image).width(1200).url()}
            alt={study.title}
            className="w-full rounded-lg mb-10"
          />

          <motion.div {...fadeUp} className="prose prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h5 className="font-cormorant text-xl font-bold text-foreground mb-3 mt-8">{children}</h5>
                ),
                p: ({ children }) => (
                  <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground leading-relaxed mb-4">{children}</ul>
                ),
                li: ({ children }) => <li>{children}</li>,
              }}
            >
              {study.body}
            </ReactMarkdown>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="border-t border-border pt-10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-cormorant text-2xl font-bold text-foreground">Related Post</h3>
              <Link to="/case-studies" className="text-primary font-semibold text-sm hover:underline">
                View More
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link key={r._id} to={`/case-studies/${r.slug.current}`} className="group">
                  <div className="overflow-hidden rounded-xl mb-3">
                    <img
                      src={urlFor(r.image).width(600).url()}
                      alt={r.title}
                      className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-cormorant text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                    {r.title}
                  </h4>
                  <p className="text-muted-foreground text-xs">{formatDate(r._updatedAt)}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyDetailPage;
