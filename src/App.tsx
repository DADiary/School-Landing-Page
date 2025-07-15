import { Routes, Route } from 'react-router-dom'
import { Header } from '@/components/header'
import { HomePage } from '@/pages/HomePage'
import { ProgramDetailsPage } from '@/pages/ProgramDetailsPage'
import { AlumniStoriesPage } from '@/pages/AlumniStoriesPage'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { LanguageProvider } from '@/contexts/language-context'
import { Footer } from '@/components/footer'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider defaultTheme="light" storageKey="startup-school-theme">
        <div className="min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/program-details" element={<ProgramDetailsPage />} />
            <Route path="/alumni-stories" element={<AlumniStoriesPage />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App