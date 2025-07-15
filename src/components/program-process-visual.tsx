import { Calendar, Hammer, TrendingUp, Trophy, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

export function ProgramProcessVisual() {
  const { t } = useLanguage()
  
  const processSteps = [
    {
      week: t('process.weeks1-2'),
      title: t('program.ideaBlock.title'),
      icon: Calendar,
      color: "bg-blue-500/20 dark:bg-blue-400/20",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      week: t('process.weeks3-6'),
      title: t('program.buildingBlock.title'), 
      icon: Hammer,
      color: "bg-green-500/20 dark:bg-green-400/20",
      iconColor: "text-green-600 dark:text-green-400"
    },
    {
      week: t('process.weeks7-9'),
      title: t('program.growthBlock.title'),
      icon: TrendingUp,
      color: "bg-orange-500/20 dark:bg-orange-400/20",
      iconColor: "text-orange-600 dark:text-orange-400"
    },
    {
      week: t('process.week10'),
      title: t('process.finalPitch'),
      icon: Trophy,
      color: "bg-founders-red/20 dark:bg-founders-red/20",
      iconColor: "text-founders-red dark:text-founders-red"
    }
  ]

  return (
    <section className="mb-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-black dark:text-white mb-4">
          {t('program.journey.title')}
        </h2>
        <p className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
          {t('program.journey.description')}
        </p>
      </div>

      {/* Process Timeline */}
      <div className="relative">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300 via-green-300 via-orange-300 to-founders-red/50 dark:from-blue-400/50 dark:via-green-400/50 dark:via-orange-400/50 dark:to-founders-red/50 -translate-y-1/2 z-0" />
          
          {processSteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="relative z-10 flex flex-col items-center group">
                {/* Step Circle */}
                <div className={`w-20 h-20 lg:w-24 lg:h-24 ${step.color} backdrop-blur-md 
                              border-2 border-white/40 dark:border-white/20 rounded-full 
                              flex items-center justify-center mb-4
                              group-hover:scale-110 group-hover:border-white/60 dark:group-hover:border-white/40
                              transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                  <IconComponent className={`w-8 h-8 lg:w-10 lg:h-10 ${step.iconColor}`} />
                </div>
                
                {/* Step Info */}
                <div className="text-center">
                  <p className="text-xs lg:text-sm text-neutral-500 dark:text-neutral-400 font-medium mb-1">
                    {step.week}
                  </p>
                  <h3 className="text-sm lg:text-base font-bold text-black dark:text-white">
                    {step.title}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon
            const isLast = index === processSteps.length - 1
            
            return (
              <div key={index} className="relative">
                <div className="flex items-center gap-4">
                  {/* Step Circle */}
                  <div className={`w-16 h-16 ${step.color} backdrop-blur-md 
                                border-2 border-white/40 dark:border-white/20 rounded-full 
                                flex items-center justify-center flex-shrink-0
                                shadow-lg`}>
                    <IconComponent className={`w-6 h-6 ${step.iconColor}`} />
                  </div>
                  
                  {/* Step Info */}
                  <div className="flex-1">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium mb-1">
                      {step.week}
                    </p>
                    <h3 className="text-base font-bold text-black dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>
                
                {/* Connection Line for Mobile */}
                {!isLast && (
                  <div className="ml-8 mt-4 mb-2">
                    <ArrowRight className="w-5 h-5 text-neutral-400 dark:text-neutral-500" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Process Summary */}
      <div className="mt-12 text-center">
        <div className="bg-white/30 dark:bg-white/5 backdrop-blur-xl 
                        border border-white/40 dark:border-white/15 rounded-2xl
                        p-6 lg:p-8 shadow-xl max-w-4xl mx-auto">
          <h3 className="text-lg lg:text-xl font-bold text-black dark:text-white mb-3">
            {t('program.journey.support')}
          </h3>
          <p className="text-sm lg:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {t('program.journey.supportDescription')}
          </p>
        </div>
      </div>
    </section>
  )
}