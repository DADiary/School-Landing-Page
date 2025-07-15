import { useState } from 'react'
import { Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="relative">
      <button
        onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-black dark:text-white
                   bg-white/20 dark:bg-white/10 backdrop-blur-md 
                   border border-white/30 dark:border-white/20 rounded-lg
                   hover:bg-white/30 dark:hover:bg-white/15 
                   hover:border-white/50 dark:hover:border-white/30
                   transition-all duration-300 ease-out hover:scale-105
                   focus:outline-none focus:ring-2 focus:ring-founders-red/50"
        aria-label="Toggle language"
      >
        <Globe className="w-4 h-4" />
        <span className="uppercase font-semibold">
          {language}
        </span>
      </button>
    </div>
  )
}