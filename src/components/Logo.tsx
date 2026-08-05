import { Gauge } from 'lucide-react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-600/90 text-white shadow-lg shadow-accent-600/20 ring-1 ring-accent-400/30">
        <Gauge className="h-5 w-5" strokeWidth={2.4} />
      </span>
      <span className="font-display text-lg font-extrabold tracking-tight">
        <span className="text-white">Dash</span><span className="text-accent-400">Forge</span>
      </span>
    </span>
  );
}
