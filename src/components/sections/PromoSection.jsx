import Button from "../ui/Button.jsx"

const BENEFITS = [
  "Truly secular, inclusive, and diversity driven",
  "Easy to use, easy to teach",
  "All core subjects from one place, in uniform format",
  "Customizable to your unique learners' needs",
  "Wide range of topics to choose from",
]

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-1 size-4 shrink-0" aria-hidden="true">
      <path
        d="M3 11l5 5L17 4"
        fill="none"
        stroke="#f5c518"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function PromoSection() {
  return (
    <section className="bg-white py-16">
      <div className="container-1200">
        <div className="relative">
          {/* hand-drawn dashes, bottom-left outside the card */}
          <svg
            viewBox="0 0 60 40"
            className="absolute -bottom-3 left-2 h-8 w-12 text-brand-orange/70"
            aria-hidden="true"
          >
            <path
              d="M4 6h16M6 18l14-8M10 30l12-12"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative overflow-hidden rounded-[32px] bg-[radial-gradient(90%_120%_at_45%_115%,rgba(214,140,190,0.45)_0%,rgba(214,140,190,0)_55%),linear-gradient(110deg,#573a94_0%,#6044a6_38%,#5566c6_100%)] px-8 py-12 sm:px-14 sm:py-14">
            <div className="grid items-center gap-6 md:grid-cols-[1.35fr_1fr]">
              <div className="flex flex-col gap-6">
                <h2 className="text-h4 font-black text-white sm:text-h2">
                  Unlimited 7-day free trial
                </h2>

                <ul className="flex flex-col gap-2">
                  {BENEFITS.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-white">
                      <Check />
                      <span className="text-body">{b}</span>
                    </li>
                  ))}
                </ul>

                <Button as="a" href="#" className="self-start">
                  Get Started
                </Button>
              </div>

              <img
                src="/images/promo-fire.jpg"
                alt="Flame illustration"
                loading="lazy"
                className="pointer-events-none mx-auto -my-6 w-full max-w-[320px] [mask-image:radial-gradient(closest-side_at_58%_52%,#000_60%,transparent_92%)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
