export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-accent-600 text-white shadow-lg shadow-accent-600/20 ring-1 ring-accent-400/30 overflow-hidden">
        <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-hidden="true">
          {/* Outer ring with tick marks */}
          <circle cx="24" cy="24" r="18.5" stroke="white" strokeWidth="2.5" strokeDasharray="2 2.6" strokeLinecap="round" />
          {/* Inner gauge face */}
          <circle cx="24" cy="24" r="13" stroke="white" strokeWidth="1.4" opacity="0.55" />
          {/* Needle pointing up-right */}
          <path d="M24 24 L33 13" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="24" cy="24" r="2.2" fill="white" />
          {/* Split base — left half */}
          <path d="M6 31 H21 V37 H12 C9 36 7 34 6 31 Z" fill="white" />
          {/* Split base — right half */}
          <path d="M42 31 H27 V37 H36 C39 36 41 34 42 31 Z" fill="white" />
        </svg>
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ animation: 'sweep 3s ease-in-out infinite' }} />
      </span>
      <span className="font-display text-lg font-extrabold tracking-tight">
        <span className="text-white">Dash</span><span className="text-accent-400">Forge</span>
      </span>
    </span>
  );
}
