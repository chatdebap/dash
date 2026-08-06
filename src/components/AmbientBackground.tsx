import { useEffect, useRef } from 'react';

export function AmbientBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const scrollY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
        el.style.setProperty('--scroll-progress', progress.toFixed(4));
        el.style.setProperty('--scroll-px', `${scrollY * 0.15}px`);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[#08080f]" />

      {/* Slowly drifting accent blobs — parallax with scroll */}
      <div
        className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full bg-accent-600/8 blur-[160px] transition-transform duration-300"
        style={{ transform: 'translate3d(calc(var(--scroll-px, 0px) * 0.5), calc(var(--scroll-px, 0px) * 0.3), 0)' }}
      />
      <div
        className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-accent-800/10 blur-[150px] transition-transform duration-300"
        style={{ transform: 'translate3d(calc(var(--scroll-px, 0px) * -0.4), calc(var(--scroll-px, 0px) * 0.2), 0)' }}
      />
      <div
        className="absolute bottom-[10%] left-[30%] h-[450px] w-[450px] rounded-full bg-accent-500/6 blur-[140px] transition-transform duration-300"
        style={{ transform: 'translate3d(calc(var(--scroll-px, 0px) * 0.3), calc(var(--scroll-px, 0px) * -0.25), 0)' }}
      />

      {/* Subtle grid pattern that drifts */}
      <div
        className="absolute inset-0 opacity-[0.025] transition-transform duration-300"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          transform: 'translateY(calc(var(--scroll-px, 0px) * -0.5))',
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#08080f_100%)]" />
    </div>
  );
}
