import { heroStats, logoWall, site, typingRoles } from '@/data/site';
import { ArrowUpRight, GitHubIcon, LinkedInIcon, MailIcon } from './icons';
import Reveal from './Reveal';
import TypingText from './TypingText';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <Reveal className="hero-copy">
          <span className="hero-badge">
            <span className="status-pulse" aria-hidden="true" />
            Open to 2026 SDE &amp; AI/ML roles
          </span>

          <h1 className="hero-title">
            Hi, I&apos;m <span className="grad">{site.shortName}</span>
          </h1>

          <p className="hero-role">
            <TypingText words={typingRoles} />
          </p>

          <p className="hero-lede">
            Final-year Computer Science student shipping production web apps and applied AI systems.
            I build the full stack — React and Next.js interfaces, FastAPI and Spring Boot services,
            and the machine-learning models that make them smart.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View live projects
              <ArrowUpRight className="icon" />
            </a>
            <a
              className="btn btn-outline"
              href={`mailto:${site.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailIcon className="icon" />
              Get in touch
            </a>
          </div>

          <div className="hero-socials">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-chip"
              aria-label="GitHub profile"
            >
              <GitHubIcon className="icon" />
              github.com/{site.githubHandle}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-chip"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon className="icon" />
              LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal className="hero-panel" delay={120}>
          <div className="window" aria-hidden="true">
            <div className="window-bar">
              <span className="window-dots">
                <i className="dot dot-red" />
                <i className="dot dot-amber" />
                <i className="dot dot-green" />
              </span>
              <span className="window-address">
                <span className="lock">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="10" width="16" height="10" rx="2" />
                    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                  </svg>
                </span>
                nissy-niveditha21.github.io/Portfolio
              </span>
            </div>
            <div className="window-body">
              <div className="hero-profile">
                <div className="hero-avatar">{site.initials}</div>
                <div>
                  <strong>{site.name}</strong>
                  <small>{site.role}</small>
                </div>
              </div>
              <ul className="hero-facts">
                <li>
                  <span>Education</span>
                  <strong>B.Tech CSE · Final year</strong>
                </li>
                <li>
                  <span>College</span>
                  <strong>{site.college}</strong>
                </li>
                <li>
                  <span>Focus</span>
                  <strong>Full-stack · Applied AI/ML</strong>
                </li>
                <li>
                  <span>Status</span>
                  <strong className="is-live">
                    <span className="status-pulse" aria-hidden="true" /> Building &amp; shipping
                  </strong>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container">
        <Reveal className="hero-stats" delay={200}>
          {heroStats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </Reveal>
      </div>

      <div className="container">
        <div className="logo-wall">
          <span className="logo-wall-label">The stack I ship with</span>
          <div className="logo-strip">
            <div className="logo-track">
              {[...logoWall, ...logoWall].map((tech, index) => (
                <span className="logo-item" key={`${tech.name}-${index}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={tech.logo} alt="" width={24} height={24} loading="lazy" />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
