import { useTranslation } from 'react-i18next'
import { Mail, MapPin } from 'lucide-react'
export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-ink text-sand">
      <div className="mx-auto max-w-6xl px-5 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <img src="/brand/logo-dark.svg" alt="Smart Land" className="h-10" />
          <p className="mt-4 text-sm text-sand/70">{t('footer.tagline')}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-mist">
            {t('footer.company')}
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-sand/80">
            <li>{t('nav.about')}</li>
            <li>{t('nav.services')}</li>
            <li>{t('nav.projects')}</li>
            <li>{t('nav.contact')}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-mist">
            {t('footer.contact')}
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-sand/80">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-mist" /> hello@smartland.example
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-mist" /> Damascus, Syria
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-sand/10 py-4 text-center text-xs text-sand/50">
        © {new Date().getFullYear()} Smart Land. {t('footer.rights')}
      </div>
    </footer>
  )
}