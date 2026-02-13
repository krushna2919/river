// Awards & Recognitions Page
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import awardsHero from "@/assets/awards-hero.jpg";
import awardMA from "@/assets/award-ma.jpg";
import awardReimagine from "@/assets/award-reimagine.png";
import awardNITI from "@/assets/award-niti.jpg";
import awardGJ from "@/assets/award-gj.jpg";
import awardSJF from "@/assets/award-sjf.jpg";
import awardWEF from "@/assets/award-wef.jpg";
import awardSchwab from "@/assets/award-schwab.png";
import awardGDN from "@/assets/award-gdn.png";
import awardAshoka from "@/assets/award-ashoka.png";
import awardUNICEF from "@/assets/award-unicef.png";
import awardRockefeller from "@/assets/award-rockefeller.png";
import awardHRD from "@/assets/award-hrd.png";
import awardREArticle1 from "@/assets/award-re-article-1.jpg";
import awardREArticle2 from "@/assets/award-re-article-2.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const awards = [
  {
    year: "2021",
    image: awardMA,
    title: "Millennium Alliance Innovation Challenge Award - Round 6 In Education Category By Millennium Alliance",
    desc: "For scaling up the MGML methodology in government primary schools in North India under education category.",
    link: "https://tinyurl.com/558Ue4e6",
  },
  {
    year: "2018/19",
    image: awardReimagine,
    title: "Silver Award Winner - Hybrid Learning Category by Reimagine Education",
    desc: "For RIVER's innovative pedagogies.",
    link: "https://tinyurl.com/4epa772d",
    hasArticle: true,
  },
  {
    year: "2016",
    image: awardNITI,
    title: "Top 25 Social Innovations in India by Ministry of External Affairs & NITI Aayog, Govt. of India",
    desc: "For offering commercially viable solutions to the socio-economic problems of India.",
    link: "https://tinyurl.com/Sk8runff",
  },
  {
    year: "2016",
    image: awardMA,
    title: "Millennium Alliance Innovation Challenge Award - Round 3 In Education Category By Millennium Alliance",
    desc: "For dissemination of the MGML methodology in government primary schools in the state of Andhra Pradesh.",
    link: "https://tinyurl.com/2bc76sm6",
  },
  {
    year: "2012",
    image: awardGJ,
    title: "Ranked 74 — Top 100 best NGOs in the world by The Global Journal, Geneva",
    desc: 'As significant agents of social change and seeking to "move beyond outdated clichés and narrow conceptions about what an NGO is and does".',
    link: "https://tinyurl.com/tfdhb53a",
  },
  {
    year: "2011",
    image: awardSJF,
    title: "Jindal Prize By Sitaram Jindal Foundation",
    desc: "For Education with emphasis on moral upliftment.",
    link: "https://tinyurl.com/ywbf6tvz",
  },
  {
    year: "2010/11",
    image: awardWEF,
    title: "Recognised by Visegrad Regional Seminar on Global Development Education, Prague, Czech Republic; World Economic Summit in Davos, Switzerland; Summer Davos Meeting of New Champions at Dalian, China; Clinton Global Foundation, New York",
    desc: "RIVER projects and its MGML Methodology as an inspiring way of practice in global development.",
    link: "https://tinyurl.com/2w5ztuec",
  },
  {
    year: "2009",
    image: awardSchwab,
    title: "Social Entrepreneurs Of The Year By The Schwab Foundation For Social Entrepreneurship, World Economic Forum, Geneva",
    desc: "For pioneering solutions for social and environmental challenges to highlight and expand leading models of social innovation around the world.",
    link: "https://tinyurl.com/2e6f84ux",
  },
  {
    year: "2004",
    image: awardGDN,
    title: "The Japanese Prize for the Most Innovative Development Project by The Global Development Network",
    desc: "Research on development produced by researchers from developing and transition countries.",
    link: "https://tinyurl.com/5n6d5r74",
  },
  {
    year: "2003",
    image: awardAshoka,
    title: "The Japanese Prize for the Most Innovative Development Project by The Global Development Network",
    desc: "Ashoka supports the world's leading social entrepreneurs, learns from the patterns in their innovations, and mobilises a global community that embraces these new frameworks.",
    link: "https://tinyurl.com/2p8y6etc",
  },
  {
    year: "2003",
    image: awardUNICEF,
    title: "UNICEF & Government of India",
    desc: "Recognition for adapting and expanding RIVER learning programmes in government primary schools in 7 Indian states.",
    link: "https://tinyurl.com/ward88e5",
  },
  {
    year: "1997",
    image: awardRockefeller,
    title: "The Rockefeller Foundation Grant",
    desc: "Rockefeller Grant enriched collaborations across linguistic zones in India.",
  },
  {
    year: "1995",
    image: awardHRD,
    title: "Ministry of HRD, Government of India Grant",
    desc: "Grant for R&D and dissemination of the model.",
  },
];

