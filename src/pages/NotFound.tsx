import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { FileQuestion, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    document.title = "Page Not Found | Jack Chen – Product / UX Designer";
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-md">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
              <FileQuestion className="h-12 w-12 text-muted-foreground" />
            </div>
          </div>
          
          {/* Content */}
          <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
          <h2 className="text-xl font-medium text-foreground mb-2">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            抱歉，您所尋找的頁面不存在或已被移動。
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/">
                <span className="relative z-10 flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  回到首頁
                </span>
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" onClick={() => window.history.back()}>
              <span className="relative z-10 flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                返回上一頁
              </span>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
