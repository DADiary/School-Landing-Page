import { Quote } from 'lucide-react'

interface FounderTestimonialCardProps {
  imageUrl: string
  name: string
  title: string
  company: string
  quote: string
  batch?: string
}

export function FounderTestimonialCard({
  imageUrl,
  name,
  title,
  company,
  quote,
  batch
}: FounderTestimonialCardProps) {
  return (
    <div className="group relative bg-white/30 dark:bg-white/5 backdrop-blur-xl 
                    border border-white/40 dark:border-white/15 rounded-2xl
                    p-6 lg:p-8 shadow-xl w-full max-w-4xl mx-auto
                    hover:bg-white/40 dark:hover:bg-white/10 
                    hover:border-white/60 dark:hover:border-white/25
                    hover:shadow-2xl hover:scale-[1.02]
                    transition-all duration-500 ease-out">
      
      {/* Main Content Layout */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        
        {/* Left Side - Picture and Company Logo */}
        <div className="flex flex-col items-center lg:items-start flex-shrink-0">
          {/* Profile Image - RECTANGLE */}
          <div className="mb-4">
            <img
              src={imageUrl}
              alt={`${name} - ${title} at ${company}`}
              className="w-24 h-32 lg:w-28 lg:h-36 rounded-xl object-cover
                         border-2 border-white/30 dark:border-white/20
                         group-hover:border-white/50 dark:group-hover:border-white/40
                         transition-all duration-300
                         shadow-lg group-hover:shadow-xl"
            />
          </div>
          
          {/* Company Logo Below Picture */}
          <div className="w-12 h-12 bg-founders-red/10 dark:bg-white/10 
                          rounded-lg flex items-center justify-center
                          group-hover:bg-founders-red/20 dark:group-hover:bg-white/20
                          transition-all duration-300 shadow-md">
            <Quote className="w-6 h-6 text-founders-red dark:text-white" />
          </div>
        </div>
        
        {/* Right Side - Quote and Name/Role */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Quote Text */}
          <div className="mb-6">
            <blockquote className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 
                                 leading-relaxed italic">
              "{quote}"
            </blockquote>
          </div>

          {/* Name and Role Below Quote */}
          <div>
            <h4 className="text-lg lg:text-xl font-semibold text-black dark:text-white 
                         group-hover:text-founders-red dark:group-hover:text-white
                         transition-colors duration-300 mb-1">
              {name}
            </h4>
            <p className="text-sm lg:text-base text-neutral-600 dark:text-neutral-400 
                         font-medium mb-1">
              {title}
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-2">
              {company}
            </p>
            {batch && (
              <p className="text-sm text-founders-red dark:text-white font-medium">
                {batch}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}