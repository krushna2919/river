// Wave 3 seed: Home page singleton.
// Run: node scripts/seed-wave3.mjs
import { client } from "./sanity-client.mjs";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imageMap = JSON.parse(
  fs.readFileSync(path.join(__dirname, ".image-map.json"), "utf8")
);

const img = (filename) => {
  const id = imageMap[filename];
  if (!id) throw new Error(`Image not in map: ${filename}`);
  return { _type: "image", asset: { _type: "reference", _ref: id } };
};

const home = {
  _id: "page-home",
  _type: "homePage",

  hero: {
    headline: "Empowering Rural Communities Through Quality Education",
    ctaLabel: "Donate Now",
    ctaHref: "/donate",
    scrollLabel: "Scroll to View",
    videoSrc: "/videos/hero-video.mp4",
  },

  ourStory: {
    eyebrow: "Our Story",
    title: "Revolutionising Rural Education: Promoting Equity and Social Justice",
    body: "The Rishi Valley Rural Education Centre has spearheaded a rural revolution since 1976 with its widely acclaimed educational initiatives and inclusive teaching methods, fostering social justice and equal opportunities.",
    image: img("our-story-home.png"),
    imageAlt: "Children learning in rural classroom",
    linkLabel: "View more",
    linkHref: "/our-story",
  },

  impact: {
    eyebrow: "Our Impact",
    title: "Rishi Valley Rural Education Centre: Inspiring Change, Transforming Education, Enriching Communities",
    stats: [
      { _key: "s1", icon: "school", number: "250,000+", label: "Schools Covered" },
      { _key: "s2", icon: "users", number: "500,000+", label: "Teachers Trained" },
      { _key: "s3", icon: "baby", number: "125,000,000+", label: "Children Impacted" },
      { _key: "s4", icon: "calendar", number: "3,300+", label: "Training Days" },
    ],
    linkLabel: "View all Achievement",
    linkHref: "/achievements",
  },

  nytSpotlight: {
    publication: "The New York Times",
    heading: "Teaching children regardless of grade",
    quotes: [
      '"To help children relate to concepts, activities incorporate local dialects, folklore and natural materials from the local environment. The curriculum also incorporates community festivals and group activities .…."',
      '"One decade after the approach was adopted in schools run by the Rishi Valley Rural Education Center, dropout rates were 30 percent lower than in nearby public schools, while student achievement in reading and math was up to 40 percent higher..…"',
    ],
    ctaLabel: "Read article",
    statValue: "30%",
    statCaption: "Lower dropout rates compared to nearby public schools",
  },

  methodology: {
    eyebrow: "Methodology",
    title: "Discover MGML: Revolutionising Learning for Every Child",
    body: "Experience the transformative power of MGML methodology that revolutionises education, empowering every child to learn, grow, and excel. Explore our innovative approach and unlock limitless possibilities today.",
    image: img("methodology-image.jpg"),
    imageAlt: "Children learning with MGML methodology",
    linkLabel: "View more",
    linkHref: "/methodology",
  },

  donateCta: {
    title: "Transform Lives with Your Contribution",
    body: "By becoming a donor, you can make a profound difference in the lives of many children, helping us transform communities and create lasting impact. Join us today.",
    ctaLabel: "Donate Now",
    ctaHref: "/donate",
  },

  caseStudiesSection: {
    heading: "Case Studies",
    caseStudies: [
      { _key: "c1", title: "Snehabala and SLIM Cards for Competency-Based Learning in combined Andhra Pradesh: A Case Study", image: img("case-study-andhra.jpg"), href: "/case-studies/andhra-pradesh" },
      { _key: "c2", title: "Implementing Vertical Competency Based Learning in Bihar: A Case Study", image: img("case-study-bihar.jpg"), href: "/case-studies/bihar" },
      { _key: "c3", title: "Multi-Grade, Multi-Level (MGML) learning in Jharkhand: A Case Study", image: img("case-study-jharkhand.jpg"), href: "/case-studies/jharkhand" },
    ],
    blogPosts: [
      { _key: "b1", title: "Unlocking the Potential of RIVER's MGML Methodology: Harnessing Local Knowledge and Experiences", image: img("blog-2.jpg"), href: "/blog/unlocking-mgml-methodology" },
      { _key: "b2", title: "Unleashing Individual Potential: Exploring RIVER's Structured Learning Path", image: img("blog-3.jpg"), href: "/blog/unleashing-individual-potential" },
      { _key: "b3", title: "Enhancing Learning Diversity: Exploring RIVER's MGML System for Educational Growth", image: img("blog-4.jpg"), href: "/blog/enhancing-learning-diversity" },
      { _key: "b4", title: "Embarking on the Journey of Educational Excellence with RIVER: Recognising Achievements", image: img("blog-6.jpg"), href: "/blog/embarking-on-educational-excellence" },
      { _key: "b5", title: "Fostering Community and Transforming Lives: The Impact of RIVER Schools", image: img("blog-5.jpg"), href: "/blog/fostering-community" },
    ],
    caseStudiesViewAllHref: "/case-studies",
    blogViewAllHref: "/blog",
  },
};

console.log("Seeding home page...");
await client.createOrReplace(home);
console.log(`  ✓ ${home._type} (${home._id})`);
console.log("Done.");
