import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'de'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation dictionary
const translations = {
  en: {
    // Header
    'header.about': 'About',
    'header.apply': 'Apply to Fall 2025',
    'header.applyShort': 'Apply',
    
    // About Popover
    'about.title': 'Founders Foundation',
    'about.description': 'The Founders Foundation is Germany\'s leading platform for ambitious entrepreneurs. We connect founders with the resources, network, and expertise they need to build world-class companies.',
    'about.learnMore': 'Learn more',
    
    // Main Section
    'main.title': 'STARTUP SCHOOL',
    'main.tagline': 'From Zero to Startup in 10 weeks',
    'main.description': 'An intensive program that transforms ambitious individuals into successful startup founders through hands-on experience and expert mentorship.',
    'main.learnMore': 'Learn More',
    'main.programDetails': 'Program Details',
    'main.alumniStories': 'Alumni Stories',
    'main.whatWeLookFor': 'What we are looking for',
    'main.requestForStartups': 'REQUEST FOR STARTUPS',
    'main.requestDescription': 'For the first time in the history of the Founders Foundation, we are launching our own request for startups. If you are building in any of these fields, bring deep domain expertise or carry an insatiable drive to move mountains,',
    'main.applyNow': 'apply now',
    
    // AI Verticals
    'ai.industrial.title': 'Industrial AI',
    'ai.industrial.author': 'Dominik Gross',
    'ai.industrial.description1': 'Industrial AI represents the next frontier in manufacturing optimization. We\'re looking for startups leveraging AI to revolutionize industrial processes.',
    'ai.industrial.description2': 'Key areas include computer vision for quality inspection, predictive analytics for equipment maintenance, and intelligent automation systems.',
    'ai.industrial.watchDemo': 'Watch demo',
    
    'ai.vertical.title': 'Vertical AI',
    'ai.vertical.author': 'Simon Scherer',
    'ai.vertical.description1': 'Vertical AI focuses on domain-specific solutions that deeply understand and transform specific industries with built-in expertise.',
    'ai.vertical.description2': 'Priority areas include AI-powered diagnostic tools, intelligent compliance systems, automated legal research, and precision agriculture solutions.',
    'ai.vertical.watchDemo': 'Watch demo',
    
    'ai.voice.title': 'Voice AI',
    'ai.voice.author': 'Stephan Jacquemot',
    'ai.voice.description1': 'Voice AI represents the convergence of natural language processing and conversational intelligence for truly intuitive voice interfaces.',
    'ai.voice.description2': 'Key opportunities include voice-first customer service, specialized voice assistants, real-time translation services, and conversational AI for enterprise applications.',
    'ai.voice.watchDemo': 'Watch demo',
    
    // Program Details Page
    'program.title': 'PROGRAM DETAILS',
    'program.subtitle': 'Everything you need to know about Startup School',
    'program.description': 'Our intensive 10-week program is designed to transform ambitious individuals into successful startup founders through hands-on experience, expert mentorship, and a proven methodology.',
    'program.backToHome': 'Back to Home',
    'program.readyToStart': 'Ready to Start Your Journey?',
    'program.readyDescription': 'Join the next cohort of ambitious entrepreneurs and transform your idea into a successful startup.',
    'program.downloadProgram': 'Download the full program',
    'program.journey.title': 'Our 10-Week Journey',
    'program.journey.description': 'A structured path from idea validation to final pitch, designed to accelerate your startup journey',
    'program.journey.support': 'Comprehensive Support Throughout',
    'program.journey.supportDescription': 'Each phase includes expert coaching, founder AMAs, peer collaboration, and hands-on workshops. You\'ll receive continuous feedback and support to ensure your startup idea evolves into a viable business.',
    'program.team.title': 'Meet Our Program Leads',
    'program.team.description': 'The experienced professionals who will guide you through your startup journey',
    'program.team.additionalSupport': 'Beyond our core team:',
    'program.team.additionalSupportDescription': 'You\'ll also have access to our network of industry experts, successful alumni, and investor mentors who provide specialized guidance throughout the program.',
    
    // Program Blocks
    'program.ideaBlock.title': 'Idea Block',
    'program.ideaBlock.date': '10.10. & 11.10.2025',
    'program.ideaBlock.description': 'In our idea block, you\'ll learn to evaluate what makes a successful business idea, how to determine if there\'s a market and customer demand for it, and what constitutes a successful team.',
    
    'program.buildingBlock.title': 'Building Block',
    'program.buildingBlock.date': '31.10. & 01.11.2025',
    'program.buildingBlock.description': 'By the end of our building block, you\'ll know what the first version of your solution can look like, how to achieve this milestone, and how to reach and inspire the ideal customers for your solution.',
    
    'program.growthBlock.title': 'Growth Block',
    'program.growthBlock.date': '21.11. & 22.11. 2025',
    'program.growthBlock.description': 'In targeted workshops, you\'ll learn what the most important metrics for your business idea are, how to systematically capture and improve them, and what options you have to finance your company.',
    
    'program.finalPitch.title': 'Final Pitch Day',
    'program.finalPitch.date': 'TBA',
    'program.finalPitch.description': 'The Final Pitch Day is the crowning conclusion of Startup School, where your team gets to present your startup idea to a large audience. A jury of investors and corporate representatives will evaluate the pitches and crown the winning team. The winners of the Final Pitch Day receive, in addition to fame & honor, a scholarship for further support within our Founders Foundation Labs.',
    
    'program.founderAmas.title': 'Founder AMAs',
    'program.founderAmas.date': 'Throughout program',
    'program.founderAmas.description': 'In Ask-me-Anything sessions with founders from the focus verticals, you can challenge your idea, gain deep insights into industry challenges, and take away important learnings for your own startup.',
    
    'program.expertCoaching.title': 'Expert Coaching',
    'program.expertCoaching.date': 'Ongoing support',
    'program.expertCoaching.description': 'Our startup coaches offer individual support to challenge ideas, validate problem solutions, and accelerate product development. We provide our resources according to your needs.',
    
    // Process Steps
    'process.weeks1-2': 'Weeks 1-2',
    'process.weeks3-6': 'Weeks 3-6',
    'process.weeks7-9': 'Weeks 7-9',
    'process.week10': 'Week 10',
    'process.finalPitch': 'Final Pitch',
    
    // Alumni Stories Page
    'alumni.title': 'ALUMNI STORIES',
    'alumni.subtitle': 'Success stories from our startup community',
    'alumni.description': 'Meet the innovative companies and inspiring founders who have graduated from our Startup School program and are now making their mark in the entrepreneurial world.',
    'alumni.companiesTitle': 'Our Alumni Companies',
    'alumni.discover': 'DISCOVER',
    'alumni.stats.companies': 'Alumni Companies',
    'alumni.stats.funding': 'Total Funding Raised',
    'alumni.stats.jobs': 'Jobs Created',
    'alumni.stats.operating': 'Still Operating',
    'alumni.readyToJoin': 'Ready to Join Our Alumni Network?',
    'alumni.readyDescription': 'Take the first step towards building your own success story. Apply to our next cohort and join the ranks of innovative entrepreneurs who are changing the world.',
    'alumni.learnAboutProgram': 'Learn About the Program',
    
    // Testimonials
    'testimonials.title': 'What Our Founders Say',
    'testimonials.description': 'Hear directly from the entrepreneurs who have transformed their ideas into successful companies.',
    
    // Footer
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsOfService': 'Terms of Service',
    'footer.imprint': 'Imprint',
    'footer.builtWith': 'Built with ❤️ in 2025',
    'footer.email': 'Email',
    'footer.linkedin': 'LinkedIn',
    
    // Common
    'common.germany': 'Germany',
    'common.email': 'Email',
    'common.linkedin': 'LinkedIn'
  },
  de: {
    // Header
    'header.about': 'Über uns',
    'header.apply': 'Bewirb dich für Herbst 2025',
    'header.applyShort': 'Bewerben',
    
    // About Popover
    'about.title': 'Founders Foundation',
    'about.description': 'Die Founders Foundation ist Deutschlands führende Plattform für ambitionierte Unternehmer. Wir verbinden Gründer mit den Ressourcen, dem Netzwerk und der Expertise, die sie brauchen, um Weltklasse-Unternehmen aufzubauen.',
    'about.learnMore': 'Mehr erfahren',
    
    // Main Section
    'main.title': 'STARTUP SCHOOL',
    'main.tagline': 'Von Null zum Startup in 10 Wochen',
    'main.description': 'Ein intensives Programm, das ambitionierte Personen durch praktische Erfahrung und Expertenbetreuung zu erfolgreichen Startup-Gründern transformiert.',
    'main.learnMore': 'Mehr erfahren',
    'main.programDetails': 'Programmdetails',
    'main.alumniStories': 'Alumni-Geschichten',
    'main.whatWeLookFor': 'Wonach wir suchen',
    'main.requestForStartups': 'REQUEST FOR STARTUPS',
    'main.requestDescription': 'Zum ersten Mal in der Geschichte der Founders Foundation starten wir unseren eigenen Request for Startups. Wenn du in einem dieser Bereiche baust, tiefe Fachkenntnisse mitbringst oder einen unstillbaren Antrieb hast, Berge zu versetzen,',
    'main.applyNow': 'bewirb dich jetzt',
    
    // AI Verticals
    'ai.industrial.title': 'Industrial AI',
    'ai.industrial.author': 'Dominik Gross',
    'ai.industrial.description1': 'Industrial AI repräsentiert die nächste Grenze in der Fertigungsoptimierung. Wir suchen Startups, die KI nutzen, um industrielle Prozesse zu revolutionieren.',
    'ai.industrial.description2': 'Schlüsselbereiche umfassen Computer Vision für Qualitätsprüfung, prädiktive Analytik für Gerätewartung und intelligente Automatisierungssysteme.',
    'ai.industrial.watchDemo': 'Demo ansehen',
    
    'ai.vertical.title': 'Vertical AI',
    'ai.vertical.author': 'Simon Scherer',
    'ai.vertical.description1': 'Vertical AI konzentriert sich auf domänenspezifische Lösungen, die spezifische Branchen mit eingebauter Expertise tiefgreifend verstehen und transformieren.',
    'ai.vertical.description2': 'Prioritätsbereiche umfassen KI-gestützte Diagnosewerkzeuge, intelligente Compliance-Systeme, automatisierte Rechtsrecherche und Präzisionslandwirtschaftslösungen.',
    'ai.vertical.watchDemo': 'Demo ansehen',
    
    'ai.voice.title': 'Voice AI',
    'ai.voice.author': 'Stephan Jacquemot',
    'ai.voice.description1': 'Voice AI repräsentiert die Konvergenz von natürlicher Sprachverarbeitung und konversationeller Intelligenz für wirklich intuitive Sprachschnittstellen.',
    'ai.voice.description2': 'Wichtige Möglichkeiten umfassen sprachzentrierten Kundenservice, spezialisierte Sprachassistenten, Echtzeit-Übersetzungsdienste und konversationelle KI für Unternehmensanwendungen.',
    'ai.voice.watchDemo': 'Demo ansehen',
    
    // Program Details Page
    'program.title': 'PROGRAMMDETAILS',
    'program.subtitle': 'Alles was du über die Startup School wissen musst',
    'program.description': 'Unser intensives 10-Wochen-Programm ist darauf ausgelegt, ambitionierte Personen durch praktische Erfahrung, Expertenbetreuung und eine bewährte Methodik zu erfolgreichen Startup-Gründern zu transformieren.',
    'program.backToHome': 'Zurück zur Startseite',
    'program.readyToStart': 'Bereit, deine Reise zu beginnen?',
    'program.readyDescription': 'Schließe dich der nächsten Kohorte ambitionierter Unternehmer an und verwandle deine Idee in ein erfolgreiches Startup.',
    'program.downloadProgram': 'Vollständiges Programm herunterladen',
    'program.journey.title': 'Unsere 10-Wochen-Reise',
    'program.journey.description': 'Ein strukturierter Weg von der Ideenvalidierung bis zum finalen Pitch, entwickelt um deine Startup-Reise zu beschleunigen',
    'program.journey.support': 'Umfassende Unterstützung durchgehend',
    'program.journey.supportDescription': 'Jede Phase beinhaltet Expertencoaching, Gründer-AMAs, Peer-Zusammenarbeit und praktische Workshops. Du erhältst kontinuierliches Feedback und Unterstützung, um sicherzustellen, dass sich deine Startup-Idee zu einem lebensfähigen Unternehmen entwickelt.',
    'program.team.title': 'Lerne unsere Programmleiter kennen',
    'program.team.description': 'Die erfahrenen Profis, die dich durch deine Startup-Reise führen werden',
    'program.team.additionalSupport': 'Über unser Kernteam hinaus:',
    'program.team.additionalSupportDescription': 'Du hast auch Zugang zu unserem Netzwerk von Branchenexperten, erfolgreichen Alumni und Investor-Mentoren, die spezialisierte Beratung während des gesamten Programms bieten.',
    
    // Program Blocks
    'program.ideaBlock.title': 'Ideen Block',
    'program.ideaBlock.date': '10.10. & 11.10.2025',
    'program.ideaBlock.description': 'In unserem Ideenblock lernst Du zu beurteilen, was eine erfolgreiche Geschäftsidee ist, wie man herausfindet, ob es einen Markt und eine Kundennachfrage dafür gibt und was ein erfolgreiches Team ausmacht.',
    
    'program.buildingBlock.title': 'Building Block',
    'program.buildingBlock.date': '31.10. & 01.11.2025',
    'program.buildingBlock.description': 'Am Ende unseres Building Blocks wirst Du wissen, wie die erste Version Deiner Lösung aussehen kann, wie Du diesen Meilenstein erreichst, und wie Du für Deine Lösung die idealen Kund:innen ansprechen und begeistern kannst.',
    
    'program.growthBlock.title': 'Growth Block',
    'program.growthBlock.date': '21.11. & 22.11. 2025',
    'program.growthBlock.description': 'In gezielten Workshops erfährst Du, was die wichtigsten Kennzahlen Deiner Geschäftsidee sind, wie Du diese systematisch erfassen und verbessern kannst und welche Möglichkeiten Du hast, Dein Unternehmen zu finanzieren',
    
    'program.finalPitch.title': 'Final Pitch Day',
    'program.finalPitch.date': 'TBA',
    'program.finalPitch.description': 'Der Final Pitch Day ist der krönende Abschluss der Startup School, bei dem Dein Team vor großem Publikum Eure Startup Idee vorstellen darf. Eine Jury aus Investor:innen und Corporate Vertreter:innen wird die Pitches bewerten und das Gewinner-Team küren. Die Sieger des Final Pitch Day erhalten neben Ruhm & Ehre ein Scholarship für die weitere Förderung im Rahmen unseres Founders Foundation Labs.',
    
    'program.founderAmas.title': 'Founder AMAs',
    'program.founderAmas.date': 'Während des Programms',
    'program.founderAmas.description': 'In Ask-me-Anything Sessions mit Gründern aus den Fokus-Verticals kannst Du Deine Idee challengen, tiefgreifende Eindrücke in die Herausforderungen der Industrie erfahren und wichtige Learnings für die eigene Gründung mitnehmen.',
    
    'program.expertCoaching.title': 'Experten-Coaching',
    'program.expertCoaching.date': 'Laufende Unterstützung',
    'program.expertCoaching.description': 'Unsere Startup Coaches bieten indivuelle Betreuung, um Ideen zu challengen, Problemlösungen zu validieren und die Entwicklung von Produkten zu beschleunigen. Wir stellen Euch unsere Ressourcen ganz nach Bedarf zur Verfügung.',
    
    // Process Steps
    'process.weeks1-2': 'Wochen 1-2',
    'process.weeks3-6': 'Wochen 3-6',
    'process.weeks7-9': 'Wochen 7-9',
    'process.week10': 'Woche 10',
    'process.finalPitch': 'Final Pitch',
    
    // Alumni Stories Page
    'alumni.title': 'ALUMNI-GESCHICHTEN',
    'alumni.subtitle': 'Erfolgsgeschichten aus unserer Startup-Community',
    'alumni.description': 'Lerne die innovativen Unternehmen und inspirierenden Gründer kennen, die unser Startup School Programm absolviert haben und jetzt ihre Spuren in der Unternehmerwelt hinterlassen.',
    'alumni.companiesTitle': 'Unsere Alumni-Unternehmen',
    'alumni.discover': 'ENTDECKEN',
    'alumni.stats.companies': 'Alumni-Unternehmen',
    'alumni.stats.funding': 'Gesamte Finanzierung',
    'alumni.stats.jobs': 'Geschaffene Arbeitsplätze',
    'alumni.stats.operating': 'Noch aktiv',
    'alumni.readyToJoin': 'Bereit, unserem Alumni-Netzwerk beizutreten?',
    'alumni.readyDescription': 'Mache den ersten Schritt zum Aufbau deiner eigenen Erfolgsgeschichte. Bewirb dich für unsere nächste Kohorte und schließe dich den Reihen innovativer Unternehmer an, die die Welt verändern.',
    'alumni.learnAboutProgram': 'Mehr über das Programm erfahren',
    
    // Testimonials
    'testimonials.title': 'Was unsere Gründer sagen',
    'testimonials.description': 'Höre direkt von den Unternehmern, die ihre Ideen in erfolgreiche Unternehmen verwandelt haben.',
    
    // Footer
    'footer.privacyPolicy': 'Datenschutz',
    'footer.termsOfService': 'Nutzungsbedingungen',
    'footer.imprint': 'Impressum',
    'footer.builtWith': 'Mit ❤️ gebaut in 2025',
    'footer.email': 'E-Mail',
    'footer.linkedin': 'LinkedIn',
    
    // Common
    'common.germany': 'Deutschland',
    'common.email': 'E-Mail',
    'common.linkedin': 'LinkedIn'
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('startup-school-language')
    return (saved as Language) || 'en'
  })

  useEffect(() => {
    localStorage.setItem('startup-school-language', language)
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}