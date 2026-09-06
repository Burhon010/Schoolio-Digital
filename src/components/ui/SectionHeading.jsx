/*
  eyebrow  - small italic orange label above the title (optional)
  title    - the section heading text
  align    - "center" (default) | "left"
  icon     - optional node rendered next to the title (e.g. a heart)
*/
export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
  icon,
  className = "",
}) {
  return (
    <div
      className={
        (align === "center" ? "text-center items-center" : "text-left items-start") +
        ` flex flex-col gap-2 ${className}`
      }
    >
      {eyebrow && (
        <p className="text-body italic text-brand-orange">{eyebrow}</p>
      )}
      <h2 className="flex items-center gap-3 text-h2 text-ink">
        {title}
        {icon}
      </h2>
    </div>
  )
}
