
import Footer from "../components/Footer";
import AboutSection from "../components/sections/AboutSection";
import EventsSection from "../components/sections/EventsSection";
import SymbiTechSection from "../components/sections/SymbiTechSection";
import MediaSection from "../components/sections/MediaSection";
import BlogsSection from "../components/sections/BlogsSection";
import ResourcesSection from "../components/sections/ResourcesSection";
import ProjectsSection from "../components/sections/ProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-100 font-sans flex flex-col overflow-x-hidden">
      <header className="pt-10 pb-6 flex flex-col items-center">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary mb-2 tracking-tight">AI Club</h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-center mt-2">
          Exploring Technology · Unleashing Potential · Building Together
        </p>
      </header>
      <main className="max-w-7xl mx-auto px-4 pb-12 flex flex-col gap-12 flex-1 w-full">
        <AboutSection />
        <EventsSection />
        <SymbiTechSection />
        <MediaSection />
        <BlogsSection />
        <ResourcesSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
