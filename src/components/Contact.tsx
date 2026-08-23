import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { links } from "../data/links";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", company: "", message: "" });

  const handleChange =
    (field: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // No backend by design. This opens a pre-filled email as a lightweight,
    // dependency-free way to receive messages. Swap in a form service
    // (e.g. Formspree, Resend) here if you want in-app submission later.
    const subject = encodeURIComponent(`Portfolio contact from ${values.name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nCompany: ${values.company}\n\n${values.message}`
    );
    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-shell scroll-mt-20 border-t hairline py-20 sm:py-24">
      <SectionHeading
        eyebrow="// contact"
        title="Get in touch"
        description="Open to entry-level and early-career roles in AI, machine learning, and software engineering. The form below opens a pre-filled email — nothing is stored or sent to a server."
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.7fr]">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Name" id="name" required value={values.name} onChange={handleChange("name")} />
            <Field
              label="Email"
              id="email"
              type="email"
              required
              value={values.email}
              onChange={handleChange("email")}
            />
          </div>
          <Field
            label="Company (optional)"
            id="company"
            value={values.company}
            onChange={handleChange("company")}
          />
          <div>
            <label htmlFor="message" className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-slate-light dark:text-slate-dark">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={values.message}
              onChange={handleChange("message")}
              className="w-full rounded-[3px] border hairline bg-paper-raised px-4 py-3 text-sm outline-none transition-colors focus:border-teal-600 dark:bg-ink-raised dark:focus:border-teal-400"
            />
          </div>
          <button type="submit" className="btn bg-[#638919] text-white hover:bg-[#4B3621]">
            Send Message <Send size={15} />
          </button>
        </form>

        <div className="card h-fit space-y-4 p-6">
          <a
            href={`mailto:${links.email}`}
            className="flex items-center gap-3 text-sm hover:text-teal-700 dark:hover:text-teal-400"
          >
            <Mail size={16} /> {links.email}
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-sm hover:text-teal-700 dark:hover:text-teal-400"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-sm hover:text-teal-700 dark:hover:text-teal-400"
          >
            <Github size={16} /> GitHub
          </a>
          <p className="pt-2 font-mono text-[11px] text-slate-light dark:text-slate-dark">
            {links.location}
          </p>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  required = false,
  value,
  onChange,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-slate-light dark:text-slate-dark">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-[3px] border hairline bg-paper-raised px-4 py-3 text-sm outline-none transition-colors focus:border-teal-600 dark:bg-ink-raised dark:focus:border-teal-400"
      />
    </div>
  );
}
