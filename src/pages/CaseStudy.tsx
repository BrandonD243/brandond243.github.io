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
        className="inline-flex items-center gap-2 font-mono text-xs text-[#638919] transition-colors hover:text-[#4B3621]"
      >
        <ArrowLeft size={14} /> Back to projects
      </Link>

      <header className="mt-8 border-b hairline pb-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
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
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn border border-[#4B3621] bg-transparent text-[#4B3621] hover:opacity-75"
                  >
                    <Github size={15} /> {l.label}
                  </a>
                ))
              ) : (
                <span className="font-mono text-xs text-slate-light dark:text-slate-dark">
                  Repository / demo link coming soon
                </span>
              )}
            </div>
          </div>

          {cs.screenshotUrl ? (
            <div className="overflow-hidden rounded-[6px] border hairline shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
              <img src={cs.screenshotUrl} alt={`${project.title} screenshot`} className="w-full" />
            </div>
          ) : (
            <div className="flex h-56 flex-col items-center justify-center gap-2 rounded-[6px] border border-dashed hairline text-slate-light dark:text-slate-dark">
              <ImageOff size={24} strokeWidth={1.5} />
              <p className="px-4 text-center font-mono text-[11px]">Screenshot placeholder — add to /public/projects/</p>
            </div>
          )}
        </div>
      </header>

      <div className="mx-auto mt-12 max-w-[70ch] space-y-12">
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

      <div className="mt-16 flex items-center justify-between border-t hairline pt-8">
        <span className="font-mono text-xs text-[#638919] transition-colors hover:text-[#4B3621]">Next case study</span>
        <Link
          to={`/projects/${next.slug}`}
          className="inline-flex items-center gap-2 font-medium text-[#638919] transition-colors hover:text-[#4B3621]"
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
