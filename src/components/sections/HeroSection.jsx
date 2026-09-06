import Button from "../ui/Button.jsx"
import Figure from "../ui/Figure.jsx"
import HeroDecorations from "./HeroDecorations.jsx"
import HeroSpellingCard from "./HeroSpellingCard.jsx"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-40">
      <div className="absolute inset-x-0 top-0 h-[78%] overflow-hidden rounded-b-[64px] bg-[radial-gradient(55%_45%_at_82%_62%,rgba(247,197,143,0.55)_0%,rgba(247,197,143,0)_62%),linear-gradient(152deg,#5a3a8c_0%,#5b48a6_55%,#6f5cb2_100%)]">
        <HeroDecorations />
      </div>

      <div className="container-1200 relative">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-6 pt-16 text-center text-white sm:gap-8 sm:pt-28">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sub-h1">School Your Way with</p>
            <h1 className="text-h1">
              Schoolio Digital
              <sup className="ml-1 align-super text-[0.3em] text-brand-purple-soft">
                TM
              </sup>
            </h1>
          </div>
          <p className="text-sub-h1">
            Unleash a personalized, all-in-one,
            <br className="hidden sm:inline" /> grade 1-8 learning platform.
          </p>
          <Button as="a" href="#">
            Get Started
          </Button>
        </div>

        {/* dashboard collage */}
        <div className="relative mx-auto mt-14 max-w-[1000px] sm:mt-20">
          {/* mobile: just the main dashboard */}
          <Figure
            src="/images/hero-dashboard.jpg"
            alt="Schoolio lesson dashboard — Read and Represent Numbers to 1000"
            className="w-full rounded-2xl shadow-[0_16px_40px_-8px_rgba(0,0,0,0.4)] lg:hidden"
          />

          {/* lg+: overlapping cards like the mock */}
          <div className="relative hidden lg:block">
            <Figure
              src="/images/hero-dashboard.jpg"
              alt="Schoolio lesson dashboard — Read and Represent Numbers to 1000"
              className="z-10 mx-auto w-[84%] rounded-2xl shadow-[0_16px_40px_-8px_rgba(0,0,0,0.4)]"
            />
            <Figure
              src="/images/hero-video.jpg"
              alt="Today's Topic — Energy Sources lesson video"
              className="absolute left-0 top-[74%] z-20 w-[33%] -rotate-1 rounded-xl shadow-2xl"
            />
            <Figure
              src="/images/hero-calendar.jpg"
              alt="Ashley's Calendar — weekly lesson schedule"
              className="absolute left-[40%] top-[84%] z-30 w-[34%] -translate-x-1/2 rounded-xl shadow-2xl"
            />
            <div className="absolute right-0 top-[58%] z-20 w-[43%] rotate-2">
              <HeroSpellingCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
