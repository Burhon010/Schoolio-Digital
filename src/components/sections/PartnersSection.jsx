import Doodle from "../ui/Doodle.jsx"
import boyWithMother from "../../assets/images/suxrat's-imgs/sixth.png"
import americanExpress from "../../assets/images/shuxrat's-icons/american-express.png"
import google from "../../assets/images/shuxrat's-icons/google.png"
import edinno from "../../assets/images/shuxrat's-icons/edinno.png"
import brdeLearningAcademy from "../../assets/images/shuxrat's-icons/brde-learning-academy.png"
import lionOnCross from "../../assets/images/shuxrat's-icons/lion-on-cross.png"
import yorkU from "../../assets/images/shuxrat's-icons/york-u.png"
import franklinCounty from "../../assets/images/shuxrat's-icons/franklin-county.png"
import hSchool from "../../assets/images/shuxrat's-icons/H.png"
import yorkRegion from "../../assets/images/shuxrat's-icons/york-region.png"
import tmu from "../../assets/images/shuxrat's-icons/TMU.png"
import malden from "../../assets/images/shuxrat's-icons/malden.png"
import motherWithChild from "../../assets/images/shuxrat's-icons/mother-with-child.png"

/* Reading order matches the 3-column grid in Figma. */
const PARTNERS = [
  { src: americanExpress, name: "American Express" },
  { src: google, name: "Google" },
  { src: edinno, name: "Edinno" },
  { src: brdeLearningAcademy, name: "BRDE Learning Academy" },
  { src: franklinCounty, name: "Franklin County" },
  { src: yorkU, name: "York University" },
  { src: lionOnCross, name: "Lion on Cross" },
  { src: hSchool, name: "H" },
  { src: motherWithChild, name: "Mother with Child" },
  { src: tmu, name: "Toronto Metropolitan University" },
  { src: malden, name: "Malden" },
  { src: yorkRegion, name: "York Region District School Board" },
]

export default function PartnersSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-1200 flex flex-col items-center gap-12">
        <h2 className="text-center text-h5 text-ink">Trusted industry partners</h2>

        <div className="relative grid w-full items-center gap-12 lg:grid-cols-2">
          <Doodle
            name="sparkle"
            className="absolute -left-2 -top-6 hidden h-8 w-8 text-brand-purple lg:block"
          />
          <Doodle
            name="sparkle"
            className="absolute -left-10 top-2 hidden h-4 w-4 text-brand-orange lg:block"
          />

          <img
            src={boyWithMother}
            alt="A boy with a backpack holding his mother's hand on the way to school"
            loading="lazy"
            className="mx-auto w-full max-w-[520px] rounded-3xl"
          />

          <ul className="mx-auto grid w-full max-w-[520px] grid-cols-3 items-center gap-x-8 gap-y-10">
            {PARTNERS.map((partner) => (
              <li key={partner.name} className="flex items-center justify-center">
                <img
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  loading="lazy"
                  className="max-h-14 w-auto max-w-full object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
