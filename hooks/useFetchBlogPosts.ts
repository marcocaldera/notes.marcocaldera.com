"use-client"

import useSWR from "swr"

import { BlogPost } from "@/types/blog"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

type UseFetchBlogPosts = {
  posts: BlogPost[] | undefined
  isLoading: boolean
  error: any
}

export const useFetchBlogPosts = (): UseFetchBlogPosts => {
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR<BlogPost[]>("/api/blog/posts", fetcher)

  return { posts, isLoading, error }
}
