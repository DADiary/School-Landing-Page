
import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { FounderTestimonialsSection } from '@/components/founder-testimonials-section'
import { useTheme } from '@/components/ui/theme-provider'
import { useLanguage } from '@/contexts/language-context'
import { useState, useLayoutEffect, useRef, useEffect } from 'react'
import './AlumniStoriesPage.css';

interface AlumniCompany {
  id: string
  name: string
  logoLight: string
  logoDark?: string
  school: string
  description: string
  website: string
  exited?: boolean
}

export function AlumniStoriesPage() {
  const { theme } = useTheme()
  const { t, language } = useLanguage()
  const [showAll, setShowAll] = useState(false)
  const alumniCompanies: AlumniCompany[] = [
    {
      id: '1',
      name: 'Unchained Robotics',
      logoLight: '/images/alumni/logo_unchained-robotics_lightgrey.svg',
      logoDark: '/images/alumni/logo_unchained-robotics_lightgrey.svg',
      school: 'Accelerator #6',
      description: 'Robotics automation platform and marketplace',
      website: 'https://unchainedrobotics.de/'
    },
    {
      id: '2',
      name: 'stagewise',
      logoLight: '/images/alumni/stagewise logo.svg',
      logoDark: '/images/alumni/stagewise logo.svg',
      school: 'Founders Lab',
      description: 'Frontend coding agent',
      website: 'https://stagewise.io/'
    },
    {
      id: '3',
      name: 'juna.ai',
      logoLight: '/images/alumni/Juna AI.png',
      logoDark: '/images/alumni/Juna AI.png',
      school: 'Founders Lab',
      description: 'AI agents for factory automation',
      website: 'https://www.juna.ai/'
    },
    {
      id: '4',
      name: 'lemon.markets',
      logoLight: '/images/alumni/lemon markets logo.png',
      logoDark: '/images/alumni/lemon markets logo.png',
      school: 'Founders Lab',
      description: 'Infrastructure for provision of custom investment products',
      website: 'https://www.lemon.markets/en-de'
    },
    {
      id: '7',
      name: 'saasmetrix',
      logoLight: '/images/alumni/saasmetrix.svg',
      logoDark: '/images/alumni/saasmetrix.svg',
      school: 'School to Accelerator #9',
      description: 'SaaS license spend optimization platform',
      website: 'https://www.saasmetrix.io/de/',
      exited: true
    },
    {
      id: '8',
      name: 'VisionAI',
      logoLight: '/images/alumni/VisionAI Logo Black.svg',
      logoDark: '/images/alumni/VisionAI-Logo.svg',
      school: 'Accelerator #7',
      description: 'Agentic commerce platform',
      website: 'https://www.visionai.co/'
    },
    {
      id: '5',
      name: 'acto',
      logoLight: '/images/alumni/acto logo.svg',
      logoDark: '/images/alumni/acto logo.svg',
      school: 'Founders Lab',
      description: 'AI sales decision intelligence',
      website: 'https://www.heyacto.com/'
    },
    {
      id: '6',
      name: 'assemblean',
      logoLight: '/images/alumni/assemblean_no_bg.png',
      logoDark: '/images/alumni/assemblean_no_bg.png',
      school: 'Accelerator 2025',
      description: 'AI-powered on-demand manufacturing and assembly',
      website: 'https://assemblean.com/'
    },
    {
      id: '9',
      name: 'Catego',
      logoLight: '/images/alumni/Catego.png',
      logoDark: '/images/alumni/Catego.png',
      school: 'School to Accelerator 2025',
      description: 'SME Category intelligence platform',
      website: 'https://www.catego.org/'
    },
    {
      id: '10',
      name: 'Credular',
      logoLight: '/images/alumni/Credular.png',
      logoDark: '/images/alumni/Credular.png',
      school: 'Accelerator 2025',
      description: 'Co-pilot for service and manufacturing',
      website: 'https://www.credular.de/'
    },
    {
      id: '11',
      name: 'DeepDetectAI',
      logoLight: '/images/alumni/DeepDetectAI_no_bg.png',
      logoDark: '/images/alumni/DeepDetectAI_no_bg.png',
      school: 'School to Accelerator 2025',
      description: 'AI Enterprise deepfake protection',
      website: 'https://deepdetectai.de/'
    },
    {
      id: '14',
      name: 'Valuedesk',
      logoLight: '/images/alumni/valuedesk-logo.png',
      logoDark: '/images/alumni/valuedesk-logo.png',
      school: 'School to Accelerator #2',
      description: 'Enterprise value management and performance solution',
      website: 'https://www.valuedesk.de/'
    },
    {
      id: '12',
      name: 'Evermood',
      logoLight: '/images/alumni/Evermood.svg',
      logoDark: '/images/alumni/Evermood.svg',
      school: 'Accelerator #5',
      description: 'Holistic employee health platform',
      website: 'https://www.evermood.com/de',
      exited: true
    },
    {
      id: '13',
      name: 'Finokapi',
      logoLight: '/images/alumni/Finokapi Logo.png',
      logoDark: '/images/alumni/Finokapi Logo.png',
      school: 'School to Accelerator 2025',
      description: 'AI-native financial controlling for SMEs',
      website: 'https://finokapi.com/'
    },
    {
      id: '15',
      name: 'Lichtwart',
      logoLight: '/images/alumni/LichtWART_1-1-1.png',
      logoDark: '/images/alumni/LichtWART_1-1-1.png',
      school: 'Accelerator #11',
      description: 'IoT-based light and service management',
      website: 'https://lichtwart.com/'
    },
    {
      id: '16',
      name: 'margin',
      logoLight: '/images/alumni/margin_standard.svg',
      logoDark: '/images/alumni/margin_standard.svg',
      school: 'Accelerator #1',
      description: 'Token market making and liquidity provider',
      website: 'https://margin.io/'
    },
    {
      id: '17',
      name: 'Mate',
      logoLight: '/images/alumni/Mate_Black.svg',
      logoDark: '/images/alumni/Mate_Black.svg',
      school: 'TBD',
      description: 'The first no-design content creation software',
      website: 'https://www.mate-studio.com/'
    },
    {
      id: '18',
      name: 'Phaina',
      logoLight: '/images/alumni/PHAINA_schwarz.svg',
      logoDark: '/images/alumni/PHAINA_schwarz.svg',
      school: 'Accelerator #9',
      description: 'Guided selling for B2B commerce',
      website: 'https://phaina.com/'
    },
    {
      id: '19',
      name: 'Puraite',
      logoLight: '/images/alumni/Puraite-Logo.png',
      logoDark: '/images/alumni/Puraite-Logo.png',
      school: 'School to Accelerator 2025',
      description: 'AI-powered real time medical evidence',
      website: 'https://puraite.com/'
    },
    {
      id: '20',
      name: 'semalytix',
      logoLight: '/images/alumni/semalytix_grey.svg',
      logoDark: '/images/alumni/semalytix_grey.svg',
      school: 'Accelerator #2',
      description: 'AI patient and physician experience insights',
      website: 'https://semalytix.com/'
    },
    {
      id: '21',
      name: 'synctive',
      logoLight: '/images/alumni/synctive-logo.svg',
      logoDark: '/images/alumni/synctive-logo.svg',
      school: 'Accelerator #8',
      description: 'IoT-enabled proactive machinery after-sales',
      website: 'https://synctive.io/'
    },
    {
      id: '22',
      name: 'easimo',
      logoLight: '/images/alumni/easimo-logo.svg',
      logoDark: '/images/alumni/easimo-logo.svg',
      school: 'Accelerator #7',
      description: 'All-in-one solution for real estate management',
      website: 'https://easimo.de/'
    },
    {
      id: '23',
      name: 'widgetbook',
      logoLight: '/images/alumni/widgetbook-logo.png',
      logoDark: '/images/alumni/widgetbook-logo.png',
      school: 'Accelerator #9',
      description: 'Open-source Flutter widget builder',
      website: 'https://www.widgetbook.io/'
    },
    {
      id: '24',
      name: 'ladeplan',
      logoLight: '/images/alumni/ladeplan-logo.png',
      logoDark: '/images/alumni/ladeplan-logo.png',
      school: 'Accelerator #11',
      description: 'AI-power planning of electric charging stations',
      website: 'https://ladeplan.com/',
      exited: true
    }
  ]

  const gridRef = useRef<HTMLDivElement>(null);
  const discoverMoreBtnRef = useRef<HTMLButtonElement>(null);
  const alumniHeaderRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    // No longer needed, removed maxHeight logic
  }, [showAll, alumniCompanies.length])
  
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    let timeout: NodeJS.Timeout;
    if (showAll) {
      // EXPAND: set height to current, then to scrollHeight
      grid.style.height = grid.offsetHeight + 'px';
      grid.style.overflow = 'hidden';
      // Force reflow
      void grid.offsetHeight;
      grid.style.transition = 'height 0.7s cubic-bezier(0.4,0,0.2,1)';
      grid.style.height = grid.scrollHeight + 'px';
      timeout = setTimeout(() => {
        grid.style.height = '';
        grid.style.overflow = '';
        grid.style.transition = '';
      }, 700);
    } else {
      // COLLAPSE: set height to current, then to collapsed height
      grid.style.height = grid.offsetHeight + 'px';
      grid.style.overflow = 'hidden';
      void grid.offsetHeight;
      grid.style.transition = 'height 0.7s cubic-bezier(0.4,0,0.2,1)';
      grid.style.height = '0px';
      timeout = setTimeout(() => {
        grid.style.height = '';
        grid.style.overflow = '';
        grid.style.transition = '';
      }, 700);
    }
    return () => clearTimeout(timeout);
  }, [showAll]);

  const handleCompanyClick = (website: string) => {
    window.open(website, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
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
      <div className="mb-6">
        <div className="text-center mb-8">
          <h2 ref={alumniHeaderRef} className="text-xl lg:text-2xl font-bold text-black dark:text-white mb-4">
            {t('alumni.companiesTitle')}
          </h2>
        </div>
        <div className="alumni-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {(showAll ? alumniCompanies : alumniCompanies.slice(0, 8)).map((company, idx) => (
            <div
              key={company.id}
              onClick={() => handleCompanyClick(company.website)}
              className={`group relative flex flex-col
                bg-white/20 dark:bg-neutral-200/30 backdrop-blur-md
                border border-white/20 dark:border-white/10
                hover:bg-white/30 dark:hover:bg-white/15 
                hover:border-white/40 dark:hover:border-white/25
                rounded-xl transition-all duration-300 ease-out
                hover:scale-[1.02] shadow-lg hover:shadow-xl
                cursor-pointer min-h-[200px]
                ${showAll && idx >= 8 ? 'fade-in-tile' : ''}`}
            >
              {/* Exit Badge */}
              {company.exited && (
                <div className="absolute top-5 right-2 z-20 px-4 py-1 bg-founders-red text-white text-xs font-bold rounded-full shadow-md min-w-[56px] text-center">
                  Exit
                </div>
              )}
              {/* Content Container - Dynamic Height */}
              <div className="flex flex-col p-3 sm:p-4">
                {/* Company Logo - Static Position */}
                <div className="mb-3 flex justify-center">
                  <img 
                    src={theme === 'dark' && company.logoDark 
                      ? company.logoDark 
                      : company.logoLight}
                    alt={`${company.name} logo`}
                    className="w-28 h-20 sm:w-36 sm:h-28 md:w-44 md:h-32 object-contain"
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
                {/* Company Name */}
                <h3 className="text-xs sm:text-sm font-semibold text-neutral-600 dark:text-neutral-400 mb-2 text-center
                  group-hover:text-founders-red dark:group-hover:text-white
                  transition-colors duration-300">
                  {company.name}
                </h3>
                {/* Company Description - FULL TEXT VISIBLE */}
                <div className="mb-2">
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed text-center">
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
        {/* Discover More / Show Less Button BELOW the grid */}
        <div className="flex justify-center w-full mt-6">
          {!showAll && alumniCompanies.length > 8 && (
            <button
              ref={discoverMoreBtnRef}
              className="px-6 py-2 rounded-full bg-founders-red text-white font-semibold shadow-lg hover:bg-founders-red/90 transition-all duration-300"
              onClick={() => setShowAll(true)}
            >
              {language === 'de' ? 'Mehr Alumni entdecken' : 'Discover more'}
            </button>
          )}
          {showAll && alumniCompanies.length > 8 && (
            <button
              className="px-6 py-2 rounded-full bg-neutral-300 dark:bg-neutral-700 text-black dark:text-white font-semibold shadow-lg hover:bg-neutral-400 dark:hover:bg-neutral-600 transition-all duration-300 ml-2"
              onClick={() => {
                setShowAll(false);
                setTimeout(() => {
                  if (alumniHeaderRef.current) {
                    alumniHeaderRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 350); // Wait for collapse animation
              }}
            >
              {language === 'de' ? 'Weniger anzeigen' : 'Show Less'}
            </button>
          )}
        </div>
      </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16 mt-32">
          {[
            { number: '150+', label: t('alumni.stats.companies') },
            { number: '€125M+', label: t('alumni.stats.funding') },
            { number: '3.000+', label: t('alumni.stats.jobs') }
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
              <a
                href="https://foundersfoundation.de/startup-school-bewerbung/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-3 text-base font-semibold text-white
                               bg-founders-red hover:bg-founders-red/90
                               backdrop-blur-xl border border-founders-red/30
                               rounded-full shadow-lg
                               hover:shadow-xl hover:scale-105
                               transition-all duration-300 ease-out
                               active:scale-95 w-full sm:w-auto text-center"
              >
                <span className="relative z-10">{t('header.apply')}</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              
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
      </>
    )
  }
