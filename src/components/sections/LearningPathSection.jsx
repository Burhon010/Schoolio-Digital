import Doodle from "../ui/Doodle.jsx"
import FeatureList from "../ui/FeatureList.jsx"
import Figure from "../ui/Figure.jsx"
import SectionHeading from "../ui/SectionHeading.jsx"

const ITEMS = [
  "Perfect for ESL and IEP learners",
  "Assign individualized catch up and enrichment lessons",
  "Match curriculum based on interest and proficiency",
  "Create custom lessons from scratch unique to your learner",
]

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden="true">
      <path
        d="M12 20s-7-4.35-9.5-8.5C.8 8.6 2.3 5 5.8 5c2 0 3.4 1.1 4.2 2.3C10.8 6.1 12.2 5 14.2 5c3.5 0 5 3.6 3.3 6.5C19 15.65 12 20 12 20Z"
        stroke="var(--color-brand-blue)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function LearningPathSection() {
  return (
    <section className="bg-white py-16">
      <div className="container-1200">
        <div className="relative overflow-hidden rounded-[48px] bg-sky-soft px-6 py-16 sm:px-14">
          <Doodle
            name="burst"
            className="absolute right-8 top-1/2 h-12 text-brand-orange"
          />
          <Doodle
            name="wave"
            className="absolute left-6 top-24 h-6 w-20 text-brand-orange"
          />
          <div className="flex flex-col items-center gap-12">
            <SectionHeading
              eyebrow="Every child is unique, give them a truly..."
              title="Individualized Learning Path"
              icon={<HeartIcon />}
            />

            <div className="grid w-full items-center gap-12 md:grid-cols-2">
              <Figure
                src=""
                alt="Learner portraits connected to subjects: Biology, Writing, Art, Music, Poetry, Physics, Fraction"
                className="aspect-[4/3] w-full"
              />
              <FeatureList items={ITEMS} variant="underline" className="max-w-[420px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
