import { certifications, experience, leadership } from '@/data/site';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { CheckCircleIcon } from './icons';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="05 — Experience"
            title="Where I've put the theory to work"
            description="Internships, certifications and community roles."
          />
        </Reveal>

        <div className="timeline">
          <Reveal>
            <article className="timeline-card">
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-head">
                <div>
                  <h3>
                    {experience.role} · <span>{experience.company}</span>
                  </h3>
                  <p className="timeline-period">{experience.period}</p>
                </div>
                <span className="pill-live">
                  <span className="status-pulse" aria-hidden="true" />
                  Completed
                </span>
              </div>

              <ul className="timeline-points">
                {experience.points.map((point) => (
                  <li key={point}>
                    <CheckCircleIcon className="icon" />
                    {point}
                  </li>
                ))}
              </ul>

              <ul className="tech-tags">
                {experience.tags.map((tag) => (
                  <li className="tech-tag" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <div className="credentials-grid">
          <Reveal>
            <div className="cred-card">
              <h3 className="cred-title">Certifications</h3>
              <ul className="cred-list">
                {certifications.map((cert) => (
                  <li key={cert.name}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={cert.logo} alt="" width={26} height={26} loading="lazy" />
                    <div>
                      <strong>{cert.name}</strong>
                      <span>{cert.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="cred-card">
              <h3 className="cred-title">Leadership &amp; Community</h3>
              <ul className="cred-list">
                {leadership.map((item) => (
                  <li key={item.title}>
                    {item.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={item.logo} alt="" width={26} height={26} loading="lazy" />
                    ) : (
                      <span className="cred-emoji" aria-hidden="true">
                        {item.emoji}
                      </span>
                    )}
                    <div>
                      <strong>{item.title}</strong>
                      {item.detail ? <span>{item.detail}</span> : null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
