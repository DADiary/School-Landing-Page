
import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { FounderTestimonialsSection } from '@/components/founder-testimonials-section'
import { useTheme } from '@/components/ui/theme-provider'
import { useLanguage } from '@/contexts/language-context'

interface AlumniCompany {
  id: string
  name: string
  logoLight: string
  logoDark?: string
  school: string
  description: string
  website: string
}

export function AlumniStoriesPage() {
  const { theme } = useTheme()
  const { t } = useLanguage()
  
  // Sample alumni data - replace with real data
  const alumniCompanies: AlumniCompany[] = [
    {
      id: '1',
      name: 'Unchained Robotics',
      logoLight: '/images/alumni/logo_unchained-robotics_lightgrey.svg',
      logoDark: '/images/alumni/logo_unchained-robotics_dark.svg',
      school: 'Accelerator #6',
      description: 'Robotics automation platform and marketplace',
      website: 'https://unchainedrobotics.de/'
    },
    {
      id: '2',
      name: 'juna.ai',
      logoLight: '/images/alumni/Juna AI.png',
      logoDark: '/images/alumni/Juna AI-dark.png',
      school: 'Founders Lab',
      description: 'AI agents for factory automation',
      website: 'https://www.juna.ai/'
    },
    {
      id: '3',
      name: 'lemon.markets',
      logoLight: '/images/alumni/lemon markets logo.png',
      logoDark: '/images/alumni/lemon markets logo-dark.png',
      school: 'Founders Lab',
      description: 'Infrastructure for provision of custom investment products',
      website: 'https://www.lemon.markets/en-de'
    },
    {
      id: '4',
      name: 'saasmetrix',
      logoLight: '/images/alumni/saasmetrix.svg',
      logoDark: '/images/alumni/saasmetrix-dark.svg',
      school: 'Spring 2022',
      description: 'SaaS license spend optimization platform',
      website: 'https://www.saasmetrix.io/de/'
    },
    {
      id: '5',
      name: 'VisionAI',
      logoLight: '/images/alumni/VisionAI-Logo.svg',
      logoDark: '/images/alumni/VisionAI-Logo-dark.svg',
      school: 'Fall 2021',
      description: 'Agentic commerce platform',
      website: 'https://www.visionai.co/'
    },
    {
      id: '6',
      name: 'acto',
      logoLight: '/images/alumni/acto logo.svg',
      logoDark: '/images/alumni/acto logo-dark.svg',
      school: 'Spring 2021',
      description: 'AI sales desicion intelligence',
      website: 'https://www.heyacto.com/'
    }
  ]

  const handleCompanyClick = (website: string) => {
    window.open(website, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="w-full px-3 sm:px-4 md:px-6 lg:px-8 pt-8 pb-12">
      <div className="max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-black dark:text-white
                       bg-white/40 dark:bg-white/10 backdrop-blur-xl 
                       border border-white/50 dark:border-white/20
                       rounded-full shadow-lg
                       hover:bg-white/60 dark:hover:bg-white/20 
                       hover:border-white/70 dark:hover:border-white/30
                       hover:shadow-xl hover:scale-105
                       transition-all duration-300 ease-out
                       active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('program.backToHome')}
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black dark:text-white mb-4">
            {t('alumni.title')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-founders-red dark:text-white tracking-wide mb-6">
            {t('alumni.subtitle')}
          </p>
          <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            {t('alumni.description')}
          </p>
        </div>

        {/* Alumni Companies Grid - FIXED TILES */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-xl lg:text-2xl font-bold text-black dark:text-white mb-4">
              {t('alumni.companiesTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {alumniCompanies.map((company) => (
              <div
                key={company.id}
                onClick={() => handleCompanyClick(company.website)}
                className="group relative flex flex-col
                         bg-white/20 dark:bg-white/10 backdrop-blur-md
                         border border-white/20 dark:border-white/10
                         hover:bg-white/30 dark:hover:bg-white/15 
                         hover:border-white/40 dark:hover:border-white/25
                         rounded-xl transition-all duration-300 ease-out
                         hover:scale-[1.02] shadow-lg hover:shadow-xl
                         cursor-pointer min-h-[200px]"
              >
                {/* Content Container - Dynamic Height */}
                <div className="flex flex-col p-3 sm:p-4 flex-1">
                  
                  {/* Company Logo - Static Position */}
                  <div className="mb-3 flex justify-center">
                    <div className="w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 rounded-lg
                                  flex items-center justify-center text-2xl sm:text-3xl
                                  group-hover:scale-110 transition-all duration-300
                                  bg-white/30 dark:bg-white/15 backdrop-blur-md
                                  border border-white/40 dark:border-white/25
                                  group-hover:bg-white/50 dark:group-hover:bg-white/25
                                  shadow-md group-hover:shadow-lg">
                      <img 
                        src={theme === 'dark' && company.logoDark 
                          ? company.logoDark 
                          : company.logoLight}
                        alt={`${company.name} logo`}
                        className="w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-20 object-contain"
                        onError={(e) => {
                          // Fallback to company initials if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white';
                          fallback.textContent = company.name.split(' ').map(word => word[0]).join('').substring(0, 2);
                          target.parentNode?.appendChild(fallback);
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Company Name */}
                  <h3 className="text-xs sm:text-sm font-semibold text-neutral-600 dark:text-neutral-400 mb-2 text-center
                               group-hover:text-founders-red dark:group-hover:text-white
                               transition-colors duration-300">
                    {company.name}
                  </h3>
                  
                  {/* Company Description - FULL TEXT VISIBLE */}
                  <div className="flex-1 mb-2">
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed 
                                 text-center">
                      {company.description}
                    </p>
                  </div>
                  
                  {/* Batch - After description */}
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-2 font-medium text-center">
                    {company.school}
                  </p>
                </div>

                {/* Discover Button - Always Visible at Bottom */}
                <div className="p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full inline-flex items-center justify-center gap-1 px-2 py-2 text-xs font-medium text-white
                                   bg-founders-red hover:bg-founders-red/90
                                   rounded-lg shadow-md
                                   hover:shadow-lg hover:scale-105
                                   transition-all duration-300 ease-out">
                    <span>{t('alumni.discover')}</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: '150+', label: t('alumni.stats.companies') },
            { number: '€50M+', label: t('alumni.stats.funding') },
            { number: '500+', label: t('alumni.stats.jobs') },
            { number: '95%', label: t('alumni.stats.operating') }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/30 dark:bg-white/5 backdrop-blur-xl 
                        border border-white/40 dark:border-white/15 rounded-2xl
                        p-6 shadow-xl hover:shadow-2xl hover:scale-105
                        transition-all duration-300"
            >
              <div className="text-2xl lg:text-3xl font-black text-founders-red dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm lg:text-base text-neutral-700 dark:text-neutral-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Founder Testimonials - FIXED CAROUSEL */}
        <FounderTestimonialsSection />

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/30 dark:bg-white/5 backdrop-blur-xl 
                          border border-white/40 dark:border-white/15 rounded-2xl
                          p-8 lg:p-12 shadow-2xl max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-black dark:text-white mb-4">
              {t('alumni.readyToJoin')}
            </h2>
            <p className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
              {t('alumni.readyDescription')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-3 text-base font-semibold text-white
                               bg-founders-red hover:bg-founders-red/90
                               backdrop-blur-xl border border-founders-red/30
                               rounded-full shadow-lg
                               hover:shadow-xl hover:scale-105
                               transition-all duration-300 ease-out
                               active:scale-95 w-full sm:w-auto">
                <span className="relative z-10">{t('header.apply')}</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <Link 
                to="/program-details"
                className="group relative px-8 py-3 text-base font-medium text-black dark:text-white
                           bg-white/40 dark:bg-white/10 backdrop-blur-xl 
                           border border-white/50 dark:border-white/20
                           rounded-full shadow-lg
                           hover:bg-white/60 dark:hover:bg-white/20 
                           hover:border-white/70 dark:hover:border-white/30
                           hover:shadow-xl hover:scale-105
                           transition-all duration-300 ease-out
                           active:scale-95 w-full sm:w-auto text-center"
              >
                <span className="relative z-10">{t('alumni.learnAboutProgram')}</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neutral-100/20 to-neutral-200/20 dark:from-neutral-800/20 dark:to-neutral-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}