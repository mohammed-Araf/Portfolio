import { IRepository } from '@/types'
import timeFromNow from '@/utils/time-from-now'
import 'server-only'

const username = process.env.GH_USERNAME || 'mohammed-Araf'
const apiKey = process.env.GH_API_KEY

const repositoriesUrl = `https://api.github.com/users/${username}/repos?sort=updated&visibility=public&affiliation=owner`

const fetchOptions: RequestInit = {
  method: 'GET',
  headers: {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    ...(apiKey ? { Authorization: 'Bearer ' + apiKey } : {}),
  },
  next: { revalidate: 60 * 60 * 24 },
}

const getProjects = async (): Promise<IRepository[]> => {
  const descriptionFallback: Record<string, string> = {
    'TS-Music-Bot': 'Feature-rich TeamSpeak music bot with queue management and playback controls (Kotlin, GPL v3).',
    CoFarm: 'Privacy-first agritech platform using decentralised consensus and edge-based anomaly detection (TypeScript).',
    'Agent-with-IBM-watsonx-Orchestrate': 'Autonomous agent prototype built at IBM Hackathon via watsonx Orchestrate (Python).',
    'Career-connect': 'Job board platform connecting students with opportunities (TypeScript).',
    Innoprint: 'Modern print-on-demand web application (TypeScript).',
    'HACAKATHON-SPACE': 'Hackathon project workspace and collaboration tool.',
    Cashtip: 'Real-time streamer tip and overlay platform integrated with StreamElements (Vue.js).',
  }

  let repositories: any[] = []

  try {
    const response = await fetch(repositoriesUrl, fetchOptions)
    if (!response.ok) return []
    repositories = (await response.json()) as any[]
  } catch {
    return []
  }

  // Skip the profile README repo; show all others that have a language
  repositories = repositories.filter((repo) => repo.languages_url && repo.language && repo.name !== username)

  const promises = repositories.map(async (repo) => {
    const [languagesRes, commitsRes] = await Promise.allSettled([
      fetch(repo.languages_url, fetchOptions),
      fetch(`https://api.github.com/repos/${repo.full_name}/commits?per_page=1`, fetchOptions),
    ])

    const languagesResponse = languagesRes.status === 'fulfilled' && languagesRes.value.ok ? languagesRes.value : null
    const commitsResponse = commitsRes.status === 'fulfilled' && commitsRes.value.ok ? commitsRes.value : null

    const languagesData = languagesResponse ? ((await languagesResponse.json()) as { [key: string]: number }) : {}
    const totalSize = Object.values(languagesData).reduce((acc, size) => acc + size, 0)
    const languages = Object.entries(languagesData).map(([name, size]) => ({
      name,
      size: totalSize ? (size / totalSize) * 100 : 0,
    }))

    const commitsData = commitsResponse ? ((await commitsResponse.json()) as [any]) : []
    const lastCommit = commitsData[0]
    const lastCommitDate = lastCommit?.commit?.committer?.date

    const repository: IRepository = {
      id: repo.id,
      node_id: repo.node_id,
      name: repo.name,
      full_name: repo.full_name,
      description: repo.description || descriptionFallback[repo.name] || repo.name,
      html_url: repo.html_url,
      stargazers_url: repo.stargazers_url,
      forks_url: repo.forks_url,
      homepage: repo.homepage,
      license: repo.license,
      stargazers_count: repo.stargazers_count,
      watchers_count: repo.watchers_count,
      forks_count: repo.forks_count,
      topics: repo.topics,
      languages: languages,
      created_at: timeFromNow(repo.created_at),
      updated_at: timeFromNow(repo.updated_at),
      pushed_at: timeFromNow(repo.pushed_at),
      last_commit_at: lastCommitDate ? timeFromNow(lastCommitDate) : 'N/A',
      last_commit_date: lastCommitDate,
    }

    return repository
  })

  const allProjects = await Promise.all(promises)

  allProjects.sort((a, b) => {
    if (!a.last_commit_date) return 1
    if (!b.last_commit_date) return -1
    return new Date(b.last_commit_date).getTime() - new Date(a.last_commit_date).getTime()
  })

  return allProjects
}

export default getProjects
