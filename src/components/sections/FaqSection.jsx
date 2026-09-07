import { useState } from "react"
import SectionHeading from "../ui/SectionHeading.jsx"

/*
  Only "Signing Up & Usage" is expanded in the Figma frame, so it is the one
  category whose questions are specified. The remaining categories — and the
  answers marked with an empty string — are still waiting on copy; they render
  as collapsed rows until that copy arrives.
*/
const CATEGORIES = [
  { title: "Pricing, Discounts, and Refunds", questions: [] },
  {
    title: "Signing Up & Usage",
    questions: [
      { q: "Which educator account should I sign up for?", a: "" },
      {
        q: "How will I find out about new features?",
        a: "You will be notified via email or as a notification in the platform anytime there are new updates coming. We strive to have new releases disrupt current users as little as possible, and will provide as much notice and detail in advance as we are able to.",
      },
      { q: "Why do some lessons not have videos?", a: "" },
      {
        q: "What are the system requirements for the Schoolio Digital Platform?",
        a: "",
      },
    ],
  },
  { title: "Grading & Scheduling", questions: [] },
  { title: "Schoolio Program Information", questions: [] },
  { title: "Data Usage", questions: [] },
]

function Chevron({ open, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      } ${className}`}
    >
      <path
        d="M6 9.5 12 15.5 18 9.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function FaqSection() {
  const [openCategory, setOpenCategory] = useState("Signing Up & Usage")
  const [openQuestion, setOpenQuestion] = useState(
    "How will I find out about new features?",
  )

  return (
    <section className="bg-white py-16">
      <div className="relative overflow-hidden rounded-[48px] bg-sky-soft px-6 py-16 sm:py-20">
        {/* hatch marks left, curl right — decorative only */}
        <svg
          viewBox="0 0 60 40"
          className="absolute left-[4%] top-[42%] hidden h-10 w-16 text-brand-blue/70 lg:block"
          aria-hidden="true"
        >
          <path
            d="M2 30 22 10M12 32 32 12M22 34 42 14M32 36 52 16"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
        <svg
          viewBox="0 0 40 90"
          className="absolute right-[5%] top-[24%] hidden h-28 w-12 text-brand-orange/80 lg:block"
          aria-hidden="true"
        >
          <path
            d="M20 2C6 14 4 34 16 44s14 26 2 42"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        <div className="container-1200 relative flex flex-col items-center gap-12">
          <SectionHeading title="FAQ" />

          <ul className="flex w-full max-w-[880px] flex-col gap-4">
            {CATEGORIES.map((category) => {
              const expandable = category.questions.length > 0
              const open = expandable && openCategory === category.title

              return (
                <li
                  key={category.title}
                  className="overflow-hidden rounded-2xl bg-white shadow-[0_6px_18px_-10px_rgba(31,41,55,0.35)]"
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() =>
                      expandable &&
                      setOpenCategory(open ? null : category.title)
                    }
                    className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left transition-colors duration-150 hover:bg-cream"
                  >
                    <span className="text-h5 text-ink">{category.title}</span>
                    <Chevron open={open} className="size-6 text-ink-soft" />
                  </button>

                  {open && (
                    <ul className="flex flex-col px-7 pb-2">
                      {category.questions.map((item) => {
                        const answerOpen = openQuestion === item.q

                        return (
                          <li key={item.q} className="border-t border-ink/10">
                            <button
                              type="button"
                              aria-expanded={answerOpen}
                              onClick={() =>
                                setOpenQuestion(answerOpen ? null : item.q)
                              }
                              className="flex w-full items-center justify-between gap-4 py-4 text-left"
                            >
                              <span className="text-body text-ink">{item.q}</span>
                              <Chevron
                                open={answerOpen}
                                className="size-5 text-ink-soft"
                              />
                            </button>

                            {answerOpen && item.a && (
                              <p className="pb-5 text-body text-ink-soft">
                                {item.a}
                              </p>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
