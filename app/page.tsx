import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import CodingProfiles from '@/components/CodingProfiles';
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

      <section id="coding" className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="03 — Coding"
              title="Streaks I keep alive"
              description="Live numbers pulled from LeetCode, CodeChef and HackerRank — streaks, ratings and badges that keep moving."
            />
          </Reveal>
          <CodingProfiles />
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
