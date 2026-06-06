const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_HOST || 'https://mohammedaraf.dev'

export const SITE_URL = (rawSiteUrl.startsWith('http') ? rawSiteUrl : `https://${rawSiteUrl}`).replace(/\/$/, '')
export const HOST = SITE_URL
export const SITE_NAME = 'Mohammed Araf'
export const SITE_ALIAS = 'Araf'
export const SITE_HANDLE = 'mohammed-Araf'
export const SITE_TITLE = `${SITE_NAME}`
export const SITE_DESCRIPTION =
  'Mohammed Araf is an engineering student (B.Tech CS&T) and full-stack developer based in Bangalore, India, building polished interfaces, custom hardware architecture, and decentralised agritech workflows.'
export const DEFAULT_OG_IMAGE = '/media/poster.jpg'

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path
  return `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`
}
