import Doodle from "../ui/Doodle.jsx"
import notebook from "../../assets/images/suxrat's-imgs/notebook(schoolio).png"
import laptop from "../../assets/images/suxrat's-imgs/laptop(science).png"

const ITEMS = [
  "Print-and-go curriculum books",
  "Tablet-friendly annotatable lessons and worksheets",
  "Add your own videos and worksheets",
  "Switch up your learning, from the park bench to a long road trip, with you anywhere you go!",
]

/* Outlined beaker sitting to the right of the heading in Figma. */
function BeakerDoodle({ className = "" }) {
  return (
    <svg viewBox="0 0 48 52" fill="none" className={className} aria-hidden="true">
      <path
        d="M19 3h10M21 3v14L7 43a5 5 0 0 0 4.4 7.4h25.2A5 5 0 0 0 41 43L27 17V3"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function FlexibleStyleSection() {
  return (
    <section className="relative bg-white pb-14 pt-6">
      {/* green stem curving out of the top edge of the band */}
      <svg
        viewBox="0 0 20 60"
        className="absolute left-1/2 top-0 h-14 w-5 -translate-x-1/2 text-lime"
        aria-hidden="true"
      >
        <path
          d="M10 2c-6 14-6 30 0 56"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <div className="relative rounded-[48px] bg-[#EEF7D8] px-6 pt-16 sm:pt-20">
        <Doodle
          name="sparkle"
          className="absolute left-[8%] top-[14%] hidden h-10 w-10 text-brand-yellow sm:block"
        />
        <Doodle
          name="sparkle"
          className="absolute left-[13%] top-[9%] hidden h-5 w-5 text-brand-orange sm:block"
        />
        <BeakerDoodle className="absolute right-[8%] top-[16%] hidden h-14 w-12 text-lime lg:block" />

        <h2 className="text-center text-h2 text-ink">
          Flexible to Your Style:
          <br />
          Online, Offline, or Hybrid
        </h2>

        <div className="container-1200 mt-12 grid items-end gap-10 lg:grid-cols-[1fr_minmax(0,420px)_1fr]">
          <img
            src={notebook}
            alt="Printed Schoolio Mathematics workbook — Financial Literacy: Smart Consumerism"
            loading="lazy"
            className="order-2 mx-auto w-full max-w-[300px] lg:order-1 lg:-mb-12"
          />

          <ul className="order-1 flex w-full flex-col lg:order-2">
            {ITEMS.map((item) => (
              <li key={item} className="flex flex-col gap-3 pt-5">
                <span className="text-body text-ink">{item}</span>
                <span aria-hidden="true" className="block h-px w-full bg-lime" />
              </li>
            ))}
          </ul>

          <img
            src={laptop}
            alt="Laptop showing a Grade 1 Science lesson in the Schoolio app"
            loading="lazy"
            className="order-3 mx-auto w-full max-w-[340px]"
          />
        </div>
      </div>
    </section>
  )
}
