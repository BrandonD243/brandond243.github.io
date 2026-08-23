import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, Github, ImageOff } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getProjectBySlug, projects } from "../data/projects";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug ?? "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  const cs = project.caseStudy;
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <main id="main-content" className="section-shell py-16 sm:py-20">
      <Link
        to="/#projects"
        className="inline-flex items-center gap-2 font-mono text-xs text-slate-light hover:text-teal-700 dark:text-slate-dark dark:hover:text-teal-400"
      >
        <ArrowLeft size={14} /> Back to projects
      </Link>

      <header className="mt-8 max-w-[70ch] border-b hairline pb-10">
        <p className="eyebrow mb-3">// case study</p>
        <h1 className="text-3xl font-semibold text-[#4B3621] sm:text-4xl">{project.title}</h1>
        <p className="mt-4 text-[15px] leading-relaxed text-[#4B4B4B]">
          {cs.overview}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="tag"
              style={{ backgroundColor: "#4B3621", borderColor: "#4B3621", color: "rgba(245,246,243,0.8)" }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.length > 0 ? (
            project.links.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="btn-secondary">
                <Github size={15} /> {l.label}
              </a>
            ))
          ) : (
            <span className="font-mono text-xs text-slate-light dark:text-slate-dark">
              Repository / demo link coming soon
            </span>
          )}
        </div>
      </header>

      <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-[1fr_0.55fr]">
        <div className="space-y-12">
          <CaseSection heading="Problem" body={cs.problem} />
          <CaseSection heading="My Role" body={cs.myRole} />
          <CaseSection heading="Approach" body={cs.approach} />

          <div>
            <h2 className="mb-3 text-lg font-semibold text-[#4B3621]">Architecture / Workflow</h2>
            <p className="text-[15px] leading-relaxed text-[#4B4B4B]">
              {cs.architecture}
            </p>
            {cs.diagramUrl ? (
              <div className="mt-5 overflow-hidden rounded-[4px] border hairline">
                <img src={cs.diagramUrl} alt={`${project.title} architecture diagram`} className="w-full" />
              </div>
            ) : (
              cs.hasDiagramPlaceholder && (
                <div className="mt-5 flex h-48 flex-col items-center justify-center gap-2 rounded-[4px] border border-dashed hairline text-slate-light dark:text-slate-dark">
                  <ImageOff size={22} strokeWidth={1.5} />
                  <p className="font-mono text-[11px]">Architecture diagram — add image to /public/projects/</p>
                </div>
              )
            )}
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-[#4B3621]">Key Engineering Decisions</h2>
            <ul className="space-y-2.5">
              {cs.decisions.map((d) => (
                <li key={d} className="flex gap-3 text-[14px] leading-relaxed">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#4B3621]" />
                  <span className={d.startsWith("TODO") ? "text-amber-500" : "text-[#4B3621]"}>
                    {d}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {cs.results && <CaseSection heading="Results" body={cs.results} />}
          <CaseSection heading="Challenges & Lessons" body={cs.challenges} />
        </div>

        <aside className="h-fit space-y-6 lg:sticky lg:top-24">
          <div className="card p-6">
            <h3 className="font-mono text-[11px] uppercase tracking-wide text-slate-light dark:text-slate-dark">
              Technologies
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {cs.technologies.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex h-40 flex-col items-center justify-center gap-2 rounded-[4px] border border-dashed hairline text-slate-light dark:text-slate-dark">
            <ImageOff size={20} strokeWidth={1.5} />
            <p className="px-4 text-center font-mono text-[11px]">Screenshot placeholder — add to /public/projects/</p>
          </div>
        </aside>
      </div>

      <div className="mt-16 flex items-center justify-between border-t hairline pt-8">
        <span className="font-mono text-xs text-slate-light dark:text-slate-dark">Next case study</span>
        <Link
          to={`/projects/${next.slug}`}
          className="inline-flex items-center gap-2 font-medium text-[#4B3621] hover:text-teal-700 dark:hover:text-teal-400"
        >
          {next.title} <ArrowUpRight size={15} />
        </Link>
      </div>
    </main>
  );
}

function CaseSection({ heading, body }: { heading: string; body: string }) {
  const isPlaceholder = body.trim().startsWith("TODO");
  return (
    <div>
      <h2 className="mb-3 text-lg font-semibold text-[#4B3621]">{heading}</h2>
      <p
        className={
          isPlaceholder
            ? "placeholder-note inline-block"
            : "text-[15px] leading-relaxed text-[#4B4B4B]"
        }
      >
        {body}
      </p>
    </div>
  );
}
