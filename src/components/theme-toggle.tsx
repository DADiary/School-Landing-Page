import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/components/ui/theme-provider'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative w-12 h-7 sm:w-14 sm:h-8 bg-white/20 dark:bg-white/10 backdrop-blur-md 
                 border border-white/30 dark:border-white/20 rounded-full 
                 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg
                 focus:outline-none focus:ring-2 focus:ring-founders-red/50"
      aria-label="Toggle theme"
    >
      {/* Toggle track */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-200 to-orange-300 dark:from-indigo-600 dark:to-purple-600 opacity-60 transition-opacity duration-300" />
      
      {/* Toggle thumb */}
      <div className={`absolute top-0.5 sm:top-1 w-5 h-5 sm:w-6 sm:h-6 bg-white dark:bg-neutral-800 rounded-full shadow-lg
                      transition-all duration-300 ease-out flex items-center justify-center
                      ${isDark ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'}`}>
        <Sun className={`h-2.5 w-2.5 sm:h-3 sm:w-3 text-amber-500 transition-all duration-300 ${isDark ? 'rotate-180 scale-0' : 'rotate-0 scale-100'}`} />
        <Moon className={`absolute h-2.5 w-2.5 sm:h-3 sm:w-3 text-indigo-400 transition-all duration-300 ${isDark ? 'rotate-0 scale-100' : '-rotate-180 scale-0'}`} />
      </div>
    </button>
  )
}