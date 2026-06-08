import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blog6 from "@/assets/blog-6.jpg";

// Local fallback images keyed by slug. Used when a Sanity blogPost has no `image` field.
export const blogImageBySlug: Record<string, string> = {
  "nurturing-rural-education": blog1,
  "unlocking-mgml-methodology": blog2,
  "unleashing-individual-potential": blog3,
  "enhancing-learning-diversity": blog4,
  "fostering-community": blog5,
  "embarking-on-educational-excellence": blog6,
};

export const fallbackBlogImage = blog1;
