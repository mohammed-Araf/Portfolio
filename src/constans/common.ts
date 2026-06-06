import { FiBookOpen, FiClipboard, FiGlobe, FiHome, FiMail, FiUser } from 'react-icons/fi'

export { absoluteUrl, DEFAULT_OG_IMAGE, HOST, SITE_ALIAS, SITE_DESCRIPTION, SITE_HANDLE, SITE_NAME, SITE_TITLE, SITE_URL } from './site'

export const NAV_ITEMS = [
  { path: '/', label: 'Home', Icon: FiHome },
  { path: '/about', label: 'About', Icon: FiUser },
  { path: '/blog', label: 'Blog', Icon: FiGlobe },
  { path: '/projects', label: 'Projects', Icon: FiClipboard },
  { path: '/contact', label: 'Contact', Icon: FiMail },
  { path: '/guestbook', label: 'Guestbook', Icon: FiBookOpen },
]

export const PAGE_TITLES = {
  '/': '._',
  '/about': 'About',
  '/blog': 'Blog',
  '/projects': 'Projects',
  '/contact': 'Contact',
  '/guestbook': 'G-book',
}

export const SOCIALS = {
  GH: 'https://github.com/mohammed-Araf',
  IG: 'https://www.instagram.com/mohammed__araf/',
  IN: 'https://linkedin.com/in/mohammed-araf',
  WA: 'https://wa.me/916362558809',
}

export const RESUME_URL = '/resume.pdf'

export const FORMSPREE_KEY = 'xwvjlpkb'

export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCuzHzY1nhvrxRj6PxzDrv4j6LZ9onQuGs',
  authDomain: 'portfolio-55222.firebaseapp.com',
  projectId: 'portfolio-55222',
  storageBucket: 'portfolio-55222.firebasestorage.app',
  messagingSenderId: '145176235675',
  appId: '1:145176235675:web:d069d635acca77082c803e',
}
