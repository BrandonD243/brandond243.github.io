import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-shell scroll-mt-20 border-t hairline py-20 sm:py-24">
      <SectionHeading
        eyebrow="// about"
        title="Who Am I?"
        description=""
      />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "#4B4B4B" }}>
          <p>
            Hello! I'm a computer scientist based in New York City with a focus in 
            data, machine learning, and AI ethics.
          </p>
          <p>
            Logic and emotion has been one of the most prominent themes in my life.
            When choosing what to do with my career, I was split between the arts and technology,
            both which I've loved since I was little. Now, I'm currently living a life in between
            performance artistry and engineering. 
          </p>
          <p>
            It currently shows up the most in my career the more I'm building and working with 
            automated systems. One of my favorite things about building AI is how unpredictable 
            it is when it comes to it's current outputs and it's implications for the future.
            Where we started is nowhere near where we are now, and the technology only keeps
            getting smarter. Being a contributer to these technological developments is like 
            raising a small child and watching it evolve in real-time. The unpredictability
            and power of these systems are growing beyond our human capabilities, and yet they
            somehow circle back to being human just like us.
          </p>
          <p>
            I use my background to help people of all industries, but where I find it most interesting
            is when I use it to help the pillars of our communities. Healthcare professionals, teachers, 
            and small business owners are only a few examples of people who keep our world spinning.
            I want to come up with solutions that can help maximize their potential and enhance their
            impact on the people they serve.
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
