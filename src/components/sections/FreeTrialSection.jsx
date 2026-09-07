import Button from "../ui/Button.jsx"
import fire from "../../assets/images/suxrat's-imgs/fire.png"

const BENEFITS = [
  "Unlimited students with independent accounts",
  "Unlimited courses, lessons, and videos",
  "Unlimited customization and scheduling",
  "Unlimited fun for everyone",
  "Unlimited learning that never stops",
]

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-1 size-4 shrink-0" aria-hidden="true">
      <path
        d="M3 11l5 5L17 4"
        fill="none"
        stroke="#ffcc00"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function FreeTrialSection() {
  return (
    <section className="bg-white py-16">
      <div className="container-1200">
        <div className="relative">
          {/* hand-drawn dashes, bottom-left outside the card */}
          <svg
            viewBox="0 0 60 40"
            className="absolute -bottom-4 -left-2 h-9 w-14 text-brand-orange/70"
            aria-hidden="true"
          >
            <path
              d="M4 8h16M6 20l14-8M10 32l12-12"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(115deg,#57379B_0%,#6248AC_38%,#6E76CF_78%,#7E88DA_100%)] px-8 py-12 sm:px-14 sm:py-14">
            <div className="grid items-center gap-8 md:grid-cols-[1.25fr_1fr]">
              <div className="flex flex-col gap-8">
                <h2 className="text-h4 font-black text-white sm:text-h2">
                  Unlimited 7-day free trial
                </h2>

                <ul className="flex flex-col gap-3">
                  {BENEFITS.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-white">
                      <Check />
                      <span className="text-body">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button as="a" href="#" className="self-start">
                  Get Started
                </Button>
              </div>

              <div className="relative">
                {/* yellow smoke wisps above the flame */}
                <svg
                  viewBox="0 0 40 30"
                  className="absolute -top-4 right-6 h-8 w-10 text-brand-yellow"
                  aria-hidden="true"
                >
                  <path
                    d="M8 26c6-6 0-12 4-22M20 26c6-6 0-12 4-22M32 26c6-6 0-12 4-22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>

                <img
                  src={fire}
                  alt="Flame illustration"
                  loading="lazy"
                  className="mx-auto w-full max-w-[440px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
