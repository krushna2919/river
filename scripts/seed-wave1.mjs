// Wave 1: Collections — teamMembers, achievements, awards, caseStudies, galleryImages
import { readFileSync } from "fs";
import { client } from "./sanity-client.mjs";

const imageMap = JSON.parse(readFileSync("scripts/.image-map.json", "utf8"));

function img(filename) {
  const id = imageMap[filename];
  if (!id) throw new Error(`No uploaded image found for ${filename}`);
  return { _type: "image", asset: { _ref: id, _type: "reference" } };
}

// ---------- TEAM MEMBERS ----------
const teamMembers = [
  { _id: "team-radhika", group: "leadership", order: 1, name: "Dr Radhika Herzberger", role: "Resident Trustee", image: img("team-radhika.png"),
    bio: `Dr Radhika Herzberger is the Advisor and Trustee-in-Residence at Rishi Valley Education Centre (RVEC), an educational institution located in rural Andhra Pradesh, India. The Rishi Valley Rural Education Centre (REC), Rishi Valley Institute for Educational Resources (RIVER), and Rishi Valley School function under the aegis of RVEC. Awarded the Padma Shri by the Government of India in 2013 for her pathbreaking educational initiatives, Dr Herzberger was the Director of RVEC until recently. She pioneered the concept of schools serving as resource centres for their communities. This idea found practical application at the renowned Rishi Valley School – the residential school for children from urban centres, village day schools for local students, and teacher education programmes that address the needs of children from both deprived and privileged backgrounds.

Dr Herzberger earned her Ph.D. in 1982 from the University of Toronto. A Trustee of the Krishnamurti Foundation India since 1982, she joined RVEC as Director of Studies in 1983 and became its Director in 1988. As her interests shifted to education, she designed a humanities curriculum for middle school and high school. She published Our Tribal Ancestors and Farmers and Shepherds, and edited Birds of Rishi Valley and the Regeneration of their Habitats, which focused on Rishi Valley's immediate environment. Her publications also include papers on 19th and 20th century India and the current educational scenario.

The prestigious D. Reidel Publication Co. published Dr Herzberger's book, Bhartrhari and the Buddhists: An Essay in the Development of Fifth and Sixth Century Indian Thought, in 1986. The Springer Book Archives recently listed it as part of its larger electronic project to 'preserve valuable scholarly content published between 1840 and 2005'. She has also published academic papers on debates between ancient Indian philosophical schools. Dr Herzberger is the Editor of Krishnamurti Foundation India's Bulletin and is a previous member of CABE (Central Advisory Board of Education). She continues to contribute essays on J. Krishnamurti's educational philosophy and the evolution of his thought over time.` },
  { _id: "team-meenakshi", group: "leadership", order: 2, name: "Dr Meenakshi Thapan", role: "Director", image: img("team-meenakshi.png"),
    bio: `Dr Meenakshi Thapan is the Director of the Rishi Valley Education Centre (RVEC) and a Trustee of the Krishnamurti Foundation India (KFI). She retired in late 2019 as Professor of Sociology and Director of the Delhi School of Economics, as well as Co-ordinator of the D.S. Kothari Centre for Science, Ethics, and Education at the University of Delhi.

After meeting J. Krishnamurti in November 1973, she first arrived in the Rishi Valley School as a young teacher in 1974. She then returned to the University of Delhi for higher education. She came back to Rishi Valley in 1981 for a year to conduct fieldwork for her doctoral dissertation on the Rishi Valley School as a socio-cultural system. Life at School: An Ethnographic Study (Oxford University Press, 1991) is regarded as a classic in the sociology of schooling in India. She later undertook postdoctoral research at the University of London Institute of Education with Professor Basil Bernstein, the Karl Mannheim Professor at the time, and has worked in academia at the University of Delhi since 1986. She has received several awards and has collaborated on research with scholars from Canada, France, and Japan. She continues to engage in academic exchange with international scholars and speak to education scholars in India about research methodologies in education, schooling practices, and other related themes.

At Rishi Valley, Dr Meenakshi Thapan has worked on the design of an online teacher education curriculum for in-service and pre-service elementary school teachers. The course, based on the National Curriculum Framework for Teachers Education (NCFTE) 2009 and the National Council for Teachers Education (NCTE) 2014, combines the unique pedagogy of RVEC's Multi-Grade Multi-Level programme, Krishnamurti's educational thinking, perspectives of great thinkers in education, and the requirements of the government's vision and syllabi for holistic learning. The goal is to provide conceptual clarity to educators while also honing their abilities through various exercises, pedagogies, and examples in various multidisciplinary modules.

Life at School: An Ethnographic Study (Oxford University Press, 1991, second edition, 2006) and Living the Body: Embodiment, Womanhood, and Identity in Contemporary India (SAGE, 2009) are two of Dr Meenakshi Thapan's widely recognised books. Embodiment: Essays on Gender and Identity (ed., Oxford University Press 1997) was an early contribution to her publishing career. J. Krishnamurti and Educational Practice: A Social and Moral Vision for Inclusive Education (ed., Oxford University Press, 2018), Education and Society: Themes, Perspectives, Practices (ed., Oxford University Press, 2015), and Ethnographies of Schooling in Contemporary India (ed., SAGE, 2014) are among the most recent. She is now the Series Editor of Oxford University Press's Education and Society in South Asia (2018-2027). J. Krishnamurti: Educator for Peace, her latest book, was published by Routledge, Taylor and Francis in 2022. She recently co-edited a special issue on 'Subalternity, Marginality, and Agency in Contemporary India' with Professor Akiko Kunihiro for the South Asia Multidisciplinary Academic Journal (SAMAJ), a journal published by the Centre d'Études de l'Inde et de l'Asie du Sud (CEIAS) at the École des Hautes Études en Sciences Sociales (EHESS) in Paris.` },
  { _id: "team-kumaraswamy", group: "leadership", order: 3, name: "Dr A Kumaraswamy", role: "Secretary", image: img("team-kumaraswamy.png"),
    bio: `Dr A Kumaraswamy is the Secretary of Rishi Valley Education Centre (RVEC), and was previously the Principal of the Rishi Valley School. He holds a Ph.D. in Physics from the Indian Institute of Technology, Madras, and has published numerous research papers in the experimental and computational domains. He worked as a post-doctoral fellow at IIT Madras for a few years before taking up a research position at the Cement Research Institute in Delhi. He began teaching at the Rishi Valley School in 1982 after becoming interested in the domain of education and wanting to reside in a rural setting. Dr Kumaraswamy has been actively involved with all of RVEC's rural development initiatives since their inception, and has been teaching at the RVEC when necessary. His responsibilities include conceptualising, planning, fundraising, mentoring staff, and overseeing the operation of the RVEC's various community-related initiatives. Dr Kumaraswamy has been instrumental in implementing alternative technologies at RVEC, such as biogas, solar water heating systems, and solar power generators. He has led the campus's water conservation and harvesting efforts and is adept with computer-based technologies, software development, and educational software tools.` },
  { _id: "team-sailendran", group: "leadership", order: 4, name: "M S Sailendran", role: "Bursar", image: img("team-sailendran.png"),
    bio: `M S Sailendran, currently the Bursar of Rishi Valley Education Centre (RVEC), has been in the institution's service for nearly forty years. A qualified Chartered Accountant, he has been passionate about making quality education available to rural children since joining RVEC.

He has been instrumental in establishing satellite schools in the neighbourhood. M S Sailendran has been intimately involved in implementing the Multi-Grade, Multi-Level (MGML) methodology in various parts of the country. He oversaw the development and production of RVEC's revolutionary educational kit, 'School in a Box', and was actively involved in its implementation in Chennai Corporation's schools.` },
  { _id: "team-rama", group: "core", order: 1, name: "Rama Anumula", role: "Director", image: img("team-rama.png"),
    bio: `Director of the Krishnamurti Foundation India's Rishi Valley Institute for Educational Resources (RIVER), Rama Anumula has 35 years of service with the institution. She along with her husband, Padmanabha Rao, pioneered the RIVER Multi-Grade, Multi-Level (MGML) model and is in charge of implementing the RIVER methodology in various parts of India, besides Ethiopia, Nepal, Bangladesh, Sri Lanka, and Germany. She conceptualised, designed, and coordinated the development of numerous primary school learning packages, including 'School in a Box,' the Panchatantra Craft Package, the MGML Trainer Resource Pack, and the Pre-Primary Learning Package.

She pioneered the concepts of 'Matric Mela,' a maths community festival; 'Mothers' Stories,' which adapts and uses rural women's oral traditions as reading programmes for first-generation learners; and 'Miniature Shadow Puppetry,' which adapts traditional puppetry as visual learning aids. Rama Anumula has led designer workshops for approximately 15 state-level resource groups to develop locally contextualised MGML teaching-learning packages. She has mentored students from universities in Germany, Switzerland, France, and the United States that have long-term collaborative projects with RIVER.

Rama Anumula is an Ashoka International and Khemka Foundation Fellow, as well as the co-winner of the Schwab Foundation Social Entrepreneur of the Year Award for India at the India Economic Summit, 2009. She holds an MA in English and a postgraduate degree in English teaching from the Central Institute of English & Foreign Languages, Hyderabad.` },
  { _id: "team-anil", group: "core", order: 2, name: "G Anil Duth", role: "Coordinator-Curriculum", image: img("team-anil.png"),
    bio: `G Anil Duth, M.A. Education (Elementary) degree from TISS, Mumbai, has been with RIVER since 1997. He has overseen curriculum development and training in the MGML methodology for a significant number of groups from various states in India and agencies from abroad, courtesy his deep knowledge of the methodology.

Anil continues to be engaged with research focused on addressing learning barriers faced by children of primary school age.` },
  { _id: "team-venu", group: "core", order: 3, name: "Thana Venu", role: "Coordinator", image: img("team-venu.png"),
    bio: `Thana Venu, M.A. B.Ed. from Dravidian University, has worked with RIVER since 1989. He has been a key figure in the implementation of the MGML methodology in schools all around the country, in addition to engaging in the development of curricula and training programmes, both on and off campus.

Venu is responsible for planning and monitoring the progress of the implementations, as well as addressing issues that arise at the field-level during the process.` },
  { _id: "team-sreevalli", group: "core", order: 4, name: "Sreevalli Ramayanam", role: "Headmistress", image: img("team-sreevalli.png"),
    bio: `Sreevalli Ramayanam, M.B.A. B.Ed. from Sri Padmavati Mahila Visvavidyalayam, Tirupati, has been in service with RIVER since 2014. She is currently the Headmistress of the Residential Middle School and teaches English.

Sreevalli is also active in monitoring the education centre's satellite schools, visiting each one on a regular basis and producing field reports intended to resolve any flaws in the methodology's implementation in the classroom.` },
].map((m) => ({ ...m, _type: "teamMember" }));

