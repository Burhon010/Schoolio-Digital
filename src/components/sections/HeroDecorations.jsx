const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

/*
  Line-art doodles scattered across the Hero panel background (from Figma).
  Decorative only — aria-hidden, non-interactive.
*/
export default function HeroDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* DNA helix — top left */}
      <svg viewBox="0 0 44 120" className="absolute left-[19%] top-10 hidden h-28 text-white/30 md:block">
        <path {...stroke} d="M8 4C40 22 4 42 36 60 4 78 40 98 8 116" />
        <path {...stroke} d="M36 4C4 22 40 42 8 60 40 78 4 98 36 116" />
        <path {...stroke} d="M12 16h20M9 32h26M9 48h26M12 64h20M12 84h20M9 100h26" />
      </svg>

      {/* microscope — left */}
      <svg viewBox="0 0 120 120" className="absolute -left-6 top-1/3 h-40 text-white/25 md:h-52">
        <path {...stroke} d="M52 96h44M60 96c-18-6-30-24-30-44M46 30l18 10-10 18-18-10a10 10 0 0 1 10-18ZM58 44l26 16M84 60c8 14 4 30-8 36" />
        <circle {...stroke} cx="40" cy="40" r="4" />
      </svg>

      {/* globe + magnifier — top right */}
      <svg viewBox="0 0 140 130" className="absolute right-[3%] top-4 hidden h-44 text-orange-200/45 lg:block">
        <circle {...stroke} cx="66" cy="52" r="40" />
        <path {...stroke} d="M26 52h80M66 12c20 16 20 64 0 80M66 12c-20 16-20 64 0 80M34 28c18 10 46 10 64 0M34 76c18-10 46-10 64 0" />
        <path {...stroke} d="M96 82l12 12M104 92l24 24" />
      </svg>

      {/* pencil — right */}
      <svg viewBox="0 0 40 120" className="absolute right-[8%] top-1/2 hidden h-40 text-orange-200/45 md:block">
        <path {...stroke} d="M8 8h24l-4 84-8 20-8-20-4-84ZM8 24h24M14 92h12" />
      </svg>

      {/* music note — center right */}
      <svg viewBox="0 0 50 50" className="absolute right-[28%] top-[38%] hidden h-9 text-orange-200/50 md:block">
        <path {...stroke} d="M18 38V10l22-6v28" />
        <circle {...stroke} cx="12" cy="38" r="7" />
        <circle {...stroke} cx="34" cy="32" r="7" />
      </svg>

      {/* triangle / set square — bottom left */}
      <svg viewBox="0 0 70 70" className="absolute left-[8%] top-[72%] hidden h-14 text-white/25 md:block">
        <path {...stroke} d="M10 12v46h46ZM10 44h20M22 58V38" />
      </svg>
    </div>
  )
}
