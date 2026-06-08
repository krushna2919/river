// Wave 2 seed: 8 inner singleton pages.
// Idempotent: uses fixed _id per page; createOrReplace overwrites cleanly.
// Run: node scripts/seed-wave2.mjs
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

// =====================================================================
// 1. Our Story
// =====================================================================
const ourStory = {
  _id: "page-our-story",
  _type: "ourStoryPage",
  eyebrow: "About Us",
  title: "Our Story",
  intro:
    "Over the past four decades, the Rishi Valley Rural Education Centre (REC) has been at the vanguard of a rural revolution through its widely acclaimed educational initiatives and teaching methodologies that promote social justice, equity, and inclusion.",
  heroImage: img("our-story-hero.jpg"),
  heroCaption:
    "Empowered by REC's educational initiatives, these children race towards a brighter future with joy and enthusiasm.",
  introBody: [
    "The Rishi Valley Rural Education Centre (REC), established in 1976, functions under the aegis of The Rishi Valley Education Centre (RVEC), an educational institution located in rural Andhra Pradesh, India. In addition to the REC, the Rishi Valley School is also part of RVEC. The Rishi Valley Rural Education Centre (REC) comprises RIVER (Rishi Valley Institute for Educational Resources), a residential 'Middle School' for students from the immediate vicinity, seven 'Satellite Primary Schools', and two 'Pre-Primary Schools'.",
  ],
  facilitatorImage: img("our-story-facilitator.png"),
  facilitatorCaption:
    "The teacher as facilitator fosters independent learning in MGML methodology.",
  bodyAfterFacilitator: [
    "At the heart of REC's initiatives is the RIVER-developed multi-grade, multi-level methodology (MGML), which powers a unique structure for elementary education from first to fifth grade, culminating in the highly acclaimed tool — 'School in a Box.' 'School in a Box' has been widely implemented in numerous parts of India and abroad, besides serving as a model for various agencies including UNICEF and state governments who have joined with REC to expand this approach throughout the country.",
    "Over the years, REC has successfully met its stated goals of promoting village-based education, training teachers and teacher trainers in MGML, attracting working children to the school system, creating green spaces around the school campus for biodiversity conservation, raising awareness about health, nutrition, and sanitation, and actively involving the community in the day-to-day management of their children's school.",
  ],
  locationLabel: "Location",
  locationHeading: "Where We Are",
  locationImage: img("our-story-location.png"),
  locationCaption: "Local context drives arithmetic problem solving for students.",
  locationBody: [
    "Rishi Valley Rural Education Centre is nestled in a sheltered valley in rural Andhra Pradesh, roughly 15 kilometres north of Madanapalle and 140 kilometres north of Bangalore. While RIVER, one 'Satellite Primary School', a 'Pre-Primary School', and the 'Middle School' are housed on REC's 14-acre campus, the remaining schools are spread over neighbouring hamlets.",
    "Flanked by the Eastern Ghats in the Rayalaseema area of southern Andhra Pradesh and chosen for its peaceful atmosphere by Jiddu Krishnamurti, the name 'Rishi Valley' derives from legends of sages who used to meditate in the area. The campus is surrounded by ancient granite hills with striking formations, and a large banyan tree that used to be a centrepiece of the campus.",
  ],
  historyLabel: "History",
  historyHeading: "Our Origins",
  historyImage: img("our-story-history.png"),
  historyCaption:
    "Students enrolled in REC's rural initiatives are also provided nutritious meals to fuel their learning.",
  historyBody: [
    "Much before Rishi Valley Rural Education Centre's inception in 1976, there was the Rishi Valley School, founded in 1926 by J. Krishnamurti, widely considered one of the twentieth century's greatest philosophical and spiritual luminaries.",
    "The Rishi Valley School's instructional programme developed through pioneering advances in educational techniques, infrastructure development, and the creation of a meaningful curriculum that is reviewed and revised on a regular basis. Conserving and enhancing the natural environment continues to be important components. All of these aspects remain the inspiration behind the birth of REC and its successful initiatives.",
    "The Rishi Valley Rural Education Centre was founded in 1976 under the aegis of the Rishi Valley Education Centre. The fledgling rural education initiative received a boost in the 1980s thanks to a Government of India grant. This facilitated the development of a multi-grade learning system that solves a number of rural education's entrenched difficulties. The REC has established strong ties with the local village community over the past three decades through its work in rural education, rural health, reforestation, biodiversity conservation, and watershed management.",
  ],
  chronologyLabel: "Chronology",
  chronologyHeading: "Timeline of Achievements",
  chronology: [
    { year: "1975–1976", event: "The Rural Education Centre (REC) was set up on the Rishi Valley campus in 1976 on 14 acres of land." },
    { year: "1985–1990", event: "The first satellite schools established in two hamlets near Rishi Valley." },
    { year: "1988", event: "Grant from the Government of India to the Satellite Schools. Development of a multigrade package with distinctive features, based on a close study of local schools, textbooks and children's achievement levels.", expandedText: "Over the next five years, the material is field tested. Results suggest it helped reduce dropout rates, increased school enrollment, and enabled students to easily clear the class 5 state examinations." },
    { year: "1993", event: "RVEC develops the multigrade programme. The Telugu version of the field-tested 'School in a Box' is published with Action Aid loan assistance.", expandedText: "The first outreach programme held in schools administered by The Bhagavatula Charitable Trust in Vishakhapatnam as part of an ILO-sponsored child labour education project." },
    { year: "1994", event: "Two thousand girls from ten mandals tutored to grade 2 levels in a 12-week summer school programme in Meboobnagar district, Andhra Pradesh.", expandedText: "Official figures show that 'roughly 95% of the students given a test were found to have mastered MLLs (Minimum Levels of Learning).'" },
    { year: "1995", event: "Karnataka Education Department implements MGML methodology in HD Kote Block, followed by all 600 formal schools in Sira and Holenarsipura Blocks.", expandedText: "It is now adopted in all state-run schools (around 45,000 schools)." },
    { year: "1995", event: "ITDA, UNICEF, and RVEC worked together to develop and carry out a large-scale programme in the remote tribal districts of Paderu and Rampachudavaram." },
    { year: "1996", event: "Thirty multigrade facilities established in Kerala's distant and economically deprived districts of Kasargode, Mallapuram, and Wayanad." },
    { year: "1998", event: "DPEP Tamil Nadu partners with RIVER to establish a thousand pilot schools across the state." },
    { year: "1999", event: "Andhra Pradesh's DPEP administers a programme at 800 bridge schools across 34 mandals in 15 districts to prevent child labour.", expandedText: "A new colour version of the RIVER Telugu teaching-learning material has been supplied for use in non-formal schools." },
    { year: "1999–2001", event: "The RIVER team created a Hindi version of 'The School in a Box', titled 'Apna Path Pitara,' with original contributions from commissioned children's writers." },
    { year: "2003", event: "The Multigrade Trainers Resource Pack published with Sir Ratan Tata Trust grant support." },
    { year: "2003", event: "Universities of Regensburg (Germany) and Metz (France) launched long-term exchange programmes and collaborations with RIVER." },
    { year: "2004", event: "UNICEF collaborates with RIVER to launch the Quality Package Project in about 1,000 schools across twelve states." },
    { year: "2005", event: "RIVER awarded the Global Development Network Prize 'Most Innovative Development Project'." },
    { year: "2007–2010", event: "RIVER team created a 'School in a Box' Learning Ladder for English as a Second Language.", expandedText: "After field testing in Rishi Valley Satellite Schools, creatively enriched in 2012-15 in partnership with AIF Fellows." },
    { year: "2010–2011", event: "Marathi 'Support Package' for slow learners designed by the RIVER Team for Mumbai Municipal Corporation schools (MCGM)." },
    { year: "2012–2013", event: "Uttarakhand Education Kit for Class III to V adapted from 'School in a Box' and published with Plan International support." },
    { year: "2013–2015", event: "'The School in a Box' for Pre-Primary Schools designed and developed in collaboration with Wuerzburg University, Germany." },
    { year: "2013–2015", event: "RIVER Multigrade Multilevel Dissemination Model (MDM) developed with Michael and Susan Dell Foundation financing." },
    { year: "2016–2018", event: "Anandalahari Abyasana Education Kit for Classes I-V developed from RIVER 'School in a Box' for Andhra Pradesh's government schools." },
  ].map((c, i) => ({ _key: `c${i}`, ...c })),
  founderLabel: "Founder",
  founderHeading: "J. Krishnamurti",
  founderImage: img("our-story-founder.png"),
  founderQuote:
    "A school is a place where one learns both the importance of knowledge and its limitations. It is a place where one learns to observe the world without a particular point of view or conclusion... The purpose, the aim and drive of these schools, is to equip the child with the most excellent technological proficiency so that the student may function with clarity and efficiency in the modern world.",
  founderBody: [
    "Jiddu Krishnamurti (1895–1986), whose life and teachings spanned the greater part of the 20th century, is considered one of the most presciently original philosophers of our time. Identified in his youth as the future world teacher by the Theosophists, Krishnamurti emerged as a radical thinker who sought to give new meanings and direction to human life.",
    "He pointed the way to an inner reality freed from the petty emotions that govern human actions, for he held that inner freedom was necessary for regenerating individuals and the society they create. His timeless teaching is deeply relevant to the chaotic and violent time in which we live and educate students.",
    "Krishnamurti travelled around the world for more than fifty years, giving talks and engaging in discussions with people from all walks of life, including school and college students, writers, scientists, and philosophers. He spoke to them as a friend, and not in a guru's authoritarian voice. His message has profound implications for how we live and how children are educated.",
  ],
  galleryLabel: "Gallery",
  galleryHeading: "Life at REC",
  gallery: [
    { src: "gallery-1.jpg", caption: "Breaks ensure students recharge and connect with nature, fostering a balanced and joyful learning environment." },
    { src: "gallery-2.jpg", caption: "Connecting with local wisdom: Students listen to a cowherd, blending traditional knowledge into their everyday learning." },
    { src: "gallery-3.jpg", caption: "Celebrating heritage through puppetry: Girl students discover culture and learning with joy." },
    { src: "gallery-4.jpg", caption: "Balancing fun and learning: Children take a break, bonding with pet dogs, fostering empathy and responsibility." },
    { src: "gallery-5.jpg", caption: "Transformative education: RIVER students are benefited by the holistic and inclusive MGML learning approach." },
    { src: "gallery-6.jpg", caption: "Hands-on arithmetic: Mastering concepts through tactile learning with the help of pebbles." },
    { src: "gallery-7.jpg", caption: "In MGML learning, children embrace local culture and context through interactive classroom activities." },
    { src: "gallery-8.jpg", caption: "Nourishing young minds: Nutritious mid-day meals play a significant role in rural education scenarios." },
  ].map((g, i) => ({ _key: `g${i}`, image: img(g.src), caption: g.caption })),
};

