import { useTranslation } from 'react-i18next'
import {
  LayoutGrid, Sparkles, GraduationCap, HeartPulse,
  Building2, ShoppingBag, ArrowRight,
  Search, PenTool, Hammer, LifeBuoy,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  { icon: LayoutGrid,    key: 'custom' },
  { icon: Sparkles,      key: 'ai' },
  { icon: GraduationCap, key: 'elearning' },
  { icon: HeartPulse,    key: 'health' },
  { icon: ShoppingBag,   key: 'ecommerce' },
  { icon: Building2,     key: 'realestate' },
]
const process = [
  { key: 'discover', Icon: Search },
  { key: 'design',   Icon: PenTool },
  { key: 'build',    Icon: Hammer },
  { key: 'support',  Icon: LifeBuoy },
]

export default function Services() {
  const { t } = useTranslation()

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-20">
        <h1 className="font-display text-4xl font-extrabold text-ink md:text-6xl">
          {t('servicesPage.title')}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink/70">
          {t('servicesPage.lead')}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, key }) => (
            <article
              key={key}
              className="rounded-2xl border border-mist/40 bg-white/60 p-7 transition hover:border-deep-teal/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5"
            >
              <Icon className="text-deep-teal" size={28} />
              <h2 className="mt-5 font-display text-xl font-bold text-ink">
                {t(`servicesPage.${key}`)}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {t(`servicesPage.${key}Body`)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink text-sand">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            {t('servicesPage.processTitle')}
          </h2>

          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {process.map(({ key, Icon }, i) => (
                <li key={key}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sand/10 text-sun-amber">
                    <Icon size={20} />
                </div>
                <div className="mt-4 font-display text-3xl font-extrabold text-sun-amber">
                    0{i + 1}
                </div>
                <h3 className="mt-2 font-display text-lg font-bold">
                    {t(`servicesPage.${key}`)}
                </h3>
                <p className="mt-1 text-sm text-sand/70">
                    {t(`servicesPage.${key}Body`)}
                </p>
                </li>
            ))}
        </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 text-center">
        <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
          {t('servicesPage.ctaTitle')}
        </h2>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-sun-amber px-7 py-3.5 text-sm font-semibold text-ink hover:brightness-95 transition"
        >
          {t('servicesPage.cta')} <ArrowRight size={16} className="rtl:rotate-180" />
        </Link>
      </section>
    </>
  )
}