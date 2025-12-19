import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  useEffect(() => {
    document.title = "Jack Chen – Product / UX Designer in Taipei | Portfolio";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Jack Chen is a Product / UX Designer based in Taipei, focused on B2B systems, robotics, AI PC, drones, and ESG experiences. View his UX portfolio and case studies.");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ScrollReveal>
        <AboutPreview />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <div className="bg-background">
          <Projects />
        </div>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <div className="bg-background">
          <Contact />
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Index;