// =====================================================================
// 2. RIVER
// =====================================================================
const river = {
  _id: "page-river",
  _type: "riverPage",
  eyebrow: "What We Do",
  title: "RIVER",
  subtitle: "Rishi Valley Institute for Educational Resources",
  intro:
    "The Rishi Valley Institute for Educational Resources (RIVER) is an initiative undertaken by the Rishi Valley Rural Education Centre (REC), under the overall umbrella of the Rishi Valley Education Centre (RVEC). Located in 14 acres of land on the REC campus, it is home to RIVER's innovative Multi-Grade, Multi-Level (MGML) methodology, which has gained widespread acclaim as an innovative solution to address the gaps in rural education.",
  heroImage: img("river-hero.jpg"),
  communityBody: [
    "RIVER's community-based educational model fosters identity, tolerance, environmentalism, and preserves folklore and traditions.",
    "RIVER believes education strengthens students' identities, customs, and roots while expanding their knowledge. This community-based educational paradigm also promotes tolerance, environmental stewardship, and preserves folklore and indigenous medicinal traditions. It does not consider education as striving to raise all students to a uniform level dictated by textbooks with uniform content. This traditional education model erases cultural differences and alienates students from their roots.",
  ],
  transformationImage: img("river-transformation.png"),
  transformationHeading: "Transformation",
  transformationLead:
    "RIVER's training modules provide practical teaching approaches to universal basic education.",
  transformationBody: [
    "Between 1989 and 2009, RIVER grew from a small centre with seven satellite schools to a learning methodology used to teach over 6.5 million students on three continents, thanks to the tireless guidance and support of the Rishi Valley Rural Education Centre.",
    "Today, its programme, procedures, pedagogy, and teacher training provide hope to people seeking learning innovations and practical approaches to universal primary education. RIVER's innovative methodology has reached 2,50,000+ schools impacting 12,50,00,000+ children, and 5,00,000+ teachers trained in 3300+ training days.",
  ],
  recognitionImage: img("river-recognition.png"),
  recognitionHeading: "Recognition",
  recognitionLead:
    "Clinton Global Foundation, New York recognises RIVER and its MGML methodology for its impact on rural education.",
  recognitionBody: [
    "RIVER's MGML methodology is recognised as having the highest potential to achieve the national objectives specified in the Right of Children to Free and Compulsory Education (RTE) Act 2009 and National Curriculum Framework 2005. Implementation in 14 of India's 28 states represents a remarkable adoption rate.",
    "It has been awarded numerous awards for its pioneering efforts, including the Jindal Prize in 2011 and the Global Development Network (GDN) Award in 2004. RIVER's impact was famously acknowledged by UNESCO in 2003 and the New York Times in a 2018 article.",
  ],
  internationalImage: img("river-recognition.png"),
  internationalBody: [
    "The programme's success has attracted attention of institutions in Germany, France, England, and the United States, who visit and learn from its impressive accomplishments.",
    "The University of Regensburg in Germany and the University of Metz in France have initiated long-term cooperation with RIVER. A group of students and professors from Harvard Business School and the Graduate School of Education at Harvard University partnered with RIVER to establish a sustainable rural school in northern India.",
  ],
  mapImage: img("river-india-map.png"),
  mapCaption:
    "RIVER's state-wise partnerships with governmental institutions for implementation of MGML educational packages.",
  modelHeading: "Multi-Grade Multi-Level Dissemination Model",
  modelImage: img("river-mgml-model.png"),
  modelBody1: [
    "The Multi-Grade Multi-Level Dissemination Model (MDM) is a valuable support tool developed with support from Michael and Susan Dell Foundation for agencies seeking to implement and strengthen the impact of RIVER's MGML methodology in elementary schools.",
    "The MDM provides clear guidance for agencies engaged in introducing and monitoring the MGML classroom, including details on pedagogy, content development, and model school set-up. It also contains films and explanatory notes to highlight essential elements of the pedagogy.",
  ],
  monitoringImage: img("river-monitoring.jpg"),
  modelBody2: [
    "With help from UNICEF and collaboration with various state government agencies, the MGML pedagogy has been extended to cover over 250,000 primary schools across the country, impacting more than 10 million children in over 13 states.",
    "RIVER's MGML pedagogy is a flexible tool in the hands of teachers, accommodating local cultures in the classroom. Its ability to recognise India's rich heritage of cultures is one of its exceptional features. With its clear guidance, support tools, and structured guidelines, the MDM ensures the methodology's core elements are maintained during scaling.",
  ],
  gallery: [
    { src: "river-gallery-1.jpg", caption: "In MGML learning, children embrace local culture and context through interactive classroom activities." },
    { src: "river-gallery-2.jpg", caption: "Hands-on arithmetic: Mastering concepts through tactile learning with the help of pebbles." },
    { src: "river-gallery-3.jpg", caption: "Transformative education: RIVER students are benefited by the holistic and inclusive MGML learning approach." },
    { src: "river-gallery-4.jpg", caption: "Balancing fun and learning: Children take a break, bonding with pet dogs, fostering empathy and responsibility." },
    { src: "river-gallery-5.jpg", caption: "Experiential learning in action: Children explore balance and teamwork while enjoying a seesaw adventure." },
    { src: "river-gallery-6.png", caption: "A joyful journey to knowledge: Excited children eagerly embark on their path to education." },
    { src: "river-gallery-7.jpg", caption: "Unleashing personalised learning: MGML classrooms empower students to learn at their own pace with dedicated teacher support." },
  ].map((g, i) => ({ _key: `g${i}`, image: img(g.src), caption: g.caption })),
};

