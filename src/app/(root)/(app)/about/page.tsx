import profilePic from '@/assets/mohammed_araf.png'
import { RESUME_URL } from '@/constans/common'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Mohammed Araf, a B.Tech Computer Science student, full-stack developer, and hardware innovator based in Bangalore, India.',
  openGraph: {
    title: 'About Mohammed Araf',
    description:
      'Learn more about Mohammed Araf, a B.Tech Computer Science student, full-stack developer, and hardware innovator based in Bangalore, India.',
    url: '/about',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <PageTitle title="About" />
      <div className="md:flex">
        <div className="mb-5 md:w-64 flex-shrink-0">
          <Image
            src={profilePic}
            alt="Mohammed Araf"
            className="block w-full rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-800"
            placeholder="blur"
          />
        </div>
        <div className="md:flex-1 md:pl-8 text-neutral-800 dark:text-neutral-200">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-black dark:text-white">I’m Mohammed Araf</h2>
          <div className="mb-6 space-y-4 text-sm leading-6">
            <p>
              I am an adaptable and forward-thinking Engineering student pursuing a <strong>B.Tech in Computer Science & Technology</strong>{' '}
              at <strong>Dayananda Sagar University, Bangalore</strong>. Born in 2001 and based in Bengaluru, India, my multidisciplinary
              background spans full-stack web application development, custom hardware design, and visual effects asset pipelines.
            </p>
            <p>
              I love identifying market gaps and leveraging decentralized architectures, AI workflows, and Lean Startup methodologies to
              transition complex concepts into functional, secure, and user-centric systems.
            </p>
          </div>

          <h3 className="mb-2 text-lg font-bold text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-1">
            Core Skills & Engineering
          </h3>
          <div className="mb-6 text-sm leading-6 space-y-2">
            <p className="mb-1">
              <strong>Programming Languages:</strong> Python, TypeScript, JavaScript, Java, C, C++, Kotlin, Lua
            </p>
            <p className="mb-1">
              <strong>Web & Frameworks:</strong> Vue.js, React, Next.js, HTML5, CSS3, REST API & Webhooks, Full-Stack Dev
            </p>
            <p className="mb-1">
              <strong>OS Development:</strong> Compiling &quot;Infinity X&quot;, a custom lightweight Android ROM (researching LineageOS and
              RisingOS).
            </p>
            <p className="mb-1">
              <strong>Machine Learning & Automation:</strong> Developing ML models for handwriting replication. Workflow automation via n8n
              and agent development using pydantic_ai.
            </p>
            <p className="mb-1">
              <strong>Networking & Simulations:</strong> NS2 execution utilizing TCL and AWK scripts. Built a Turing Machine simulation in
              JFLAP.
            </p>
            <p className="mb-1">
              <strong>Hardware & Systems:</strong> Custom PC Architecture, Hardware Prototyping, Universal Filter Interface (UFI) Design,
              PLA Casings.
            </p>
          </div>

          <h3 className="mb-2 text-lg font-bold text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-1">
            Hardware & Workspace
          </h3>
          <div className="mb-6 text-sm leading-6 space-y-2">
            <p className="mb-1">
              <strong>Primary Workstation:</strong> Ryzen 7 5800X, 32GB RAM, RTX 3060Ti
            </p>
            <p className="mb-1">
              <strong>Fabrication:</strong> Bambu Lab A1 3D Printer
            </p>
            <p className="mb-1">
              <strong>Mobile Tech:</strong> Poco X5 Pro 5G, Redmi Note 7 Pro (with custom hardware speaker replacement), Pocophone F1
            </p>
          </div>

          <h3 className="mb-2 text-lg font-bold text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-1">
            Personal Life & Gaming
          </h3>
          <div className="mb-6 text-sm leading-6 space-y-2">
            <p className="mb-1">
              <strong>Gaming:</strong> CS2, Apex Legends, SnowRunner, ETS2, Minecraft, Valorant, GTA V
            </p>
            <p className="mb-1">
              <strong>Wheels & Timepieces:</strong> Riding a TVS Ronin and wearing a 25-year-old inherited Citizen automatic watch.
            </p>
          </div>

          <h3 className="mb-2 text-lg font-bold text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-1">
            Patent & Innovation
          </h3>
          <div className="mb-6 text-sm leading-6 space-y-2">
            <p>
              <strong>Universal Filter Interface (UFI) for Modular Air Purification Systems</strong> (Published Patent Application)
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Invented a novel, modular mechanical interface capable of housing and adapting to multiple distinct filter classifications
              (including HEPA and activated carbon filters) interchangeably without requiring structural modifications to the chassis.
            </p>
          </div>

          <h3 className="mb-2 text-lg font-bold text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-1">
            Education
          </h3>
          <div className="mb-6 text-sm leading-6 space-y-3">
            <div>
              <div className="flex justify-between font-semibold text-black dark:text-white">
                <span>B.Tech in Computer Science & Technology</span>
                <span className="text-xs font-normal text-neutral-500">2024 – 2027</span>
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400 flex justify-between">
                <span>Dayananda Sagar University, Bangalore</span>
                <span>CGPA: 6.67 (Ongoing)</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between font-semibold text-black dark:text-white">
                <span>Diploma in Polytechnic CS</span>
                <span className="text-xs font-normal text-neutral-500">2017 – 2021</span>
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400 flex justify-between">
                <span>SVIT Polytechnic</span>
                <span>Aggregate: 57.32%</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between font-semibold text-black dark:text-white">
                <span>Secondary Education (Class 1-10)</span>
                <span className="text-xs font-normal text-neutral-500">2007 – 2017</span>
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400 flex justify-between">
                <span>Lourde High School, Bangalore</span>
                <span>Aggregate: 56.64%</span>
              </div>
            </div>
          </div>

          <h3 className="mb-2 text-lg font-bold text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-1">
            Experience
          </h3>
          <div className="mb-6 text-sm leading-6 space-y-3">
            <div>
              <div className="flex justify-between font-semibold text-black dark:text-white">
                <span>VFX Rotoscope Artist</span>
                <span className="text-xs font-normal text-neutral-500">May 2022 – Nov 2022</span>
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400">Radiance VFX</div>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                Delivered production roto assets for major global releases including <em>The Flash</em> and{' '}
                <em>Black Panther: Wakanda Forever</em> using Mocha Pro and advanced tracking tools, maintaining shot consistency under
                tight studio deadlines.
              </p>
            </div>
          </div>

          <h3 className="mb-2 text-lg font-bold text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-1">
            Certifications & Honors
          </h3>
          <div className="mb-6 text-sm leading-6 space-y-2">
            <p className="mb-1">
              <strong>Data Analytics with Python</strong> — NPTEL (Completed)
            </p>
            <p className="mb-1">
              <strong>3rd Place Winner</strong> — Eurekathon, Dayananda Sagar University (CoFarm network)
            </p>
            <p className="mb-1">
              <strong>Round 2 Qualifier (Ongoing)</strong> — Manthan Innovation Challenge 2026 (Compact Air Purification System)
            </p>
            <p className="mb-1">
              <strong>Global Nominee</strong> — NASA International Space Apps Challenge
            </p>
            <p className="mb-1">
              <strong>Participant</strong> — IBM Hackathon (watsonx Orchestrate autonomous agent prototype)
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              download
              target="_blank"
              rel="nofollow"
              href={RESUME_URL}
              className="inline-block bg-neutral-900 text-white dark:bg-white dark:text-black px-6 py-3 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors font-semibold text-sm"
            >
              Download Resume (PDF)
            </a>
            <Link
              href="/contact"
              rel="nofollow"
              className="inline-block border border-neutral-300 dark:border-neutral-700 px-6 py-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors font-semibold text-sm"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
