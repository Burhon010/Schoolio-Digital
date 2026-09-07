import SectionHeading from "../ui/SectionHeading.jsx"
import homeschooling from "../../assets/images/suxrat's-imgs/first.png"
import supplementary from "../../assets/images/suxrat's-imgs/second.png"
import tutors from "../../assets/images/suxrat's-imgs/third.png"
import teachers from "../../assets/images/suxrat's-imgs/fourth.png"
import institutions from "../../assets/images/suxrat's-imgs/fifth.png"

/*
  One accent colour per audience: the label, the rules under each bullet and
  the button all share it. Kept local (plain hex) so the shared theme in
  index.css stays untouched.
*/
const AUDIENCES = [
  {
    label: "Homeschooling",
    accent: "#6B2D9B",
    shadow: "#421A61",
    image: homeschooling,
    alt: "A mother and her daughter hugging and smiling",
    imageSide: "left",
    cta: "Get Started as a Homeschooler",
    items: [
      "All of your secular curriculum needs in one place, choose online or offline",
      "365 days a year 1:1 homeschooling support",
      "Fully customizable lesson planning to your needs",
      "Organize an entire year of learning with one click",
    ],
  },
  {
    label: "Supplementary",
    accent: "#A31D1D",
    shadow: "#661111",
    image: supplementary,
    alt: "Children working through printed worksheets at a classroom table",
    imageSide: "right",
    cta: "Get Started as a Supplementary",
    items: [
      "Catch up on any subject and grade in one place",
      "Learn on the go, whether you are traveling or sick",
      "Check your child's understanding with quizzes and gap assessments",
      "Go above and beyond with a library of interest-based electives",
    ],
  },
  {
    label: "Tutors",
    accent: "#D97139",
    shadow: "#843E19",
    image: tutors,
    alt: "A smiling tutor in a blue shirt",
    imageSide: "left",
    cta: "Get Started as a Tutor",
    items: [
      "The one-stop-shop platform for tutoring needs",
      "Assessments and progress tracking",
      "Continued learning between tutoring sessions",
      "Boost parent happiness with clear progress updates and helpful resources for learning at home",
    ],
  },
  {
    label: "Teachers",
    accent: "#62A82A",
    shadow: "#3C6A15",
    image: teachers,
    alt: "A teacher with a headset presenting an online lesson from a tablet",
    imageSide: "right",
    cta: "Get Started as a Teacher",
    items: [
      "Tailored and differentiated learning per student",
      "Assessments and progress tracking",
      "Perfect for IEP and ESL students",
      "Increase parent satisfaction with progress transparency and at-home resources",
    ],
  },
  {
    label: "Institutions",
    accent: "#3D7EBF",
    shadow: "#255479",
    image: institutions,
    alt: "Students walking in front of a modern school building",
    imageSide: "left",
    cta: "Get Started as a Institution",
    items: [
      "Unlock school wide SEL and academic analytics by grade, subject, and class",
      "Supporting teachers with access to supplementary interest-based curriculum",
      "Help students catch up or get ahead with tailored and differentiated lesson plans",
      "Reach more students where they are by combining offline and online learning",
    ],
  },
]

/* Sun doodle that sits next to the Institutions button in Figma. */
function SunDoodle({ className = "" }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="9" stroke="currentColor" strokeWidth="3" />
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <path d="M28 4v7M28 45v7M4 28h7M45 28h7M11 11l5 5M40 40l5 5M45 11l-5 5M16 40l-5 5" />
      </g>
    </svg>
  )
}

function AudienceBlock({ audience }) {
  const { label, accent, shadow, image, alt, imageSide, cta, items } = audience
  const imageFirst = imageSide === "left"

  return (
    <div className="flex flex-col items-center gap-8">
      <p className="text-h5 italic" style={{ color: accent }}>
        {label}
      </p>

      <div className="grid w-full items-center gap-10 lg:grid-cols-2">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className={`mx-auto w-full max-w-[560px] rounded-3xl ${
            imageFirst ? "lg:order-1" : "lg:order-2"
          }`}
        />

        <div
          className={`mx-auto flex w-full max-w-[560px] flex-col ${
            imageFirst ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <ul className="flex flex-col">
            {items.map((item) => (
              <li key={item} className="flex flex-col gap-3 pt-5">
                <span className="text-body text-ink">{item}</span>
                <span
                  aria-hidden="true"
                  className="block h-px w-full"
                  style={{ backgroundColor: accent }}
                />
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#"
              style={{ "--accent": accent, "--accent-shadow": shadow }}
              className={
                "inline-flex items-center justify-center rounded-2xl bg-[var(--accent)] " +
                "px-8 py-4 text-center text-h4 text-white transition-all duration-150 " +
                "shadow-[6px_6px_0_0_var(--accent-shadow)] " +
                "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_0_var(--accent-shadow)] " +
                "active:translate-x-[6px] active:translate-y-[6px] active:shadow-none " +
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-shadow)]"
              }
            >
              {cta}
            </a>

            {label === "Institutions" && (
              <SunDoodle className="hidden h-12 w-12 shrink-0 text-brand-yellow sm:block" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PerfectForSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-1200 flex flex-col gap-16 sm:gap-20">
        <SectionHeading title="Perfect for" />

        {AUDIENCES.map((audience) => (
          <AudienceBlock key={audience.label} audience={audience} />
        ))}
      </div>
    </section>
  )
}
