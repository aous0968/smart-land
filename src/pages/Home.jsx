import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  ArrowRight, Sparkles, LayoutGrid, GraduationCap,
  HeartPulse, PlayCircle,
} from 'lucide-react'
import ProductMark from '../components/ProductMark'
/* ---------- Hero ---------- */
function Hero() {
  const { t } = useTranslation()
  return (
    <section className="relative overflow-hidden bg-sand">
      <div className="mx-auto max-w-6xl grid gap-12 px-5 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-mist/30 px-3 py-1 text-xs font-medium text-deep-teal">
            <Sparkles size={14} /> {t('hero.badge')}
          </span>

          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.05] text-ink md:text-6xl">
            {t('hero.title1')}
            <br />
            <span className="text-deep-teal">{t('hero.title2')}</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-ink/70">
            {t('hero.subtitle')}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-deep-teal px-6 py-3 text-sm font-semibold text-sand transition hover:opacity-90"
            >
              {t('hero.seeWork')} <ArrowRight size={16} className="rtl:rotate-180" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/40"
            >
              {t('hero.startProject')}
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-ink">
            <img
              src="/images/hero.webp"
              alt="Smart Land team at work"
              width="1600"
              height="2000"
              loading="eager"
              fetchpriority="high"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Accent dot, purely decorative */}
          <div className="pointer-events-none absolute -bottom-4 -left-4 hidden h-24 w-24 rounded-full bg-sun-amber/90 md:block" />
        </div>
      </div>
    </section>
  )
}

/* ---------- Stats ---------- */
function Stats() {
  const { t } = useTranslation()
  const stats = [
    { value: '2011', label: t('stats.founded') },
    { value: '6+',   label: t('stats.products') },
    { value: '4',    label: t('stats.industries') },
    { value: 'AI',   label: t('stats.ai') },
  ]
  return (
    <section className="border-y border-mist/40 bg-sand">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-3xl font-extrabold text-deep-teal">
              {s.value}
            </div>
            <div className="mt-1 text-sm text-ink/60">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------- Intro ---------- */
function Intro() {
  const { t } = useTranslation()
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-start">
        <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
          {t('intro.title')}
        </h2>
        <div>
          <p className="text-lg leading-relaxed text-ink/75">{t('intro.body')}</p>
          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-deep-teal hover:gap-3 transition-all"
          >
            {t('intro.more')} <ArrowRight size={16} className="rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ---------- Services ---------- */
function Services() {
  const { t } = useTranslation()
  const services = [
    { icon: LayoutGrid,    title: t('services.custom'),    body: t('services.customBody') },
    { icon: Sparkles,      title: t('services.ai'),        body: t('services.aiBody') },
    { icon: GraduationCap, title: t('services.elearning'), body: t('services.elearningBody') },
    { icon: HeartPulse,    title: t('services.health'),    body: t('services.healthBody') },
  ]
  return (
    <section className="bg-ink text-sand">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            {t('services.title')}
          </h2>
          <p className="mt-4 text-sand/70">{t('services.body')}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-sand/10 bg-sand/5 p-7 transition hover:border-sand/25"
            >
              <Icon className="text-sun-amber" size={26} />
              <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sand/70">{body}</p>
            </div>
          ))}
        </div>

        <Link
          to="/services"
          className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-sun-amber hover:gap-3 transition-all"
        >
          {t('services.all')} <ArrowRight size={16} className="rtl:rotate-180" />
        </Link>
      </div>
    </section>
  )
}

/* ---------- Featured projects with real images ---------- */
function FeaturedWork() {
  const { t } = useTranslation()
  const featured = [
  {
    name: 'MyKey',
    tag: t('featured.accessibility'),
    body: t('featured.mykeyBody'),
    image: '/images/project-mykey.webp',
  },
  {
    name: 'Sada',
    tag: t('featured.ecommerce'),
    body: t('featured.sadaBody'),
    image: '/images/project-sada.webp',
  },
  {
    name: 'Smart Signal',
    tag: t('featured.realestate'),
    body: t('featured.signalBody'),
    image: '/images/project-signal.webp',
  },
]

  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
            {t('featured.title')}
          </h2>
          <p className="mt-3 max-w-lg text-ink/70">{t('featured.body')}</p>
        </div>
        <Link
          to="/projects"
          className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-deep-teal hover:gap-3 transition-all"
        >
          {t('featured.all')} <ArrowRight size={16} className="rtl:rotate-180" />
        </Link>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {featured.map(({ name, tag, body, image }) => (
          <article
            key={name}
            className="group overflow-hidden rounded-2xl border border-mist/40 bg-white/60 transition hover:border-deep-teal/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5"
          >
            <div className="aspect-[4/3] overflow-hidden bg-mist/25">
              <img
                src={image}
                alt={name}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3">
                <ProductMark name={name} size="sm" />
                <span className="text-xs font-medium uppercase tracking-widest text-teal-light">
                  {tag}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-ink">{name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{body}</p>
            </div>
          </article>
        ))}
      </div>

      <Link
        to="/projects"
        className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-deep-teal md:hidden"
      >
        {t('featured.all')} <ArrowRight size={16} className="rtl:rotate-180" />
      </Link>
    </section>
  )
}

/* ---------- Video teaser (still placeholder) ---------- */
function VideoTeaser() {
  const { t } = useTranslation()
  return (
    <section className="bg-deep-teal text-sand">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            {t('video.title')}
          </h2>
          <p className="mt-4 max-w-md text-sand/80">{t('video.body')}</p>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink">
          <div className="flex h-full flex-col items-center justify-center gap-3 text-sand/50">
            <PlayCircle size={48} />
            <span className="text-sm">{t('video.comingSoon')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Closing CTA ---------- */
function ClosingCTA() {
  const { t } = useTranslation()
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 text-center">
      <h2 className="font-display text-3xl font-bold text-ink md:text-5xl">
        {t('closing.title')}
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-ink/70">{t('closing.body')}</p>
      <Link
        to="/contact"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-sun-amber px-7 py-3.5 text-sm font-semibold text-ink transition hover:brightness-95"
      >
        {t('closing.cta')} <ArrowRight size={16} className="rtl:rotate-180" />
      </Link>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Intro />
      <Services />
      <FeaturedWork />
      <VideoTeaser />
      <ClosingCTA />
    </>
  )
}