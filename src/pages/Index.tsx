import SectionCarousel from "../components/SectionCarousel";
import AboutCard from "../components/about/AboutCard";
import EventCard from "../components/event/EventCard";
import AibyssCard from "../components/aibyss/AibyssCard";
import MediaPostCard from "../components/media/MediaPostCard";
import BlogCard from "../components/blog/BlogCard";
import ProjectCard from "../components/project/ProjectCard";
import ResourceCard from "../components/resources/ResourceCard";
import Footer from "../components/Footer";
import CarouselRow from "../components/CarouselRow";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../components/ui/carousel";

const resourceCards = [
  {
    title: "Machine Learning Crash Course",
    description: "Google’s free course with video lectures, notes, and practical exercises.",
    img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=200&q=80",
    link: "https://developers.google.com/machine-learning/crash-course",
  },
  {
    title: "Stanford CS231n",
    description: "Legendary deep learning course with video lectures and notes.",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&q=80",
    link: "http://cs231n.stanford.edu/",
  },
  {
    title: "Kaggle",
    description: "Data science competitions, public datasets, and hands-on projects.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&q=80",
    link: "https://kaggle.com/",
  },
  {
    title: "Fast.ai",
    description: "Practical, beginner-friendly deep learning MOOC and library.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=200&q=80",
    link: "https://course.fast.ai/",
  },
  {
    title: "Deep Learning Specialization",
    description: "Andrew Ng's deep learning specialization on Coursera.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80",
    link: "https://www.coursera.org/specializations/deep-learning",
  }
]

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-100 font-sans flex flex-col">
      <header className="pt-10 pb-6 flex flex-col items-center">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary mb-2 tracking-tight">AI Club</h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-center mt-2">
          Exploring Technology · Unleashing Potential · Building Together
        </p>
      </header>
      <main className="max-w-7xl mx-auto px-4 pb-12 flex flex-col gap-12 flex-1">
        {/* ABOUT SECTION */}
        <section>
          <h2 className="text-3xl font-playfair font-bold mb-4 text-indigo-800 tracking-tight">About the Club</h2>
          <CarouselRow items={[
              <AboutCard
                title="Who We Are"
                text="Welcome to the AI Club! A passionate group diving into Artificial Intelligence, Machine Learning, and creative tech as a community."
                key="about-1"
              />,
              <AboutCard
                title="Our Mission"
                text="Empower students to explore, build, and share. Together we organize workshops, discussions and projects to push boundaries."
                key="about-2"
              />,
              <AboutCard
                title="Inclusive & Fun"
                text="All backgrounds welcome! Join for learning, competitions, or just to have fun with tech & friends."
                key="about-3"
              />,
              <AboutCard
                title="Open Source Spirit"
                text="We believe in sharing! Get involved, contribute to club projects, and help build a better community for everyone."
                key="about-4"
              />,
            ]}
            slidesPerView={{ base: 1, md: 2, lg: 3 }}
          />
        </section>
        {/* EVENTS SECTION */}
        <section>
          <h2 className="text-3xl font-playfair font-bold mb-4 text-indigo-900 tracking-tight">Events</h2>
          <CarouselRow items={[
            <EventCard
              title="Annual Hackathon"
              date="March 2025"
              img="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&q=80"
              key="event-1"
            />,
            <EventCard
              title="AI Quiz Bowl"
              date="Feb 2025"
              img="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
              key="event-2"
            />,
            <EventCard
              title="Industry Talks"
              date="Ongoing"
              img="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80"
              key="event-3"
            />,
            <EventCard
              title="ML Bootcamp"
              date="April 2025"
              img="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              key="event-4"
            />
          ]} slidesPerView={{ base: 1, md: 2, lg: 3 }} />
        </section>
        {/* AIBYSS SECTION */}
        <section>
          <h2 className="text-3xl font-playfair font-bold mb-4 text-violet-900 tracking-tight">AIBYSS</h2>
          <CarouselRow items={[
            <AibyssCard session="Keynote: Frontiers in AI" speaker="Dr. S. Ghosh" img="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" key="aibyss-1" />,
            <AibyssCard session="Hands-on: Gen AI Tools" speaker="Media Team" img="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80" key="aibyss-2" />,
            <AibyssCard session="Celebration & Networking" img="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80" key="aibyss-3" />,
            <AibyssCard session="AI Ethics Roundtable" speaker="Panelists" img="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" key="aibyss-4" />
          ]} slidesPerView={{ base: 1, md: 2, lg: 3 }} />
        </section>
        {/* MEDIA POSTS SECTION */}
        <section>
          <h2 className="text-3xl font-playfair font-bold mb-4 text-cyan-800 tracking-tight">Concept Media Posts</h2>
          <CarouselRow items={[
            <MediaPostCard title="Intro to GANs" subtitle="Infographic" key="media-1" />,
            <MediaPostCard title="What is NLP?" subtitle="Quick Guide" key="media-2" />,
            <MediaPostCard title="Future of Robotics" subtitle="Explainer" key="media-3" />,
            <MediaPostCard title="ML vs DL" subtitle="Visual Deep Dive" key="media-4" />
          ]} slidesPerView={{ base: 1, md: 2, lg: 3 }} />
        </section>
        {/* BLOGS SECTION */}
        <section>
          <h2 className="text-3xl font-playfair font-bold mb-4 text-green-800 tracking-tight">Blogs & Articles</h2>
          <CarouselRow items={[
            <BlogCard
              quote="AI won’t replace you, but a person using AI might."
              author="Sara S, AI Club"
              link="https://medium.com/"
              key="blog-1"
            />,
            <BlogCard
              quote="Prompt engineering is the new superpower."
              author="Shivam B, Club Writer"
              link="https://medium.com/"
              key="blog-2"
            />,
            <BlogCard
              quote="Machine learning is like farming: the real growth happens in the unseen layers."
              author="Mary K, ML Enthusiast"
              link="https://medium.com/"
              key="blog-3"
            />,
            <BlogCard
              quote="Clarity comes not from algorithmic complexity, but from simple curiosity."
              author="Gaurav D, Club Mentor"
              link="https://medium.com/"
              key="blog-4"
            />
          ]} slidesPerView={{ base: 1, md: 2, lg: 3 }} />
        </section>
        {/* RESOURCES SECTION */}
        <section>
          <h2 className="text-3xl font-playfair font-bold mb-4 text-blue-900 tracking-tight">Resources</h2>
          <CarouselRow
            items={resourceCards.map((card) => (
              <ResourceCard
                key={card.title}
                title={card.title}
                description={card.description}
                img={card.img}
                link={card.link}
              />
            ))}
            slidesPerView={{ base: 1, md: 2, lg: 3 }}
          />
        </section>
        {/* PROJECTS SECTION */}
        <section>
          <h2 className="text-3xl font-playfair font-bold mb-4 text-blue-800 tracking-tight">Projects</h2>
          <CarouselRow items={[
            <ProjectCard
              project="Generative Art App"
              img="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80"
              key="project-1"
            />,
            <ProjectCard
              project="NLP Chatbot"
              img="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
              key="project-2"
            />,
            <ProjectCard
              project="Smart Attendance"
              img="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
              key="project-3"
            />,
            <ProjectCard
              project="Pose Estimation Portal"
              img="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              key="project-4"
            />
          ]} slidesPerView={{ base: 1, md: 2, lg: 3 }} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
