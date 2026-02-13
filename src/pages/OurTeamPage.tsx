import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamMemberCard from "@/components/TeamMemberCard";

import teamRadhika from "@/assets/team-radhika.png";
import teamMeenakshi from "@/assets/team-meenakshi.png";
import teamKumaraswamy from "@/assets/team-kumaraswamy.png";
import teamSailendran from "@/assets/team-sailendran.png";
import teamRama from "@/assets/team-rama.png";
import teamAnil from "@/assets/team-anil.png";
import teamVenu from "@/assets/team-venu.png";
import teamSreevalli from "@/assets/team-sreevalli.png";

const leadershipTeam = [
  {
    image: teamRadhika,
    name: "Dr Radhika Herzberger",
    role: "Resident Trustee",
    bio: `Dr Radhika Herzberger is the Advisor and Trustee-in-Residence at Rishi Valley Education Centre (RVEC), an educational institution located in rural Andhra Pradesh, India. The Rishi Valley Rural Education Centre (REC), Rishi Valley Institute for Educational Resources (RIVER), and Rishi Valley School function under the aegis of RVEC. Awarded the Padma Shri by the Government of India in 2013 for her pathbreaking educational initiatives, Dr Herzberger was the Director of RVEC until recently. She pioneered the concept of schools serving as resource centres for their communities. This idea found practical application at the renowned Rishi Valley School – the residential school for children from urban centres, village day schools for local students, and teacher education programmes that address the needs of children from both deprived and privileged backgrounds.

Dr Herzberger earned her Ph.D. in 1982 from the University of Toronto. A Trustee of the Krishnamurti Foundation India since 1982, she joined RVEC as Director of Studies in 1983 and became its Director in 1988. As her interests shifted to education, she designed a humanities curriculum for middle school and high school. She published Our Tribal Ancestors and Farmers and Shepherds, and edited Birds of Rishi Valley and the Regeneration of their Habitats, which focused on Rishi Valley's immediate environment. Her publications also include papers on 19th and 20th century India and the current educational scenario.

The prestigious D. Reidel Publication Co. published Dr Herzberger's book, Bhartrhari and the Buddhists: An Essay in the Development of Fifth and Sixth Century Indian Thought, in 1986. The Springer Book Archives recently listed it as part of its larger electronic project to 'preserve valuable scholarly content published between 1840 and 2005'. She has also published academic papers on debates between ancient Indian philosophical schools. Dr Herzberger is the Editor of Krishnamurti Foundation India's Bulletin and is a previous member of CABE (Central Advisory Board of Education). She continues to contribute essays on J. Krishnamurti's educational philosophy and the evolution of his thought over time.`,
  },
  {
    image: teamMeenakshi,
    name: "Dr Meenakshi Thapan",
    role: "Director",
    bio: `Dr Meenakshi Thapan is the Director of the Rishi Valley Education Centre (RVEC) and a Trustee of the Krishnamurti Foundation India (KFI). She retired in late 2019 as Professor of Sociology and Director of the Delhi School of Economics, as well as Co-ordinator of the D.S. Kothari Centre for Science, Ethics, and Education at the University of Delhi.

After meeting J. Krishnamurti in November 1973, she first arrived in the Rishi Valley School as a young teacher in 1974. She then returned to the University of Delhi for higher education. She came back to Rishi Valley in 1981 for a year to conduct fieldwork for her doctoral dissertation on the Rishi Valley School as a socio-cultural system. Life at School: An Ethnographic Study (Oxford University Press, 1991) is regarded as a classic in the sociology of schooling in India. She later undertook postdoctoral research at the University of London Institute of Education with Professor Basil Bernstein, the Karl Mannheim Professor at the time, and has worked in academia at the University of Delhi since 1986. She has received several awards and has collaborated on research with scholars from Canada, France, and Japan. She continues to engage in academic exchange with international scholars and speak to education scholars in India about research methodologies in education, schooling practices, and other related themes.

At Rishi Valley, Dr Meenakshi Thapan has worked on the design of an online teacher education curriculum for in-service and pre-service elementary school teachers. The course, based on the National Curriculum Framework for Teachers Education (NCFTE) 2009 and the National Council for Teachers Education (NCTE) 2014, combines the unique pedagogy of RVEC's Multi-Grade Multi-Level programme, Krishnamurti's educational thinking, perspectives of great thinkers in education, and the requirements of the government's vision and syllabi for holistic learning. The goal is to provide conceptual clarity to educators while also honing their abilities through various exercises, pedagogies, and examples in various multidisciplinary modules.

Life at School: An Ethnographic Study (Oxford University Press, 1991, second edition, 2006) and Living the Body: Embodiment, Womanhood, and Identity in Contemporary India (SAGE, 2009) are two of Dr Meenakshi Thapan's widely recognised books. Embodiment: Essays on Gender and Identity (ed., Oxford University Press 1997) was an early contribution to her publishing career. J. Krishnamurti and Educational Practice: A Social and Moral Vision for Inclusive Education (ed., Oxford University Press, 2018), Education and Society: Themes, Perspectives, Practices (ed., Oxford University Press, 2015), and Ethnographies of Schooling in Contemporary India (ed., SAGE, 2014) are among the most recent. She is now the Series Editor of Oxford University Press's Education and Society in South Asia (2018-2027). J. Krishnamurti: Educator for Peace, her latest book, was published by Routledge, Taylor and Francis in 2022. She recently co-edited a special issue on 'Subalternity, Marginality, and Agency in Contemporary India' with Professor Akiko Kunihiro for the South Asia Multidisciplinary Academic Journal (SAMAJ), a journal published by the Centre d'Études de l'Inde et de l'Asie du Sud (CEIAS) at the École des Hautes Études en Sciences Sociales (EHESS) in Paris.`,
  },
  {
    image: teamKumaraswamy,
    name: "Dr A Kumaraswamy",
    role: "Secretary",
    bio: `Dr A Kumaraswamy is the Secretary of Rishi Valley Education Centre (RVEC), and was previously the Principal of the Rishi Valley School. He holds a Ph.D. in Physics from the Indian Institute of Technology, Madras, and has published numerous research papers in the experimental and computational domains. He worked as a post-doctoral fellow at IIT Madras for a few years before taking up a research position at the Cement Research Institute in Delhi. He began teaching at the Rishi Valley School in 1982 after becoming interested in the domain of education and wanting to reside in a rural setting. Dr Kumaraswamy has been actively involved with all of RVEC's rural development initiatives since their inception, and has been teaching at the RVEC when necessary. His responsibilities include conceptualising, planning, fundraising, mentoring staff, and overseeing the operation of the RVEC's various community-related initiatives. Dr Kumaraswamy has been instrumental in implementing alternative technologies at RVEC, such as biogas, solar water heating systems, and solar power generators. He has led the campus's water conservation and harvesting efforts and is adept with computer-based technologies, software development, and educational software tools.`,
  },
  {
    image: teamSailendran,
    name: "M S Sailendran",
    role: "Bursar",
    bio: `M S Sailendran, currently the Bursar of Rishi Valley Education Centre (RVEC), has been in the institution's service for nearly forty years. A qualified Chartered Accountant, he has been passionate about making quality education available to rural children since joining RVEC.

He has been instrumental in establishing satellite schools in the neighbourhood. M S Sailendran has been intimately involved in implementing the Multi-Grade, Multi-Level (MGML) methodology in various parts of the country. He oversaw the development and production of RVEC's revolutionary educational kit, 'School in a Box', and was actively involved in its implementation in Chennai Corporation's schools.`,
  },
];

