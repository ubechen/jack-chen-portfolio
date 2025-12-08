import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import Projects from "@/components/Projects";
import AICapabilities from "@/components/AICapabilities";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutPreview />
      <div className="bg-background">
        <Projects />
      </div>
      <div className="bg-muted">
        <AICapabilities />
      </div>
      <div className="bg-background">
        <Contact />
      </div>
    </div>
  );
};

export default Index;