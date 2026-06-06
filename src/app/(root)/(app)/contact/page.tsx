import { FORMSPREE_KEY, SOCIALS } from '@/constans/common'
import type { Metadata } from 'next'
import PageTitle from '../components/PageTitle'
import ContactForm from './components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Mohammed Araf for full-stack web development, custom hardware design, and collaboration opportunities.',
  openGraph: {
    title: 'Contact Mohammed Araf',
    description: 'Contact Mohammed Araf for full-stack web development, custom hardware design, and collaboration opportunities.',
    url: '/contact',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <PageTitle title="Contact" />
      <div className="flex flex-col lg:flex-row">
        <div className="mb-4 w-full text-center lg:w-[480px] lg:text-left">
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">LOCATION</h2>
            <p className="text-sm leading-5">Bangalore, Karnataka, India.</p>
          </div>
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">EMAIL ADDRESS</h2>
            <p className="text-sm leading-5">
              <a href="mailto:mdaraf26@gmail.com" rel="noopener" className="hover:text-yellow-600">
                mdaraf26@gmail.com
              </a>
            </p>
          </div>
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">SOCIAL CHANNELS</h2>
            <p className="text-sm leading-5">
              <span>LinkedIn: </span>
              <a href={SOCIALS.IN} target="_blank" rel="noopener" className="hover:text-yellow-600">
                linkedin.com/in/mohammed-araf
              </a>
              <br />
              <span>GitHub: </span>
              <a href={SOCIALS.GH} target="_blank" rel="noopener" className="hover:text-yellow-600">
                github.com/mohammed-Araf
              </a>
            </p>
          </div>
        </div>
        <div className="lg:flex-1">
          <ContactForm formspreeKey={FORMSPREE_KEY} />
        </div>
      </div>
    </>
  )
}
