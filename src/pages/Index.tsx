import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CVSection from "@/components/CVSection";
import Projects from "@/components/Projects";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { site } from "@/config/site";

const Index = () => {
  useEffect(() => {
    document.title = site.name;
    // Arriving from another page with an anchor (e.g. /#contact): scroll once rendered
    if (window.location.hash) {
      document.querySelector(window.location.hash)?.scrollIntoView();
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="main" tabIndex={-1} className="page focus:outline-none">
        <HeroSection />
        <AboutSection />
        <CVSection />
        <Projects />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
