import { Building2, Mail, MapPin, Calendar } from 'lucide-react'
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube 
} from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/founders-foundation',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/foundersfound',
      color: 'hover:text-blue-500 dark:hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/founders.foundation',
      color: 'hover:text-pink-600 dark:hover:text-pink-400'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/foundersfoundation',
      color: 'hover:text-blue-700 dark:hover:text-blue-500'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@foundersfoundation',
      color: 'hover:text-red-600 dark:hover:text-red-400'
    }
  ]

  return (
    <footer className="w-full mt-16 border-t border-white/20 dark:border-white/10">
      <div className="max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12">
        
        {/* Main Footer Content - Flexbox Layout */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12 mb-12">
          
          {/* Left Side - Logo and Address */}
          <div className="flex-shrink-0">
            {/* Logo - Directly Above Address */}
            <a 
              href="https://foundersfoundation.de/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group hover:scale-105 transition-all duration-300 mb-4"
            >
              <div className="bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-xl 
                            border border-white/30 dark:border-white/20 p-2
                            group-hover:bg-white/40 dark:group-hover:bg-white/20
                            transition-all duration-300">
                <img 
                  src="/images/founders-foundation-logo.png"
                  alt="Founders Foundation Logo"
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'w-6 h-6 text-black dark:text-white flex items-center justify-center font-bold text-sm';
                    fallback.textContent = 'FF';
                    target.parentNode?.appendChild(fallback);
                  }}
                />
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white
                           group-hover:text-founders-red transition-colors duration-300">
                Founders Foundation
              </h3>
            </a>
            
            {/* Address - Directly Below Logo */}
            <div className="space-y-2 text-left">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-founders-red dark:text-white flex-shrink-0 mt-0.5" />
                <div className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                  <div>Obernstraße 50</div>
                  <div>33602 Bielefeld</div>
                  <div>{t('common.germany')}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-founders-red dark:text-white flex-shrink-0" />
                <a 
                  href="mailto:info@foundersfoundation.de"
                  className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-founders-red dark:hover:text-white
                           transition-colors duration-300"
                >
                  info@foundersfoundation.de
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Social Links */}
          <div className="flex-1 flex justify-start lg:justify-end">
            {/* Social Links - Horizontal on small screens, move below when overlapping */}
            <div className="flex flex-wrap gap-3 justify-start lg:justify-end">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-white/20 dark:bg-white/10 backdrop-blur-md
                             border border-white/30 dark:border-white/20
                             text-neutral-600 dark:text-neutral-400 ${social.color}
                             hover:bg-white/30 dark:hover:bg-white/20
                             hover:border-white/50 dark:hover:border-white/30
                             hover:scale-110 transition-all duration-300
                             shadow-md hover:shadow-lg`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section - Legal Links */}
        <div className="border-t border-white/20 dark:border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
              <Calendar className="w-4 h-4" />
              <span>© {currentYear} Founders Foundation</span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-6">
              <button className="text-sm text-neutral-600 dark:text-neutral-400 
                               hover:text-founders-red dark:hover:text-white
                               transition-colors duration-300">
                {t('footer.privacyPolicy')}
              </button>
              <button className="text-sm text-neutral-600 dark:text-neutral-400 
                               hover:text-founders-red dark:hover:text-white
                               transition-colors duration-300">
                {t('footer.termsOfService')}
              </button>
              <button className="text-sm text-neutral-600 dark:text-neutral-400 
                               hover:text-founders-red dark:hover:text-white
                               transition-colors duration-300">
                {t('footer.imprint')}
              </button>
            </div>
          </div>

          {/* Built in 2025 Badge */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 
                          bg-white/20 dark:bg-white/10 backdrop-blur-md
                          border border-white/30 dark:border-white/20
                          rounded-full shadow-md">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                {t('footer.builtWith')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}