import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import awardsHero from "@/assets/awards-hero.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const awards = [
  { year: "2021", title: "Millennium Alliance Innovation Challenge Award - Round 6 In Education Category", org: "Millennium Alliance", desc: "For scaling up the MGML methodology in government primary schools in North India under education category." },
  { year: "2018/19", title: "Silver Award Winner - Hybrid Learning Category", org: "Reimagine Education", desc: "For RIVER's innovative pedagogies." },
  { year: "2016", title: "Top 25 Social Innovations in India", org: "Ministry of External Affairs & NITI Aayog, Govt. of India", desc: "For offering commercially viable solutions to the socio-economic problems of India." },
  { year: "2016", title: "Millennium Alliance Innovation Challenge Award - Round 3 In Education Category", org: "Millennium Alliance", desc: "For dissemination of the MGML methodology in government primary schools in the state of Andhra Pradesh." },
  { year: "2012", title: "Ranked 74 — Top 100 Best NGOs in the World", org: "The Global Journal, Geneva", desc: 'As significant agents of social change and seeking to "move beyond outdated clichés and narrow conceptions about what an NGO is and does".' },
  { year: "2011", title: "Jindal Prize", org: "Sitaram Jindal Foundation", desc: "For Education with emphasis on moral upliftment." },
  { year: "2010/11", title: "Recognised by Multiple International Forums", org: "Visegrad, WEF Davos, Clinton Global Foundation & others", desc: "RIVER projects and its MGML Methodology recognised as an inspiring way of practice in global development." },
  { year: "2009", title: "Social Entrepreneurs Of The Year", org: "Schwab Foundation for Social Entrepreneurship, World Economic Forum, Geneva", desc: "For pioneering solutions for social and environmental challenges to highlight and expand leading models of social innovation around the world." },
  { year: "2004", title: "The Japanese Prize for the Most Innovative Development Project", org: "The Global Development Network", desc: "Research on development produced by researchers from developing and transition countries." },
  { year: "2003", title: "Ashoka Fellowship", org: "Ashoka", desc: "Ashoka supports the world's leading social entrepreneurs, learns from the patterns in their innovations, and mobilises a global community that embraces these new frameworks." },
  { year: "2003", title: "Recognition by UNICEF & Government of India", org: "UNICEF & Govt. of India", desc: "Recognition for adapting and expanding RIVER learning programmes in government primary schools in 7 Indian states." },
  { year: "1997", title: "The Rockefeller Foundation Grant", org: "Rockefeller Foundation", desc: "Rockefeller Grant enriched collaborations across linguistic zones in India." },
  { year: "1995", title: "Ministry of HRD, Government of India Grant", org: "Govt. of India", desc: "Grant for R&D and dissemination of the model." },
];

const citations = [
  { year: "1996", text: 'Kaplan, Robert D. 1996. "Rishi Valley and human ingenuity". The Ends of the Earth. A Journey at the Dawn of the 21st Century. P 354–368. Random House. New York' },
  { year: "1997", text: "Bringing Within Reach: A Document on Universalization of Girls' Education (UNICEF, 1997)" },
  { year: "1999", text: "Article in a Spanish Magazine Human Planet: Ideas to Change the World August 1999 by Nuria Verde" },
  { year: "2000", text: "A Valley of Learning by Julia Ponsonby, Resurgence, Sep-Oct 2000." },
  { year: "2018", text: 'Article on RIVER Programmes in New York Times: "Teaching Children Regardless of Grade" by Alia Dharssi.' },
];

const partnerships = [
  "University of Regensburg, Germany",
  "University of St. Gallen, Switzerland",
  "University of Cambridge, UK",
  "University of Lorraine, France",
  "Teachers College, Columbia University",
  "Brookings Institution, Washington DC",
];

const academicAcclaim = [
  "Harvard Kennedy School",
  "University of Oxford, UK",
  "India School Fund of Harvard Business School",
  "Kent State University, Ohio",
  "City University of New York",
  "University of New England, Australia",
  "The Chulalongkorn University, Bangkok",
  "Cape Peninsula University of Technology, South Africa",
];

const AwardsPage = () => {
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
            The Rishi Valley Institute for Educational Resources has been a pioneer in the field of elementary education for several decades, setting new benchmarks and establishing innovative approaches to learning. Our MGML methodology has been successful in promoting social and gender equity in education and has impacted over 20 million children across more than 900,000 schools.
          </motion.p>
          <motion.img {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} src={awardsHero} alt="Awards & Recognitions" className="w-full rounded-xl" />
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.4 }} className="text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-8">
            With an impressive outreach, RIVER has been able to positively impact education in many rural areas, providing children with access to quality education. The MGML pedagogy has received widespread recognition and appreciation from education experts and institutions globally for its innovative approach.
          </motion.p>
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="py-16 md:py-24">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[60px] md:left-[80px] top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {awards.map((award, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.05 }} className="flex gap-6 md:gap-8">
                  <div className="shrink-0 w-[50px] md:w-[70px] text-right">
                    <span className="font-cormorant text-lg md:text-xl font-bold text-primary">{award.year}</span>
                  </div>
                  <div className="relative pt-1">
                    <div className="absolute -left-[13px] top-2 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                    <div className="pl-4">
                      <h3 className="font-cormorant text-xl md:text-2xl font-bold text-foreground mb-1">{award.title}</h3>
                      <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">{award.org}</p>
                      <p className="text-muted-foreground leading-relaxed">{award.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Citations */}
      <section className="py-16 md:py-24 section-cream">
        <div className="container-wide max-w-4xl mx-auto">
          <motion.h2 {...fadeUp} className="heading-section text-foreground text-center mb-12">Important Citations</motion.h2>
          <div className="space-y-6">
            {citations.map((c, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.05 }} className="flex gap-4 items-start">
                <span className="font-cormorant text-lg font-bold text-primary shrink-0 w-12">{c.year}</span>
                <p className="text-muted-foreground leading-relaxed">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships & Academic Acclaim */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div {...fadeUp}>
              <h2 className="font-cormorant text-2xl md:text-3xl font-bold text-foreground mb-6">International Partnerships & Collaborations</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We have initiated collaborative research projects with various universities to understand the implications of multi-grade education in diverse communities.
              </p>
              <ul className="space-y-3">
                {partnerships.map((p, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary shrink-0">•</span>{p}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <h2 className="font-cormorant text-2xl md:text-3xl font-bold text-foreground mb-6">Academic Acclaim</h2>
              <ul className="space-y-3">
                {academicAcclaim.map((a, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary shrink-0">•</span>{a}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AwardsPage;
