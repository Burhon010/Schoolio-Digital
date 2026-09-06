/*
  Placeholder wordmark. Replace with the real "logo colored" SVG exported from
  Figma (node I1501:3985;248:4755, 120 x 21.98) — save as
  src/assets/images/logo.svg and swap this for an <img>.
*/
export default function Logo({ className = "" }) {
  return (
    <span
      className={`inline-flex select-none items-center bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-2xl font-black lowercase tracking-tight text-transparent ${className}`}
    >
      schoolio
    </span>
  )
}
