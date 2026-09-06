import Logo from "../ui/Logo.jsx"

function PhoneIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 26 23" fill="none" className={className} aria-hidden="true">
      <path
        d="M9.6 4.3c-.3-.8-1.2-1.2-2-1L3.9 4.4c-.7.2-1.2.9-1.1 1.7.4 3.4 1.9 7.4 4.8 10.9 3 3.7 6.8 6 10 7.2.7.3 1.6-.1 1.9-.8l1.5-3.5c.3-.8 0-1.7-.8-2.1l-3.6-1.9c-.6-.3-1.4-.2-1.9.3l-1 1c-.3.3-.7.4-1 .2-1-.6-2.4-1.7-3.6-3.2-1.2-1.5-2-3-2.4-4.1-.1-.4 0-.8.3-1l1.1-.8c.5-.4.8-1.1.5-1.8L9.6 4.3Z"
        fill="currentColor"
      />
    </svg>
  )
}

const NAV_LINKS = [
  { label: "Bookstore", href: "#", muted: false },
  { label: "Sign up", href: "#", muted: false },
  { label: "Log in", href: "#", muted: true },
]

export default function Header() {
  return (
    <header>
      <div className="bg-[linear-gradient(179deg,var(--color-brand-purple)_0%,var(--color-brand-blue)_100%)] py-[7px] text-white">
        <div className="container-1200 flex items-center justify-center gap-2 text-sm sm:justify-end sm:text-body">
          <p>
            Not sure where to start?{" "}
            <a href="#" className="text-brand-yellow underline underline-offset-2">
              Get help!
            </a>
          </p>
          <PhoneIcon className="h-4 w-[18px] shrink-0 text-brand-yellow sm:h-[23px] sm:w-[26px]" />
        </div>
      </div>

      <nav className="bg-white py-5 sm:py-8">
        <div className="container-1200 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <a href="#" aria-label="Schoolio home">
            <Logo />
          </a>
          <ul className="flex items-center gap-5 sm:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-base sm:text-h5 ${
                    link.muted ? "text-ink-soft" : "text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
