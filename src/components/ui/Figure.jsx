import { useState } from "react"

/*
  Thin wrapper around <img>. While the real asset is missing it shows a soft
  labelled placeholder so layout stays intact. Drop the file into
  src/assets/images/ and pass its URL as `src`.
*/
export default function Figure({ src, alt, className = "", imgClassName = "" }) {
  const [failed, setFailed] = useState(!src)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={
          "flex items-center justify-center rounded-2xl border-2 border-dashed " +
          "border-brand-purple-soft bg-brand-purple-soft/20 p-6 text-center " +
          `text-body text-ink-soft ${className}`
        }
      >
        {alt}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${className} ${imgClassName}`}
    />
  )
}
