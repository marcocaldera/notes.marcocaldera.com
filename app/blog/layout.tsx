"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeftIcon } from "@radix-ui/react-icons"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { useCharShortcut } from "@/hooks/useShortcut"
import { buttonVariants } from "@/components/ui/button"

import "@/styles/globals.css"

interface RootLayoutProps {
  children: React.ReactNode
}

const onOpenEditPost = () => {
  const filePath = window.location.pathname.split("/").pop()
  if (filePath !== "blog") {
    const url = `${siteConfig.links.editNote}/${filePath}/page.mdx`
    window.location.href = url
  }
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()
  const isPostPage = pathname !== "/blog"

  useCharShortcut(["."], onOpenEditPost)

  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      const percentage = (scrolled / total) * 100
      setProgress(percentage)
    }

    window.addEventListener("scroll", updateProgress)
    updateProgress()

    return () => window.removeEventListener("scroll", updateProgress)
  }, [])

  return (
    <>
      <div className="container relative">
        {isPostPage && (
          <Link
            href="/blog"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "absolute left-[-200px] top-8 hidden xl:inline-flex"
            )}
          >
            <ChevronLeftIcon className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        )}

        <article className="prose prose-quoteless mx-auto max-w-[750px] py-8 dark:prose-invert">
          <div className="relative">{children}</div>
        </article>

        {/* Progress bar */}
        {isPostPage && (
          <div className="fixed bottom-0 left-0 z-50 h-1 w-full bg-muted">
            <div
              className="h-1 bg-primary transition-all duration-200"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        )}
      </div>
    </>
  )
}