// ---------- ACHIEVEMENTS ----------
const achievements = [
  { _id: "ach-academic", order: 1, title: "Improvement in Academic Levels", image: img("achievements-academic.png"),
    caption: "Elevating performance, confidence, and parental satisfaction",
    body: `MGML methodology significantly improved academic performance in schools, with end-year results showing a 25-29% increase in Tamil, Mathematics, and English for both Class II and IV compared to the baseline study, according to the 2011 UNICEF report "Activity-Based Learning in India: Overview, Strengths & Challenges" by Suzana Andrade Brinkmann. Over 80% of parents did not feel pressured to prepare their children for exams, as academic competencies were communicated through inbuilt remediation during school hours.` },
  { _id: "ach-confidence", order: 2, title: "Raised Student Confidence Levels", image: img("achievements-confidence.png"),
    caption: "Emboldening students and transforming lives through confidence building.",
    body: `The MGML methodology has also positively impacted student confidence levels, particularly among marginalised communities. Most children who attend government schools are the poorest in the state and are from scheduled castes, according to "A History of the Activity Based Learning Movement in Tamil Nadu", an independent report in 2011 by Tricia Niesz, Ph.D. Kent State University Kent, Ohio, US with Ramchandar Krishnamurthy, Azim Premji Foundation, Bangalore, India and Vaishali Mahalingam, University of Cambridge, UK. The MGML programme has led to an impressive transformation in young children's autonomy and confidence, as evidenced by the fact that a first-grade child can hold the mike and speak comfortably at an assembly.` },
  { _id: "ach-gaps", order: 3, title: "Bridged Attainment Gaps", image: img("achievements-gaps.png"),
    caption: "MGML's impacts include bridging gaps and fostering inclusion.",
    body: `One of the key objectives of the MGML programme has been to bridge attainment gaps in children so that all children achieve mastery of basic levels of learning. Through the programme, children are provided with continuous assessments to check for understanding and are given the opportunity to participate in activities, games, and songs. This has helped reduce student learning gaps, promote social interaction, and reduce social barriers and discrimination.` },
  { _id: "ach-stakeholder", order: 4, title: "Built Stakeholder Approval", image: img("achievements-stakeholder.png"),
    caption: "Teacher testimonials attest to MGML methodology's transformative impact.",
    body: `The MGML methodology has received overall positive feedback from teachers, according to the 2011 UNICEF report "Activity-Based Learning in India: Overview, Strengths & Challenges" by Suzana Andrade Brinkmann. 95% of teachers felt that children's learning skills have vastly improved because of MGML. 92% of teachers opined that reading proficiency has remarkably improved, and 90% mentioned that writing skills have also greatly improved. They also felt that children's self-confidence and decision-making skills have greatly improved due to MGML.` },
  { _id: "ach-teacher", order: 5, title: "Improved Teacher Commitment and Involvement", image: img("achievements-teacher.png"),
    caption: "Educators' sense of ownership has fuelled MGML's achievements.",
    body: `The MGML programme has also led to an improvement in teacher commitment and involvement. Through the programme, teachers have been given more creative freedom and the opportunity to participate in developing, implementing, and reviewing teaching materials. This has resulted in the sense of ownership among teachers, which has further contributed to their commitment to the programme.` },
  { _id: "ach-localisation", order: 6, title: "Localisation for Multigrade Teaching", image: img("achievements-localisation.png"),
    caption: "Innovative curriculum and localised teaching materials for easier learning.",
    body: `The MGML programme has successfully developed locally appropriate teaching materials adapted to an innovative curriculum. This has helped create a good learning environment conducive to the needs of students. The programme has also successfully developed a core of child-centred multigrade teacher trainers who can be mobilised to train other teachers. This has helped establish a teacher support system that provides better supervision, regular meetings for sharing experiences, and on-the-job support to strengthen teaching.` },
  { _id: "ach-policy", order: 7, title: "Impact on Education Policy", image: img("achievements-policy.jpg"),
    caption: "MGML has revolutionised rural education policies across the nation.",
    body: `The MGML programme had a substantial impact on new policy. Interaction with educational agencies across the country has not only improved the Rishi Valley experience of multigrade joyful learning, but has also aided in the evolution of adaptable and sensitive programmes to India's vast cultural diversity. The programmes were created such that the formal educational system would be appropriately strengthened to meet the chronic issues of non-enrollment, non-retention, and non-achievement in elementary schools.` },
].map((a) => ({ ...a, _type: "achievement" }));

