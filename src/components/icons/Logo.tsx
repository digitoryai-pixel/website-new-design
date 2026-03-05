'use client'

export default function Logo({ className = '', size = 'default' }: { className?: string; size?: 'small' | 'default' | 'large' }) {
  const sizes = {
    small: { icon: 24, text: 'text-lg' },
    default: { icon: 32, text: 'text-xl' },
    large: { icon: 40, text: 'text-2xl' },
  }

  const s = sizes[size]

  return (
    <a href="/" className={`flex items-center gap-2.5 ${className}`} aria-label="Digitory Home">
      {/* Digitory pixel logo mark */}
      <svg width={s.icon} height={s.icon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="16" height="16" rx="2" fill="#ff5a10" />
        <rect x="20" y="20" width="28" height="28" rx="2" fill="#ff5a10" />
        <rect x="8" y="28" width="20" height="20" rx="2" fill="#ff5a10" />
        <rect x="24" y="32" width="10" height="10" rx="1" fill="white" />
      </svg>
      <span className={`font-poppins font-semibold text-brand-navy ${s.text} tracking-tight`}>
        Digitory
      </span>
    </a>
  )
}
