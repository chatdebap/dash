export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-accent-600/90 text-white shadow-lg shadow-accent-600/20 ring-1 ring-accent-400/30 overflow-hidden">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          {/* Digital cluster mark — a stylized gauge arc + digital bars */}
          <path
            d="M5 16.5a7 7 0 0 1 14 0"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Needle */}
          <path
            d="M12 16.5L15.5 10.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Digital pixel bars suggesting the digital upgrade */}
          <rect x="9" y="18.5" width="2" height="2" rx="0.5" fill="white" />
          <rect x="12" y="18.5" width="2" height="2" rx="0.5" fill="white" opacity="0.6" />
          <rect x="15" y="18.5" width="2" height="2" rx="0.5" fill="white" opacity="0.3" />
        </svg>
        {/* Sweep shimmer */}
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ animation: 'sweep 3s ease-in-out infinite' }} />
      </span>
      <span className="font-display text-lg font-extrabold tracking-tight">
        <span className="text-white">Dash</span><span className="text-accent-400">Forge</span>
      </span>
    </span>
  );
}
