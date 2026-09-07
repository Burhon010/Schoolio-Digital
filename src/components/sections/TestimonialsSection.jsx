import { useCallback, useRef, useState } from "react"
import SectionHeading from "../ui/SectionHeading.jsx"
import boyOutside from "../../assets/images/suxrat's-imgs/seventh.png"
import boyInForest from "../../assets/images/suxrat's-imgs/eightth.png"
import girlSmiling from "../../assets/images/suxrat's-imgs/nineth.png"
import girlWithHeadphones from "../../assets/images/suxrat's-imgs/tenth.png"

/*
  Desktop: a stack of full-width rows that alternate image side.
  Below lg (the mobile frame in Figma): the same rows become a swipeable,
  snapping carousel with a colour-coded dot per slide.

  Each row carries its own pastel colour pair plus the dot colour.
*/
const TESTIMONIALS = [
  {
    quote:
      "Schoolio is the best program available. It meets my curriculum requirements and makes learning fun. I would highly recommend it.",
    author: "Sierra A.",
    image: boyOutside,
    alt: "A smiling boy standing outside",
    imageSide: "left",
    background: "#EEF4FB",
    color: "#2C4E6E",
    dot: "#3988C4",
  },
  {
    quote:
      "I used schoolio grade 2 and 3 last year and it was my life saver, I love it.",
    author: "Melissa C.",
    image: boyInForest,
    alt: "A boy smiling in a forest",
    imageSide: "right",
    background: "#EEF7D8",
    color: "#4A6118",
    dot: "#6FB03A",
  },
  {
    quote:
      "The curriculum is easy to follow and helped me our schooling experience a smooth and enjoyable one...",
    author: "Katherine S.",
    image: girlSmiling,
    alt: "A girl smiling on a playground",
    imageSide: "left",
    background: "#F5EDFB",
    color: "#533070",
    dot: "#9B7FC7",
  },
  {
    quote:
      "I love this program so much. My daughter just did the solar oven for grade 5 science. Thank you so much, last year was a struggle but this year we are all having a blast.",
    author: "Melanie W.",
    image: girlWithHeadphones,
    alt: "A girl wearing headphones during a lesson",
    imageSide: "right",
    background: "#FDEDE6",
    color: "#7A3B1E",
    dot: "#E79A88",
  },
]

function TestimonialCard({ testimonial }) {
  const { quote, author, image, alt, imageSide, background, color } = testimonial
  const imageFirst = imageSide === "left"

  return (
    <figure
      className="grid h-full w-full overflow-hidden rounded-3xl lg:grid-cols-2"
      style={{ backgroundColor: background }}
    >
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className={`aspect-[5/4] w-full object-cover lg:aspect-auto lg:h-full ${
          imageFirst ? "lg:order-1" : "lg:order-2"
        }`}
      />

      <div
        className={`flex flex-col justify-center gap-1 p-6 sm:p-8 lg:p-10 ${
          imageFirst ? "lg:order-2" : "lg:order-1"
        }`}
        style={{ color }}
      >
        <blockquote className="text-body">&ldquo;{quote}&rdquo;</blockquote>
        <figcaption className="text-body">&mdash; {author}</figcaption>
      </div>
    </figure>
  )
}

export default function TestimonialsSection() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  /* The slide whose centre is closest to the track's centre is the active one. */
  const syncActive = useCallback(() => {
    const track = trackRef.current
    if (!track) return

    const centre = track.scrollLeft + track.clientWidth / 2
    let closest = 0
    let smallest = Infinity

    Array.from(track.children).forEach((slide, index) => {
      const distance = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - centre)
      if (distance < smallest) {
        smallest = distance
        closest = index
      }
    })

    setActive(closest)
  }, [])

  function goToSlide(index) {
    const track = trackRef.current
    const slide = track?.children[index]
    if (!track || !slide) return

    track.scrollTo({
      left: slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2,
      behavior: "smooth",
    })
  }

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="flex flex-col items-center gap-12">
        <div className="container-1200">
          <SectionHeading title="Loved by learners everywhere" />
        </div>

        <div
          ref={trackRef}
          onScroll={syncActive}
          className={
            "flex w-full snap-x snap-mandatory gap-4 overflow-x-auto px-[9%] pb-2 " +
            "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden " +
            "lg:container-1200 lg:snap-none lg:flex-col lg:gap-6 lg:overflow-visible lg:px-6"
          }
        >
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.author}
              className="w-[82%] shrink-0 snap-center lg:w-full lg:shrink"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <ul className="flex items-center gap-3 lg:hidden">
          {TESTIMONIALS.map((testimonial, index) => (
            <li key={testimonial.author}>
              <button
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Show the testimonial from ${testimonial.author}`}
                aria-current={index === active}
                className="block size-2.5 rounded-full transition-opacity duration-200"
                style={{
                  backgroundColor: testimonial.dot,
                  opacity: index === active ? 1 : 0.35,
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
