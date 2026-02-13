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
import nytLogo from "@/assets/nyt-logo.png";
import nytArticle1 from "@/assets/nyt-article-1.png";
import nytArticle2 from "@/assets/nyt-article-2.png";
import nytArticle3 from "@/assets/nyt-article-3.png";
import nytArticle4 from "@/assets/nyt-article-4.png";

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

      {/* Read Article Dialog for 2018 NYT Citation */}
      <Dialog open={articleOpen} onOpenChange={setArticleOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
          <DialogTitle className="sr-only">NYT Article</DialogTitle>
          
          {/* NYT Logo Header */}
          <div className="border-b border-border px-6 pt-8 pb-4 flex justify-center">
            <img src={nytLogo} alt="The New York Times" className="h-6 md:h-8" />
          </div>

          <div className="px-6 md:px-12 py-8 space-y-6">
            {/* Heading */}
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Teaching Children Regardless of Grade
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Educators in a remote valley in India devised a community approach to instructing students when teachers were sparse. It's catching on.
            </p>

            <p className="text-sm text-muted-foreground">Dec. 4, 2018</p>

            {/* First image */}
            <figure className="space-y-2">
              <img src={nytArticle1} alt="Padmanabha Rao with a student" className="w-full rounded-lg" />
              <figcaption className="text-xs text-muted-foreground italic">
                Padmanabha Rao, a leader of the Rishi Valley Institute for Educational Resources, with a student in Andhra Pradesh, India. Mr. Rao is a creator of an approach that encourages children to learn on their own.
              </figcaption>
            </figure>

            <p className="text-sm text-muted-foreground font-semibold">By Alia Dharssi</p>
            <p className="text-sm text-muted-foreground italic">
              Ms. Dharssi is a journalist who reports on global development, sustainability and immigration.
            </p>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>One day at the beginning of the 2017-2018 school year in the rural Rishi Valley region of Andhra Pradesh, India, two dozen children in Grades 1 through 5 gathered quietly around four tables on colorful mats on the floor of their one-room school, working with books and worn laminated materials. Few looked up when I walked in.</p>

              <p>Their school has no chairs and is more than three hours from Bangalore, the closest major city. But the students were working with learning aids so effective that by now they've been adopted by more than 250,000 schools across India and in more than a dozen countries, including Kenya, Nepal and Sri Lanka. The common problem they address is one of the thorniest in education: teaching in primary schools where one teacher instructs children at multiple grade levels at once.</p>

              <p>The issue contributes to what Unesco called a "global learning crisis" in 2014, when it found that 130 million children couldn't do basic math or read, even after four years in school. Recent data indicates the crisis is even more grim, according to Manos Antoninis, director of the Global Education Monitoring report at Unesco.</p>

              <p>But experts, including Mr. Antoninis, say that Rishi Valley's pedagogy, which lets children study at their own pace, offers a solution to the problem. The approach has also been found to be useful in wealthier countries like Britain and Germany, and is applicable in countries like the United States, where teachers often manage large classes of students who have varied levels of understanding even within the same grade.</p>

              <p>"This methodology addresses the last child in the classroom, even the last child who is a disruptive child, who is a slow learner, who is a regular absentee," explained Rama Anumula, an educator who created the approach with her husband, Padmanabha Rao. In the Rishi Valley school when I visited, students in different grades were studying Telugu, the local language, side by side. At one table, a teacher helped six students, including a 5-year-old girl learning the alphabet with foam letters and a girl in fourth grade reading a song about diversity in India. At another table, a boy in first grade helped a girl learn the word for "muddy road." Nearby, two fourth graders took turns rolling dice in a game with words they recently learned.</p>

              <p>At their school, the students work through the curriculum with hands-on activities they complete independently, as well as with teachers and peers. One decade after the approach was adopted in schools run by the Rishi Valley Rural Education Center, dropout rates were 30 percent lower than in nearby public schools, while student achievement in reading and math was up to 40 percent higher, according to the center. Now, Ms. Anumula and Mr. Rao, who lead the Rishi Valley Institute for Educational Resources, work with Unicef, nongovernmental organizations and governments to spread their pedagogy.</p>

              <p>The pair's approach is based on the idea that traditional lecturing at children seated in rows and divided by ability or grade isn't effective. That was their conclusion when they moved to the countryside to pursue farming after earning postgraduate degrees in English in the 1980s. In the rural area, Ms. Anumula met child laborers who had dropped out of school, yet yearned to be able to read the hefty novels she carried. Clearly, they were highly motivated.</p>

              <p>But when Ms. Anumula and Mr. Rao spoke with villagers, they heard complaints that local children couldn't do basic math after years in school. When they visited rural public schools, they saw an unworkable system: lone teachers lecturing students across multiple grade levels in turn, plowing through textbooks even as few students understood the material.</p>

              <p>The problem is widespread. Millions of students are in multigrade classrooms worldwide, especially in developing countries, but teachers rarely receive training to manage such classrooms and policymakers neglect the problem, said Angela Little, a professor emeritus at University College London with expertise in multigrade education.</p>

              <p>But Ms. Anumula and Mr. Rao saw opportunities to harness the natural drive and helpfulness of children by breaking down the ranked-by-grade learning in favor of a community approach. "It's like a family environment," said Mr. Rao. "Older and younger children together, they can learn many things helping each other."</p>
            </div>

            {/* Second image */}
            <img src={nytArticle2} alt="Community gathering" className="w-full rounded-lg" />

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>In 1987, the couple began testing alternatives at the Rishi Valley Rural Education Center, which runs schools for children from villages that surround a renowned boarding school. Ms. Anumula and Mr. Rao worked with teachers to parse the required curriculum around hands-on activities. They refined them by watching to see what excited students and teachers, and tossing out what didn't work. In 1993, they published a model of their system, which replaces textbooks with activity cards. It's called multigrade multilevel learning, or activity-based learning.</p>

              <p>The method is meant to let students study at their own pace. They work through the curriculum by following subject-specific "learning ladders" that outline lessons with various levels of support from the teacher. Each rung of the ladder represents a learning milestone; the cards outline activities that introduce the student to a new concept, give him or her a chance to practice it and evaluate his or her understanding of it, along with possibilities for enrichment and remediation. To help children relate to concepts, activities incorporate local dialects, folklore and natural materials from the local environment. The curriculum also incorporates community festivals and group activities like singing and puppetry.</p>

              <p>Students typically begin learning milestones at a table for teacher-supported work, where the teacher introduces the concept. Students follow the ladder to identify their next activity and then move through other tables to do work that is either teacher-supported, peer-supported, partly teacher-supported or independent. Teachers track student progress and adjust tasks as needed.</p>

              <p>This way, the process engages learners who differ in natural quickness, prior knowledge and time to study. Child laborers, who frequently miss school for work, can pick up where they left off. The method allows for a "personalized education that one usually associates with very developed economies" and "makes that affordable for low-resource environments," said Fabio Segura, head of international programs at the Jacobs Foundation, a Swiss nonprofit organization focused on improving child and youth development worldwide. Starting in 2015, the foundation considered more than 3,600 models to improve education in Ivory Coast's cocoa-growing communities. Rishi Valley's model is one of 12 the foundation is testing, with assistance from cocoa companies and the government, Mr. Segura said.</p>

              <p>In Germany, about 150 schools use the method, according to Ulrike Lichtinger, a professor at Vorarlberg Teaching University in Austria. She spreads the approach with educators like Thomas Müller, professor of special education at Julius Maximilian University in Würzburg, Germany. When he introduced it at a school for children with emotional and behavioral problems where he was headmaster, students became more attentive and behavioral problems dropped "nearly to zero," he said.</p>
            </div>

            {/* Third image */}
            <img src={nytArticle3} alt="Student using learning ladder" className="w-full rounded-lg" />

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>The approach gives students greater control over learning than conventional classrooms, said Kathrin Trimborn, a German teacher who studied the method for her doctorate and works with students with emotional and behavioral problems. "Working with the learning ladder, they always know, 'O.K., I'm here and I have to do — for the next week — this, this, this. So many steps.,'" she said. "But they see how they improve and that's what's really, really motivating for them."</p>

              <p>Nevertheless, the way this teaching method overturns classroom and teaching norms has inhibited its spread in some places. In India, the pedagogy runs into a "chalk-and-talk" culture in which teachers stand in front of a class, lecturing from textbooks, and evaluate students based on memorization, said Venu Thane, coordinator at the Rishi Valley's educational resource institution.</p>

              <p>Changing that culture will take more than new teaching models. In fact, less than a third of primary classrooms in seven Indian states that used the method did so faithfully, according to a 2015 Unicef study.</p>

              <p>The problem was that most teachers were poorly trained or didn't understand the model. Others didn't take it seriously, which means they didn't appreciate how it could enhance their teaching. Some schools reverted to textbooks instead of activity cards, or didn't adapt activities to make lessons relevant for their students.</p>

              <p>The findings underscore what Mr. Rao describes as the biggest challenge to using the model to improve education, "dilution." What's needed is political backing, buy-in from teachers and long-term support for teachers, he added.</p>

              <p>That was the lesson from Tamil Nadu, a southern Indian state, Mr. Rao said. In 2003, Chennai, the state capital, introduced the method to 264 public schools with help from the Rishi Valley's institute. Based on results, many families pulled their children out of private schools and put them in public schools, a reversal of the usual trend. In 2007, Chennai's commissioner, M. P. Vijayakumar, was given the job of extending the approach to the state's 37,500 public schools. Within a year, average academic achievement in math, English and Tamil language classes increased by as much as 29 percent, according to a government-commissioned evaluation.</p>

              <p>But Tamil Nadu's success waned after Mr. Vijayakumar, a dedicated civil servant who gave his mobile number to thousands of teachers, retired the following year. According to Unicef's 2015 study, many local teachers still didn't understand the model well.</p>

              <p>Such setbacks are to be expected, Mr. Vijayakumar said, noting that teachers have lectured at children in rows for centuries. Reform, he said, is not magic. "Changing the mind-set of so many teachers and so many parents and millions and millions of children, it takes time," he said.</p>

              <p>Even so, the approach is having a notable impact. Children in Indian states that use it performed "significantly better" on a national survey of learning achievements last year, said Begur Ramachandra Rao, an education specialist at Unicef India, in an email.</p>
            </div>

            {/* Fourth image */}
            <img src={nytArticle4} alt="Students in RIVER classroom" className="w-full rounded-lg" />

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>The Rishi Valley institute is now more deliberate about assuring that the model is adopted rigorously. The institute prefers contracts of three years or more so it can adequately support teachers and troubleshoot, Padmanabha Rao explained. This is a departure from a previous model, in which the institute helped with curricular adaptation and initial teacher trainings before moving on.</p>

              <p>The institution is also incorporating technology into the method with support from the Michael and Susan Dell Foundation and the World Economic Forum. The institute has developed digital training guides, including videos, to help officials and teachers understand it. Last year, the institute also added activities involving tablets to the method in government schools in Andhra Pradesh. Students' results are uploaded to a database where officials can pinpoint which schools need more support, Mr. Rao said.</p>

              <p>After working to improve education for three decades, Ms. Anumula and Mr. Rao are committed to continuing the trial and error process. They're driven by a singular goal. "Let children really enjoy childhood," Mr. Rao said.</p>
            </div>

            <a
              href="https://www.nytimes.com/2018/12/04/opinion/teaching-children-regardless-of-grade.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-primary font-semibold underline underline-offset-4 hover:text-primary/80 transition-colors"
            >
              Read full article on The New York Times →
            </a>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default AwardsPage;
