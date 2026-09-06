import Doodle from "../ui/Doodle.jsx"
import FeatureList from "../ui/FeatureList.jsx"
import Figure from "../ui/Figure.jsx"
import SectionHeading from "../ui/SectionHeading.jsx"

const ITEMS = [
  "Choose fully online or offline",
  "Plan an entire year of learning with one click",
  "Bite-sized multimedia content",
  "Daily comprehension practice and testing",
  "Mix-and-match subjects and grades",
]

export default function SolutionSection() {
  return (
    <section className="relative overflow-hidden rounded-t-[64px] bg-cream py-20">
      <Doodle name="bolt" className="absolute right-10 top-12 h-16 text-ink" />

      <div className="container-1200 flex flex-col items-center gap-14">
        <SectionHeading title="Your Complete All-In-One Solution" />

        <div className="grid w-full items-center gap-12 md:grid-cols-[1.1fr_1fr]">
          <Figure
            src="/images/solution-video.png"
            alt="Lesson 1 — The Sun and Air, opened in the Schoolio lesson viewer"
            className="w-full"
          />
          <FeatureList
            items={ITEMS}
            variant="underline"
            className="max-w-[460px]"
          />
        </div>
      </div>
    </section>
  )
}
