import fs from 'node:fs';
import path from 'node:path';

import { asset, codingProfiles, gssocProfile } from '@/data/site';
import { ArrowUpRight, CheckCircleIcon, ExternalLinkIcon, LockIcon } from './icons';
import CodingCard from './CodingCard';
import Reveal from './Reveal';

/**
 * Screenshots are dropped into /public/previews/<slug>.jpg by hand, so a card only
 * gets a flip-to-screenshot face once its file actually exists — no broken images.
 */
function screenshotFor(slug: string) {
  const file = path.join(process.cwd(), 'public', 'previews', `${slug}.jpg`);
  return fs.existsSync(file) ? asset(`/previews/${slug}.jpg`) : null;
}

/**
 * Flash cards for the coding-platform accounts (streak + headline stats) follow by
 * the GSSoC contributor profile, rendered with the same window chrome as a project card.
 */
export default function CodingProfiles() {
  return (
    <>
      <div className="coding-grid">
        {codingProfiles.map((profile, index) => (
          <Reveal key={profile.name} delay={index * 90}>
            <CodingCard profile={profile} shot={screenshotFor(profile.slug)} index={index} />
          </Reveal>
        ))}
      </div>

      <div className="gssoc-block">
        <Reveal>
          <div className="sub-heading">
            <h3>Open source profile</h3>
            <p>
              {gssocProfile.program} 2026 — captured straight from the live contributor page.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <article className="project-card gssoc-card">
            <div className="window">
              <div className="window-bar">
                <span className="window-dots">
                  <i className="dot dot-red" />
                  <i className="dot dot-amber" />
                  <i className="dot dot-green" />
                </span>
                <span className="window-address">
                  <span className="lock">
                    <LockIcon />
                  </span>
                  {gssocProfile.domain}
                </span>
                <a
                  className="window-open"
                  href={gssocProfile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open the GSSoC contributor profile"
                >
                  <ArrowUpRight className="icon" />
                </a>
              </div>

              <div className="deploy-stage">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="project-shot"
                  src={gssocProfile.image}
                  alt="Screenshot of the live GSSoC 2026 contributor profile"
                  width={1440}
                  height={810}
                  loading="lazy"
                  decoding="async"
                />
                <div className="status-badge">
                  <span className="status-pulse" aria-hidden="true" />
                  {gssocProfile.statusLabel}
                </div>
              </div>

              <div className="deploy-bar">
                {gssocProfile.meta.map((item, index) => (
                  <span className="deploy-meta" key={item}>
                    {index > 0 ? <i className="deploy-divider" aria-hidden="true" /> : null}
                    {index === 0 ? <CheckCircleIcon className="icon" /> : null}
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-body">
              <header className="project-head">
                <h3>{gssocProfile.name}</h3>
                <p className="project-tagline">{gssocProfile.role}</p>
              </header>

              <p className="project-desc">{gssocProfile.description}</p>

              <ul className="project-highlights">
                {gssocProfile.highlights.map((highlight) => (
                  <li key={highlight}>
                    <CheckCircleIcon className="icon" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <ul className="tech-tags">
                {gssocProfile.tags.map((tag) => (
                  <li className="tech-tag" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="project-actions">
                <a
                  className="btn btn-primary btn-sm"
                  href={gssocProfile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLinkIcon className="icon" />
                  View live profile
                </a>
                <a
                  className="btn btn-outline btn-sm"
                  href="https://gssoc.girlscript.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLinkIcon className="icon" />
                  GirlScript
                </a>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </>
  );
}
