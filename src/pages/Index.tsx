import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import OurImpact from "@/components/OurImpact";
import NYTimesSpotlight from "@/components/NYTimesSpotlight";
import Methodology from "@/components/Methodology";
import Testimonials from "@/components/Testimonials";
import DonateCTA from "@/components/DonateCTA";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <OurStory />
        <OurImpact />
        <NYTimesSpotlight />
        <Methodology />
        <Testimonials />
        <DonateCTA />
        <CaseStudies />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
