import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  const links = [
    { to: '/',         label: t('nav.home') },
    { to: '/about',    label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/contact',  label: t('nav.contact') },
  ]

  return (
    <header className="sticky top-0 z-50 bg-sand/85 backdrop-blur border-b border-mist/40">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-5 py-4">

        <Link to="/" className="flex items-center gap-3">
          <img src="/brand/hero-bg.svg" alt="" className="h-9 w-9" />
          <span className="font-display font-extrabold text-xl text-ink">
            Smart Land
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive ? 'text-deep-teal' : 'text-ink/70 hover:text-ink'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="rounded-full bg-sun-amber text-ink px-4 py-2 text-sm font-semibold hover:brightness-95 transition"
            >
              {t('nav.cta')}
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden px-5 pb-4 space-y-2 border-t border-mist/40">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                onClick={() => setOpen(false)}
                className="block py-2 text-ink/80"
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}