// =====================================================================
// 3. Methodology
// =====================================================================
const methodologySharedGallery = [
  { src: "methodology-gallery-1.jpg", caption: "Breaks ensure students recharge and connect with nature, fostering a balanced and joyful learning environment." },
  { src: "methodology-gallery-2.jpg", caption: "Connecting with local wisdom: Students listen to a cowherd, blending traditional knowledge into their everyday learning." },
  { src: "methodology-gallery-3.jpg", caption: "Celebrating heritage through puppetry: Girl students discover culture and learning with joy." },
  { src: "river-gallery-4.jpg", caption: "Balancing fun and learning: Children take a break, bonding with pet dogs, fostering empathy and responsibility." },
  { src: "river-gallery-3.jpg", caption: "Transformative education: RIVER students are benefited by the holistic and inclusive MGML learning approach." },
  { src: "river-gallery-2.jpg", caption: "Hands-on arithmetic: Mastering concepts through tactile learning with the help of pebbles." },
  { src: "river-gallery-1.jpg", caption: "In MGML learning, children embrace local culture and context through interactive classroom activities." },
  { src: "methodology-gallery-4.jpg", caption: "Nourishing young minds: Nutritious mid-day meals play a significant role in rural education scenarios." },
];

const methodology = {
  _id: "page-methodology",
  _type: "methodologyPage",
  eyebrow: "What We Do",
  title: "Methodology",
  intro:
    "RIVER has created a one-of-a-kind system for elementary education after two decades of sustained effort and research. The structure consists of a network of satellite schools where village youth are trained in a specially designed education methodology, known as the multi-grade, multi-level (MGML), to teach a community-based curriculum.",
  heroImage: img("methodology-hero.jpg"),
  heroCaption:
    "With RIVER's MGML Teaching methodology, students advance at their own speed, and instructors can devote more one-on-one time to them.",
  descriptionLead:
    "Generally, in rural elementary schools, one or two teachers educate children from different grades in a single classroom, creating an inertia-filled environment that results in delayed or non-existent growth in the early grades. It is widely believed that teacher-led education results in a passive classroom, whereas textbooks alone are incapable of conveying the complexities of the local context and culture.",
  descriptionBody:
    "RIVER's multi-grade, multi-level (MGML) teaching system addresses rural education's most pressing concerns. This strategy allows students to progress at their own pace and teachers to spend more time with individual students, while simultaneously promoting teamwork and teacher capacity building.",
  descriptionExpanded:
    "This method makes the teacher a mentor, friend, storyteller, and creative. In RIVER classrooms, everyone is both a teacher and a learner at some point. This method measures — what is learned, not what has been taught.",
  flowHeading: "Methodology Flow",
  flowImage1: img("methodology-flow-1.png"),
  flowCaption1: "The methodology highlights a seamless web of learning from preschool to grade 5.",
  flowBody1: [
    "A typical MGML classroom walls are covered with Ladder graphics, and with shelves containing cards. Multiple low-placed blackboards allow each child to write, sparking significant peer discussions. Children's drawings, paper folds, and miscellaneous objects hang from the ceiling. Children sit in clusters on the floor. Teachers move between these groups.",
    "RIVER classrooms can accommodate up to 45 students but typically have 30-35, and are frequently divided into four sections based on student need and progress: a teacher-directed group for introductory activities or concepts; a partially teacher-supported group; a peer-supported group; and a self-supported or self-directed group.",
  ],
  flowImage2: img("methodology-flow-2.png"),
  flowCaption2: "Local context drives arithmetic problem solving for students.",
  flowBody2: [
    "The MGML teaching methodology is encapsulated in a seamless web of time and interaction, starting from preschool or kindergarten and extending up to grade 4 or even 5. The curriculum is founded on locally relevant knowledge, skills, and information, considering the child's context.",
    "The village life is integrated into learning as much as possible. Language lessons incorporate important local topics such as farming, animals, and events. Mathematics concepts are taught using real-life situations. 'Metric Mela,' a community-based event celebrating arithmetic, is part of the learning activities.",
  ],
  ladderHeading: "Learning Ladder",
  ladderImage1: img("methodology-ladder-1.png"),
  ladderCaption1: "Personalised learning progression in MGML methodology.",
  ladderBody1: [
    "RIVER's learning methodology provides activity-rich programmes that are both highly structured and flexible. Each student has a personalised learning path, carefully planned and assessed through a subject-specific 'learning ladder' chart. The methodology follows a regimented path shared by all students, but the pace is individualised to meet each student's needs.",
    "Each subject has its own dedicated learning ladder, including language, mathematics, and environmental science. The ladder is a specific series of steps and instructions for both teacher and student, indicating exercise styles, levels of competence, and grouping plans. The chart uses a succession of animal and insect icons to show progress, assessments, and results.",
  ],
  ladderImage2: img("methodology-ladder-2.jpg"),
  ladderCaption2: "Learning Ladder for Grade I Mathematics.",
  ladderBody2: [
    "The 'learning ladder' visualises a subject-specific sequence of progress steps that learners must complete. Each benchmark covers activities from introduction to practice and evaluation. The programme offers 40% of ladder areas to teachers for customisation, allowing them to add local content or activities tailored to student needs.",
    "The MGML approach is known for its adaptability, with teachers able to skip activities for fast learners or add activities to fill learning gaps. It has gained acceptance in various educational settings, from government and non-governmental organisations to private urban schools, and found acceptance in other settings and contexts.",
  ],
  gallery: methodologySharedGallery.map((g, i) => ({
    _key: `g${i}`,
    image: img(g.src),
    caption: g.caption,
  })),
};

