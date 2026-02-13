import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header isInnerPage />
        <div className="pt-32 pb-20 text-center container-wide">
          <h1 className="heading-section text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary font-semibold hover:underline">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get 3 related posts (excluding current)
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header isInnerPage />

      <article className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-section text-foreground mb-4"
          >
            {post.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground mb-8"
          >
            {post.date}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-sm"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            {post.content.map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h4 key={i} className="font-heading text-xl md:text-2xl text-foreground mt-8 mb-4 font-medium">
                    {paragraph.replace("## ", "")}
                  </h4>
                );
              }
              return (
                <p key={i} className="text-foreground/80 leading-relaxed mb-5" style={{ fontFamily: "var(--font-body)" }}>
                  {paragraph}
                </p>
              );
            })}
          </motion.div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-10">
            <h3 className="font-heading text-2xl text-foreground">Related Post</h3>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary font-semibold uppercase text-sm tracking-wider hover:gap-3 transition-all"
            >
              View More <span>→</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((rp) => (
              <Link key={rp.slug} to={`/blog/${rp.slug}`} className="group block">
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img
                    src={rp.image}
                    alt={rp.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="font-heading text-lg text-foreground group-hover:text-primary transition-colors leading-snug mb-2 line-clamp-2">
                  {rp.title}
                </h4>
                <p className="text-sm text-muted-foreground">{rp.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
