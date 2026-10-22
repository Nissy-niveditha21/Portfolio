import { navLinks, site } from '@/data/site';
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">
            {site.initials}
          </span>
          <div>
            <strong>{site.name}</strong>
            <p>{site.role} · Final-year CSE at {site.college}</p>
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-socials">
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon className="icon" />
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon className="icon" />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email">
            <MailIcon className="icon" />
          </a>
        </div>
      </div>

      <div className="container footer-base">
        <span>© {new Date().getFullYear()} {site.name}. Built with Next.js &amp; TypeScript.</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
