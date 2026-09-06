import FeatureList from "../ui/FeatureList.jsx"
import SectionHeading from "../ui/SectionHeading.jsx"

const ITEMS = [
  "Access thousands of lessons across core subjects: Math, Language, Science, and Social Studies",
  "Flexible scheduling and curriculum based on your learner's progress and understanding level",
  "Increase engagement with interest-based electives and live classes",
  "Gap assessment that continuously helps you improve content delivery",
]

function GraphDoodle({ className = "" }) {
  return (
    <svg viewBox="0 0 60 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 30l14-14 10 10L52 4"
        stroke="#d97139"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="4" cy="30" r="3" fill="#d97139" />
      <circle cx="52" cy="4" r="3" fill="#d97139" />
    </svg>
  )
}

export default function LibrarySection() {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      <div className="container-1200 flex flex-col items-center gap-14">
        <SectionHeading title="A Library That Grows With Your Learner" />

        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          <FeatureList
            items={ITEMS}
            variant="purple"
            className="mx-auto max-w-[440px]"
          />
          <img
            src="/images/library-dashboard.jpg"
            alt="Lesson library — course cards by grade and subject with progress and current lesson"
            loading="lazy"
            className="mx-auto w-full max-w-[620px] rounded-2xl shadow-[0_16px_40px_-12px_rgba(0,0,0,0.2)]"
          />
        </div>

        <GraphDoodle className="h-8 w-14" />
      </div>
    </section>
  )
}
