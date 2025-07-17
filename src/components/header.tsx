import { useState, useEffect } from 'react'
import AboutPopover from './about-popover'
import { ThemeToggle } from './theme-toggle'
import { LanguageToggle } from './language-toggle'
import { useTheme } from '@/components/ui/theme-provider'
import { useLanguage } from '@/contexts/language-context'

export function Header() {
  const [isMobileCollapsed, setIsMobileCollapsed] = useState(false)
  const [showApplyButtonInHeader, setShowApplyButtonInHeader] = useState(false)
  const { theme } = useTheme()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const shouldCollapse = scrollTop > 100
      
      setIsMobileCollapsed(shouldCollapse)
      setShowApplyButtonInHeader(scrollTop > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ease-out
                        ${isMobileCollapsed && typeof window !== 'undefined' && window.innerWidth < 768 
                          ? 'h-12' 
                          : 'h-14 sm:h-16'}`}>
          {/* Logo and About */}
          <div className="flex items-center justify-center flex-1 min-w-0">
            <div className={`flex items-center transition-all duration-500 ease-out
                            ${isMobileCollapsed && window.innerWidth < 768 
                              ? 'gap-3' 
                              : 'gap-3 sm:gap-4'}`}> 
              {/* Logo - now links to Founders Foundation */}
              <a 
                href="https://foundersfoundation.de/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center group transition-all duration-500 hover:scale-105
                           ${isMobileCollapsed && window.innerWidth < 768 
                             ? 'gap-2' 
                             : 'gap-2 sm:gap-3'}`}
              >
                <div className={`bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl 
                                border border-white/30 dark:border-white/20 
                                group-hover:bg-white/40 dark:group-hover:bg-white/20 
                                group-hover:shadow-lg transition-all duration-300
                                ${isMobileCollapsed 
                                  ? 'p-1' 
                                  : 'p-1.5 sm:p-2'}`}>
                  <img 
                    src={theme === 'dark' 
                      ? "/images/foundersfoundation_logo_w.png" 
                      : "/images/founders-foundation-logo.png"}
                    alt="Founders Foundation Logo"
                    className={`transition-all duration-500 object-contain
                               ${isMobileCollapsed 
                                 ? 'h-5 w-auto' 
                                 : 'h-7 w-auto sm:h-8 lg:h-9'}`}
                    style={{ aspectRatio: '114/30' }}
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = `text-black dark:text-white transition-all duration-500 flex items-center justify-center font-bold ${isMobileCollapsed ? 'text-sm' : 'text-base sm:text-lg lg:text-xl'}`;
                      fallback.textContent = 'FF';
                      target.parentNode?.appendChild(fallback);
                    }}
                  />
                </div>
              </a>
              {/* About popover - Hide on mobile when collapsed */}
              <div className={`transition-all duration-500 ease-out
                             ${isMobileCollapsed && window.innerWidth < 768 
                               ? 'opacity-0 scale-95 pointer-events-none' 
                               : 'opacity-100 scale-100'}`}>
                <AboutPopover />
              </div>
            </div>
          </div>
          {/* Right side controls - centered */}
          <div className={`flex flex-1 items-center justify-center transition-all duration-500 ease-out
                          ${isMobileCollapsed && typeof window !== 'undefined' && window.innerWidth < 768 
                            ? 'gap-2' 
                            : 'gap-3 sm:gap-4'}`}>
            {/* Apply to Fall 2025 Button - Shows when scrolled past main button */}
            <div className={`transition-all duration-500 ease-in-out transform
                            ${showApplyButtonInHeader 
                              ? 'opacity-100 scale-100 translate-x-0' 
                              : 'opacity-0 scale-95 translate-x-4 pointer-events-none'}`}>
              <a
                href="https://foundersfoundation.de/startup-school-bewerbung/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs font-semibold text-white
                               bg-founders-red hover:bg-founders-red/90
                               backdrop-blur-xl border border-founders-red/30
                               rounded-lg shadow-lg
                               hover:shadow-xl hover:scale-105
                               transition-all duration-300 ease-out
                               active:scale-95 text-center"
              >
                <span className="relative z-10 hidden sm:inline">{t('header.apply')}</span>
                <span className="relative z-10 sm:hidden">{t('header.applyShort')}</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
            {/* Language Toggle - Hide on mobile when collapsed */}
            <div className={`transition-all duration-500 ease-out
                            ${isMobileCollapsed && typeof window !== 'undefined' && window.innerWidth < 768 
                              ? 'opacity-0 scale-95 pointer-events-none' 
                              : 'opacity-100 scale-100'}`}>
              <LanguageToggle />
            </div>
            {/* Theme Toggle - Always visible but smaller when collapsed */}
            <div className={`transition-all duration-500 ease-out
                            ${isMobileCollapsed && typeof window !== 'undefined' && window.innerWidth < 768 
                              ? 'scale-90' 
                              : 'scale-100'}`}>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}