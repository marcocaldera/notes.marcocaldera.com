"use client"

import useSWR from "swr"

import { Goal } from "@/types/goal"
import { Quote } from "@/types/quote"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

type UseFetchGoals = {
  goals: Goal[] | undefined
  isLoading: boolean
  error: any
}

export const useFetchGoals = (): UseFetchGoals => {
  const {
    data: goals,
    isLoading,
    error,
  } = useSWR<Goal[]>("/api/goals", fetcher)

  return { goals, isLoading, error }
}
