import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card group flex flex-col justify-between p-6 transition-colors hover:border-teal-600 dark:hover:border-teal-400">
      <div>
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2.5 text-[14px] leading-relaxed" style={{ color: "#c2bcb4" }}>
          {project.outcome}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link to={`/projects/${project.slug}`} className="btn-secondary !px-4 !py-2.5 text-xs">
          View Case Study <ArrowUpRight size={13} />
        </Link>
        {project.links.length > 0 ? (
          project.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="btn text-[#F5F6F3]/70 hover:text-ink dark:hover:text-paper !px-2 text-xs"
            >
              <Github size={13} /> {l.label}
            </a>
          ))
        ) : (
          <span className="font-mono text-[11px] text-slate-light dark:text-slate-dark">
            repo link coming soon
          </span>
        )}
      </div>
    </article>
  );
}
