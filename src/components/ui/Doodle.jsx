const shapes = {
  squiggle: (
    <path
      d="M4 4c6 3 6 9 0 12s-6 9 0 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  ),
  wave: (
    <path
      d="M2 10c5-8 11 8 16 0s11 8 16 0"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  ),
  bolt: (
    <path
      d="M14 2 4 15h7l-2 11 12-14h-8l3-10Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  ),
  sparkle: (
    <path
      d="M12 1c1 6 4 9 10 10-6 1-9 4-10 10-1-6-4-9-10-10 6-1 9-4 10-10Z"
      fill="currentColor"
    />
  ),
  burst: (
    <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M14 1v9M14 18v9M1 14h9M18 14h9M5 5l6 6M17 17l6 6M23 5l-6 6M5 23l6-6" />
    </g>
  ),
}

const box = {
  squiggle: "0 0 20 32",
  wave: "0 0 36 20",
  bolt: "0 0 28 28",
  sparkle: "0 0 24 24",
  burst: "0 0 28 28",
}

/*
  Decorative doodle. Purely visual — hidden from assistive tech.
  name: "squiggle" | "wave" | "bolt" | "sparkle" | "burst"
*/
export default function Doodle({ name = "squiggle", className = "" }) {
  return (
    <svg
      viewBox={box[name]}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {shapes[name]}
    </svg>
  )
}