// ---------- AWARDS ----------
const awardData = [
  ["2021", "award-ma.jpg", "Millennium Alliance Innovation Challenge Award - Round 6 In Education Category By Millennium Alliance", "For scaling up the MGML methodology in government primary schools in North India under education category.", "https://tinyurl.com/558Ue4e6"],
  ["2018/19", "award-reimagine.png", "Silver Award Winner - Hybrid Learning Category by Reimagine Education", "For RIVER's innovative pedagogies.", "https://tinyurl.com/4epa772d"],
  ["2016", "award-niti.jpg", "Top 25 Social Innovations in India by Ministry of External Affairs & NITI Aayog, Govt. of India", "For offering commercially viable solutions to the socio-economic problems of India.", "https://tinyurl.com/Sk8runff"],
  ["2016", "award-ma.jpg", "Millennium Alliance Innovation Challenge Award - Round 3 In Education Category By Millennium Alliance", "For dissemination of the MGML methodology in government primary schools in the state of Andhra Pradesh.", "https://tinyurl.com/2bc76sm6"],
  ["2012", "award-gj.jpg", "Ranked 74 — Top 100 best NGOs in the world by The Global Journal, Geneva", 'As significant agents of social change and seeking to "move beyond outdated clichés and narrow conceptions about what an NGO is and does".', "https://tinyurl.com/tfdhb53a"],
  ["2011", "award-sjf.jpg", "Jindal Prize By Sitaram Jindal Foundation", "For Education with emphasis on moral upliftment.", "https://tinyurl.com/ywbf6tvz"],
  ["2010/11", "award-wef.jpg", "Recognised by Visegrad Regional Seminar on Global Development Education, Prague, Czech Republic; World Economic Summit in Davos, Switzerland; Summer Davos Meeting of New Champions at Dalian, China; Clinton Global Foundation, New York", "RIVER projects and its MGML Methodology as an inspiring way of practice in global development.", "https://tinyurl.com/2w5ztuec"],
  ["2009", "award-schwab.png", "Social Entrepreneurs Of The Year By The Schwab Foundation For Social Entrepreneurship, World Economic Forum, Geneva", "For pioneering solutions for social and environmental challenges to highlight and expand leading models of social innovation around the world.", "https://tinyurl.com/2e6f84ux"],
  ["2004", "award-gdn.png", "The Japanese Prize for the Most Innovative Development Project by The Global Development Network", "Research on development produced by researchers from developing and transition countries.", "https://tinyurl.com/5n6d5r74"],
  ["2003", "award-ashoka.png", "The Japanese Prize for the Most Innovative Development Project by The Global Development Network", "Ashoka supports the world's leading social entrepreneurs, learns from the patterns in their innovations, and mobilises a global community that embraces these new frameworks.", "https://tinyurl.com/2p8y6etc"],
  ["2003", "award-unicef.png", "UNICEF & Government of India", "Recognition for adapting and expanding RIVER learning programmes in government primary schools in 7 Indian states.", "https://tinyurl.com/ward88e5"],
  ["1997", "award-rockefeller.png", "The Rockefeller Foundation Grant", "Rockefeller Grant enriched collaborations across linguistic zones in India.", null],
  ["1995", "award-hrd.png", "Ministry of HRD, Government of India Grant", "Grant for R&D and dissemination of the model.", null],
];
const awards = awardData.map(([year, imageFile, title, description, linkUrl], i) => ({
  _id: `award-${i + 1}`,
  _type: "award",
  order: i + 1,
  year,
  title,
  description,
  image: img(imageFile),
  ...(linkUrl ? { linkUrl, linkLabel: "Read More" } : {}),
}));

