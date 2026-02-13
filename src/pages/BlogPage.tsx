import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header isInnerPage />

      {/* Title */}
      <section className="pt-32 pb-12 border-b border-border">
        <div className="container-wide">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-section text-foreground"
          >
            Blog
          </motion.h1>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`} className="group block">
                  <div className="aspect-[4/3] overflow-hidden mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-heading text-lg text-foreground group-hover:text-primary transition-colors leading-snug mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
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

export default BlogPage;
