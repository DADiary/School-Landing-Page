import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/contexts/language-context'

export function MainSection() {
  const [showLearnMore, setShowLearnMore] = useState(false)
  const { t } = useLanguage()

  return (
    <main className="w-full px-3 sm:px-4 md:px-6 lg:px-8 pt-8 pb-12">
      <div className="max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto">
        {/* Hero Section - Back to Vertical Layout */}
        <div className="flex flex-col items-center text-center gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-20 max-w-4xl mx-auto">
          {/* Left side - Text Content */}
          <div className="text-center space-y-4 sm:space-y-5 md:space-y-6">
            {/* Startup School Logo - Much Smaller */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-black dark:text-white">
              {t('main.title')}
            </h1>
            
            {/* Main tagline - Much Smaller */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-founders-red tracking-wide">
              {t('main.tagline')}
            </p>
            
            {/* Brief description - Much Smaller */}
            <p className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              {t('main.description')}
            </p>
          </div>

          {/* Action buttons - Centered */}
          <div className="flex flex-col items-center space-y-3">
            {/* Small screens (mobile + tablet): Side by side buttons */}
            <div className="flex flex-row lg:hidden gap-3 w-full max-w-md justify-center">
              {/* Apply to Fall 2025 - Mobile */}
              <button className="group relative px-4 py-2.5 text-sm font-semibold text-white
                               bg-founders-red hover:bg-founders-red/90
                               backdrop-blur-xl border border-founders-red/30
                               rounded-full shadow-lg
                               hover:shadow-xl hover:scale-105
                               transition-all duration-300 ease-out
                               active:scale-95 flex-1">
                <span className="relative z-10">{t('header.apply')}</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {/* Learn More - Small screens */}
              <button 
                onClick={() => setShowLearnMore(!showLearnMore)}
                className="group relative px-4 py-2.5 text-sm font-medium text-black dark:text-white
                           bg-white/40 dark:bg-white/10 backdrop-blur-xl 
                           border border-white/50 dark:border-white/20
                           rounded-full shadow-lg
                           hover:bg-white/60 dark:hover:bg-white/20 
                           hover:border-white/70 dark:hover:border-white/30
                           hover:shadow-xl hover:scale-105
                           transition-all duration-300 ease-out
                           active:scale-95 flex items-center gap-2 flex-1 justify-center"
              >
                <span className="relative z-10">{t('main.learnMore')}</span>
                <svg 
                  className={`w-4 h-4 text-current transition-transform duration-300 ${
                    showLearnMore ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neutral-100/20 to-neutral-200/20 dark:from-neutral-800/20 dark:to-neutral-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            {/* Large screens only: Stacked buttons */}
            <div className="hidden lg:flex flex-col items-center space-y-3 w-full">
              {/* Apply to Fall 2025 - Primary CTA */}
              <div className="flex justify-center w-full">
                <button className="group relative px-6 lg:px-8 py-2.5 lg:py-3 text-sm lg:text-base font-semibold text-white
                                 bg-founders-red hover:bg-founders-red/90
                                 backdrop-blur-xl border border-founders-red/30
                                 rounded-full shadow-lg
                                 hover:shadow-xl hover:scale-105
                                 transition-all duration-300 ease-out
                                 active:scale-95 w-full lg:w-auto max-w-xs">
                  <span className="relative z-10">{t('header.apply')}</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>

              {/* Learn More Button */}
              <div className="flex flex-col items-center w-full">
                <button 
                  onClick={() => setShowLearnMore(!showLearnMore)}
                  className="group relative px-4 lg:px-6 py-2 lg:py-2.5 text-sm lg:text-base font-medium text-black dark:text-white
                             bg-white/40 dark:bg-white/10 backdrop-blur-xl 
                             border border-white/50 dark:border-white/20
                             rounded-full shadow-lg
                             hover:bg-white/60 dark:hover:bg-white/20 
                             hover:border-white/70 dark:hover:border-white/30
                             hover:shadow-xl hover:scale-105
                             transition-all duration-300 ease-out
                             active:scale-95 flex items-center gap-2 w-full lg:w-auto max-w-xs justify-center"
                >
                  <span className="relative z-10">{t('main.learnMore')}</span>
                  <svg 
                    className={`w-3 h-3 lg:w-4 lg:h-4 text-current transition-transform duration-300 ${
                      showLearnMore ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neutral-100/20 to-neutral-200/20 dark:from-neutral-800/20 dark:to-neutral-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>

            {/* Expandable Learn More Content - Full Width */}
            <div className={`transition-all duration-500 ease-in-out transform origin-top mt-2 w-full
                            ${showLearnMore 
                              ? 'max-h-96 opacity-100 scale-y-100 translate-y-0' 
                              : 'max-h-0 opacity-0 scale-y-95 -translate-y-2 pointer-events-none overflow-hidden'}`}>
              <div className="flex flex-col md:flex-row gap-2 md:gap-3 items-center justify-center">
                {/* Program Details */}
                <Link 
                  to="/program-details"
                  className="group relative px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-medium text-black dark:text-white
                                 bg-white/40 dark:bg-white/10 backdrop-blur-xl 
                                 border border-white/50 dark:border-white/20
                                 rounded-full shadow-lg
                                 hover:bg-white/60 dark:hover:bg-white/20 
                                 hover:border-white/70 dark:hover:border-white/30
                                 hover:shadow-xl hover:scale-105
                                 transition-all duration-300 ease-out
                                 active:scale-95 w-full md:w-auto md:min-w-32 max-w-xs text-center">
                  <span className="relative z-10">{t('main.programDetails')}</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neutral-100/20 to-neutral-200/20 dark:from-neutral-800/20 dark:to-neutral-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                {/* Alumni Stories */}
                <Link 
                  to="/alumni-stories"
                  className="group relative px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-medium text-black dark:text-white
                                 bg-white/40 dark:bg-white/10 backdrop-blur-xl 
                                 border border-white/50 dark:border-white/20
                                 rounded-full shadow-lg
                                 hover:bg-white/60 dark:hover:bg-white/20 
                                 hover:border-white/70 dark:hover:border-white/30
                                 hover:shadow-xl hover:scale-105
                                 transition-all duration-300 ease-out
                                 active:scale-95 w-full md:w-auto md:min-w-32 max-w-xs text-center">
                  <span className="relative z-10">{t('main.alumniStories')}</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neutral-100/20 to-neutral-200/20 dark:from-neutral-800/20 dark:to-neutral-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* What we are looking for - Pointer Section */}
        <div className="text-center mb-3 sm:mb-4">
          <div className="inline-flex flex-col items-center space-y-2 sm:space-y-3">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-neutral-700 dark:text-neutral-300">
              {t('main.whatWeLookFor')}
            </h3>
            
            {/* Animated Down Arrow */}
            <div className="flex flex-col items-center space-y-1">
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-founders-red dark:text-white animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <div className="w-0.5 h-3 sm:h-4 md:h-6 bg-gradient-to-b from-founders-red dark:from-white to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Request for Startups Section - Tighter Spacing */}
        <div className="w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-full mx-auto bg-white/30 dark:bg-white/5 backdrop-blur-xl 
                        border border-white/40 dark:border-white/15 rounded-2xl md:rounded-3xl
                        p-3 sm:p-4 md:p-5 lg:p-6 shadow-2xl
                        hover:bg-white/40 dark:hover:bg-white/10 
                        hover:border-white/60 dark:hover:border-white/25
                        transition-all duration-500 ease-out hover:shadow-3xl hover:scale-[1.01]">
          
          {/* Header - Larger Font */}
          <div className="text-center mb-3 sm:mb-4">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-founders-red dark:text-white tracking-wide mb-2 sm:mb-3">
              {t('main.requestForStartups')}
            </h2>
          </div>

          {/* Highlighted intro text - Tighter Spacing */}
          <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto text-center mb-3 sm:mb-4">
            <div className="bg-white/50 dark:bg-white/10 backdrop-blur-md 
                            border border-white/60 dark:border-white/20 
                            rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg
                            hover:bg-white/60 dark:hover:bg-white/15
                            transition-all duration-300">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {t('main.requestDescription')}
                <span className="text-founders-red dark:text-white font-medium"> {t('main.applyNow')}</span>.
              </p>
            </div>
          </div>

          {/* AI Verticals Section */}
          <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
            <AIVerticalsSections />
          </div>
        </div>
      </div>
    </main>
  )
}

function AIVerticalsSections() {
  const [openSections, setOpenSections] = useState<string[]>(['industrial'])
  const { t } = useLanguage()

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  return (
    <div className="space-y-2 sm:space-y-3">
      {/* Industrial AI Section */}
      <AccordionSection
        id="industrial"
        title={t('ai.industrial.title')}
        author={t('ai.industrial.author')}
        isOpen={openSections.includes('industrial')}
        onToggle={() => toggleSection('industrial')}
      >
        <IndustrialAIContent />
      </AccordionSection>

      {/* Vertical AI Section */}
      <AccordionSection
        id="vertical"
        title={t('ai.vertical.title')}
        author={t('ai.vertical.author')}
        isOpen={openSections.includes('vertical')}
        onToggle={() => toggleSection('vertical')}
      >
        <VerticalAIContent />
      </AccordionSection>

      {/* Voice AI Section */}
      <AccordionSection
        id="voice"
        title={t('ai.voice.title')}
        author={t('ai.voice.author')}
        isOpen={openSections.includes('voice')}
        onToggle={() => toggleSection('voice')}
      >
        <VoiceAIContent />
      </AccordionSection>
    </div>
  )
}

function AccordionSection({ 
  id, 
  title, 
  author, 
  isOpen, 
  onToggle, 
  children 
}: {
  id: string
  title: string
  author: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}) {
  return (
    <div className="bg-white/20 dark:bg-white/5 backdrop-blur-xl 
                    border border-white/30 dark:border-white/15 rounded-xl md:rounded-2xl
                    shadow-xl hover:shadow-2xl
                    transition-all duration-500 ease-out hover:scale-[1.005]">
      
      {/* Accordion Header - Tighter Spacing */}
      <button
        onClick={onToggle}
        className="w-full p-2 sm:p-3 md:p-4 text-left
                   hover:bg-white/10 dark:hover:bg-white/5
                   transition-all duration-700 rounded-xl md:rounded-2xl
                   focus:outline-none focus:ring-2 focus:ring-founders-red/50"
      >
        <div className={`flex items-center transition-all duration-700 ease-in-out ${
          isOpen ? 'justify-start' : 'justify-center'
        }`}>
          <div className={`transition-all duration-300 ease-out ${
            isOpen ? 'text-left' : 'text-center flex-1'
          }`}>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-founders-red dark:text-white mb-1">
              {title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-founders-red/80 dark:text-white/80">{author}</p>
          </div>
          
          {/* Expand/Collapse Icon */}
          <div className={`flex-shrink-0 transition-all duration-300 ease-out ${
            isOpen ? 'absolute right-2 sm:right-3 md:right-4' : 'ml-auto'
          }`}>
            <svg 
              className={`w-4 h-4 sm:w-5 sm:h-5 text-founders-red dark:text-white transition-transform duration-300 ease-out ${
                isOpen ? 'rotate-180' : ''
              }`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>

      {/* Accordion Content */}
      <div className={`transition-all duration-300 ease-out transform origin-top
                      ${isOpen 
                        ? 'max-h-[4000px] opacity-100 scale-y-100 translate-y-0' 
                        : 'max-h-0 opacity-0 scale-y-95 -translate-y-4 pointer-events-none overflow-hidden'}`}>
        <div className="px-2 sm:px-3 md:px-4 pb-2 sm:pb-3 md:pb-4">
          <div className="border-t border-white/20 dark:border-white/10 pt-2 sm:pt-3 md:pt-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

function IndustrialAIContent() {
  const { t } = useLanguage()
  
  return (
    <div className="animate-in fade-in-0 duration-500">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 xl:gap-12 items-start">
        {/* Text Content */}
        <div className="flex-1 md:flex-[3]">
          <div className="text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base text-left">
            <p>
              {t('ai.industrial.description1')}
            </p>
            <p>
              {t('ai.industrial.description2')}
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="flex-shrink-0 md:flex-[2]">
          <div className="aspect-[9/16] bg-neutral-200 dark:bg-neutral-800 rounded-xl 
                          flex items-center justify-center relative overflow-hidden
                          w-32 sm:w-40 md:w-full md:max-w-xs lg:max-w-sm xl:max-w-md mx-auto
                          hover:bg-neutral-300 dark:hover:bg-neutral-700
                          transition-colors duration-300 cursor-pointer group">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-2 md:space-y-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-founders-red rounded-full flex items-center justify-center
                              group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-neutral-600 dark:text-neutral-400 font-medium text-xs sm:text-sm md:text-base lg:text-lg">
                    {t('ai.industrial.title')}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-500">
                    {t('ai.industrial.watchDemo')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-founders-red/10 opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </div>
  )
}

function VerticalAIContent() {
  const { t } = useLanguage()
  
  return (
    <div className="animate-in fade-in-0 duration-500">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 xl:gap-12 items-start">
        {/* Text Content */}
        <div className="flex-1 md:flex-[3]">
          <div className="text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base text-left">
            <p>
              {t('ai.vertical.description1')}
            </p>
            <p>
              {t('ai.vertical.description2')}
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="flex-shrink-0 md:flex-[2]">
          <div className="aspect-[9/16] bg-neutral-200 dark:bg-neutral-800 rounded-xl 
                          flex items-center justify-center relative overflow-hidden
                          w-32 sm:w-40 md:w-full md:max-w-xs lg:max-w-sm xl:max-w-md mx-auto
                          hover:bg-neutral-300 dark:hover:bg-neutral-700
                          transition-colors duration-300 cursor-pointer group">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-2 md:space-y-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-founders-red rounded-full flex items-center justify-center
                              group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-neutral-600 dark:text-neutral-400 font-medium text-xs sm:text-sm md:text-base lg:text-lg">
                    {t('ai.vertical.title')}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-500">
                    {t('ai.vertical.watchDemo')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-founders-red/10 opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </div>
  )
}

function VoiceAIContent() {
  const { t } = useLanguage()
  
  return (
    <div className="animate-in fade-in-0 duration-500">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 xl:gap-12 items-start">
        {/* Text Content */}
        <div className="flex-1 md:flex-[3]">
          <div className="text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base text-left">
            <p>
              {t('ai.voice.description1')}
            </p>
            <p>
              {t('ai.voice.description2')}
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="flex-shrink-0 md:flex-[2]">
          <div className="aspect-[9/16] bg-neutral-200 dark:bg-neutral-800 rounded-xl 
                          flex items-center justify-center relative overflow-hidden
                          w-32 sm:w-40 md:w-full md:max-w-xs lg:max-w-sm xl:max-w-md mx-auto
                          hover:bg-neutral-300 dark:hover:bg-neutral-700
                          transition-colors duration-300 cursor-pointer group">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-2 md:space-y-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-founders-red rounded-full flex items-center justify-center
                              group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-neutral-600 dark:text-neutral-400 font-medium text-xs sm:text-sm md:text-base lg:text-lg">
                    {t('ai.voice.title')}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-500">
                    {t('ai.voice.watchDemo')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-founders-red/10 opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </div>
  )
}