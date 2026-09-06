import Doodle from "../ui/Doodle.jsx"
import FeatureList from "../ui/FeatureList.jsx"
import Figure from "../ui/Figure.jsx"
import SectionHeading from "../ui/SectionHeading.jsx"

const ITEMS = [
  "Access thousands of lessons across core subjects: Math, Language, Science, and Social Studies",
  "Flexible scheduling and curriculum based on your learner's progress and understanding level",
  "Increase engagement with interest-based electives and live classes",
  "Gap assessment that continuously helps you improve content delivery",
]

export default function LibrarySection() {
  return (
    <section className="relative bg-white py-20">
      <Doodle
        name="wave"
        className="absolute right-1/4 top-10 h-8 w-24 text-brand-orange"
      />
      <div className="container-1200 flex flex-col items-center gap-12">
        <SectionHeading title="A Library That Grows With Your Learner" />

        <div className="grid w-full items-center gap-12 md:grid-cols-2">
          <FeatureList items={ITEMS} variant="underline" className="max-w-[440px]" />
          <Figure
            src=""
            alt="Lesson library dashboard with grade and subject cards"
            className="aspect-[4/3] w-full"
          />
        </div>
      </div>
    </section>
  )
}