// =====================================================================
// 4. School in a Box
// =====================================================================
const schoolInABox = {
  _id: "page-school-in-a-box",
  _type: "schoolInABoxPage",
  eyebrow: "What We Do",
  title: "School in a Box",
  intro:
    "Rishi Valley Institute for Educational Resources (RIVER) developed the innovative 'School in a Box' educational kit in 1993 using the pioneering multi-grade, multi-level (MGML) approach after considerable research.",
  heroImage: img("siab-hero.jpg"),
  heroCaption:
    "'School in a Box' revolutionises education by bringing learning to students in remote locations.",
  description:
    "A community-based curriculum taught by village youth trained in multi-grade, multi-level methodologies, graded according to individual learning levels, grounded in current information, and presented in the local idiom, was advocated. The rural education kit is a practical and appealing alternative to traditional village schooling, where children of the same age have drastically disparate levels of understanding yet are forced to be on the same page by a single teacher.",
  howItWorksHeading: "How it Works",
  howItWorksImage: img("siab-how-it-works.png"),
  howItWorksCaption: "'Learning Ladder', a trajectory chart, indicates students' learning progression.",
  howItWorksBody: [
    "The 'School in a Box' teaching kit substitutes language, math, and environmental science textbooks with meticulously graded cards. Each graded series card has a logo (rabbit, elephant, or dog) and a subject-specific 'Learning Ladder', a trajectory chart that indicates students' learning progression. Certified by the United Nations as a pedagogical innovation, the ladder's spaces are subdivided into a series of milestones.",
    "These milestones feature activities and cards that describe a concept, cards to demonstrate how it's applied, cards to evaluate students' comprehension, and cards to provide opportunities for testing, remediation, or enrichment. Puppets, novels, folk art, folk songs, local myths and legends, studies on village life and natural environment are used to aid learning along with the card series in classrooms.",
  ],
  classroomImage: img("siab-classroom.png"),
  classroomCaption:
    "MGML approach promotes individual learning, yet instructor supervision and group activity are essential components.",
  classroomBody: [
    "A student determines her position on the ladder and crafts her own path from grade one to grade five within the broad boundaries of the milestones. Teachers can use the empty areas on the ladder to incorporate independent content into the learning process. Indeed, the ladder can be structured in such a way that different trajectories are available for teachers and students to choose from, as long as the sequence required by academic disciplines is preserved.",
    "Simultaneously, our approaches promote silent self-study and individualised learning, yet instructor teaching and group activity are equally essential components of the learning process. The system allows rapid learners to grow while allowing slower learners to work at their own speed. Students absent from school do not lose out, as they are able to start from the space in the 'Learning Ladder' where they left off.",
  ],
  gallery: methodologySharedGallery.map((g, i) => ({
    _key: `g${i}`,
    image: img(g.src),
    caption: g.caption,
  })),
};

