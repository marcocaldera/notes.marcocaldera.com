export type Goal = {
  title: string
  description: string
  quarter: 1 | 2 | 3 | 4
  achieved?: boolean
  year: number
  isPrivate?: boolean
}
