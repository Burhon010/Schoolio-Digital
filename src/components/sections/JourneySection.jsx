import Doodle from "../ui/Doodle.jsx"
import FeatureList from "../ui/FeatureList.jsx"
import Figure from "../ui/Figure.jsx"
import SectionHeading from "../ui/SectionHeading.jsx"

const ITEMS = [
  "Increase confidence in learners",
  "Spark curiosity and find unique passions",
  "Fit for your learners' needs and interests",
  "Comprehensive, up-to-date curriculum",
]

function CapDoodle({ className = "" }) {
  return (
    <svg viewBox="0 0 90 70" fill="none" className={className} aria-hidden="true">
      <path d="M45 8 8 22l37 14 37-14-37-14Z" stroke="#d97139" strokeWidth="3" strokeLinejoin="round" />
      <path d="M70 30v14c0 6-11 11-25 11S20 50 20 44V30" stroke="#d97139" strokeWidth="3" strokeLinecap="round" />
      <path d="M82 22v18c0 5 3 8 3 13s-4 6-4 6" stroke="#d97139" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export default function JourneySection() {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      <div className="pointer-events-none absolute right-[12%] top-10 flex items-start gap-3">
        <Doodle name="sparkle" className="h-7 text-brand-purple" />
        <Doodle name="sparkle" className="mt-4 h-4 text-brand-orange" />
      </div>

      <div className="container-1200 flex flex-col items-center gap-14">
        <SectionHeading title="Enrich Your Child's Education Journey" />

        <div className="grid w-full items-center gap-10 md:grid-cols-[1fr_minmax(auto,440px)_1fr]">
          <Figure
            src="/images/journey-girl.png"
            alt="Girl sitting cross-legged with a laptop"
            className="mx-auto w-full max-w-[340px]"
          />

          <FeatureList items={ITEMS} className="mx-auto w-full max-w-[440px]" />

          <div className="relative mx-auto w-full max-w-[320px]">
            <CapDoodle className="absolute -top-4 right-6 z-10 h-16 w-20 max-sm:hidden" />
            <Figure
              src="/images/journey-boy.png"
              alt="Boy standing with a laptop and a graduation cap"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