// =====================================================================
// 5. Rishi Valley School
// =====================================================================
const rishiValleySchool = {
  _id: "page-rishi-valley-school",
  _type: "rishiValleySchoolPage",
  eyebrow: "About Us",
  title: "Rishi Valley School",
  intro:
    "The Rishi Valley School was founded in 1926 by J. Krishnamurti, widely considered one of the twentieth century's greatest philosophical and spiritual luminaries. The school functions under the aegis of the Rishi Valley Education Centre (RVEC), an initiative of the Krishnamurti Foundation India.",
  heroImage: img("rishi-valley-school-hero.png"),
  heroCaption:
    "Rishi Valley School strives to incorporate J. Krishnamurti's thought-provoking educational vision in its daily learning practices.",
  campusImage: img("rvs-campus.png"),
  campusCaption:
    "The Rishi Valley School campus is in a sheltered valley near the Eastern Ghats in rural Andhra Pradesh.",
  locationBody: [
    "The Rishi Valley School is nestled in a sheltered valley at the edge of the Eastern Ghats in rural Andhra Pradesh, roughly 15 kilometres north of Madanapalle and 140 kilometres north of Bangalore. The school's location, chosen by Krishnamurti for its unique environment of peace and tranquillity, was an undulating landscape of fields, rain-fed streams, and scattered villages, surrounded by ancient granite hills with striking rock formations.",
    "In a drought-prone area, the hill slopes are sparse in vegetation, and the valley floor is dotted with an occasional banyan or tamarind tree. Years of sustained reforestation and water conservation measures have transformed the campus into a beautiful landscape. Rishi Valley was officially designated a bird sanctuary in 1991 and cited by the International Council for Bird Preservation.",
  ],
  natureImage: img("rvs-nature.png"),
  natureCaption:
    "Education at Rishi Valley School focuses on peaceful coexistence with nature and its flora and fauna.",
  philosophyBody: [
    "Until his passing in 1986, Krishnamurti spent practically every winter in Rishi Valley. He did not establish a 'blue-print' for what a school should be. His inquiry into the human condition and educational insights were passed down through multiple generations of students, teachers, and others concerned in sustainability, and continue to serve as the foundation for the institution and all of its endeavours.",
    "Rishi Valley School, affiliated to the ICSE Board, has 350+ boarding students from various Indian states and over fifty highly competent faculty members. The school, regarded as one of the leading residential schools in India, offers a unique educational atmosphere in which young people can grow not just intellectually, but also in other dimensions of their being. The school's instructional programme has seen significant evolution, including pioneering advances in educational techniques, infrastructure development, and a meaningful curriculum that is reviewed and revised on a regular basis.",
  ],
  healthImage: img("rvs-health.png"),
  healthCaption:
    "The Rural Health Centre addresses healthcare of the population around Rishi Valley School.",
  missionBody: [
    "The Rishi Valley School aims to cultivate self-aware, responsible, and sensitive individuals committed to lifelong learning. The school strives to awaken students' intelligence and generosity of spirit, enabling them to confront an increasingly complex world without losing their sense of humanity.",
    "The Rishi Valley Education Centre (RVEC) also runs rural development initiatives, such as the Rishi Valley Rural Education Centre (REC), which consists of RIVER (Rishi Valley Institute for Educational Resources), a residential middle school for students from the immediate neighbourhood, and seven 'Satellite Primary Schools' and two 'Pre-Primary Schools'. The Rishi Valley Education Centre (RVEC) established the Rural Health Centre (RHC) in 1999 to serve the needs of the rural people in the areas surrounding Rishi Valley School. The centre treats 22,000 patients annually from 60 revenue villages across neighbouring districts.",
  ],
  gallery: [
    { src: "rvs-gallery-1.jpg", caption: "In MGML learning, children embrace local culture and context through interactive classroom activities." },
    { src: "rvs-gallery-2.jpg", caption: "Nourishing young minds: Nutritious mid-day meals play a significant role in rural education scenarios." },
    { src: "rvs-gallery-3.jpg", caption: "Hands-on arithmetic: Mastering concepts through tactile learning with the help of pebbles." },
    { src: "rvs-gallery-4.jpg", caption: "Transformative education: RIVER students are benefited by the holistic and inclusive MGML learning approach." },
    { src: "rvs-gallery-5.jpg", caption: "Balancing fun and learning: Children take a break, bonding with pet dogs, fostering empathy and responsibility." },
    { src: "rvs-gallery-6.jpg", caption: "Experiential learning in action: Children explore balance and teamwork while enjoying a seesaw adventure." },
    { src: "rvs-gallery-7.jpg", caption: "Learning through art: Panchatantra shadow puppetry enhances MGML's holistic learning methodology." },
    { src: "rvs-gallery-8.jpg", caption: "Reviving roots through music and storytelling: Children embrace the magic of Andhra folk and classical melodies." },
    { src: "rvs-gallery-9.jpg", caption: "Unleashing personalised learning: MGML classrooms empower students to learn at their own pace with dedicated teacher support." },
  ].map((g, i) => ({ _key: `g${i}`, image: img(g.src), caption: g.caption })),
};