// ---------- CASE STUDIES ----------
const caseStudies = [
  {
    _id: "cs-jharkhand", slug: { current: "mgml-learning-jharkhand" },
    title: "Multi-Grade, Multi-Level (MGML) learning in Jharkhand: A Case Study",
    region: "Jharkhand", image: img("case-study-jharkhand.jpg"), order: 1,
    summary: "Implementation of the Multi-Grade, Multi-Level programme in Jharkhand schools (December 2008 onwards) — process, state-specific features, challenges, and impact.",
    body: `## Introduction

This case study examines the implementation of the Multi-Grade, Multi-Level (MGML) programme in Jharkhand, India. The MGML programme was introduced in classes 1-2 of selected schools in four districts in December 2008. The case study explores the process of implementation, state-specific features, challenges faced, and the positive impact observed in Jharkhand's education system.

## Case Description

In 2003-2004, 15 teachers from Jharkhand visited Rishi Valley Institute for Educational Resources (RIVER) with the support of UNICEF for exposure and training. Inspired by their visit, these teachers initiated systemic changes in selected schools. Subsequently, workshops were conducted in 2005-2006 to develop MGML materials for Maths and Hindi in classes 1-2. These materials were piloted in 100 schools in Ranchi and East Singhbhum districts.

Based on the feedback and the team's visit to Karnataka to learn from effective Nalikali practices, the MGML materials were reviewed, modified, and strengthened. In 2008, the revised materials were printed and supplied to 235 schools in four districts. Teachers received training on the methodology and use of materials. Regular revisions were made based on suggestions from teachers, students, community members, and other stakeholders.

## State-Specific Features

The MGML programme in Jharkhand incorporates specific features:

- Learning is organised around a ladder with five types of activities for each milestone, including introduction, reinforcement, evaluation, remedial, and enrichment.
- Learning cards are culturally specific, featuring commonly used words, local pictures, customs, and names.
- Readiness activities are provided based on five basic skills related to cognitive areas and motor skills to prepare children and assess their individual levels.
- Teachers' Guidebooks are provided, explaining the underlying philosophy, methodology, and subject-specific teaching techniques for classes 1-2.
- Monthly cohort studies are conducted to assess children's attendance, learning progress, leadership and creative skills, and participation in hygiene and gardening activities. Findings are analysed for individual children and specific social groups to address issues.
- Monitoring and academic support system, including monthly cluster meetings, involvement of CRCCs (Cluster Resource Centre Coordinators), and Education Extenders responsible for multiple MGML/SLM schools.

## Challenges

The implementation of MGML in Jharkhand encountered various challenges:

- Untimely printing and supply of materials, leading to delays in teacher training.
- Insufficient monitoring and technical support for teachers.
- Inadequate capacity of teachers in curriculum design and learning material creation.
- Challenged power relationships between teachers and students, and between teachers and administrators/experts.

## Positive Impact

The MGML programme in Jharkhand has shown positive outcomes:

- Improved attendance and learning achievement among students.
- Increased interest in the approach from different stakeholders.
- Higher teacher satisfaction due to learners' progress at their own pace.
- Vibrant and active classrooms with reduced dependency on teachers, appreciated by community members.

## Status

The Jharkhand Education Project Council (JPEC) had implemented the MGML programme in classes 1-2 of 235 schools in 4 districts (Singhbhum, Ranchi, Gumla, and Hazaribagh) since December 2008. Based on the positive experience in these districts, the state had decided to scale up the program through a cluster approach in a phased manner in 8 additional districts, starting with Class 1 in 2010-11, and later expanding to Classes 1 & 2 in 2011-12. For this purpose, 40 schools of the Tribal Welfare Department and 30 NCLP centres were also selected. Self-learning materials (SLM) had been prepared for Classes 3 and 4, covering Hindi, Maths, and EVS, and were supplied to schools in 2009-10.

## Conclusion

The implementation of the multi-grade, multi-level (MGML) programme in Jharkhand has demonstrated positive effects on attendance, learning outcomes, and teacher satisfaction. Despite challenges related to material supply, technical support, and power dynamics, the programme has created an engaging and student-centred learning environment. The case study highlights the importance of teacher training, continuous monitoring, and stakeholder involvement in promoting effective educational practices.`,
  },
  {
    _id: "cs-bihar", slug: { current: "vertical-competency-learning-bihar" },
    title: "Implementing Vertical Competency Based Learning in Bihar: A Case Study",
    region: "Bihar", image: img("case-study-bihar.jpg"), order: 2,
    summary: "Vertical Competency Based Learning (VCBL) programme in Bihar — enhancing education quality and bridging learning gaps for out-of-school or drop-out children.",
    body: `## Introduction

This case study focuses on the implementation of the 'Vertical Competency Based Learning' (VCBL) programme in Bihar, India. The VCBL programme aims to enhance the quality of education and bridge learning gaps for out-of-school or drop-out children. This case study examines the process of implementation, state-specific features, challenges faced, and the positive impact observed in Bihar's education system.

## Case Description

In 2005, under the Primary Education Enhancement Project (PEEP), a group of 30 teachers from Nalanda district visited Rishi Valley Institute for Educational Resources (RIVER) for a 10-day exposure visit. Inspired by the visit, they introduced the multi-grade, multi-level (MGML) approach in classes 1-2 in 12 Demonstration Schools. The MGML materials, developed with the support of UNICEF, were based on Bihar textbooks and included workbooks for Classes 1-2.

However, due to poor infrastructure and overcrowded classrooms, the MGML processes failed to flourish initially. In 2008-2009, a significant breakthrough occurred with the establishment of Residential Bridge Courses for older out-of-school children. These courses provided an opportunity to reintroduce the MGML methodologies. Condensed ABL materials and books were developed for these courses, breaking down the curriculum from Class 1 to 5 into competencies represented as a ladder. This approach was implemented in 50 Residential Bridge Courses, 100 Kasturba Gandhi Balika Vidyalayas (KGBVs), and all 22 Mahila Shikshan Kendras.

## State-Specific Features

The VCBL programme in Bihar includes several distinct features:

- VCBL serves as bridge-course material designed to mainstream older out-of-school children into age-appropriate classes (Class 1-5).
- It includes a Pre-activity booklet with warm-up activities to assess children's levels upon arrival.
- The ladder approach is based on the Rishi Valley MGML methodology, using various colours, logos, and numbers to identify subjects, activities, and milestones.
- Loops in the form of special activity cards are incorporated in the ladder to reinforce learning after every four milestones.
- Project cards provide opportunities for the application of knowledge and promote interaction with peers, teachers, and the community.
- A Teachers' Guide is provided, offering guidance on facilitating learning for each card and encouraging teacher innovation and use of textbooks.

## Challenges

Several challenges were encountered during the implementation of the VCBL programme in Bihar:

- Infrastructure constraints, such as overcrowded classrooms, posed challenges to effective implementation.
- Additional skilled human support was required to facilitate the programme successfully.
- Some teachers initially continued using textbooks or previous condensed books, hindering the integration of the new materials.
- Teachers needed further mentoring in assessing the existing knowledge of students upon enrolment, instead of starting from the beginning for every child.

## Positive Impact

Despite the challenges faced, the VCBL programme in Bihar has demonstrated positive outcomes:

- Teachers found the materials easy to follow, and community members appreciated the engagement of teachers and learners.
- The pre-designed activities proved valuable for teachers who lacked adequate skills or training in organising effective teaching and learning processes.
- The programme materials helped reduce fear in the classroom environment.
- Internal evaluations conducted periodically indicated faster learning improvement in Residential Bridge Courses with VCBL compared to those without.

## Status

The Vertical Competency Based Learning Programme (VCBL) was introduced in 2009, and at that time, it covered 50 Residential Bridge Courses, 100 KGBVSs, and all 22 Mahila Shikshan Kendras. During 2011-12, there were plans to extend the approach to additional RBCs and to all 450 KGBVs in the form of a Bridge Course material.

Moreover, the state had planned to introduce the VCBL material in all 71,000 schools as special remedial material under the Samajhe Shike Quality Education Programme. Difficult curricular topics were being identified, and a shorter series of cards/activities were being adapted for these areas to provide either remedial or enrichment activities to those children who needed it. This was intended to be used in Classes 3 to 5, for about an hour a day, to enhance the quality of their learning.

## Conclusion

The implementation of the Vertical Competency Based Learning Programme in Bihar has shown promising results in enhancing the quality of education for out-of-school children. Despite challenges related to infrastructure and teacher training, the VCBL materials have facilitated effective teaching and learning processes, leading to positive impacts on students' learning outcomes. The case study highlights the importance of targeted interventions and innovative approaches to address educational disparities and create inclusive learning environments.`,
  },
  {
    _id: "cs-andhra", slug: { current: "snehabala-slim-cards-andhra-pradesh" },
    title: "Snehabala and SLIM Cards for Competency-Based Learning in combined Andhra Pradesh: A Case Study",
    region: "Andhra Pradesh", image: img("case-study-andhra.jpg"), order: 3,
    summary: "Snehabala and SLIM (Self-Learning & Interactive Material) cards in 57,727 primary schools of Andhra Pradesh, covering classes 1 to 3.",
    body: `## Introduction

This case study focuses on the implementation of Snehabala and SLIM (Self-Learning & Interactive Material) cards in primary schools across Andhra Pradesh, India. The programme covers classes 1 to 3 in all 57,727 primary schools in the state. The case study explores the process of implementation, state-specific features, challenges faced, and the observed positive impact on teachers, students, and the learning environment.

## Case Description

The origin of the "School in a Box" multi-grade, multi-level (MGML) approach, featuring a Learning Ladder and sequential learning cards, can be traced back to Rishi Valley Institute for Educational Resources (RIVER) in Chittoor District, Andhra Pradesh. This approach was initially adopted in 16 satellite schools in the area. Building upon this, the Andhra State Council of Educational Research and Training (SCERT) designed the Ananda Lahari kit, which was implemented in tribal areas for classes 1-2 in the 1980s, incorporating local logos. These materials were further refined and adapted to Krishna, East Godavari, and West Godavari districts under the Janshala's decentralised planning programme from 2002 to 2004, known as Krishna Veni and Gouthami.

The Snehabala or "Child Friendly School Initiatives" programme was implemented from 2004 to 2007 in 1000 schools of Chittoor district under the Quality Package project. It followed an MGML-type methodology with activities and cards. In response to teachers' feedback that the Snehabala cards were numerous and heavy, the programme was revised in 2009-10 and transformed into SLIM cards (Self-Learning & Interactive Material). The SLIM cards were piloted in selected districts and then scaled up to cover all 57,727 primary schools in Andhra Pradesh for classes 1 to 3.

## State-Specific Features

The Snehabala and SLIM card programmes in Andhra Pradesh include several state-specific features:

- Snehabala cards offer activities for introduction, practice, evaluation, and remediation/enrichment.
- Materials provided include worksheets, children's stationery, mobile blackboards, additional teaching-learning materials (such as the Maths Kit from Navanirmithi, rubber letters, dominos), graded reading material, garden toolkits, and children's furniture.
- An 8-week pre-school cum school readiness component called Prathyusha is integrated, facilitating the mainstreaming of out-of-school children.
- SLIM cards emphasise simplified approaches, competency-based milestones, and logos. They do not include a separate ladder, as it is integrated into the monitoring tool.
- State-specific innovations include Teacher's Diary, Pupil's Diary, School Post Box, Wall Magazine, Classroom Library, Pupil's Portfolio, and Puppetry.
- Subject-specific pedagogical approaches focus on language development, math concepts, logical thinking, problem-solving, experiments, information collection, mapping skills, and analysis.

## Challenges

The implementation of Snehabala and SLIM cards encountered various challenges:

- Financial constraints in providing adequate cards for each learning group separately.
- Timely supply of materials.
- Teacher attendance and transfers.
- Ensuring smooth transitions and linkages from class to class.
- Lack of supplementary reading materials for children.
- Additional workload for teachers in recording child-wise progress, maintaining children's portfolios, and managing school cabinets.

## Positive Impact

The Snehabala and SLIM card programmes have yielded positive outcomes:

- Acceptance and appreciation by teachers and community members.
- Improved time-on-task, creativity, and joyful classroom environment.
- Reduction in student absenteeism and enhanced confidence.

## Status

Snehabala and SLIM cards ('Self-Learning & Interactive Material') were implemented in Class 1 to 3 of all 57,727 primary schools in the state. In 2011-12, the state planned to integrate the textbooks for classes 1 and 2 with the competency-based SLIM cards.

## Conclusion

The implementation of Snehabala and SLIM cards for competency-based learning in Andhra Pradesh has demonstrated positive outcomes and significant potential for transforming the primary education landscape. By integrating the MGML approach, state-specific innovations, and competency-based milestones, the programmes have fostered an engaging and student-centred learning environment. Teachers and community members have embraced the approach, recognizing its positive impact on student attendance, creativity, confidence, and learning outcomes.`,
  },
].map((c) => ({ ...c, _type: "caseStudy" }));

