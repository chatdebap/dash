import { ArrowRight, Check, Gauge, Smartphone, Package, CircleDot, ShieldCheck, PackageCheck, BadgeCheck, Car, MapPin, Route, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Contact, Footer } from '@/components/Contact';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { DISPLAY_THEMES, RECENT_INSTALLS, REVIEWS } from '@/data/vehicles';
import { useState } from 'react';
import { Star, ArrowUpRight } from 'lucide-react';

const GALLERY_IMAGES = [
  { src: 'https://images.pexels.com/photos/28743959/pexels-photo-28743959.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&dpr=2', label: 'MK6 Golf', sub: 'Digital Cluster Upgrade' },
  { src: 'https://images.pexels.com/photos/10475771/pexels-photo-10475771.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&dpr=2', label: 'Audi A4', sub: 'Virtual Cockpit' },
  { src: 'https://images.pexels.com/photos/29293963/pexels-photo-29293963.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&dpr=2', label: 'MK6 GTI', sub: 'Active Info Display' },
  { src: 'https://images.pexels.com/photos/11526276/pexels-photo-11526276.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&dpr=2', label: 'Audi A3', sub: 'Digital Cockpit' },
  { src: 'https://images.pexels.com/photos/12870231/pexels-photo-12870231.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&dpr=2', label: 'MK6 Golf', sub: 'Digital Display' },
  { src: 'https://images.pexels.com/photos/10534825/pexels-photo-10534825.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&dpr=2', label: 'Audi Q5', sub: 'Premium Cockpit' },
  { src: 'https://images.pexels.com/photos/37685712/pexels-photo-37685712.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&dpr=2', label: 'MK6 Golf R', sub: 'Digital Cluster' },
  { src: 'https://images.pexels.com/photos/34404460/pexels-photo-34404460.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&dpr=2', label: 'Audi A4', sub: 'Virtual Cockpit' },
  { src: 'https://images.pexels.com/photos/36579824/pexels-photo-36579824.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&dpr=2', label: 'MK6 Golf', sub: 'Night Drive Mode' },
  { src: 'https://images.pexels.com/photos/9452196/pexels-photo-9452196.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&dpr=2', label: 'Audi A3', sub: 'Digital Dashboard' },
  { src: 'https://images.pexels.com/photos/31775324/pexels-photo-31775324.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&dpr=2', label: 'MK6 GTI', sub: 'Sport Mode Cluster' },
  { src: 'https://images.pexels.com/photos/13275527/pexels-photo-13275527.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&dpr=2', label: 'Audi Q5', sub: 'Cockpit View' },
];

const BEFORE_VW = 'https://images.pexels.com/photos/15256366/pexels-photo-15256366.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2';
const AFTER_VW = 'https://images.pexels.com/photos/28743959/pexels-photo-28743959.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2';
const BEFORE_AUDI = 'https://images.pexels.com/photos/16520978/pexels-photo-16520978.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2';
const AFTER_AUDI = 'https://images.pexels.com/photos/10475771/pexels-photo-10475771.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2';

const CARPLAY_IMG = 'https://images.pexels.com/photos/29293963/pexels-photo-29293963.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2';
const FLAGSHIP_IMG = 'https://images.pexels.com/photos/28743959/pexels-photo-28743959.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&dpr=2';

const SERVICES = [
  { icon: Gauge, title: 'Digital Cluster Upgrade', tag: 'Analog to full digital instrument cluster', desc: 'Replace your analog gauges with a fully digital, VW/Audi OEM-spec Active Info Display. VIN-specific programming for perfect integration.', price: '$799', priceTag: 'cluster only', primary: true },
  { icon: Smartphone, title: 'Apple CarPlay', tag: 'Wireless CarPlay integration', desc: 'Full Apple CarPlay and Android Auto capability added to your factory infotainment. Retains OEM steering wheel controls.', price: '$399', priceTag: 'starting', hasImage: true },
  { icon: Package, title: 'Cluster + CarPlay Bundle', tag: 'Digital cluster + wireless CarPlay together', desc: 'Our most popular package — a full digital cluster upgrade bundled with wireless Apple CarPlay and Android Auto. Save $300 versus purchasing each separately.', price: '$999', oldPrice: '$1299', priceTag: 'save $300', popular: true },
  { icon: CircleDot, title: 'Steering Wheel + MFSW', tag: 'Multifunction steering wheel upgrade', desc: 'Upgrade to a multifunction steering wheel with working buttons — fully coded to your vehicle. Available as an add-on to any cluster or CarPlay package.', price: 'Contact for quote', priceTag: 'response within 24 hrs', addon: true },
];

