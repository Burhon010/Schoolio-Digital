import FeatureList from "../ui/FeatureList.jsx"
import SectionHeading from "../ui/SectionHeading.jsx"

const ITEMS = [
  "Perfect for ESL and IEP learners",
  "Assign individualized catch up and enrichment lessons",
  "Match curriculum based on interest and proficiency",
  "Create custom lessons from scratch unique to your learner",
]

export default function LearningPathSection() {
  return (
    <section className="bg-white py-16">
      <div className="container-1200">
        <div className="rounded-[48px] bg-sky-soft px-6 py-14 sm:px-14">
          <div className="flex flex-col items-center gap-12">
            <SectionHeading
              eyebrow="Every child is unique, give them a truly..."
              title="Individualized Learning Path"
            />

            <div className="grid w-full items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
              <img
                src="/images/learningpath-web.png"
                alt="Learner portraits linked by paths to subjects: Biology, Poetry, Writing, Music, Fraction, Art, Physics"
                loading="lazy"
                className="mx-auto w-full max-w-[560px]"
              />
              <FeatureList
                items={ITEMS}
                variant="blue"
                className="mx-auto max-w-[420px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
