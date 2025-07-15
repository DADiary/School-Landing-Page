import { useState, useEffect } from 'react'
import AboutPopover from './about-popover'
import { ThemeToggle } from './theme-toggle'
import { LanguageToggle } from './language-toggle'
import { useLanguage } from '@/contexts/language-context'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileCollapsed, setIsMobileCollapsed] = useState(false)
  const [showApplyButtonInHeader, setShowApplyButtonInHeader] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const shouldCollapse = scrollTop > 100
      
      setIsScrolled(scrollTop > 20)
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
                        ${isMobileCollapsed && window.innerWidth < 768 
                          ? 'h-12' 
                          : 'h-14 sm:h-16'}`}>
          {/* Logo and About */}
          <div className="flex items-center justify-center flex-1">
            <div className={`flex items-center transition-all duration-500 ease-out
                            ${isMobileCollapsed && window.innerWidth < 768 
                              ? 'gap-3' 
                              : 'gap-4 sm:gap-6'}`}>
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
                              ${isMobileCollapsed && window.innerWidth < 768 
                                ? 'p-1' 
                                : 'p-1.5 sm:p-2'}`}>
                <img 
                  src="/images/founders-foundation-logo.png"
                  alt="Founders Foundation Logo"
                  className={`transition-all duration-500 object-contain
                             ${isMobileCollapsed && window.innerWidth < 768 
                               ? 'w-4 h-4' 
                               : 'w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6'}`}
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = `text-black dark:text-white transition-all duration-500 flex items-center justify-center font-bold text-xs ${isMobileCollapsed && window.innerWidth < 768 ? 'text-xs' : 'text-xs sm:text-sm lg:text-base'}`;
                    fallback.textContent = 'FF';
                    target.parentNode?.appendChild(fallback);
                  }}
                />
              </div>
              <span className={`font-semibold text-black dark:text-white 
                               group-hover:text-founders-red transition-all duration-300
                               ${isMobileCollapsed && window.innerWidth < 768 
                                 ? 'text-sm' 
                                 : 'text-sm sm:text-base lg:text-lg'}`}>
                Founders Foundation
              </span>
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

          {/* Right side controls */}
          <div className={`flex items-center transition-all duration-500 ease-out
                          ${isMobileCollapsed && window.innerWidth < 768 
                            ? 'gap-2' 
                            : 'gap-3 sm:gap-4'}`}>
            {/* Apply to Fall 2025 Button - Shows when scrolled past main button */}
            <div className={`transition-all duration-500 ease-in-out transform
                           ${showApplyButtonInHeader 
                             ? 'opacity-100 scale-100 translate-x-0' 
                             : 'opacity-0 scale-95 translate-x-4 pointer-events-none'}`}>
              <button className="group relative px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs font-semibold text-white
                               bg-founders-red hover:bg-founders-red/90
                               backdrop-blur-xl border border-founders-red/30
                               rounded-lg shadow-lg
                               hover:shadow-xl hover:scale-105
                               transition-all duration-300 ease-out
                               active:scale-95">
                <span className="relative z-10 hidden sm:inline">{t('header.apply')}</span>
                <span className="relative z-10 sm:hidden">{t('header.applyShort')}</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
            
            {/* Language Toggle - Hide on mobile when collapsed */}
            <div className={`transition-all duration-500 ease-out
                           ${isMobileCollapsed && window.innerWidth < 768 
                             ? 'opacity-0 scale-95 pointer-events-none' 
                             : 'opacity-100 scale-100'}`}>
              <LanguageToggle />
            </div>
            
            {/* Theme Toggle - Always visible but smaller when collapsed */}
            <div className={`transition-all duration-500 ease-out
                           ${isMobileCollapsed && window.innerWidth < 768 
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