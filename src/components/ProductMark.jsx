export default function ProductMark({ name, size = 'md', accent = false }) {
  const sizes = {
    sm: 'h-9 w-9 text-base rounded-lg',
    md: 'h-12 w-12 text-lg rounded-xl',
    lg: 'h-16 w-16 text-2xl rounded-2xl',
  }
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center font-display font-extrabold shrink-0 ${sizes[size]} ${
        accent ? 'bg-sun-amber text-ink' : 'bg-deep-teal text-sand'
      }`}
    >
      {name.charAt(0)}
    </div>
  )
}