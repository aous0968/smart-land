import { useTranslation } from 'react-i18next'
import {
  Flag, Stethoscope, Languages, Cpu,
  GraduationCap, HeartPulse, Receipt, ShoppingBag, Building2, Sparkles,
} from 'lucide-react'
import ProductMark from '../components/ProductMark'

const timeline = [
  { year: '2011', key: 'timeline2011', Icon: Flag },
  { year: '2015', key: 'timeline2015', Icon: Stethoscope },
  { year: '2019', key: 'timeline2019', Icon: Languages },
  { year: '2023', key: 'timeline2023', Icon: Cpu },
]

const products = [
  { name: 'MyKey',        key: 'pMyKey' },
  { name: 'Smart Signal', key: 'pSignal' },
  { name: 'Welcome',      key: 'pWelcome' },
  { name: 'Sada',         key: 'pSada' },
  { name: 'Hospital MS',  key: 'pHospital' },
  { name: 'Real Estate',  key: 'pRealestate' },
]

export default function About() {
  const { t } = useTranslation()

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-20">
        <h1 className="font-display text-4xl font-extrabold text-ink md:text-6xl">
          {t('about.title')}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink/70">{t('about.lead')}</p>

        <div className="mt-12 aspect-[3/2] w-full overflow-hidden rounded-3xl bg-mist/25">
          <img
            src="/images/about-team.webp"
            alt="Smart Land team"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
            {t('about.storyTitle')}
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-ink/75">
            <p>{t('about.story1')}</p>
            <p>{t('about.story2')}</p>
          </div>
        </div>
      </section>

      <section className="bg-ink text-sand">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            {t('about.timelineTitle')}
          </h2>

          <ol className="mt-12 space-y-10 border-s border-sand/15 ps-8">
            {timeline.map(({ year, key, Icon }) => (
              <li key={year} className="relative">
                <span className="absolute -start-[45px] top-1 flex h-7 w-7 items-center justify-center rounded-full bg-sun-amber text-ink ring-4 ring-ink">
                  <Icon size={14} strokeWidth={2.5} />
                </span>
                <div className="font-display text-2xl font-extrabold text-sun-amber">
                  {year}
                </div>
                <p className="mt-1 text-sand/80">{t(`about.${key}`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
          {t('about.productsTitle')}
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {products.map(({ name, key }, i) => (
            <div
              key={name}
              className="flex items-start gap-4 rounded-xl border border-mist/40 bg-white/50 p-5"
            >
              <ProductMark name={name} size="sm" accent={i === 0} />
              <div>
                <div className="font-display text-lg font-bold text-ink">
                  {name}
                </div>
                <p className="mt-1 text-sm text-ink/65">{t(`about.${key}`)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}