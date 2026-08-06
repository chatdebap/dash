import { useEffect, useRef, useState } from 'react';

interface SlideImage {
  src: string;
  label: string;
  sub: string;
}

interface Props {
  images: SlideImage[];
  intervalMs?: number;
}

export function HeroSlideshow({ images, intervalMs = 4000 }: Props) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<number | null>(null);

  const advance = () => {
    setIsAnimating(true);
    window.setTimeout(() => {
      setIndex((i) => (i + 1) % images.length);
      setIsAnimating(false);
    }, 600);
  };

  useEffect(() => {
    timerRef.current = window.setTimeout(advance, intervalMs);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [index, intervalMs]);

  return (
    <div className="relative h-[380px] overflow-hidden rounded-2xl sm:h-[480px] lg:h-[600px]">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            i === index
              ? 'scale-100 opacity-100'
              : i === (index - 1 + images.length) % images.length
                ? 'scale-105 opacity-0'
                : 'translate-x-full opacity-0'
          }`}
        >
          <img
            src={img.src}
            alt={`${img.label} ${img.sub}`}
            className="h-full w-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
            <p className="text-sm font-semibold text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">{img.label}</p>
            <p className="text-xs text-white/70">{img.sub}</p>
          </div>
        </div>
      ))}

      {/* Progress dots */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-accent-400' : 'w-1.5 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
