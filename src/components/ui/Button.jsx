const styles = {
  primary:
    "bg-brand-orange text-white shadow-[6px_6px_0_0_var(--color-brand-orange-shadow)] " +
    "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_0_var(--color-brand-orange-shadow)] " +
    "active:translate-x-[6px] active:translate-y-[6px] active:shadow-none",
}

export default function Button({
  as: Component = "button",
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  return (
    <Component
      className={
        "inline-flex items-center justify-center gap-2.5 rounded-2xl px-8 py-4 " +
        "text-h4 transition-all duration-150 focus-visible:outline-2 " +
        "focus-visible:outline-offset-2 focus-visible:outline-brand-orange-shadow " +
        `${styles[variant]} ${className}`
      }
      {...props}
    >
      {children}
    </Component>
  )
}
