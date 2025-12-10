import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Let's Work Together
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          歡迎與我聊聊合作機會
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="mailto:taiyun0614@gmail.com">
            <Button size="lg" variant="contactLink" className="text-lg w-full">
              <span className="relative z-10 flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </span>
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/tai-yun-chen/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="contactLink" className="text-lg w-full">
              <span className="relative z-10 flex items-center">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </span>
            </Button>
          </a>
          <a href="https://medium.com/@taiyunchen" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="contactLink" className="text-lg w-full">
              <span className="relative z-10 flex items-center">
                <MediumIcon />
                <span className="ml-2">Medium</span>
              </span>
            </Button>
          </a>
        </div>
        <div className="pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2025 Jack Chen Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;