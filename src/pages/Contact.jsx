import { useTranslation } from 'react-i18next'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 grid gap-12 md:grid-cols-2 md:items-center">
      <div>
        <h1 className="font-display text-4xl font-extrabold text-ink md:text-5xl">
          {t('contact.title')}
        </h1>
        <p className="mt-5 text-lg text-ink/70">{t('contact.lead')}</p>

        <ul className="mt-10 space-y-5">
          <li className="flex items-start gap-4">
            <Mail className="mt-1 text-deep-teal" size={20} />
            <div>
              <div className="text-sm font-semibold text-ink">
                {t('contact.email')}
              </div>
              <div className="text-sm text-ink/65">hello@smartland.example</div>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <MapPin className="mt-1 text-deep-teal" size={20} />
            <div>
              <div className="text-sm font-semibold text-ink">
                {t('contact.address')}
              </div>
              <div className="text-sm text-ink/65">{t('contact.addressValue')}</div>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <Phone className="mt-1 text-deep-teal" size={20} />
            <div>
              <div className="text-sm font-semibold text-ink">
                {t('contact.phone')}
              </div>
              <div className="text-sm text-ink/65">+963 11 000 0000</div>
            </div>
          </li>
        </ul>
      </div>

      <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-mist/25">
        <img
          src="/images/contact-office.webp"
          alt="Smart Land office"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  )
}