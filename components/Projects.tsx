import { builtProjects } from '@/data/projects';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="04 — Projects"
            title="Built by me, deployed for real"
            description="Every card below links to a running deployment — no mockups, no dead links."
          />
        </Reveal>

        <div className="project-grid">
          {builtProjects.map((project, index) => (
            <Reveal key={project.name} delay={index * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
