import SectionHeading from "../ui/SectionHeading.jsx"

const ROLES = ["Parent", "Teacher", "Tutor", "Institution"]

export default function QuickStartSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-1200 flex flex-col items-center gap-10">
        <SectionHeading
          eyebrow="Feeling overwhelmed?"
          title="Quickly start as a"
        />

        <ul className="flex flex-wrap items-center justify-center gap-6">
          {ROLES.map((role) => (
            <li key={role}>
              <a
                href="#"
                className={
                  "inline-flex min-w-[180px] items-center justify-center rounded-xl " +
                  "bg-brand-orange px-8 py-3 text-h5 text-white transition-all duration-150 " +
                  "shadow-[5px_5px_0_0_var(--color-brand-orange-shadow)] " +
                  "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--color-brand-orange-shadow)] " +
                  "active:translate-x-[5px] active:translate-y-[5px] active:shadow-none " +
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange-shadow"
                }
              >
                {role}
              </a>
            </li>
          ))}
        </ul>

        <p className="flex flex-col items-center gap-1 text-center">
          <span className="text-sm text-ink-soft">Not Sure Where to Start?</span>
          <a
            href="#"
            className="text-sm text-brand-orange underline underline-offset-4 hover:no-underline"
          >
            Get Help
          </a>
        </p>
      </div>
    </section>
  )
}
