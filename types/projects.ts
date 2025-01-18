export type Project = {
  slug: string
  title: string
  description: string
  technologies: string[]
  content: string
  excerpt?: string
  metaData: {
    title: string
    description: string
    technologies: string[]
  }
}
