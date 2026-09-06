import FeatureList from "../ui/FeatureList.jsx"
import Figure from "../ui/Figure.jsx"
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
    <section className="bg-white py-20">
      <div className="container-1200 flex flex-col items-center gap-12">
        <SectionHeading
          title="Have a Unique Needs Learner?"
          className="max-w-[640px]"
        />
        <p className="-mt-8 max-w-[560px] text-center text-body text-ink-soft">
          Experience the #1 best program for neurodivergent students! Designed
          with uniqueness in mind!
        </p>

        <div className="grid w-full items-center gap-12 md:grid-cols-2">
          <FeatureList items={ITEMS} variant="underline" className="max-w-[440px]" />
          <Figure
            src=""
            alt="Child reaching up during a hands-on lesson"
            className="aspect-[4/3] w-full"
          />
        </div>
      </div>
    </section>
  )
}
