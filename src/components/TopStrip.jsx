import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'
import { Moon, Sun } from 'lucide-react'

export default function TopStrip() {
  const { i18n } = useTranslation()
  const { theme, toggle } = useTheme()
  const isAr = i18n.language === 'ar'

  return (
    <div className="bg-ink text-sand text-xs">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2">

        <div className="flex items-center gap-1">
          <button
            onClick={() => i18n.changeLanguage('en')}
            className={`px-2 py-1 rounded transition ${
              !isAr ? 'text-sun-amber font-semibold' : 'text-sand/60 hover:text-sand'
            }`}
          >
            EN
          </button>
          <span className="text-sand/30">|</span>
          <button
            onClick={() => i18n.changeLanguage('ar')}
            className={`px-2 py-1 rounded transition ${
              isAr ? 'text-sun-amber font-semibold' : 'text-sand/60 hover:text-sand'
            }`}
          >
            ع
          </button>
        </div>

        <button
          onClick={toggle}
          className="flex items-center gap-2 text-sand/70 hover:text-sand transition"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>

      </div>
    </div>
  )
}