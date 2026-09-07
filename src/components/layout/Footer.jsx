import Doodle from "../ui/Doodle.jsx"

const LINKS = [
  { label: "Shop", href: "#" },
  { label: "Blog", href: "#" },
  { label: "About", href: "#" },
  { label: "Privacy Policy", href: "#" },
]

/*
  Placeholder wordmark — same stand-in as ui/Logo.jsx, but white for the purple
  footer. Swap for the real "schoolio" SVG (with the joined "oo") once it is
  exported from Figma.
*/
function FooterLogo() {
  return (
    <span className="select-none text-4xl font-black lowercase tracking-tight text-white">
      schoolio
    </span>
  )
}

const SOCIALS = [
  {
    name: "YouTube",
    href: "#",
    path: (
      <>
        <rect
          x="2"
          y="4.5"
          width="20"
          height="15"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M10 8.8v6.4l5.4-3.2z" fill="currentColor" />
      </>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    path: (
      <>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
      </>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    path: (
      <path
        d="M15.4 8.3h-2v-1.6c0-.6.4-.8.7-.8h1.2V3.1L13.6 3c-2 0-2.5 1.5-2.5 2.5v1.8H9.5v2.7h1.6V21h2.9v-8h1.9z"
        fill="currentColor"
      />
    ),
  },
  {
    name: "TikTok",
    href: "#",
    path: (
      <path
        d="M15.9 2.5h-2.8v12.2a2.3 2.3 0 1 1-2.3-2.3c.2 0 .4 0 .6.1v-2.9h-.6a5.2 5.2 0 1 0 5.2 5.2V8.6a6 6 0 0 0 3.6 1.2V6.9a3.4 3.4 0 0 1-3.7-3.4z"
        fill="currentColor"
      />
    ),
  },
]

/* Outlined hardcover book, bleeding off the left edge of the footer. */
function BookDoodle({ className = "" }) {
  return (
    <svg viewBox="0 0 120 150" fill="none" className={className} aria-hidden="true">
      <g
        transform="rotate(-20 60 75)"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      >
        {/* page block, then the cover on top of it */}
        <rect x="18" y="26" width="18" height="102" rx="6" />
        <rect x="32" y="18" width="66" height="102" rx="7" />
        <path d="M36 22v98" />
        {/* label on the cover */}
        <rect x="46" y="32" width="26" height="16" rx="4" />
      </g>
    </svg>
  )
}

/* Outlined ringed planet in the bottom-right corner. */
function PlanetDoodle({ className = "" }) {
  return (
    <svg viewBox="0 0 200 140" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="3">
        <circle cx="118" cy="62" r="46" />
        <ellipse cx="112" cy="70" rx="92" ry="28" transform="rotate(-20 112 70)" />
      </g>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="relative overflow-hidden rounded-t-[48px] bg-[linear-gradient(100deg,#6B2E9E_0%,#65359F_30%,#5B4BB8_72%,#5A5CC6_100%)] px-6 pb-10 pt-16 sm:pt-20">
        <BookDoodle className="pointer-events-none absolute -left-4 top-8 hidden h-40 w-32 text-white/25 sm:block" />
        <PlanetDoodle className="pointer-events-none absolute bottom-10 -right-12 hidden h-36 w-52 text-white/25 sm:block" />
        <Doodle
          name="sparkle"
          className="absolute right-[7%] top-10 hidden h-9 w-9 text-white sm:block"
        />

        <div className="container-1200 relative flex flex-col gap-12">
          <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
            <FooterLogo />

            <nav aria-label="Footer">
              <ul className="flex flex-col gap-3">
                {LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-h5 text-white transition-colors duration-150 hover:text-brand-yellow"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <ul className="flex flex-wrap items-center gap-5">
              {SOCIALS.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    aria-label={social.name}
                    className="inline-flex text-white transition-colors duration-150 hover:text-brand-yellow"
                  >
                    <svg viewBox="0 0 24 24" className="size-10" aria-hidden="true">
                      {social.path}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <span aria-hidden="true" className="block h-px w-full bg-white/25" />

          <p className="text-center text-sm text-white/70">
            &copy; 2023 Schoolio Learning Corp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
