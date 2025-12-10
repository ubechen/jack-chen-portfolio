import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
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