// ---------- GALLERY IMAGES (unique 8 base images, captions from OurStory page) ----------
const galleryData = [
  ["gallery-1.jpg", "Breaks ensure students recharge and connect with nature, fostering a balanced and joyful learning environment."],
  ["gallery-2.jpg", "Connecting with local wisdom: Students listen to a cowherd, blending traditional knowledge into their everyday learning."],
  ["gallery-3.jpg", "Celebrating heritage through puppetry: Girl students discover culture and learning with joy."],
  ["gallery-4.jpg", "Balancing fun and learning: Children take a break, bonding with pet dogs, fostering empathy and responsibility."],
  ["gallery-5.jpg", "Transformative education: RIVER students are benefited by the holistic and inclusive MGML learning approach."],
  ["gallery-6.jpg", "Hands-on arithmetic: Mastering concepts through tactile learning with the help of pebbles."],
  ["gallery-7.jpg", "In MGML learning, children embrace local culture and context through interactive classroom activities."],
  ["gallery-8.jpg", "Nourishing young minds: Nutritious mid-day meals play a significant role in rural education scenarios."],
];
const galleryImages = galleryData.map(([file, caption], i) => ({
  _id: `gallery-${i + 1}`,
  _type: "galleryImage",
  order: i + 1,
  category: "general",
  image: img(file),
  caption,
}));

// ---------- SEED ----------
const allDocs = [...teamMembers, ...achievements, ...awards, ...caseStudies, ...galleryImages];

console.log(`Seeding ${allDocs.length} documents...`);

// Clear existing docs of these types first (so re-runs are clean)
const typesToClear = ["teamMember", "achievement", "award", "caseStudy", "galleryImage"];
const existing = await client.fetch(`*[_type in $types]._id`, { types: typesToClear });
if (existing.length) {
  console.log(`  clearing ${existing.length} existing docs...`);
  const tx = client.transaction();
  existing.forEach((id) => tx.delete(id));
  await tx.commit({ visibility: "async" });
}

// Create + publish in one transaction (use createOrReplace so explicit _ids work; published only)
const tx = client.transaction();
allDocs.forEach((doc) => tx.createOrReplace(doc));
const result = await tx.commit();
console.log(`Done. ${result.results.length} docs created.`);
