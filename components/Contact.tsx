import { contacts, site } from '@/data/site';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { ArrowUpRight, GitHubIcon, LinkedInIcon, MailIcon } from './icons';

const glyphs = {
  email: MailIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
} as const;

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="07 — Contact"
            title="Let's build something together"
            description="Open to 2026 software engineering and AI/ML internships and full-time roles."
            align="center"
          />
        </Reveal>

        <div className="contact-grid">
          {contacts.map((contact, index) => {
            const Glyph = glyphs[contact.kind];
            const inner = (
              <>
                <span className="contact-icon">
                  <Glyph className="icon" />
                </span>
                <span className="contact-text">
                  <small>{contact.label}</small>
                  <strong>{contact.value}</strong>
                </span>
                {contact.href ? <ArrowUpRight className="icon contact-arrow" /> : null}
              </>
            );

            return (
              <Reveal key={contact.label} delay={index * 60}>
                {contact.href ? (
                  <a className="contact-card" href={contact.href} target="_blank" rel="noopener noreferrer">
                    {inner}
                  </a>
                ) : (
                  <div className="contact-card">{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="contact-cta">
            <div>
              <h3>Have a role, a project, or a question?</h3>
              <p>I reply fastest by email — usually within a day.</p>
            </div>
            <a className="btn btn-primary" href={`mailto:${site.email}`}>
              <MailIcon className="icon" />
              Email me
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
