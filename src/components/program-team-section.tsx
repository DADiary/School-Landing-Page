import { Mail, Linkedin } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

interface TeamMember {
  id: string
  name: string
  role: string
  title?: string
  imageUrl: string
  bio?: string
  email?: string
  linkedin?: string
}

export function ProgramTeamSection() {
  const { language } = useLanguage()

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Dr. Jan Brinckmann',
      role: language === 'de' ? 'Euer Facilitator' : 'Your program facilitator',
      title: 'Startup School Facilitator',
      imageUrl: '/images/members/Jan_Brinckmann_grau.png',
      linkedin: 'https://www.linkedin.com/in/janbrinckmann/'
    },
    {
      id: '2',
      name: 'Liesa-Marie Ellerbrok',
      role: language === 'de' ? 'Eure Ansprechpartnerin' : 'Your point of contact',
      title: 'Startup School Program Manager',
      imageUrl: '/images/members/Liesa Image.jpg',
      email: 'liesa@foundersfoundation.de',
      linkedin: 'https://www.linkedin.com/in/liesa-marie-ellerbrok-hr/'
    }
  ]

  return (
    <section className="w-full max-w-6xl mx-auto mt-20 mb-20">
      {/* Strong visual break above */}
      <div className="w-full h-2 bg-gradient-to-r from-founders-red/60 to-transparent rounded-full mb-12" />
      <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-8 relative">
        {/* Team Members */}
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex-1 bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-white/40 dark:border-white/15 rounded-2xl shadow-xl p-6 flex flex-row items-center gap-6 min-w-[320px]"
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-2xl border-4 border-white shadow-lg flex-shrink-0"
            />
            <div className="flex flex-col flex-1 min-w-0 text-left justify-start">
              <div className="text-lg sm:text-xl font-bold text-black dark:text-white mb-1 break-words text-left">{member.name}</div>
              {member.title && (
                <div className="text-sm text-neutral-600 dark:text-neutral-300 mb-2 text-left">{member.title}</div>
              )}
              <div className="flex flex-row items-center gap-4 mt-2">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={28} color="#0077B5" />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
                    aria-label="Email"
                  >
                    <Mail size={28} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
        {/* Mentors Link (middle-aligned) */}
        <div className="flex flex-col justify-center items-end min-w-[160px] md:pl-0">
          <a
            href="https://foundersfoundation.de/startup-journey/mentoren/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-founders-red text-white font-semibold shadow-md hover:bg-founders-red/90 transition-all duration-300 whitespace-nowrap text-sm"
          >
            {language === 'de' ? 'Alle Mentor:innen' : 'All mentors'}
          </a>
        </div>
      </div>
    </section>
  )
}