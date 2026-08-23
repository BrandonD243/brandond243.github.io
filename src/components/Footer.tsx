import { Github, Linkedin, Mail } from "lucide-react";
import { links } from "../data/links";

export default function Footer() {
  return (
    <footer className="border-t hairline">
      <div className="section-shell flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-sm font-semibold text-[#638919]">{links.name}</p>
          <p className="mt-1 font-mono text-xs text-[#4B3621]">{links.title}</p>
        </div>

        <div className="flex items-center gap-4">
          <a href={`mailto:${links.email}`} aria-label="Email" className="text-[#4B3621] hover:text-teal-700 dark:hover:text-teal-400">
            <Mail size={17} />
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[#4B3621] hover:text-teal-700 dark:hover:text-teal-400">
            <Linkedin size={17} />
          </a>
          <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[#4B3621] hover:text-teal-700 dark:hover:text-teal-400">
            <Github size={17} />
          </a>
        </div>

        <p className="font-mono text-[11px] text-[#4B3621]">
          © {new Date().getFullYear()} {links.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
