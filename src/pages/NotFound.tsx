import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FileQuestion, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>找不到頁面｜Jack Chen（陳泰運）作品集</title>
        <meta name="description" content="你要找的頁面不存在或已移動。你可以回到首頁、瀏覽精選專案（AI PC、無人機地面控制站、服務型機器人平台、ESG 桌遊），或前往 About / Resume" />
        <link rel="canonical" href="https://taiyun.design/404" />
        <meta name="robots" content="noindex,follow" />
        <meta property="og:locale" content="zh_TW" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jack Chen（陳泰運）作品集" />
        <meta property="og:title" content="找不到頁面｜Jack Chen（陳泰運）作品集" />
        <meta property="og:description" content="你要找的頁面不存在或已移動。回到首頁或瀏覽精選專案與 About / Resume" />
        <meta property="og:url" content="https://taiyun.design/404" />
        <meta property="og:image" content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/913ea9b5-713e-47d8-9de2-ad05ff4e2dd3/id-preview-fa2e4b33--de911528-6f96-43b3-a205-2765473bab47.lovable.app-1768453677111.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="找不到頁面｜Jack Chen（陳泰運）作品集" />
        <meta name="twitter:description" content="你要找的頁面不存在或已移動。回到首頁或瀏覽精選專案與 About / Resume" />
        <meta name="twitter:image" content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/913ea9b5-713e-47d8-9de2-ad05ff4e2dd3/id-preview-fa2e4b33--de911528-6f96-43b3-a205-2765473bab47.lovable.app-1768453677111.png" />
      </Helmet>
      
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
