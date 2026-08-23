import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experience, type ExperienceEntry } from "../data/experience";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const [showOther, setShowOther] = useState(false);
  const technical = experience.filter((role) => role.category !== "other");
  const other = experience.filter((role) => role.category === "other");

  return (
    <section id="experience" className="section-shell scroll-mt-20 border-t hairline py-20 sm:py-24">
      <SectionHeading
        eyebrow="// experience"
        title="Where I've worked"
        description="A timeline of my technical experience. Expand to see my other ventures outside of tech!"
      />

      <ol className="space-y-14">
        {technical.map((role) => (
          <ExperienceItem key={role.company} role={role} />
        ))}
      </ol>

      {other.length > 0 && (
        <div className="mt-10">
          <button
            type="button"
            onClick={() => setShowOther((v) => !v)}
            aria-expanded={showOther}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-[#4B3621] transition-opacity hover:opacity-75 dark:text-[#4B3621]"
          >
            <ChevronDown size={14} className={showOther ? "rotate-180 transition-transform" : "transition-transform"} />
            {showOther ? "Hide non-technical experience" : "Show non-technical experience"}
          </button>

          {showOther && (
            <ol className="mt-10 space-y-14">
              {other.map((role) => (
                <ExperienceItem key={role.company} role={role} />
              ))}
            </ol>
          )}
        </div>
      )}
    </section>
  );
}

function ExperienceItem({ role }: { role: ExperienceEntry }) {
  return (
    <li className="relative border-l hairline pl-8 sm:pl-10">
      <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full border-2 hairline bg-paper dark:bg-ink" />

      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-semibold" style={{ color: "#4B4B4B" }}>
          {role.role} <span style={{ color: "#4B4B4B" }}>· {role.company}</span>
        </h3>
        <span className="font-mono text-xs" style={{ color: "#4B4B4B" }}>{role.dateRange}</span>
      </div>
      <p className="mt-1 font-mono text-xs" style={{ color: "#4B4B4B" }}>{role.location}</p>

      <p className="mt-4 max-w-[65ch] text-[15px] leading-relaxed" style={{ color: "#4B4B4B" }}>
        {role.summary}
      </p>

      <ul className="mt-4 space-y-2.5">
        {role.highlights.map((h) => (
          <li key={h} className="flex gap-3 text-[14px] leading-relaxed">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#4B3621]" />
            <span className={h.startsWith("TODO") ? "text-amber-500" : ""} style={h.startsWith("TODO") ? undefined : { color: "#4B4B4B" }}>
              {h}
            </span>
          </li>
        ))}
      </ul>

      {role.stack.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {role.stack.map((s) => (
            <span
              key={s}
              className="tag"
              style={{ backgroundColor: "#4B3621", borderColor: "#4B3621", color: "rgba(245,246,243,0.8)" }}
            >
              {s}
            </span>
          ))}
        </div>
      )}
    </li>
  );
}
