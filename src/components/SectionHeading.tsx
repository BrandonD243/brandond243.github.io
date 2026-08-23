export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-[60ch]">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2
        className="text-2xl sm:text-3xl"
        style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400, color: "#638919" }}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "#4B4B4B" }}>
          {description}
        </p>
      )}
    </div>
  );
}
