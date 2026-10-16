import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto max-w-3xl px-5 py-32 text-center">
      <div className="font-display text-7xl font-extrabold text-deep-teal">
        404
      </div>
      <h1 className="mt-4 font-display text-3xl font-bold text-ink">
        {t('notFound.title')}
      </h1>
      <p className="mt-3 text-ink/70">{t('notFound.body')}</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-deep-teal px-6 py-3 text-sm font-semibold text-sand hover:opacity-90 transition"
      >
        <ArrowLeft size={16} className="rtl:rotate-180" />
        {t('notFound.back')}
      </Link>
    </section>
  )
}