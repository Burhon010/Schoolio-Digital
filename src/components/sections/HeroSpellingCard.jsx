const PLANETS = [
  "left-3 top-5 size-9 bg-[radial-gradient(circle_at_35%_30%,#f0a86a,#b5502c)]",
  "-left-2 bottom-5 size-11 bg-[radial-gradient(circle_at_35%_30%,#a982e0,#5b3a9e)]",
  "-right-3 top-1/3 size-12 bg-[radial-gradient(circle_at_35%_30%,#e78fae,#b04b78)]",
  "right-5 -bottom-3 size-11 bg-[radial-gradient(circle_at_35%_30%,#7aa7e6,#3a5db0)]",
]

/*
  CSS recreation of the "Spelling Practice - Trace and Spell" activity card
  from the hero mock. Decorative — the dotted word is not a real input.
*/
export default function HeroSpellingCard({ className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-[radial-gradient(circle_at_50%_0%,#1b2350,#0a0c1f)] px-5 py-4 text-white shadow-2xl ${className}`}
      role="img"
      aria-label="Spelling Practice — Trace and Spell activity"
    >
      <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(1px_1px_at_20%_30%,#fff,transparent),radial-gradient(1px_1px_at_70%_60%,#fff,transparent),radial-gradient(1px_1px_at_45%_85%,#fff,transparent),radial-gradient(1px_1px_at_85%_20%,#fff,transparent)]" />

      {PLANETS.map((p, i) => (
        <span key={i} aria-hidden="true" className={`pointer-events-none absolute rounded-full shadow-lg ${p}`} />
      ))}

      <div className="relative flex flex-col items-center gap-1.5 text-center">
        <h3 className="text-[13px] font-bold text-brand-blue">
          Spelling Practice - Trace and Spell
        </h3>
        <p className="max-w-[85%] text-[11px] leading-snug text-white/85">
          Trace the word by using your finger or the mouse to grab the green
          circle and trace each letter.
        </p>

        <p
          className="my-2 flex items-center gap-2 text-4xl font-black tracking-[0.12em] text-white/90"
          style={{
            color: "transparent",
            WebkitTextStroke: "2px rgba(255,255,255,0.9)",
          }}
          aria-hidden="true"
        >
          <span className="inline-block size-2.5 rounded-full bg-lime" />
          start
        </p>

        <div className="flex w-full items-center justify-center gap-2 text-[11px]">
          <span className="whitespace-nowrap">Type the spelling word here →</span>
          <span className="min-w-0 flex-1 truncate rounded bg-white px-2 py-1 text-left text-ink-soft">
            type your text here
          </span>
        </div>

        <button
          type="button"
          className="mt-2 rounded-full bg-[linear-gradient(#f06aa6,#d83b83)] px-6 py-1.5 text-[11px] font-bold tracking-wide shadow-[0_4px_0_#a72d66]"
        >
          SUBMIT
        </button>
      </div>
    </div>
  )
}
