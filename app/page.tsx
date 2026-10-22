import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import OpenSource from '@/components/OpenSource';
import MoreProjects from '@/components/MoreProjects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />

      <section id="skills" className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="02 — Stack"
              title="The tools I reach for"
              description="Languages, frameworks and platforms I use to take ideas from a blank file to a live URL."
            />
          </Reveal>
          <Reveal delay={80}>
            <Skills />
          </Reveal>
        </div>
      </section>

      <Projects />
      <OpenSource />
      <MoreProjects />
      <Experience />
      <Contact />
    </>
  );
}
