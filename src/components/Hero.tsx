import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import DocScanVisual from "./DocScanVisual";
import { links } from "../data/links";

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-shell grid grid-cols-1 items-center gap-16 pb-28 pt-16 sm:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pb-40 lg:pt-28"
    >
      <div className="animate-fade-up">
        <p className="eyebrow mb-5">// new york city</p>
        <h1
          className="text-[2.5rem] leading-[1.08] sm:text-5xl lg:text-[3.4rem]"
          style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400, color: "#638919" }}
        >
          {links.name}
        </h1>
        <p className="mt-3 font-mono text-sm sm:text-base" style={{ color: "#4B4B4B" }}>
          welcome to my webpage!
        </p>
        <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed sm:text-base" style={{ color: "#4B4B4B" }}>
          I&apos;m a Machine Learning &amp; Data Engineer + artistic creative who builds ethical AI
          systems designed for the human experience.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn bg-[#638919] text-white hover:bg-[#4B3621]">
            View Projects <ArrowRight size={15} />
          </a>
          <a
            href={links.resumeUrl}
            download
            className="btn border border-[#638919] bg-transparent text-[#638919] hover:border-[#4B3621] hover:text-[#4B3621]"
          >
            <Download size={15} /> Download Resume
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-[3px] border border-[#638919] text-[#638919] transition-colors hover:border-[#4B3621] hover:text-[#4B3621]"
          >
            <Github size={17} />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-[3px] border border-[#638919] text-[#638919] transition-colors hover:border-[#4B3621] hover:text-[#4B3621]"
          >
            <Linkedin size={17} />
          </a>
        </div>
      </div>

      <div className="animate-fade-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
        <DocScanVisual />
      </div>
    </section>
  );
}
