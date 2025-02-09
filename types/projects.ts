export type Project = {
  slug: string
  title: string
  content: string
  excerpt?: string
  date: string
  author: string
  technologies: string[]
  status: string
  metaData: {
    title: string
    description: string
    technologies: string[]
  }
}
