import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Philosophy from "@/components/Philosophy";
import AICapabilities from "@/components/AICapabilities";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      <Philosophy />
      <AICapabilities />
      <Contact />
    </div>
  );
};

export default Index;
