import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Let's Work Together
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          對於 AI、永續設計或包容性設計有興趣？歡迎與我聯繫討論合作機會
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="text-lg">
            <Mail className="mr-2 h-5 w-5" />
            Send Email
          </Button>
          <Button size="lg" variant="outline" className="text-lg">
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
          <Button size="lg" variant="outline" className="text-lg">
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
        </div>
        <div className="pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2024 Senior UX Designer. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