// =====================================================================
// 6. Services
// =====================================================================
const services = {
  _id: "page-services",
  _type: "servicesPage",
  eyebrow: "What We Do",
  title: "Services",
  intro:
    "Rishi Valley Institute for Educational Resources (RIVER) offers a range of services to revolutionise rural education, including training programmes, creative workshops, model schools, and follow-up support. The focus is on the multi-grade multi-level (MGML) methodology, the revolutionary teaching approach that emphasises hands-on, activity-based learning.",
  heroImage: img("services-hero.jpg"),
  heroCaption: "Nurturing young minds through revolutionary teaching approaches.",
  sections: [
    {
      _key: "s1",
      image: img("services-training-photo.png"),
      imageCaption: "Building capacity through workshops for innovative teaching approaches.",
      points: [
        { _key: "p1", heading: "Capacity building through hands-on, activity-based training programmes:", text: "We provide comprehensive training to resource teachers in classroom transactions suited to the new methodology. Our three to five-day exposure visits acquaint teachers with an overall sense of the program, which they can then disseminate on their home ground." },
        { _key: "p2", heading: "Creative forums for transcreation of learning material:", text: "We offer fifteen-day workshops for trained teachers to provide hands-on training in the multi-grade, multi-level methodology, and orient them in classroom management. We also provide long-term Designers' Workshops for creating multi-grade, multi-level learning materials in languages other than Telugu." },
      ],
    },
    {
      _key: "s2",
      image: img("services-model-school-photo.png"),
      imageCaption: "Inspiring success: Model schools showcasing the power of MGML methodology.",
      points: [
        { _key: "p1", heading: "Setting up 'Model Schools' for immediate demonstration:", text: "We provide living illustrations of a successful MGML classroom to serve as a learning model for teachers not exposed to the methodology. Our focus is on communicating to project administrators that the physical design of MGML classrooms is child-friendly and promotes a non-authoritarian pedagogy and a democratic spirit in schools." },
        { _key: "p2", heading: "Follow-up support:", text: "We develop mechanisms of transparent evaluation and supportive monitoring, designing a monitoring and support supervision framework to monitor RIVER model classroom process. We also create tools for periodic classroom monitoring and support supervision to implement the RIVER model." },
      ],
    },
    {
      _key: "s3",
      image: img("services-rtep-photo.png"),
      imageCaption: "Inspiring educators with innovative pedagogy and best practices.",
      points: [
        { _key: "p1", heading: "Rishi Valley Teacher Enrichment Programme (RTEP):", text: "Based on the National Curriculum Framework for Teachers Education (NCFTE) 2009 and National Council for Teachers Education (NCTE) 2014, RTEP (duration: 6 months to a year) blends unique pedagogy with perspectives from great thinkers in education, government requirements, and best practices in teaching from diverse contexts. For a start, 7-day initial training for master-trainers are provided, including a face-to-face workshop and optional online modules. Consistent support is extended over 6 months for queries, doubts, clarifications, and suggestions to improve weekly." },
      ],
    },
    {
      _key: "s4",
      image: img("services-puppetry-photo.png"),
      imageCaption: "Learning through puppetry: Reviving tradition and inspiring participation.",
      points: [
        { _key: "p1", heading: "Arts & Crafts programme:", text: "Offers a Panchatantra Puppetry and Crafts kit to introduce shadow puppetry, Andhra folk music, Indian classical music and language to first-generation children, while also reinforcing values in human behaviour through workbook exercises. Puppetry has become an integral part of the learning methodology in the Telugu-medium schools, motivating students to actively participate, reviving the dying art form of storytelling in rural areas, and creating opportunities for didactic theatre." },
        { _key: "p2", heading: "Building a critical mass of people to sustain the spirit and vision of the project:", text: "Our three-day workshops for administrators provide insights into the organisational structure and working of the program." },
      ],
    },
  ],
  gallery: methodologySharedGallery.map((g, i) => ({
    _key: `g${i}`,
    image: img(g.src),
    caption: g.caption,
  })),
};

