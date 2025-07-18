import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FounderTestimonialCard } from './founder-testimonial-card'
import { useLanguage } from '@/contexts/language-context'

interface FounderTestimonial {
  id: string
  imageUrl: string
  name: string
  title: string
  company: string
  quote: string
  batch?: string
}

export function FounderTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const { t } = useLanguage()

  // Sample testimonial data with Pexels images
  const testimonials: FounderTestimonial[] = [
    {
      id: '1',
      imageUrl: '/images/founders/Marcel Image.jpg',
      name: 'Marcel Banmann',
      title: 'Co-Founder & CEO',
      company: 'saasmetrix',
      quote: 'Wenn Du Teil eines lebendigen Startup-Netzwerks werden willst, auf der Suche nach Startupwissen und Unterstützung für Deine Gründerreise bist, ist die Founders Foundation der perfekte Ort dafür.',
      batch: 'School to Accelerator #9'
    },
    {
      id: '2',
      imageUrl: '/images/founders/Johannes Image.jpg',
      name: 'Johannes Mailänder',
      title: 'Co-Founder & CMO',
      company: 'Lichtwart',
      quote: 'Je nachdem, ob Du noch am ganz am Anfang stehst oder schon ein starkes Team an deiner Seite hast, hier findest Du das passende Programm für Dich mit Startupswissen und einem starken Netzwerk, das Dir Rückenwind gibt.',
      batch: 'Accelerator #11'
    },
    {
      id: '3',
      imageUrl: '/images/founders/Alexander Wunder Image.jpg',
      name: 'Alexander Wunder',
      title: 'Co-Founder & COO',
      company: 'Synctive',
      quote: 'Mit einem kleinen Gründerteam unserer B2B-Geschäftsidee sind wir in das Founders Lab eingezogen. Dort haben wir mit Experten aus der Industrie ein valides Geschäftsmodell entwickelt, das ein echtes Problem am Markt löst.',
      batch: 'Accelerator #8'
    },
    {
      id: '4',
      imageUrl: '/images/founders/Melvin Image.jpg',
      name: 'Melvin Schwarz',
      title: 'Co-Founder & CEO',
      company: 'VisionAI',
      quote: 'Der Founders Accelerator war für uns der ideale Ort, um einen schnellen Markteintritt zu schaffen und auch der Zugang zu unseren ersten Angelinvestoren hat uns geholfen, extrem viele Fehler zu vermeiden.',
      batch: 'Accelerator #7'
    },
    {
      id: '5',
      imageUrl: '/images/founders/Jon Maycock Image.jpg',
      name: 'Jonathan Maycock',
      title: 'Co-Founder & CEO',
      company: 'margin',
      quote: 'We are part of a vibrant network of startup experts, serial entrepreneurs, and hidden champions that we got to know during our time at the Founders Foundation.',
      batch: 'Accelerator #1'
    },
    {
      id: '6',
      imageUrl: '/images/founders/Torsten Image.jpg',
      name: 'Torsten Bendlin',
      title: 'Co-Founder & CEO',
      company: 'Valuedesk',
      quote: 'Bei der Startup School habe ich meine beiden Co-Founder Dennis und Ingo kennengelernt. Ohne die Founders Foundation wäre vieles für uns unmöglich gewesen. Ich kann die Startup School daher nur wärmstens empfehlen.',
      batch: 'School to Accelerator #2'
    }
  ]

  const totalSlides = testimonials.length

  // Auto-play functionality - SLOWER ROTATION (6 seconds)
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setDirection('right')
      setCurrentIndex(prev => (prev + 1) % totalSlides)
    }, 6000) // Increased from 4000ms to 6000ms

    return () => clearInterval(interval)
  }, [isAutoPlaying, totalSlides])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setDirection('left')
    setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setDirection('right')
    setCurrentIndex(prev => (prev + 1) % totalSlides)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setDirection(index > currentIndex ? 'right' : 'left')
    setCurrentIndex(index)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="mb-16">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
        <div className="flex-1">
          <h2 className="text-2xl lg:text-3xl font-bold text-black dark:text-white mb-2">
            {t('testimonials.title')}
          </h2>
          <p className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300">
            {t('testimonials.description')}
          </p>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex items-center gap-3 justify-center lg:justify-end">
          <button
            onClick={goToPrevious}
            className="p-2 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-md
                     border border-white/50 dark:border-white/20
                     hover:bg-white/60 dark:hover:bg-white/20
                     hover:scale-110 transition-all duration-300
                     text-black dark:text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={goToNext}
            className="p-2 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-md
                     border border-white/50 dark:border-white/20
                     hover:bg-white/60 dark:hover:bg-white/20
                     hover:scale-110 transition-all duration-300
                     text-black dark:text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Testimonial Display - SLIDING CARD */}
      <div className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
        {testimonials.map((testimonial, idx) => {
          // Only render current, previous, and next for performance
          if (idx !== currentIndex && idx !== (currentIndex + 1) % totalSlides && idx !== (currentIndex - 1 + totalSlides) % totalSlides) return null
          let position = 'translate-x-full opacity-0 pointer-events-none';
          if (idx === currentIndex) position = 'translate-x-0 opacity-100 z-10';
          else if (direction === 'right' && idx === (currentIndex - 1 + totalSlides) % totalSlides) position = '-translate-x-full opacity-0 pointer-events-none';
          else if (direction === 'left' && idx === (currentIndex + 1) % totalSlides) position = 'translate-x-full opacity-0 pointer-events-none';
          return (
            <div
              key={testimonial.id}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${position}`}
            >
              <FounderTestimonialCard
                imageUrl={testimonial.imageUrl}
                name={testimonial.name}
                title={testimonial.title}
                company={testimonial.company}
                quote={testimonial.quote}
                batch={testimonial.batch}
              />
            </div>
          )
        })}
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-founders-red dark:bg-white w-6'
                : 'bg-neutral-400 dark:bg-neutral-600 hover:bg-neutral-500 dark:hover:bg-neutral-500'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}