const coreTeam = [
  {
    image: teamRama,
    name: "Rama Anumula",
    role: "Director",
    bio: `Director of the Krishnamurti Foundation India's Rishi Valley Institute for Educational Resources (RIVER), Rama Anumula has 35 years of service with the institution. She along with her husband, Padmanabha Rao, pioneered the RIVER Multi-Grade, Multi-Level (MGML) model.

She conceptualised, designed, and coordinated the development of numerous primary school learning packages, including 'School in a Box,' the Panchatantra Craft Package, the MGML Trainer Resource Pack, and the Pre-Primary Learning Package.

Rama Anumula is an Ashoka International and Khemka Foundation Fellow, as well as the co-winner of the Schwab Foundation Social Entrepreneur of the Year Award for India at the India Economic Summit, 2009.`,
  },
  {
    image: teamAnil,
    name: "G Anil Duth",
    role: "Coordinator-Curriculum",
    bio: `G Anil Duth, M.A. Education (Elementary) degree from TISS, Mumbai, has been with RIVER since 1997. He has overseen curriculum development and training in the MGML methodology for a significant number of groups from various states in India and agencies from abroad, courtesy his deep knowledge of the methodology.

Anil continues to be engaged with research focused on addressing learning barriers faced by children of primary school age.`,
  },
  {
    image: teamVenu,
    name: "Thana Venu",
    role: "Coordinator",
    bio: `Thana Venu, M.A. B.Ed. from Dravidian University, has worked with RIVER since 1989. He has been a key figure in the implementation of the MGML methodology in schools all around the country, in addition to engaging in the development of curricula and training programmes, both on and off campus.

Venu is responsible for planning and monitoring the progress of the implementations, as well as addressing issues that arise at the field-level during the process.`,
  },
  {
    image: teamSreevalli,
    name: "Sreevalli Ramayanam",
    role: "Headmistress",
    bio: `Sreevalli Ramayanam, M.B.A. B.Ed. from Sri Padmavati Mahila Visvavidyalayam, Tirupati, has been in service with RIVER since 2014. She is currently the Headmistress of the Residential Middle School and teaches English.

Sreevalli is also active in monitoring the education centre's satellite schools, visiting each one on a regular basis and producing field reports intended to resolve any flaws in the methodology's implementation in the classroom.`,
  },
];

const OurTeamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header isInnerPage />

      {/* Hero Section */}
      <section className="pt-24 md:pt-28 pb-8 bg-background">
        <div className="container-wide max-w-6xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-terracotta font-semibold uppercase tracking-wider text-sm mb-4"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-8"
          >
            Our Team
          </motion.h1>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="pb-16 md:pb-20 bg-background">
        <div className="container-wide max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-serif text-foreground mb-10"
          >
            Leadership Team - Rishi Valley Education Centre (RVEC)
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="pb-16 md:pb-24 bg-background">
        <div className="container-wide max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-serif text-foreground mb-10"
          >
            Core Team - Rishi Valley Institute for Educational Resources (RIVER)
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTeam.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="pb-16 bg-background">
        <div className="container-wide max-w-6xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-terracotta font-semibold uppercase text-sm tracking-wider hover:gap-3 transition-all"
          >
            <span>←</span>
            Back to Home
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurTeamPage;
