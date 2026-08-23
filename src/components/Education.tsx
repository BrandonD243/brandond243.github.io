import { FileText } from "lucide-react";
import { education } from "../data/education";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="section-shell scroll-mt-20 border-t hairline py-20 sm:py-24">
      <SectionHeading eyebrow="// education" title="Education & certifications" />

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {education.map((ed) => (
          <li key={ed.credential} className="rounded-[4px] bg-[#4B3621] p-6">
            <h3 className="text-[15px] font-semibold leading-snug text-[#F5F6F3]">{ed.credential}</h3>
            <p className="mt-1 text-sm text-[#F5F6F3]/70">{ed.institution}</p>
            <p className="mt-3 font-mono text-[11px] text-[#F5F6F3]/70">{ed.dateRange}</p>
            {ed.note && <p className="mt-2 text-xs text-amber-400">{ed.note}</p>}
            {ed.certificateUrl && (
              <a
                href={ed.certificateUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] text-[#E08A3E] hover:opacity-75"
              >
                <FileText size={13} strokeWidth={1.5} /> View certificate
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
