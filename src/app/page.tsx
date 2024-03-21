import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Divider } from "@/components/divider";
import Experience from "@/components/experience";
import { Intro } from "@/components/intro";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() { 
  return (
    <main className="flex flex-col items-center px-4">

      {/* Here is the Intro */}
      <Intro />

      {/* Here i'm declaring the horizontal line which is between every section */}
      <Divider />

      {/* This is the About Section */}
      <About />

      {/* The Project Section is all in here */}
      <Projects />

      <Divider />

      <Skills />

      <Experience />

      <Contact />
    </main>
  );
}
