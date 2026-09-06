function CheckIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 10.5 8 14.5 16 5.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/*
  items: string[]
  variant: bold ink text above a coloured rule —
    "accent" (lime, default) | "underline" (orange) | "purple" | "blue"
    "check" — check icon + text on a light rule, for dark backgrounds
*/
export default function FeatureList({
  items,
  variant = "accent",
  className = "",
}) {
  const dark = variant === "check"

  const textClass = dark ? "text-white" : "font-bold text-ink"

  const ruleClass = {
    accent: "h-0.5 bg-lime",
    underline: "h-px bg-brand-orange/50",
    purple: "h-px bg-brand-purple/40",
    blue: "h-px bg-brand-blue/45",
    check: "h-px bg-white/30",
  }[variant]

  const rowSpacing = variant === "check" ? "gap-3 py-3" : "gap-4 py-4"

  return (
    <ul className={`flex flex-col ${className}`}>
      {items.map((item, i) => (
        <li key={i} className={`flex flex-col ${rowSpacing}`}>
          <div className={`flex items-start gap-3 ${textClass}`}>
            {dark && (
              <CheckIcon className="mt-0.5 size-5 shrink-0 text-brand-yellow" />
            )}
            <span className="text-body">{item}</span>
          </div>
          <span aria-hidden="true" className={`block w-full ${ruleClass}`} />
        </li>
      ))}
    </ul>
  )
}
