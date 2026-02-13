import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import achievementsHero from "@/assets/achievements-hero.jpg";
import academicImg from "@/assets/achievements-academic.png";
import confidenceImg from "@/assets/achievements-confidence.png";
import gapsImg from "@/assets/achievements-gaps.png";
import stakeholderImg from "@/assets/achievements-stakeholder.png";
import teacherImg from "@/assets/achievements-teacher.png";
import localisationImg from "@/assets/achievements-localisation.png";
import policyImg from "@/assets/achievements-policy.jpg";
import recognitionImg from "@/assets/achievements-recognition.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const sections = [
  {
    image: academicImg,
    caption: "Elevating performance, confidence, and parental satisfaction",
    title: "Improvement in Academic Levels",
    content:
      'MGML methodology significantly improved academic performance in schools, with end-year results showing a 25-29% increase in Tamil, Mathematics, and English for both Class II and IV compared to the baseline study, according to the 2011 UNICEF report "Activity-Based Learning in India: Overview, Strengths & Challenges" by Suzana Andrade Brinkmann. Over 80% of parents did not feel pressured to prepare their children for exams, as academic competencies were communicated through inbuilt remediation during school hours.',
    imageFirst: true,
  },
  {
    image: confidenceImg,
    caption: "Emboldening students and transforming lives through confidence building.",
    title: "Raised Student Confidence Levels",
    content:
      "The MGML methodology has also positively impacted student confidence levels, particularly among marginalised communities. Most children who attend government schools are the poorest in the state and are from scheduled castes, according to \"A History of the Activity Based Learning Movement in Tamil Nadu\", an independent report in 2011 by Tricia Niesz, Ph.D. Kent State University Kent, Ohio, US with Ramchandar Krishnamurthy, Azim Premji Foundation, Bangalore, India and Vaishali Mahalingam, University of Cambridge, UK. The MGML programme has led to an impressive transformation in young children's autonomy and confidence, as evidenced by the fact that a first-grade child can hold the mike and speak comfortably at an assembly.",
    imageFirst: false,
  },
  {
    image: gapsImg,
    caption: "MGML's impacts include bridging gaps and fostering inclusion.",
    title: "Bridged Attainment Gaps",
    content:
      "One of the key objectives of the MGML programme has been to bridge attainment gaps in children so that all children achieve mastery of basic levels of learning. Through the programme, children are provided with continuous assessments to check for understanding and are given the opportunity to participate in activities, games, and songs. This has helped reduce student learning gaps, promote social interaction, and reduce social barriers and discrimination.",
    imageFirst: true,
  },
  {
    image: stakeholderImg,
    caption: "Teacher testimonials attest to MGML methodology's transformative impact.",
    title: "Built Stakeholder Approval",
    content:
      'The MGML methodology has received overall positive feedback from teachers, according to the 2011 UNICEF report "Activity-Based Learning in India: Overview, Strengths & Challenges" by Suzana Andrade Brinkmann. 95% of teachers felt that children\'s learning skills have vastly improved because of MGML. 92% of teachers opined that reading proficiency has remarkably improved, and 90% mentioned that writing skills have also greatly improved. They also felt that children\'s self-confidence and decision-making skills have greatly improved due to MGML.',
    imageFirst: false,
  },
  {
    image: teacherImg,
    caption: "Educators' sense of ownership has fuelled MGML's achievements.",
    title: "Improved Teacher Commitment and Involvement",
    content:
      "The MGML programme has also led to an improvement in teacher commitment and involvement. Through the programme, teachers have been given more creative freedom and the opportunity to participate in developing, implementing, and reviewing teaching materials. This has resulted in the sense of ownership among teachers, which has further contributed to their commitment to the programme.",
    imageFirst: true,
  },
  {
    image: localisationImg,
    caption: "Innovative curriculum and localised teaching materials for easier learning.",
    title: "Localisation for Multigrade Teaching",
    content:
      "The MGML programme has successfully developed locally appropriate teaching materials adapted to an innovative curriculum. This has helped create a good learning environment conducive to the needs of students. The programme has also successfully developed a core of child-centred multigrade teacher trainers who can be mobilised to train other teachers. This has helped establish a teacher support system that provides better supervision, regular meetings for sharing experiences, and on-the-job support to strengthen teaching.",
    imageFirst: false,
  },
  {
    image: policyImg,
    caption: "MGML has revolutionised rural education policies across the nation.",
    title: "Impact on Education Policy",
    content:
      "The MGML programme had a substantial impact on new policy. Interaction with educational agencies across the country has not only improved the Rishi Valley experience of multigrade joyful learning, but has also aided in the evolution of adaptable and sensitive programmes to India's vast cultural diversity. The programmes were created such that the formal educational system would be appropriately strengthened to meet the chronic issues of non-enrollment, non-retention, and non-achievement in elementary schools.",
    imageFirst: true,
  },
];

