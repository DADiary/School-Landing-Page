import { Mail, Linkedin } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

interface TeamMember {
  id: string
  name: string
  role: string
  title: string
  imageUrl: string
  bio: string
  email?: string
  linkedin?: string
}

export function ProgramTeamSection() {
  const { t } = useLanguage()
  
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Dr. Sarah Mitchell',
      role: 'Program Facilitator',
      title: 'Startup Ecosystem Expert',
      imageUrl: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With over 15 years of experience in startup acceleration and venture capital, Sarah has guided hundreds of entrepreneurs from idea to successful exit. She holds a PhD in Business Innovation and has been featured in Forbes and TechCrunch.',
      email: 'sarah.mitchell@foundersfoundation.de',
      linkedin: 'https://linkedin.com/in/sarahmitchell'
    },
    {
      id: '2', 
      name: 'Marcus Weber',
      role: 'Program Manager',
      title: 'Operations & Community Lead',
      imageUrl: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Marcus ensures every aspect of the program runs smoothly while building strong connections within our startup community. A former founder himself, he understands the challenges entrepreneurs face and creates an environment where innovation thrives.',
      email: 'marcus.weber@foundersfoundation.de',
      linkedin: 'https://linkedin.com/in/marcusweber'
    }
  ]

  return (
    <section className="mb-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-black dark:text-white mb-4">
          {t('program.team.title')}
        </h2>
        <p className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
          {t('program.team.description')}
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="group bg-white/30 dark:bg-white/5 backdrop-blur-xl 
                      border border-white/40 dark:border-white/15 rounded-2xl
                      p-6 lg:p-8 shadow-2xl
                      hover:bg-white/40 dark:hover:bg-white/10 
                      hover:border-white/60 dark:hover:border-white/25
                      hover:shadow-3xl hover:scale-[1.02]
                      transition-all duration-500 ease-out"
          >
            {/* Profile Section */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img
                  src={member.imageUrl}
                  alt={`${member.name} - ${member.role}`}
                  className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl object-cover
                           border-3 border-white/30 dark:border-white/20
                           group-hover:border-white/50 dark:group-hover:border-white/40
                           transition-all duration-300
                           shadow-lg group-hover:shadow-xl group-hover:scale-105"
                />
              </div>

              {/* Name and Role */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl lg:text-2xl font-bold text-black dark:text-white mb-2
                             group-hover:text-founders-red dark:group-hover:text-white
                             transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-base lg:text-lg text-founders-red dark:text-white font-semibold mb-1">
                  {member.role}
                </p>
                <p className="text-sm lg:text-base text-neutral-600 dark:text-neutral-400 font-medium">
                  {member.title}
                </p>
              </div>
            </div>

            {/* Bio */}
            <div className="mb-6">
              <p className="text-sm lg:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {member.bio}
              </p>
            </div>

            {/* Contact Links */}
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-black dark:text-white
                           bg-white/40 dark:bg-white/10 backdrop-blur-md 
                           border border-white/50 dark:border-white/20
                           rounded-lg shadow-md
                           hover:bg-white/60 dark:hover:bg-white/20 
                           hover:border-white/70 dark:hover:border-white/30
                           hover:shadow-lg hover:scale-105
                           transition-all duration-300 ease-out
                           active:scale-95"
                >
                  <Mail className="w-4 h-4" />
                  <span>{t('common.email')}</span>
                </a>
              )}
              
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-black dark:text-white
                           bg-white/40 dark:bg-white/10 backdrop-blur-md 
                           border border-white/50 dark:border-white/20
                           rounded-lg shadow-md
                           hover:bg-white/60 dark:hover:bg-white/20 
                           hover:border-white/70 dark:hover:border-white/30
                           hover:shadow-lg hover:scale-105
                           transition-all duration-300 ease-out
                           active:scale-95"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>{t('common.linkedin')}</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Support Note */}
      <div className="mt-12 text-center">
        <div className="bg-white/20 dark:bg-white/5 backdrop-blur-xl 
                        border border-white/30 dark:border-white/15 rounded-xl
                        p-6 shadow-lg max-w-4xl mx-auto">
          <p className="text-sm lg:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <span className="font-semibold text-black dark:text-white">{t('program.team.additionalSupport')}</span> {t('program.team.additionalSupportDescription')}
          </p>
        </div>
      </div>
    </section>
  )
}