import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section-shell scroll-mt-20 border-t hairline py-20 sm:py-24">
      <SectionHeading
        eyebrow="// projects"
        title="Featured projects"
        description="Applied AI and engineering work, spanning healthcare document intelligence, backend systems, and personal machine-learning practice."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
