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
  const { t } = useLanguage()

  // Sample testimonial data with Pexels images
  const testimonials: FounderTestimonial[] = [
    {
      id: '1',
      imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      name: 'Sarah Chen',
      title: 'CEO & Co-Founder',
      company: 'TechFlow AI',
      quote: 'Startup School gave me the framework and confidence to turn my AI idea into a thriving business. The mentorship was invaluable, and the network I built continues to support my journey.',
      batch: 'Fall 2023'
    },
    {
      id: '2',
      imageUrl: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      name: 'Marcus Weber',
      title: 'Founder',
      company: 'GreenEnergy Solutions',
      quote: 'The program taught me how to validate my market assumptions and build a sustainable business model. Within 6 months of graduating, we secured our first major enterprise client.',
      batch: 'Spring 2023'
    },
    {
      id: '3',
      imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      name: 'Elena Rodriguez',
      title: 'CEO',
      company: 'HealthTech Pro',
      quote: 'What sets Startup School apart is the focus on real-world application. Every week, we were implementing what we learned, which accelerated our product development significantly.',
      batch: 'Fall 2022'
    },
    {
      id: '4',
      imageUrl: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=400',
      name: 'David Kim',
      title: 'Co-Founder & CTO',
      company: 'FinanceFlow',
      quote: 'The technical mentorship helped us avoid common pitfalls in fintech. Our platform launched 3 months ahead of schedule thanks to the guidance we received.',
      batch: 'Spring 2022'
    },
    {
      id: '5',
      imageUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      name: 'Lisa Thompson',
      title: 'Founder & CEO',
      company: 'EduTech Innovation',
      quote: 'The program connected me with investors who understood our vision. We raised our seed round just 2 months after Demo Day, and our platform now serves over 10,000 students.',
      batch: 'Fall 2021'
    },
    {
      id: '6',
      imageUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      name: 'Ahmed Hassan',
      title: 'CEO',
      company: 'LogiChain',
      quote: 'Startup School taught me the importance of customer discovery. By the end of the program, we had validated our solution with 50+ potential customers and secured our first pilot project.',
      batch: 'Spring 2021'
    }
  ]

  const totalSlides = testimonials.length

  // Auto-play functionality - SLOWER ROTATION (6 seconds)
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalSlides)
    }, 6000) // Increased from 4000ms to 6000ms

    return () => clearInterval(interval)
  }, [isAutoPlaying, totalSlides])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(prev => (prev + 1) % totalSlides)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
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

      {/* Testimonial Display - SINGLE CARD */}
      <div className="relative min-h-[300px] flex items-center justify-center">
        <div className="w-full">
          <FounderTestimonialCard
            imageUrl={testimonials[currentIndex].imageUrl}
            name={testimonials[currentIndex].name}
            title={testimonials[currentIndex].title}
            company={testimonials[currentIndex].company}
            quote={testimonials[currentIndex].quote}
            batch={testimonials[currentIndex].batch}
          />
        </div>
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