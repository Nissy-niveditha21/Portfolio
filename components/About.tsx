import { aboutText, streaks } from '@/data/site';
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
            description="A quick look at who I am, what I study, and the streaks I keep alive."
          />
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-copy">
            {aboutText.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="streak-grid">
              {streaks.map((streak) => (
                <div className="streak-card" key={streak.name}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={streak.logo} alt="" width={28} height={28} loading="lazy" />
                  <div>
                    <strong>{streak.name}</strong>
                    <span>{streak.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <CodeTerminal />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
