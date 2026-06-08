import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { sanityClient, urlFor } from "@/lib/sanity";
import { blogPosts as fallbackPosts } from "@/data/blogPosts";
import { blogImageBySlug, fallbackBlogImage } from "@/data/blogImages";

type SanityBlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  date: string;
  order?: number;
  image?: any;
};

const formatDate = (iso: string) => {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
};

const BlogPage = () => {
  const { data } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: () =>
      sanityClient.fetch<SanityBlogPost[]>(
        `*[_type == "blogPost"] | order(order asc, date desc){
          _id, title, slug, date, order, image
        }`
      ),
  });

  const posts =
    data && data.length > 0
      ? data.map((p) => ({
          slug: p.slug.current,
          title: p.title,
          date: formatDate(p.date),
          image: p.image
            ? urlFor(p.image).width(800).height(600).fit("crop").auto("format").url()
            : blogImageBySlug[p.slug.current] ?? fallbackBlogImage,
        }))
      : fallbackPosts.map((p) => ({
          slug: p.slug,
          title: p.title,
          date: p.date,
          image: p.image,
        }));

  return (
    <div className="min-h-screen bg-background">
      <Header isInnerPage />

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

      <section className="py-16">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {posts.map((post, index) => (
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
