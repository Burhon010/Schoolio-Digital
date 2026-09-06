import Header from "../components/layout/Header.jsx"
import HeroSection from "../components/sections/HeroSection.jsx"
import JourneySection from "../components/sections/JourneySection.jsx"
import SolutionSection from "../components/sections/SolutionSection.jsx"
import PromoSection from "../components/sections/PromoSection.jsx"
import WellBeingSection from "../components/sections/WellBeingSection.jsx"
import LearningPathSection from "../components/sections/LearningPathSection.jsx"
import LibrarySection from "../components/sections/LibrarySection.jsx"
import UniqueNeedsSection from "../components/sections/UniqueNeedsSection.jsx"

/*
  Sections below are Burhoniddin's part. Teammates' sections (e.g. Features,
  Contact, Footer) slot into this list in page order — keep the order matching
  the Figma layout.
*/
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <JourneySection />
        <SolutionSection />
        <PromoSection />
        <WellBeingSection />
        <LearningPathSection />
        <LibrarySection />
        <UniqueNeedsSection />
        {/* teammate sections continue here */}
      </main>
      {/* <Footer /> — teammate */}
    </>
  )
}
