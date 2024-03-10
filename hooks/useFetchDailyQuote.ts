"use client"

import useSWR from "swr"

import { Quote } from "@/types/quote"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

type UseFetchBlogPosts = {
  quote: Quote | undefined
  isLoading: boolean
  error: any
}

export const useFetchDailyQuote = (): UseFetchBlogPosts => {
  const { data: quote, isLoading, error } = useSWR<Quote>("/api/quote", fetcher)

  return { quote, isLoading, error }
}
