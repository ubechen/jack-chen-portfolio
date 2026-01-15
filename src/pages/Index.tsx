import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Jack Chen – Product / UX Designer in Taipei | Portfolio</title>
        <meta name="description" content="Jack Chen is a Product / UX Designer based in Taipei, focused on B2B systems, robotics, AI PC, drones, and ESG experiences. View his UX portfolio and case studies." />
      </Helmet>
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
