import type { Project } from '@/data/projects';
import { techIcon } from '@/data/projects';
import { ArrowUpRight, CheckCircleIcon, ExternalLinkIcon, GitHubIcon, LockIcon, PackageIcon } from './icons';

type ProjectCardProps = {
  project: Project;
  /** Renders the "Open Source" credit chip for mirrored upstream projects. */
  showUpstream?: boolean;
};

export default function ProjectCard({ project, showUpstream = false }: ProjectCardProps) {
  const isPackage = project.statusKind === 'package';

  return (
    <article className="project-card">
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
            {project.domain}
          </span>
          <a
            className="window-open"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name}`}
          >
            <ArrowUpRight className="icon" />
          </a>
        </div>

        <div className="deploy-stage">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="project-shot"
            src={project.image}
            alt={`Screenshot of the live ${project.name} deployment at ${project.domain}`}
            width={1440}
            height={810}
            loading="lazy"
            decoding="async"
          />
          <div className="status-badge">
            {isPackage ? (
              <PackageIcon className="icon" />
            ) : (
              <span className="status-pulse" aria-hidden="true" />
            )}
            {project.statusLabel}
          </div>
        </div>

        <div className="deploy-bar">
          {project.meta.map((item, index) => (
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
          <h3>{project.name}</h3>
          <p className="project-tagline">{project.tagline}</p>
        </header>

        <p className="project-desc">{project.description}</p>

        <ul className="project-highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>
              <CheckCircleIcon className="icon" />
              {highlight}
            </li>
          ))}
        </ul>

        <ul className="tech-tags">
          {project.stack.map((tech) => (
            <li className="tech-tag" key={tech.name}>
              {tech.slug ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={techIcon(tech.slug)} alt="" width={15} height={15} loading="lazy" />
              ) : null}
              {tech.name}
            </li>
          ))}
        </ul>

        {showUpstream && project.upstream ? (
          <p className="upstream-chip">
            Mirrored for contribution · upstream{' '}
            <a href={project.upstream.url} target="_blank" rel="noopener noreferrer">
              {project.upstream.name}
            </a>
          </p>
        ) : null}

        <div className="project-actions">
          <a className="btn btn-primary btn-sm" href={project.url} target="_blank" rel="noopener noreferrer">
            <ExternalLinkIcon className="icon" />
            {project.ctaLabel}
          </a>
          <a className="btn btn-outline btn-sm" href={project.repo} target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="icon" />
            Source
          </a>
        </div>
      </div>
    </article>
  );
}
