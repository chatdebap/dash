export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-accent-600/90 text-white shadow-lg shadow-accent-600/20 ring-1 ring-accent-400/30 overflow-hidden">
        <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-hidden="true">
          <path d="M5 24a19 19 0 0 1 38 0" stroke="white" strokeWidth="4" strokeDasharray="5 3" strokeLinecap="butt" />
          <path d="M24 24l10-8-5 8h-5Z" fill="white" />
          <path d="M5 28h16v7H13c-3.5-1.2-6.2-3.3-8-7Z" fill="white" />
          <path d="M24 28h19v7H29l-5-5v-2Z" fill="white" />
        </svg>
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ animation: 'sweep 3s ease-in-out infinite' }} />
      </span>
      <span className="font-display text-lg font-extrabold tracking-tight">
        <span className="text-white">Dash</span><span className="text-accent-400">Forge</span>
      </span>
    </span>
  );
}