// =====================================================================
// 7. Contact
// =====================================================================
const contact = {
  _id: "page-contact",
  _type: "contactPage",
  title: "Get in touch",
  formHeading: "We would love to hear from you!",
  phones: ["+91-8571-280086", "+91-8571-280582"],
  email: "office@rishivalley.org",
  address: "Rishi Valley, Madanapalle,\nChittoor District,\nAndhra Pradesh 517352, India",
  mapUrl: "https://goo.gl/maps/Ja4MmFatExkDsAS58",
};

// =====================================================================
// 8. Donate
// =====================================================================
const donate = {
  _id: "page-donate",
  _type: "donatePage",
  title: "Payment Details",
  qrHeading: "Scan to Pay",
  qrCaption: "Scan this QR code using any UPI app to complete your donation.",
  qrImage: img("payment-qr-code.png"),
  donationOptions: [
    { _key: "o1", value: "corpus", label: "Corpus" },
    { _key: "o2", value: "specific", label: "Specific" },
    { _key: "o3", value: "general", label: "General" },
  ],
};

// =====================================================================
// Run
// =====================================================================
const docs = [ourStory, river, methodology, schoolInABox, rishiValleySchool, services, contact, donate];

console.log(`Seeding ${docs.length} singleton pages...`);
for (const doc of docs) {
  await client.createOrReplace(doc);
  console.log(`  ✓ ${doc._type} (${doc._id})`);
}
console.log("Done.");
