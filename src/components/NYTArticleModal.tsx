import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import nytLogo from "@/assets/nyt-logo.png";
import nytArticle1 from "@/assets/nyt-article-1.png";
import nytArticle2 from "@/assets/nyt-article-2.png";
import nytArticle3 from "@/assets/nyt-article-3.png";
import nytArticle4 from "@/assets/nyt-article-4.png";

interface NYTArticleModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NYTArticleModal = ({ open, onOpenChange }: NYTArticleModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <DialogTitle className="sr-only">NYT Article</DialogTitle>

        <div className="border-b border-border px-6 pt-8 pb-4 flex justify-center">
          <img src={nytLogo} alt="The New York Times" className="h-6 md:h-8" />
        </div>

        <div className="px-6 md:px-12 py-8 space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Teaching Children Regardless of Grade
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Educators in a remote valley in India devised a community approach to instructing students when teachers were sparse. It's catching on.
          </p>

          <p className="text-sm text-muted-foreground">Dec. 4, 2018</p>

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

          <img src={nytArticle2} alt="Community gathering" className="w-full rounded-lg" />

          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>In 1987, the couple began testing alternatives at the Rishi Valley Rural Education Center, which runs schools for children from villages that surround a renowned boarding school. Ms. Anumula and Mr. Rao worked with teachers to parse the required curriculum around hands-on activities. They refined them by watching to see what excited students and teachers, and tossing out what didn't work. In 1993, they published a model of their system, which replaces textbooks with activity cards. It's called multigrade multilevel learning, or activity-based learning.</p>
            <p>The method is meant to let students study at their own pace. They work through the curriculum by following subject-specific "learning ladders" that outline lessons with various levels of support from the teacher. Each rung of the ladder represents a learning milestone; the cards outline activities that introduce the student to a new concept, give him or her a chance to practice it and evaluate his or her understanding of it, along with possibilities for enrichment and remediation. To help children relate to concepts, activities incorporate local dialects, folklore and natural materials from the local environment. The curriculum also incorporates community festivals and group activities like singing and puppetry.</p>
            <p>Students typically begin learning milestones at a table for teacher-supported work, where the teacher introduces the concept. Students follow the ladder to identify their next activity and then move through other tables to do work that is either teacher-supported, peer-supported, partly teacher-supported or independent. Teachers track student progress and adjust tasks as needed.</p>
            <p>This way, the process engages learners who differ in natural quickness, prior knowledge and time to study. Child laborers, who frequently miss school for work, can pick up where they left off. The method allows for a "personalized education that one usually associates with very developed economies" and "makes that affordable for low-resource environments," said Fabio Segura, head of international programs at the Jacobs Foundation, a Swiss nonprofit organization focused on improving child and youth development worldwide. Starting in 2015, the foundation considered more than 3,600 models to improve education in Ivory Coast's cocoa-growing communities. Rishi Valley's model is one of 12 the foundation is testing, with assistance from cocoa companies and the government, Mr. Segura said.</p>
            <p>In Germany, about 150 schools use the method, according to Ulrike Lichtinger, a professor at Vorarlberg Teaching University in Austria. She spreads the approach with educators like Thomas Müller, professor of special education at Julius Maximilian University in Würzburg, Germany. When he introduced it at a school for children with emotional and behavioral problems where he was headmaster, students became more attentive and behavioral problems dropped "nearly to zero," he said.</p>
          </div>

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
  );
};

export default NYTArticleModal;