const INCLUDED = [
  { icon: PackageCheck, title: 'New Digital Cluster', desc: 'OEM-spec Active Info Display, fully replacing your analog gauges.' },
  { icon: BadgeCheck, title: 'VIN-Specific Programming', desc: 'Coded to your exact vehicle so everything works as factory.' },
  { icon: Car, title: 'Professional Mobile Install', desc: 'We come to you. Clean, careful, done right the first time.' },
  { icon: ShieldCheck, title: '30-Day Warranty', desc: 'Full coverage on parts and labor. Peace of mind included.' },
];

const STEPS = [
  { step: '01', title: 'Choose Your Vehicle', desc: 'Select VW or Audi, then your exact model and year.' },
  { step: '02', title: 'Select Your Package', desc: 'Digital cluster, CarPlay, or the full bundle with steering wheel.' },
  { step: '03', title: 'We Come To You', desc: 'Mobile install at your home or office. First 20 miles free.' },
  { step: '04', title: 'Drive Away Upgraded', desc: 'Fully coded, warranted, and ready to go in 2–3 days.' },
];

const TERMS = [
  { value: '20mi', label: 'First 20 miles free from our Cumberland base — covering most of Atlanta.' },
  { value: '$50', label: 'Flat fee for installs beyond 20 miles. One clear price, no surprises.' },
  { value: '30d', label: 'Full 30-day warranty on parts and labor. If something fails, we return free.' },
];

const INSTALL_FILTERS = ['All', 'Digital Cluster', 'CarPlay', 'Steering Wheel', 'Bundle'] as const;
type InstallFilter = typeof INSTALL_FILTERS[number];

