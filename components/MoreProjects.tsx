import { moreProjects } from '@/data/projects';
import { ArrowUpRight, GitHubIcon } from './icons';
import Reveal from './Reveal';

export default function MoreProjects() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="mini-head">
            <h3>More things I&apos;ve built</h3>
            <p>Experiments, coursework and research on GitHub.</p>
          </div>
        </Reveal>

        <div className="mini-grid">
          {moreProjects.map((project, index) => (
            <Reveal key={project.name} delay={index * 55}>
              <a className="mini-card" href={project.repo} target="_blank" rel="noopener noreferrer">
                <div className="mini-top">
                  <GitHubIcon className="icon" />
                  <ArrowUpRight className="icon mini-arrow" />
                </div>
                <strong>{project.name}</strong>
                <p>{project.detail}</p>
                {project.language ? <span className="mini-lang">{project.language}</span> : null}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
