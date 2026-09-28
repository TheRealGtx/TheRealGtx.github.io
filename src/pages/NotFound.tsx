import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page not found";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main id="main" tabIndex={-1} className="page flex-1 py-24 focus:outline-none">
        <p className="meta mb-2">404</p>
        <h1 className="text-4xl font-bold mb-4">Page not found</h1>
        <p className="text-muted-foreground mb-6">The page you are looking for does not exist or has been moved.</p>
        <a href="/" className="link">Back to the home page</a>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
