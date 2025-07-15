import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Hammer, TrendingUp, Trophy, MessageCircle, Users, Download } from 'lucide-react'
import { ProgramProcessVisual } from '@/components/program-process-visual'
import { ProgramTeamSection } from '@/components/program-team-section'
import { useLanguage } from '@/contexts/language-context'

export function ProgramDetailsPage() {
  const { t } = useLanguage()
  
  const programTiles = [
    {
      icon: Calendar,
      title: t('program.ideaBlock.title'),
      date: t('program.ideaBlock.date'),
      description: t('program.ideaBlock.description')
    },
    {
      icon: Hammer,
      title: t('program.buildingBlock.title'),
      date: t('program.buildingBlock.date'),
      description: t('program.buildingBlock.description')
    },
    {
      icon: TrendingUp,
      title: t('program.growthBlock.title'),
      date: t('program.growthBlock.date'),
      description: t('program.growthBlock.description')
    },
    {
      icon: Trophy,
      title: t('program.finalPitch.title'),
      date: t('program.finalPitch.date'),
      description: t('program.finalPitch.description')
    },
    {
      icon: MessageCircle,
      title: t('program.founderAmas.title'),
      date: t('program.founderAmas.date'),
      description: t('program.founderAmas.description')
    },
    {
      icon: Users,
      title: t('program.expertCoaching.title'),
      date: t('program.expertCoaching.date'),
      description: t('program.expertCoaching.description')
    }
  ]

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
            {t('program.title')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-founders-red dark:text-white tracking-wide mb-6">
            {t('program.subtitle')}
          </p>
          <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            {t('program.description')}
          </p>
        </div>

        {/* Program Process Visual */}
        <ProgramProcessVisual />

        {/* Program Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {programTiles.map((tile, index) => {
            const IconComponent = tile.icon
            return (
              <div
                key={index}
                className="bg-white/30 dark:bg-white/5 backdrop-blur-xl 
                          border border-white/40 dark:border-white/15 rounded-2xl
                          p-6 lg:p-8 shadow-2xl
                          hover:bg-white/40 dark:hover:bg-white/10 
                          hover:border-white/60 dark:hover:border-white/25
                          hover:shadow-3xl hover:scale-[1.02]
                          transition-all duration-500 ease-out
                          group"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-founders-red/10 dark:bg-white/10 
                                rounded-xl flex items-center justify-center
                                group-hover:bg-founders-red/20 dark:group-hover:bg-white/20
                                transition-all duration-300">
                    <IconComponent className="w-6 h-6 lg:w-8 lg:h-8 text-founders-red dark:text-white" />
                  </div>
                </div>

                {/* Title and Date */}
                <div className="mb-3">
                  <h3 className="text-lg lg:text-xl font-bold text-black dark:text-white mb-1">
                    {tile.title}
                  </h3>
                  <p className="text-sm text-founders-red dark:text-white font-medium">
                    {tile.date}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm lg:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {tile.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Program Team Section */}
        <ProgramTeamSection />

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/30 dark:bg-white/5 backdrop-blur-xl 
                          border border-white/40 dark:border-white/15 rounded-2xl
                          p-8 lg:p-12 shadow-2xl max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-black dark:text-white mb-4">
              {t('program.readyToStart')}
            </h2>
            <p className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
              {t('program.readyDescription')}
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
              
              <button className="group relative px-8 py-3 text-base font-medium text-black dark:text-white
                               bg-white/40 dark:bg-white/10 backdrop-blur-xl 
                               border border-white/50 dark:border-white/20
                               rounded-full shadow-lg
                               hover:bg-white/60 dark:hover:bg-white/20 
                               hover:border-white/70 dark:hover:border-white/30
                               hover:shadow-xl hover:scale-105
                               transition-all duration-300 ease-out
                               active:scale-95 w-full sm:w-auto
                               flex items-center gap-2 justify-center"
              >
                <Download className="w-4 h-4" />
                <span className="relative z-10">{t('program.downloadProgram')}</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neutral-100/20 to-neutral-200/20 dark:from-neutral-800/20 dark:to-neutral-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <Link 
                to="/"
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
                <span className="relative z-10">{t('main.learnMore')}</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neutral-100/20 to-neutral-200/20 dark:from-neutral-800/20 dark:to-neutral-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}