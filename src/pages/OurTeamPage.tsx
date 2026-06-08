import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamMemberCard from "@/components/TeamMemberCard";
import { sanityClient, urlFor } from "@/lib/sanity";

type TeamMember = {
  _id: string;
  name: string;
  role: string;
  bio: string;
  group: "leadership" | "core";
  image: unknown;
};

const TEAM_QUERY = `*[_type == "teamMember"] | order(group asc, order asc) { _id, name, role, bio, group, image }`;

const OurTeamPage = () => {
  const { data: members = [] } = useQuery<TeamMember[]>({
    queryKey: ["team-members"],
    queryFn: () => sanityClient.fetch(TEAM_QUERY),
  });

  const leadershipTeam = members.filter((m) => m.group === "leadership");
  const coreTeam = members.filter((m) => m.group === "core");

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
              <TeamMemberCard
                key={member._id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={urlFor(member.image).width(800).url()}
              />
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
              <TeamMemberCard
                key={member._id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={urlFor(member.image).width(800).url()}
              />
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
