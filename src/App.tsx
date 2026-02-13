import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RishiValleySchool from "./pages/RishiValleySchool";
import AboutUs from "./pages/AboutUs";
import MethodologyPage from "./pages/MethodologyPage";
import OurStoryPage from "./pages/OurStoryPage";
import OurTeamPage from "./pages/OurTeamPage";
import GalleryPage from "./pages/GalleryPage";
import ContactUsPage from "./pages/ContactUsPage";
import RiverPage from "./pages/RiverPage";
import SchoolInABoxPage from "./pages/SchoolInABoxPage";
import ServicesPage from "./pages/ServicesPage";
import AchievementsPage from "./pages/AchievementsPage";
import AwardsPage from "./pages/AwardsPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rishi-valley-school" element={<RishiValleySchool />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/river" element={<RiverPage />} />
          <Route path="/school-in-a-box" element={<SchoolInABoxPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/awards-recognitions" element={<AwardsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
