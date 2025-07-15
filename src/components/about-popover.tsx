import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

export default function AboutPopover() {
  const [isHovered, setIsHovered] = useState(false)
  const { t } = useLanguage()

  return (
    <div className="relative">
      <button
        className="px-3 sm:px-4 py-2 text-sm font-medium text-black dark:text-neutral-200 
                   bg-white/20 dark:bg-white/5 backdrop-blur-md border border-white/30 dark:border-white/10
                   rounded-lg hover:bg-white/30 dark:hover:bg-white/10 hover:border-white/50 dark:hover:border-white/20
                   hover:text-founders-red dark:hover:text-founders-red
                   transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg
                   active:scale-95"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {t('header.about')}
      </button>
      
      {isHovered && (
        <div 
          className="absolute top-full left-0 mt-2 w-64 sm:w-72 
                     bg-white/80 dark:bg-black/80 backdrop-blur-xl 
                     border border-white/30 dark:border-white/10
                     rounded-xl shadow-2xl z-50 
                     transform transition-all duration-300 ease-out
                     animate-in slide-in-from-top-2 fade-in-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Invisible bridge to prevent hover gaps */}
          <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent" />
          
          <div className="p-4 sm:p-5">
            <h3 className="text-founders-red font-semibold mb-2 sm:mb-3 text-base sm:text-lg">{t('about.title')}</h3>
            <p className="text-neutral-700 dark:text-neutral-300 text-xs leading-relaxed mb-3 sm:mb-4">
              {t('about.description')}
            </p>
            <a 
              href="https://foundersfoundation.de/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-founders-red hover:text-founders-red/80 
                         text-xs font-medium transition-all duration-200 hover:scale-105"
            >
              {t('about.learnMore')}
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}