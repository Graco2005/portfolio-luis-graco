import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Stats } from "@/components/stats";
import { Tech } from "@/components/tech";
import { Projects } from "@/components/projects";
import { FeaturedProject } from "@/components/featured-project";
import { Certifications } from "@/components/certifications";
import { Timeline } from "@/components/timeline";
import { Resume } from "@/components/resume";
import { Github } from "@/components/github";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <Hero />
        <About />
        <Stats />
        <Tech />
        <FeaturedProject />
        <Projects />
        <Certifications />
        <Timeline />
        <Resume />
        <Github />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
