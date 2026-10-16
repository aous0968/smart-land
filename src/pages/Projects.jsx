import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ProductMark from '../components/ProductMark'
import { ArrowRight, GraduationCap, HeartPulse, Receipt } from 'lucide-react'

const projects = [
  {
    key: 'mykey',
    name: 'MyKey',
    tagKey: 'accessibility',
    image: '/images/project-mykey.webp',
    year: '2019',
  },
  {
    key: 'sada',
    name: 'Sada',
    tagKey: 'ecommerce',
    image: '/images/project-sada.webp',
    year: '2021',
  },
  {
    key: 'signal',
    name: 'Smart Signal',
    tagKey: 'realestate',
    image: '/images/project-signal.webp',
    year: '2020',
  },
]
const extras = [
  { key: 'welcome',  Icon: GraduationCap },
  { key: 'hospital', Icon: HeartPulse },
  { key: 'billing',  Icon: Receipt },
]

export default function Projects() {
  const { t } = useTranslation()

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-20">
        <h1 className="font-display text-4xl font-extrabold text-ink md:text-6xl">
          {t('projectsPage.title')}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink/70">
          {t('projectsPage.lead')}
        </p>
      </section>

      {/* Featured three — alternating layout */}
      <section className="mx-auto max-w-6xl px-5 py-20 space-y-24">
        {projects.map((p, i) => {
          const reverse = i % 2 === 1
          return (
            <article
              key={p.key}
              className={`grid gap-10 md:grid-cols-2 md:items-center ${
                reverse ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-mist/25">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div>
                <div className="flex items-center gap-3">
                    <ProductMark name={p.name} size="sm" accent={i === 0} />
                    <span className="rounded-full bg-mist/30 px-3 py-1 text-xs font-medium uppercase tracking-widest text-deep-teal">
                        {t(`featured.${p.tagKey}`)}
                    </span>
                    <span className="text-xs text-ink/50">{p.year}</span>
                </div>

                <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
                  {p.name}
                </h2>

                <p className="mt-4 text-lg leading-relaxed text-ink/75">
                  {t(`projectsPage.${p.key}Body`)}
                </p>

                <ul className="mt-6 space-y-2 text-sm text-ink/70">
                  {[1, 2, 3].map((n) => (
                    <li key={n} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sun-amber" />
                      {t(`projectsPage.${p.key}Point${n}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </section>

      {/* Additional products — text-only grid */}
      <section className="bg-ink text-sand">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            {t('projectsPage.moreTitle')}
          </h2>
          <p className="mt-4 max-w-2xl text-sand/70">
            {t('projectsPage.moreLead')}
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {extras.map(({ key, Icon }) => (
                <div
                key={key}
                className="rounded-xl border border-sand/10 bg-sand/5 p-6 transition hover:border-sand/25"
                >
                <Icon className="text-sun-amber" size={24} />
                <h3 className="mt-4 font-display text-lg font-bold">
                    {t(`projectsPage.${key}`)}
                </h3>
                <p className="mt-2 text-sm text-sand/70">
                    {t(`projectsPage.${key}Body`)}
                </p>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 text-center">
        <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
          {t('projectsPage.ctaTitle')}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-ink/70">
          {t('projectsPage.ctaBody')}
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-sun-amber px-7 py-3.5 text-sm font-semibold text-ink hover:brightness-95 transition"
        >
          {t('projectsPage.cta')} <ArrowRight size={16} className="rtl:rotate-180" />
        </Link>
      </section>
    </>
  )
}