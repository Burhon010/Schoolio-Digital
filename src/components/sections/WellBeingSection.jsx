import FeatureList from "../ui/FeatureList.jsx"
import SectionHeading from "../ui/SectionHeading.jsx"

const ITEMS = [
  "Insights into how your learner is feeling everyday with Schoolio's Vibe Check",
  "Track grades, assignments, and completion across all subjects",
  "Manage multiple learners and view progress at a glance from your dashboard",
  "Get personalized AI-driven content and lesson scheduling recommendations",
]

function Trophy({ className = "" }) {
  return (
    <svg viewBox="0 0 70 74" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 8h30v20a15 15 0 0 1-30 0V8ZM20 14H9c0 10 5 15 12 16M50 14h11c0 10-5 15-12 16M31 43h8M28 55h14l3 11H25l3-11Z"
        stroke="#d97139"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function WellBeingSection() {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      <Trophy className="absolute right-[8%] top-16 h-20 max-sm:hidden" />

      <div className="container-1200 flex flex-col items-center gap-14">
        <SectionHeading title="Where Academics And Well-Being Meet" />

        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          <FeatureList
            items={ITEMS}
            variant="purple"
            className="mx-auto max-w-[440px]"
          />

          <div className="relative mx-auto w-full max-w-[560px]">
            <img
              src="/images/wellbeing-dashboard.jpg"
              alt="Dashboard analytics — per-student scores across Science, Math, Social Studies and Language"
              loading="lazy"
              className="w-full rounded-2xl shadow-[0_16px_40px_-12px_rgba(0,0,0,0.2)]"
            />
            <img
              src="/images/wellbeing-mood.png"
              alt="How do you feel today? — a mood check with ten emoji options"
              loading="lazy"
              className="absolute -bottom-8 -right-4 w-[52%] max-w-[280px] drop-shadow-2xl max-sm:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
