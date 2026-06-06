import { SITE_ALIAS, SITE_DESCRIPTION, SITE_HANDLE, SITE_NAME, SITE_TITLE, SITE_URL, SOCIALS } from '@/constans/common'
import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const skills = ['Next.js', 'React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Python', 'Java', 'C/C++', 'Kotlin', 'Lua', 'Edge AI', 'IoT']

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: SITE_NAME,
    alternateName: [SITE_ALIAS, SITE_HANDLE, 'Araf'],
    url: SITE_URL,
    jobTitle: 'Engineering Student & Full-Stack Developer',
    description: SITE_DESCRIPTION,
    knowsAbout: skills,
    sameAs: [SOCIALS.GH, SOCIALS.IN].filter(Boolean),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_TITLE,
    alternateName: [SITE_ALIAS, SITE_HANDLE],
    url: SITE_URL,
    publisher: {
      '@id': `${SITE_URL}/#person`,
    },
  },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="relative flex min-h-full w-full flex-col items-center justify-center">
        <div className="relative flex max-w-3xl flex-col items-center justify-center py-3 text-center">
          <h1 className="relative">
            <span className="grid grid-cols-2">
              <span className="block text-center text-sm opacity-90">I AM</span>
            </span>{' '}
            <span className=" z-10 block text-[calc(1.5rem+5vw)] font-bold leading-none tracking-tight">Mohammed Araf</span>{' '}
            <span className="grid grid-cols-2 justify-items-end">
              <span className="block"></span>
              <span className="block text-sm opacity-90 text-right">
                FULL-STACK DEVELOPER
                <br /> & HARDWARE INNOVATOR
              </span>
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-6 opacity-80 md:text-base">
            {SITE_NAME} is a B.Tech Computer Science student, full-stack developer, and hardware innovator based in Bangalore, India,
            specializing in decentralized agritech and IoT workflows.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-bold uppercase opacity-80">
            <Link href="/about" className="hover:text-yellow-600">
              About Me
            </Link>
            <Link href="/projects" className="hover:text-yellow-600">
              Projects
            </Link>
            <Link href="/blog" className="hover:text-yellow-600">
              Writing
            </Link>
          </div>
          <div className="mt-6 flex">
            {SOCIALS.GH && (
              <a
                href={SOCIALS.GH}
                aria-label="GitHub"
                target="_blank"
                rel="me noopener"
                className="mx-2 block p-2 opacity-80 hover:opacity-95"
              >
                <FaGithub size={20} />
              </a>
            )}
            {SOCIALS.IN && (
              <a
                href={SOCIALS.IN}
                aria-label="Linkedin"
                target="_blank"
                rel="me noopener"
                className="mx-2 block p-2 opacity-80 hover:opacity-95"
              >
                <FaLinkedin size={20} />
              </a>
            )}
            {SOCIALS.IG && (
              <a
                href={SOCIALS.IG}
                aria-label="Instagram"
                target="_blank"
                rel="me noopener"
                className="mx-2 block p-2 opacity-80 hover:opacity-95"
              >
                <FaInstagram size={20} />
              </a>
            )}
            {SOCIALS.WA && (
              <a
                href={SOCIALS.WA}
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener"
                className="mx-2 block p-2 opacity-80 hover:opacity-95"
              >
                <FaWhatsapp size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
