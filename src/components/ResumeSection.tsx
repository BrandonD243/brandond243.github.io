import { Download, FileText } from "lucide-react";
import { links } from "../data/links";
import SectionHeading from "./SectionHeading";

export default function ResumeSection() {
  return (
    <section id="resume" className="section-shell scroll-mt-20 border-t hairline py-20 sm:py-24">
      <SectionHeading eyebrow="// resume" title="Resume" />

      <div className="card flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[4px] border hairline bg-paper text-[#638919] dark:bg-ink">
            <FileText size={22} strokeWidth={1.5} />
          </div>
          <div>
            <p className="font-medium">Brandon Downer — Resume</p>
            <p className="mt-1 font-mono text-xs text-[#F5F6F3]/70">
              PDF · Last updated: {links.resumeUpdated}
            </p>
          </div>
        </div>

        <a
          href={links.resumeUrl}
          download
          className="btn shrink-0 border border-[#F5F6F3] bg-transparent text-[#F5F6F3] transition-colors hover:border-[#E08A3E] hover:text-[#E08A3E]"
        >
          <Download size={15} /> Download Resume
        </a>
      </div>
    </section>
  );
}