const recognitionPoints = [
  'MGML seems to be key in making teachers more friendly and making classrooms attractive and "free from fear and anxiety." It also improves social equity by reducing learning gaps among students, promoting social interaction, and reducing social barriers and discrimination.',
  "MGML enables every child to participate in activities, games, and songs, interact within groups, move at their own pace, and track their own learning progress. It also provides a simple model of how to integrate continuous assessment into children's everyday learning to check for understanding.",
  "Several studies identified a direct positive correlation between features of MGML (e.g., low-level blackboards, display of children's work, use of TLMs, peer interaction, group work, fear-free assessment, children's enjoyment and confidence in learning), and increased learning outcomes for children.",
];

const AchievementsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header isInnerPage />

      {/* Hero */}
      <section className="pt-32 pb-16 section-cream">
        <div className="container-wide text-center">
          <motion.span {...fadeUp} className="heading-subsection block mb-4">
            Our Impact
          </motion.span>
          <motion.h1 {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="heading-section text-foreground max-w-4xl mx-auto mb-8">
            Achievements
          </motion.h1>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            RIVER (Rishi Valley Institute for Educational Resources)'s Multi-Grade Multi-Level (MGML) methodology is an innovative teaching programme that has impacted over 250,000 schools in India, leading to the training of 500,000 teachers over 3,300 training days and impacting 12,500,000 students.
          </motion.p>
          <motion.img {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} src={achievementsHero} alt="Achievements" className="w-full rounded-xl" />
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.4 }} className="text-muted-foreground text-sm italic mt-4">
            MGML: Transforming education in India, boosting academic performance and confidence.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <motion.p {...fadeUp} className="text-muted-foreground max-w-4xl mx-auto text-center leading-relaxed">
            The MGML methodology has significantly impacted the academic levels of children, their confidence levels, and the overall success of the educational system in India. A comprehensive overview of the impact of MGML on academic performance, student confidence levels, stakeholder approval, and education policy is given below:
          </motion.p>
        </div>
      </section>

      {/* Achievement Sections - Two Column with Images */}
      {sections.map((section, index) => (
        <section
          key={section.title}
          className={`py-16 md:py-24 ${index % 2 === 0 ? "section-cream" : ""}`}
        >
          <div className="container-wide">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${!section.imageFirst ? "lg:[direction:rtl]" : ""}`}>
              {/* Image Column */}
              <motion.div {...fadeUp} className={!section.imageFirst ? "lg:[direction:ltr]" : ""}>
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full rounded-xl"
                />
                <p className="text-muted-foreground text-sm italic mt-4 text-center">
                  {section.caption}
                </p>
              </motion.div>

              {/* Text Column */}
              <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className={!section.imageFirst ? "lg:[direction:ltr]" : ""}>
                <h2 className="font-cormorant text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  {section.content}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Recognition */}
      <section className="py-16 md:py-24 section-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeUp}>
              <img src={recognitionImg} alt="Recognition" className="w-full rounded-xl" />
              <p className="text-muted-foreground text-sm italic mt-4 text-center">
                MGML's impact on education: fostering equity, engagement, and empowerment.
              </p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <h2 className="font-cormorant text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Recognition
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A recent UNICEF report summarises multiple assessments of RIVER's achievements:
              </p>
              <div className="space-y-5">
                {recognitionPoints.map((point, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-primary font-bold text-lg mt-0.5 shrink-0">•</span>
                    <p className="text-muted-foreground leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AchievementsPage;
