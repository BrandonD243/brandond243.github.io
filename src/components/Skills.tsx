import { skillGroups } from "../data/skills";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section-shell scroll-mt-20 border-t hairline py-20 sm:py-24">
      <SectionHeading eyebrow="// skills" title="Tools & technologies" />

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[4px] border hairline sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.category} className="bg-paper-raised p-6 dark:bg-[#4B3621]">
            <h3 className="font-mono text-[11px] uppercase tracking-wide text-[#F5F6F3]/70">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