const citations = [
  { year: "1996", text: 'Kaplan, Robert D. 1996. "Rishi Valley and human ingenuity". The Ends of the Earth. A Journey at the Dawn of the 21st Century. P 354–368. Random House. New York' },
  { year: "1997", text: "Bringing Within Reach: A Document on Universalization of Girls' Education (UNICEF, 1997)" },
  { year: "1999", text: "Article in a Spanish Magazine Human Planet: Ideas to Change the World August 1999 by Nuria Verde" },
  { year: "2000", text: "A Valley of Learning by Julia Ponsonby, Resurgence, Sep-Oct 2000." },
  { year: "2018", text: 'Article on RIVER Programmes in New York Times: "Teaching Children Regardless of Grade" by Alia Dharssi.' },
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
            {awards.map((award, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                {/* Image */}
                <div className={`${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full rounded-xl max-h-[300px] object-cover"
                  />
                </div>

                {/* Content */}
                <div className={`${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  {award.link ? (
                    <a href={award.link} target="_blank" rel="noopener noreferrer" className="group block">
                      <span className="font-cormorant text-2xl md:text-3xl font-bold text-primary block mb-2">{award.year}</span>
                      <h3 className="font-cormorant text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                        {award.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{award.desc}</p>
                    </a>
                  ) : (
                    <div>
                      <span className="font-cormorant text-2xl md:text-3xl font-bold text-primary block mb-2">{award.year}</span>
                      <h3 className="font-cormorant text-xl md:text-2xl font-bold text-foreground mb-3">
                        {award.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{award.desc}</p>
                    </div>
                  )}
                  {award.hasArticle && (
                    <button
                      onClick={() => setArticleOpen(true)}
                      className="mt-4 text-primary font-semibold underline underline-offset-4 hover:text-primary/80 transition-colors"
                    >
                      Read Article →
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
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

      {/* Read Article Dialog for 2018/19 Reimagine Education */}
      <Dialog open={articleOpen} onOpenChange={setArticleOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogTitle className="font-cormorant text-2xl md:text-3xl font-bold text-foreground">
            Silver Award Winner - Hybrid Learning Category by Reimagine Education (2018/19)
          </DialogTitle>
          <div className="space-y-6 mt-4">
            <p className="text-muted-foreground leading-relaxed">
              RIVER's innovative pedagogies were recognised with the Silver Award in the Hybrid Learning Category at the Reimagine Education Conference & Awards. The Reimagine Education Awards, often referred to as the "Oscars of Education," celebrate the most innovative approaches to education worldwide.
            </p>
            <img src={awardREArticle1} alt="Reimagine Education Award Ceremony" className="w-full rounded-xl" />
            <p className="text-muted-foreground leading-relaxed">
              The MGML methodology developed by RIVER combines self-paced learning materials with facilitated group activities, enabling children of different ages and ability levels to learn together effectively. This hybrid approach has been recognised for its scalability and impact across diverse educational contexts.
            </p>
            <img src={awardREArticle2} alt="Reimagine Education Award" className="w-full rounded-xl" />
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default AwardsPage;
