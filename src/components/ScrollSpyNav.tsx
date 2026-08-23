import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function ScrollSpyNav() {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="flex flex-col items-end gap-3.5">
        {sections.map((section) => {
          const isActive = section.id === activeId;
          return (
            <li key={section.id} className="group flex items-center gap-3">
              <span
                className={`font-mono text-[11px] uppercase tracking-wide transition-all duration-200 ${
                  isActive
                    ? "translate-x-0 text-[#638919] opacity-100"
                    : "translate-x-2 text-[#4B4B4B] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                }`}
              >
                {section.label}
              </span>
              <a
                href={`#${section.id}`}
                onClick={goTo(section.id)}
                aria-label={`Go to ${section.label}`}
                aria-current={isActive ? "true" : undefined}
                className="flex h-4 w-4 items-center justify-center"
              >
                <span
                  className={`block rounded-full border-2 transition-all duration-200 ${
                    isActive
                      ? "h-2.5 w-2.5 border-[#638919] bg-[#638919]"
                      : "h-2 w-2 border-[#4B4B4B]/50 bg-transparent group-hover:border-[#638919]"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
