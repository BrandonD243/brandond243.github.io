import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-shell scroll-mt-20 border-t hairline py-20 sm:py-24">
      <SectionHeading
        eyebrow="// about"
        title="Who Am I?"
        description="A constantly evolving description of myself."
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "#4B4B4B" }}>
          <p>
            I'm a computer science graduate based in New York City with a focus on
            building AI systems that solve real operational problems — not just
            models that perform well in a notebook, but systems that hold up in
            production and make someone's actual workflow easier.
          </p>
          <p>
            Most of my hands-on experience comes from healthcare document
            intelligence: taking unstructured prior-authorization paperwork and
            turning it into structured, reviewable data that clinical and
            operations teams can act on quickly. That work sits at the
            intersection of machine learning, backend engineering, and plain
            practical problem-solving.
          </p>
          <p>
            I care about shipping things that work, understanding the business
            problem behind a feature request, and learning continuously — new
            tools, new techniques, and better ways to build reliable systems. I
            also enjoy collaborating closely with both technical and
            cross-functional teams, since the best version of a system usually
            comes from understanding how it's actually going to be used.
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border hairline sm:grid-cols-2">
          <AboutStat label="Based in" value="New York City" />
          <AboutStat label="Focus" value="Applied AI & ML Engineering" />
          <AboutStat label="Current role" value="ML & Data Engineer, Caldarium" />
          <AboutStat label="Education" value="B.S. Computer Science, Lehman College" />
        </dl>
      </div>
    </section>
  );
}

function AboutStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#4B3621] p-5">
      <dt className="font-mono text-[10px] uppercase tracking-wide text-[#F5F6F3]/70">{label}</dt>
      <dd className="mt-1.5 text-sm font-medium text-[#F5F6F3]">{value}</dd>
    </div>
  );
}
