"use-client"

import useSWR from "swr"

import { Project } from "@/types/projects"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

type UseFetchProjects = {
  projects: Project[] | undefined
  isLoading: boolean
  error: any
}

export const useFetchProjects = (): UseFetchProjects => {
  const {
    data: projects,
    isLoading,
    error,
  } = useSWR<Project[]>("/api/projects", fetcher)

  return { projects, isLoading, error }
}
