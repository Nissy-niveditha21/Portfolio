import { openSourceProjects } from '@/data/projects';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import ProjectCard from './ProjectCard';

export default function OpenSource() {
  return (
    <section id="open-source" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="04 — Open Source"
            title="Contributions to other people's code"
            description="Live deployments I run and contribute to on upstream projects. Credit stays with the original authors."
          />
        </Reveal>

        <div className="project-grid">
          {openSourceProjects.map((project, index) => (
            <Reveal key={project.name} delay={index * 70}>
              <ProjectCard project={project} showUpstream />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
