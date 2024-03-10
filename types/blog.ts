export type BlogPost = {
  id: number
  slug: string
  title: string
  content: string
  date: string
  excerpt: string
  fullPath: string
  metaData: { [key: string]: any }
}

export type Tag = {
  label: string
  value: string
  icon?: React.ComponentType<{ className?: string }>
}
