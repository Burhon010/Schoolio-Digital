import FeatureList from "../ui/FeatureList.jsx"
import SectionHeading from "../ui/SectionHeading.jsx"

const ITEMS = [
  "Bite-sized learning sessions for maximum engagement and attention",
  "Audio, video, and printable available",
  "Activity variety",
  "Mix-and-match grade levels",
  "Choose digital or handwritten practice",
  "Custom scheduling",
]

export default function UniqueNeedsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-1200 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionHeading title="Have a Unique Needs Learner?" />
          <p className="max-w-[560px] text-body text-ink-soft">
            Experience the #1 best program for neurodivergent students! Designed
            with uniqueness in mind!
          </p>
        </div>

        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          <FeatureList
            items={ITEMS}
            variant="blue"
            className="mx-auto max-w-[440px]"
          />
          <img
            src="/images/uniqueneeds-child.jpg"
            alt="A child reaching up excitedly during a one-on-one lesson"
            loading="lazy"
            className="mx-auto w-full max-w-[540px]"
          />
        </div>
      </div>
    </section>
  )
}
