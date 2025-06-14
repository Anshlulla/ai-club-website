
import SectionCarousel from "../components/SectionCarousel";
import AboutCard from "../components/about/AboutCard";
import EventCard from "../components/event/EventCard";
import AibyssCard from "../components/aibyss/AibyssCard";
import MediaPostCard from "../components/media/MediaPostCard";
import BlogCard from "../components/blog/BlogCard";
import ProjectCard from "../components/project/ProjectCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-100 font-sans">
      <header className="pt-10 pb-6 flex flex-col items-center">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary mb-2 tracking-tight">AI Club</h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-center mt-2">
          Exploring Technology · Unleashing Potential · Building Together
        </p>
      </header>
      <main className="max-w-7xl mx-auto px-4 pb-12 flex flex-col gap-12">

        {/* ABOUT SECTION */}
        <section>
          <h2 className="text-3xl font-playfair font-bold mb-4 text-indigo-800 tracking-tight">About the Club</h2>
          <SectionCarousel>
            <AboutCard
              title="Who We Are"
              text="Welcome to the AI Club! A passionate group diving into Artificial Intelligence, Machine Learning, and creative tech as a community."
            />
            <AboutCard
              title="Our Mission"
              text="Empower students to explore, build, and share. Together we organize workshops, discussions and projects to push boundaries."
            />
            <AboutCard
              title="Inclusive & Fun"
              text="All backgrounds welcome! Join for learning, competitions, or just to have fun with tech & friends."
            />
          </SectionCarousel>
        </section>

        {/* EVENTS SECTION */}
        <section>
          <h2 className="text-3xl font-playfair font-bold mb-4 text-indigo-900 tracking-tight">Events</h2>
          <SectionCarousel>
            <EventCard
              title="Annual Hackathon"
              date="March 2025"
              img="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&q=80"
            />
            <EventCard
              title="AI Quiz Bowl"
              date="Feb 2025"
              img="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
            />
            <EventCard
              title="Industry Talks"
              date="Ongoing"
              img="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80"
            />
          </SectionCarousel>
        </section>

        {/* AIBYSS SECTION */}
        <section>
          <h2 className="text-3xl font-playfair font-bold mb-4 text-violet-900 tracking-tight">AIBYSS</h2>
          <SectionCarousel>
            <AibyssCard session="Keynote: Frontiers in AI" speaker="Dr. S. Ghosh" img="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" />
            <AibyssCard session="Hands-on: Gen AI Tools" speaker="Media Team" img="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80" />
            <AibyssCard session="Celebration & Networking" img="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80" />
          </SectionCarousel>
        </section>

        {/* MEDIA POSTS SECTION */}
        <section>
          <h2 className="text-3xl font-playfair font-bold mb-4 text-cyan-800 tracking-tight">Concept Media Posts</h2>
          <SectionCarousel>
            <MediaPostCard title="Intro to GANs" subtitle="Infographic" />
            <MediaPostCard title="What is NLP?" subtitle="Quick Guide" />
            <MediaPostCard title="Future of Robotics" subtitle="Explainer" />
          </SectionCarousel>
        </section>

        {/* BLOGS SECTION */}
        <section>
          <h2 className="text-3xl font-playfair font-bold mb-4 text-green-800 tracking-tight">Blogs & Articles</h2>
          <SectionCarousel>
            <BlogCard
              quote="AI won’t replace you, but a person using AI might."
              author="Sara S, AI Club"
              link="https://medium.com/"
            />
            <BlogCard
              quote="Prompt engineering is the new superpower."
              author="Shivam B, Club Writer"
              link="https://medium.com/"
            />
            <BlogCard
              quote="Machine learning is like farming: the real growth happens in the unseen layers."
              author="Mary K, ML Enthusiast"
              link="https://medium.com/"
            />
          </SectionCarousel>
        </section>

        {/* PROJECTS SECTION */}
        <section>
          <h2 className="text-3xl font-playfair font-bold mb-4 text-blue-800 tracking-tight">Projects</h2>
          <SectionCarousel>
            <ProjectCard
              project="Generative Art App"
              img="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80"
            />
            <ProjectCard
              project="NLP Chatbot"
              img="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
            />
            <ProjectCard
              project="Smart Attendance"
              img="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
            />
          </SectionCarousel>
        </section>

      </main>
    </div>
  );
};

export default Index;
