import { aboutText } from '@/data/site';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import CodeTerminal from './CodeTerminal';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="01 — About"
            title="Engineer first, student always"
            description="A quick look at who I am, what I study and how I build."
          />
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-copy">
            {aboutText.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal delay={100}>
            <CodeTerminal />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