export default function HomePage() {
  const [filter, setFilter] = useState<InstallFilter>('All');
  const filtered = filter === 'All' ? RECENT_INSTALLS : RECENT_INSTALLS.filter((r) => r.category === filter);

  return (
    <main className="bg-[#08080f]">
      {/* HERO — auto-scroll gallery on left, text on right, seamless blend */}
      <section className="relative overflow-hidden pt-16 lg:pt-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent-600/8 blur-[140px]" />
        </div>
        <div className="container-edge section-pad-x">
          <div className="grid items-center gap-0 lg:grid-cols-2 lg:gap-12">
            {/* Left: auto-scroll gallery — no border, blends into text */}
            <div className="animate-fade-up order-1 lg:order-1">
              <div className="relative h-[380px] overflow-hidden sm:h-[480px] lg:h-[600px]">
                <div className="flex h-full w-max animate-scroll-x gap-3">
                  {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, i) => (
                    <div key={i} className="relative h-full shrink-0 overflow-hidden rounded-2xl">
                      <img src={img.src} alt={`${img.label} ${img.sub}`} className="h-full w-[280px] object-cover sm:w-[340px]" loading="lazy" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <p className="text-sm font-semibold text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">{img.label}</p>
                        <p className="text-xs text-white/70">{img.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#08080f] to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#08080f]/60 to-transparent" />
              </div>
            </div>

            {/* Right: text */}
            <div className="animate-fade-up order-2 [animation-delay:120ms] py-8 text-center lg:order-2 lg:py-0 lg:pl-4 lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
                </span>
                Atlanta's Best Dashboard Work for VAG Vehicles
              </div>
              <h1 className="font-display text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                Upgrade your
                <br />
                dash to
                <br />
                <span className="font-serif italic text-accent-400">digital.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-neutral-400 lg:mx-0">
                Atlanta's premier digital instrument cluster specialists for Volkswagen &amp; Audi. Full digital cluster installs, Apple CarPlay, and multifunction steering wheel upgrades — mobile service, we come to you.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                <Link to="/#contact" className="btn-primary w-full sm:w-auto">Book Mobile Install<ArrowRight className="h-4 w-4" /></Link>
                <Link to="/vehicles" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-neutral-700/60 px-6 py-3.5 text-sm font-medium tracking-wide text-neutral-200 transition-all hover:border-neutral-600 hover:bg-neutral-800/40 hover:text-white sm:w-auto">Check Compatibility</Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-neutral-400 lg:justify-start">
                <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-accent-400" /> First 20 miles free</span>
                <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-accent-400" /> 30-day warranty</span>
                <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-accent-400" /> VIN-specific programming</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE INSTALL */}
      <section className="py-20 lg:py-28">
        <div className="container-edge section-pad-x">
          <div className="max-w-2xl">
            <p className="eyebrow">What we install</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Precision hardware, OEM-spec coding, and professional mobile installation.</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className={`relative flex flex-col rounded-3xl border border-neutral-800/80 bg-neutral-900/50 p-6 transition-all duration-300 hover:border-neutral-700/80 sm:p-8`} style={{ animationDelay: `${i * 80}ms` }}>
                  {s.popular && <span className="absolute -top-3 left-6 rounded-full bg-accent-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">Most Popular</span>}
                  {s.addon && <span className="absolute -top-3 left-6 rounded-full bg-neutral-700 px-3 py-1 text-xs font-semibold text-neutral-200">Add-On</span>}
                  {s.primary && <span className="absolute -top-3 left-6 rounded-full bg-accent-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">Main Service</span>}
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-400"><Icon className="h-6 w-6" strokeWidth={2} /></div>
                  <h3 className="font-display text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-1 text-sm text-accent-400">{s.tag}</p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">{s.desc}</p>
                  {s.hasImage && (
                    <div className="mt-4 overflow-hidden rounded-2xl border border-neutral-800">
                      <img src={CARPLAY_IMG} alt="Apple CarPlay on a VW Golf GTI MK7 infotainment screen" className="aspect-[3/2] w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                    </div>
                  )}
                  <div className="mt-5 flex items-baseline gap-2">
                    {s.oldPrice && <span className="text-lg text-neutral-500 line-through">{s.oldPrice}</span>}
                    <span className="font-display text-3xl font-extrabold text-white">{s.price}</span>
                    <span className="text-xs text-neutral-500">{s.priceTag}</span>
                  </div>
                  <Link to="/services" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-accent-300">Details<ArrowRight className="h-4 w-4" /></Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FLAGSHIP */}
      <section className="py-20 lg:py-28">
        <div className="container-edge section-pad-x">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow">Flagship Upgrade</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">The digital cluster, done right.</h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-400">Atlanta's best dashboard work for VAG vehicles. We replace your analog gauges with an OEM-spec Active Info Display, fully coded to your vehicle's VIN. No shortcuts, no generic screens — every gauge, warning, and data field works exactly as factory.</p>
              <ul className="mt-8 space-y-3">
                {['Full Active Info Display installation', 'VIN-specific coding over 2–3 days', 'Multiple display themes included', 'OEM-spec hardware & wiring', '30-day warranty on parts & labor'].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-neutral-300"><span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-500/20 text-accent-400"><Check className="h-3.5 w-3.5" /></span>{f}</li>
                ))}
              </ul>
              <Link to="/#contact" className="btn-primary mt-8">Book Cluster Install<ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-accent-600/12 blur-3xl" />
              <div className="overflow-hidden rounded-3xl border border-neutral-800 shadow-2xl">
                <img src={FLAGSHIP_IMG} alt="VW Golf R MK7 digital cluster upgrade" className="aspect-[4/3] w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-20 lg:py-28">
        <div className="container-edge section-pad-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Results</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Before &amp; after</h2>
            <p className="mt-4 text-lg text-neutral-400">Drag the slider to see the transformation from analog to digital.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <BeforeAfterSlider beforeSrc={BEFORE_VW} afterSrc={AFTER_VW} beforeAlt="2010 VW Golf analog instrument cluster" afterAlt="VW Golf R MK7 digital cluster" label="MK6 Golf — Analog → Active Info Display" />
            <BeforeAfterSlider beforeSrc={BEFORE_AUDI} afterSrc={AFTER_AUDI} beforeAlt="2010 Audi analog instrument cluster" afterAlt="Audi premium digital cockpit" label="Audi A4 — Analog → Virtual Cockpit" />
          </div>
        </div>
      </section>

      {/* DISPLAY THEMES */}
      <section className="py-20 lg:py-28">
        <div className="container-edge section-pad-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Display Themes</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Cluster themes &amp; styles</h2>
            <p className="mt-4 text-lg text-neutral-400">Each digital cluster comes with multiple built-in display themes. Choose your look.</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DISPLAY_THEMES.map((t) => (
              <div key={t.name} className="rounded-3xl border border-neutral-800/80 bg-neutral-900/50 p-6 transition-all hover:border-neutral-700">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400"><Gauge className="h-5 w-5" /></div>
                <h3 className="font-display text-lg font-bold text-white">{t.name}</h3>
                <p className="mt-1 text-xs font-medium text-accent-400">{t.brand}</p>
                <p className="mt-2 text-sm text-neutral-400">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT INSTALLS */}
      <section className="py-20 lg:py-28">
        <div className="container-edge section-pad-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Recent installs</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Recent work</h2>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {INSTALL_FILTERS.map((f) => (
              <button key={f} onClick={() => setFilter(f)} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${filter === f ? 'bg-accent-600 text-white' : 'border border-neutral-800 text-neutral-400 hover:text-white'}`}>{f}</button>
            ))}
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((inst) => (
              <div key={inst.vehicle + inst.date} className="group overflow-hidden rounded-3xl border border-neutral-800/80 bg-neutral-900/50 transition-all hover:border-neutral-700">
                <div className="relative overflow-hidden">
                  <img src={inst.image} alt={inst.vehicle} className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">{inst.category}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-bold text-white">{inst.vehicle}</h3>
                  <p className="mt-1 text-sm text-neutral-400">{inst.service}</p>
                  <p className="mt-2 text-xs text-neutral-500">{inst.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 lg:py-28">
        <div className="container-edge section-pad-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Reviews</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">What owners say</h2>
            <p className="mt-4 text-lg text-neutral-400">Real installs, real VW &amp; Audi owners across the Atlanta area. Atlanta's best dashboard work for VAG vehicles.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r) => (
              <div key={r.name} className="rounded-3xl border border-neutral-800/80 bg-neutral-900/50 p-6">
                <div className="flex gap-0.5">{Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-accent-400 text-accent-400" />)}</div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-300">"{r.text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-accent-500/15 font-display text-sm font-bold text-accent-400">{r.name.charAt(0)}</div>
                  <div>
                    <p className="text-sm font-semibold text-white">{r.name}</p>
                    <p className="text-xs text-neutral-500">{r.vehicle} · {r.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 lg:py-28">
        <div className="container-edge section-pad-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Included With Every Install</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">What you get</h2>
            <p className="mt-4 text-lg text-neutral-400">Every DashForge install delivers the same standard.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {INCLUDED.map((it) => { const Icon = it.icon; return (
              <div key={it.title} className="rounded-3xl border border-neutral-800/80 bg-neutral-900/50 p-6 text-center">
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-400"><Icon className="h-6 w-6" /></div>
                <h3 className="font-display text-base font-bold text-white">{it.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">{it.desc}</p>
              </div>
            ); })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 lg:py-28">
        <div className="container-edge section-pad-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">How It Works</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Four steps to upgrade</h2>
            <p className="mt-4 text-lg text-neutral-400">From selection to driving away — simple and straightforward.</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.step} className="relative rounded-3xl border border-neutral-800/80 bg-neutral-900/50 p-6">
                <span className="font-display text-4xl font-extrabold text-accent-500/30">{s.step}</span>
                <h3 className="mt-3 font-display text-base font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE TERMS */}
      <section className="py-12 lg:py-16">
        <div className="container-edge section-pad-x">
          <div className="grid gap-4 sm:grid-cols-3">
            {TERMS.map((t) => (
              <div key={t.value} className="rounded-3xl border border-neutral-800/80 bg-neutral-900/50 p-6 text-center">
                <p className="font-display text-3xl font-extrabold text-accent-400">{t.value}</p>
                <p className="mt-2 text-sm text-neutral-400">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container-edge section-pad-x">
          <div className="overflow-hidden rounded-[32px] border border-neutral-800 bg-gradient-to-br from-accent-600/15 via-neutral-900 to-neutral-900 p-10 text-center sm:p-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to upgrade your dash?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-400">Book your mobile install today. Atlanta's best dashboard work for VAG vehicles — we come to you.</p>
            <Link to="/#contact" className="btn-primary mt-8">Book Mobile Install<ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      <Contact />
      <Footer />
    </main>
  );
}

import { FAQS } from '@/data/vehicles';
import { ChevronDown } from 'lucide-react';

function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-20 lg:py-28">
      <div className="container-edge section-pad-x">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow text-center">FAQ</p>
          <h2 className="mt-3 text-center font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Questions, answered</h2>
          <div className="mt-10 space-y-3">
            {FAQS.map((item, i) => (
              <div key={i} className="rounded-2xl border border-neutral-800/80 bg-neutral-900/50 overflow-hidden">
                <button type="button" onClick={() => setOpenIdx(openIdx === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                  <span className="text-sm font-semibold text-white">{item.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-neutral-400 transition-transform ${openIdx === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ${openIdx === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="px-5 pb-5 text-sm leading-relaxed text-neutral-400">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/#contact" className="btn-primary">Contact Us<ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
