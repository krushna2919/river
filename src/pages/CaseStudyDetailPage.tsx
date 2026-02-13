import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import jharkhandImg from "@/assets/case-study-jharkhand.jpg";
import biharImg from "@/assets/case-study-bihar.jpg";
import andhraImg from "@/assets/case-study-andhra.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

type Section = {
  heading: string;
  content: string[];
  bullets?: string[];
};

type CaseStudy = {
  slug: string;
  title: string;
  date: string;
  image: string;
  sections: Section[];
};

const caseStudiesData: CaseStudy[] = [
  {
    slug: "mgml-learning-jharkhand",
    title: "Multi-Grade, Multi-Level (MGML) learning in Jharkhand: A Case Study",
    date: "September 2, 2022",
    image: jharkhandImg,
    sections: [
      {
        heading: "Introduction",
        content: [
          "This case study examines the implementation of the Multi-Grade, Multi-Level (MGML) programme in Jharkhand, India. The MGML programme was introduced in classes 1-2 of selected schools in four districts in December 2008. The case study explores the process of implementation, state-specific features, challenges faced, and the positive impact observed in Jharkhand's education system.",
        ],
      },
      {
        heading: "Case Description",
        content: [
          "In 2003-2004, 15 teachers from Jharkhand visited Rishi Valley Institute for Educational Resources (RIVER) with the support of UNICEF for exposure and training. Inspired by their visit, these teachers initiated systemic changes in selected schools. Subsequently, workshops were conducted in 2005-2006 to develop MGML materials for Maths and Hindi in classes 1-2. These materials were piloted in 100 schools in Ranchi and East Singhbhum districts.",
          "Based on the feedback and the team's visit to Karnataka to learn from effective Nalikali practices, the MGML materials were reviewed, modified, and strengthened. In 2008, the revised materials were printed and supplied to 235 schools in four districts. Teachers received training on the methodology and use of materials. Regular revisions were made based on suggestions from teachers, students, community members, and other stakeholders.",
        ],
      },
      {
        heading: "State-Specific Features",
        content: ["The MGML programme in Jharkhand incorporates specific features:"],
        bullets: [
          "Learning is organised around a ladder with five types of activities for each milestone, including introduction, reinforcement, evaluation, remedial, and enrichment.",
          "Learning cards are culturally specific, featuring commonly used words, local pictures, customs, and names.",
          "Readiness activities are provided based on five basic skills related to cognitive areas and motor skills to prepare children and assess their individual levels.",
          "Teachers' Guidebooks are provided, explaining the underlying philosophy, methodology, and subject-specific teaching techniques for classes 1-2.",
          "Monthly cohort studies are conducted to assess children's attendance, learning progress, leadership and creative skills, and participation in hygiene and gardening activities. Findings are analysed for individual children and specific social groups to address issues.",
          "Monitoring and academic support system, including monthly cluster meetings, involvement of CRCCs (Cluster Resource Centre Coordinators), and Education Extenders responsible for multiple MGML/SLM schools.",
        ],
      },
      {
        heading: "Challenges",
        content: ["The implementation of MGML in Jharkhand encountered various challenges:"],
        bullets: [
          "Untimely printing and supply of materials, leading to delays in teacher training.",
          "Insufficient monitoring and technical support for teachers.",
          "Inadequate capacity of teachers in curriculum design and learning material creation.",
          "Challenged power relationships between teachers and students, and between teachers and administrators/experts.",
        ],
      },
      {
        heading: "Positive Impact",
        content: ["The MGML programme in Jharkhand has shown positive outcomes:"],
        bullets: [
          "Improved attendance and learning achievement among students.",
          "Increased interest in the approach from different stakeholders.",
          "Higher teacher satisfaction due to learners' progress at their own pace.",
          "Vibrant and active classrooms with reduced dependency on teachers, appreciated by community members.",
        ],
      },
      {
        heading: "Status",
        content: [
          "The Jharkhand Education Project Council (JPEC) had implemented the MGML programme in classes 1-2 of 235 schools in 4 districts (Singhbhum, Ranchi, Gumla, and Hazaribagh) since December 2008. Based on the positive experience in these districts, the state had decided to scale up the program through a cluster approach in a phased manner in 8 additional districts, starting with Class 1 in 2010-11, and later expanding to Classes 1 & 2 in 2011-12. For this purpose, 40 schools of the Tribal Welfare Department and 30 NCLP centres were also selected. Self-learning materials (SLM) had been prepared for Classes 3 and 4, covering Hindi, Maths, and EVS, and were supplied to schools in 2009-10.",
        ],
      },
      {
        heading: "Conclusion",
        content: [
          "The implementation of the multi-grade, multi-level (MGML) programme in Jharkhand has demonstrated positive effects on attendance, learning outcomes, and teacher satisfaction. Despite challenges related to material supply, technical support, and power dynamics, the programme has created an engaging and student-centred learning environment. The case study highlights the importance of teacher training, continuous monitoring, and stakeholder involvement in promoting effective educational practices.",
        ],
      },
    ],
  },
  {
    slug: "vertical-competency-learning-bihar",
    title: "Implementing Vertical Competency Based Learning in Bihar: A Case Study",
    date: "September 2, 2022",
    image: biharImg,
    sections: [
      {
        heading: "Introduction",
        content: [
          "This case study focuses on the implementation of the 'Vertical Competency Based Learning' (VCBL) programme in Bihar, India. The VCBL programme aims to enhance the quality of education and bridge learning gaps for out-of-school or drop-out children. This case study examines the process of implementation, state-specific features, challenges faced, and the positive impact observed in Bihar's education system.",
        ],
      },
      {
        heading: "Case Description",
        content: [
          "In 2005, under the Primary Education Enhancement Project (PEEP), a group of 30 teachers from Nalanda district visited Rishi Valley Institute for Educational Resources (RIVER) for a 10-day exposure visit. Inspired by the visit, they introduced the multi-grade, multi-level (MGML) approach in classes 1-2 in 12 Demonstration Schools. The MGML materials, developed with the support of UNICEF, were based on Bihar textbooks and included workbooks for Classes 1-2.",
          "However, due to poor infrastructure and overcrowded classrooms, the MGML processes failed to flourish initially. In 2008-2009, a significant breakthrough occurred with the establishment of Residential Bridge Courses for older out-of-school children. These courses provided an opportunity to reintroduce the MGML methodologies. Condensed ABL materials and books were developed for these courses, breaking down the curriculum from Class 1 to 5 into competencies represented as a ladder. This approach was implemented in 50 Residential Bridge Courses, 100 Kasturba Gandhi Balika Vidyalayas (KGBVs), and all 22 Mahila Shikshan Kendras.",
        ],
      },
      {
        heading: "State-Specific Features",
        content: ["The VCBL programme in Bihar includes several distinct features:"],
        bullets: [
          "VCBL serves as bridge-course material designed to mainstream older out-of-school children into age-appropriate classes (Class 1-5).",
          "It includes a Pre-activity booklet with warm-up activities to assess children's levels upon arrival.",
          "The ladder approach is based on the Rishi Valley MGML methodology, using various colours, logos, and numbers to identify subjects, activities, and milestones.",
          "Loops in the form of special activity cards are incorporated in the ladder to reinforce learning after every four milestones.",
          "Project cards provide opportunities for the application of knowledge and promote interaction with peers, teachers, and the community.",
          "A Teachers' Guide is provided, offering guidance on facilitating learning for each card and encouraging teacher innovation and use of textbooks.",
        ],
      },
      {
        heading: "Challenges",
        content: ["Several challenges were encountered during the implementation of the VCBL programme in Bihar:"],
        bullets: [
          "Infrastructure constraints, such as overcrowded classrooms, posed challenges to effective implementation.",
          "Additional skilled human support was required to facilitate the programme successfully.",
          "Some teachers initially continued using textbooks or previous condensed books, hindering the integration of the new materials.",
          "Teachers needed further mentoring in assessing the existing knowledge of students upon enrolment, instead of starting from the beginning for every child.",
        ],
      },
      {
        heading: "Positive Impact",
        content: ["Despite the challenges faced, the VCBL programme in Bihar has demonstrated positive outcomes:"],
        bullets: [
          "Teachers found the materials easy to follow, and community members appreciated the engagement of teachers and learners.",
          "The pre-designed activities proved valuable for teachers who lacked adequate skills or training in organising effective teaching and learning processes.",
          "The programme materials helped reduce fear in the classroom environment.",
          "Internal evaluations conducted periodically indicated faster learning improvement in Residential Bridge Courses with VCBL compared to those without.",
        ],
      },
      {
        heading: "Status",
        content: [
          "The Vertical Competency Based Learning Programme (VCBL) was introduced in 2009, and at that time, it covered 50 Residential Bridge Courses, 100 KGBVSs, and all 22 Mahila Shikshan Kendras. During 2011-12, there were plans to extend the approach to additional RBCs and to all 450 KGBVs in the form of a Bridge Course material.",
          "Moreover, the state had planned to introduce the VCBL material in all 71,000 schools as special remedial material under the Samajhe Shike Quality Education Programme. Difficult curricular topics were being identified, and a shorter series of cards/activities were being adapted for these areas to provide either remedial or enrichment activities to those children who needed it. This was intended to be used in Classes 3 to 5, for about an hour a day, to enhance the quality of their learning.",
        ],
      },
      {
        heading: "Conclusion",
        content: [
          "The implementation of the Vertical Competency Based Learning Programme in Bihar has shown promising results in enhancing the quality of education for out-of-school children. Despite challenges related to infrastructure and teacher training, the VCBL materials have facilitated effective teaching and learning processes, leading to positive impacts on students' learning outcomes. The case study highlights the importance of targeted interventions and innovative approaches to address educational disparities and create inclusive learning environments.",
        ],
      },
    ],
  },
  {
    slug: "snehabala-slim-cards-andhra-pradesh",
    title: "Snehabala and SLIM Cards for Competency-Based Learning in combined Andhra Pradesh: A Case Study",
    date: "September 2, 2022",
    image: andhraImg,
    sections: [
      {
        heading: "Introduction",
        content: [
          "This case study focuses on the implementation of Snehabala and SLIM (Self-Learning & Interactive Material) cards in primary schools across Andhra Pradesh, India. The programme covers classes 1 to 3 in all 57,727 primary schools in the state. The case study explores the process of implementation, state-specific features, challenges faced, and the observed positive impact on teachers, students, and the learning environment.",
        ],
      },
      {
        heading: "Case Description",
        content: [
          'The origin of the "School in a Box" multi-grade, multi-level (MGML) approach, featuring a Learning Ladder and sequential learning cards, can be traced back to Rishi Valley Institute for Educational Resources (RIVER) in Chittoor District, Andhra Pradesh. This approach was initially adopted in 16 satellite schools in the area. Building upon this, the Andhra State Council of Educational Research and Training (SCERT) designed the Ananda Lahari kit, which was implemented in tribal areas for classes 1-2 in the 1980s, incorporating local logos. These materials were further refined and adapted to Krishna, East Godavari, and West Godavari districts under the Janshala\'s decentralised planning programme from 2002 to 2004, known as Krishna Veni and Gouthami.',
          'The Snehabala or "Child Friendly School Initiatives" programme was implemented from 2004 to 2007 in 1000 schools of Chittoor district under the Quality Package project. It followed an MGML-type methodology with activities and cards. In response to teachers\' feedback that the Snehabala cards were numerous and heavy, the programme was revised in 2009-10 and transformed into SLIM cards (Self-Learning & Interactive Material). The SLIM cards were piloted in selected districts and then scaled up to cover all 57,727 primary schools in Andhra Pradesh for classes 1 to 3.',
        ],
      },
      {
        heading: "State-Specific Features",
        content: ["The Snehabala and SLIM card programmes in Andhra Pradesh include several state-specific features:"],
        bullets: [
          "Snehabala cards offer activities for introduction, practice, evaluation, and remediation/enrichment.",
          "Materials provided include worksheets, children's stationery, mobile blackboards, additional teaching-learning materials (such as the Maths Kit from Navanirmithi, rubber letters, dominos), graded reading material, garden toolkits, and children's furniture.",
          "An 8-week pre-school cum school readiness component called Prathyusha is integrated, facilitating the mainstreaming of out-of-school children.",
          "SLIM cards emphasise simplified approaches, competency-based milestones, and logos. They do not include a separate ladder, as it is integrated into the monitoring tool.",
          "State-specific innovations include Teacher's Diary, Pupil's Diary, School Post Box, Wall Magazine, Classroom Library, Pupil's Portfolio, and Puppetry.",
          "Subject-specific pedagogical approaches focus on language development, math concepts, logical thinking, problem-solving, experiments, information collection, mapping skills, and analysis.",
        ],
      },
      {
        heading: "Challenges",
        content: ["The implementation of Snehabala and SLIM cards encountered various challenges:"],
        bullets: [
          "Financial constraints in providing adequate cards for each learning group separately.",
          "Timely supply of materials.",
          "Teacher attendance and transfers.",
          "Ensuring smooth transitions and linkages from class to class.",
          "Lack of supplementary reading materials for children.",
          "Additional workload for teachers in recording child-wise progress, maintaining children's portfolios, and managing school cabinets.",
        ],
      },
      {
        heading: "Positive Impact",
        content: ["The Snehabala and SLIM card programmes have yielded positive outcomes:"],
        bullets: [
          "Acceptance and appreciation by teachers and community members.",
          "Improved time-on-task, creativity, and joyful classroom environment.",
          "Reduction in student absenteeism and enhanced confidence.",
        ],
      },
      {
        heading: "Status",
        content: [
          "Snehabala and SLIM cards ('Self-Learning & Interactive Material') were implemented in Class 1 to 3 of all 57,727 primary schools in the state. In 2011-12, the state planned to integrate the textbooks for classes 1 and 2 with the competency-based SLIM cards.",
        ],
      },
      {
        heading: "Conclusion",
        content: [
          "The implementation of Snehabala and SLIM cards for competency-based learning in Andhra Pradesh has demonstrated positive outcomes and significant potential for transforming the primary education landscape. By integrating the MGML approach, state-specific innovations, and competency-based milestones, the programmes have fostered an engaging and student-centred learning environment. Teachers and community members have embraced the approach, recognizing its positive impact on student attendance, creativity, confidence, and learning outcomes.",
        ],
      },
    ],
  },
];

const CaseStudyDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const study = caseStudiesData.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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

  // Related studies (the other two)
  const related = caseStudiesData.filter((s) => s.slug !== slug);

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
            {study.date}
          </motion.p>

          <motion.img
            {...fadeUp}
            src={study.image}
            alt={study.title}
            className="w-full rounded-lg mb-10"
          />

          {study.sections.map((section, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.05 }} className="mb-8">
              <h5 className="font-cormorant text-xl font-bold text-foreground mb-3">
                {section.heading}
              </h5>
              {section.content.map((p, j) => (
                <p key={j} className="text-muted-foreground leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground leading-relaxed">
                  {section.bullets.map((b, k) => (
                    <li key={k}>{b}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
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
                <Link key={r.slug} to={`/case-studies/${r.slug}`} className="group">
                  <div className="overflow-hidden rounded-xl mb-3">
                    <img
                      src={r.image}
                      alt={r.title}
                      className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-cormorant text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                    {r.title}
                  </h4>
                  <p className="text-muted-foreground text-xs">{r.date}</p>
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
