/** Minimal line device motif — web + mobile — sits over photography (no stock “AI art”). */

export function HeroAppAccent({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 360 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="hero-accent-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#ffffff" stopOpacity="0.42" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect
        x="8"
        y="20"
        width="248"
        height="156"
        rx="14"
        stroke="url(#hero-accent-stroke)"
        strokeWidth="1.35"
      />
      <path
        d="M8 52h248"
        stroke="url(#hero-accent-stroke)"
        strokeWidth="1"
        strokeOpacity="0.55"
      />
      <circle cx="28" cy="36" r="3" fill="white" fillOpacity="0.22" />
      <circle cx="42" cy="36" r="3" fill="white" fillOpacity="0.15" />
      <circle cx="56" cy="36" r="3" fill="white" fillOpacity="0.12" />
      <rect
        x="276"
        y="48"
        width="72"
        height="128"
        rx="12"
        stroke="url(#hero-accent-stroke)"
        strokeWidth="1.35"
      />
      <path
        d="M300 164h24a4 4 0 0 0 4-4v0a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v0a4 4 0 0 0 4 4Z"
        fill="white"
        fillOpacity="0.08"
      />
    </svg>
  );
}
