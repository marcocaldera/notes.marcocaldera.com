"use client"

import { siteConfig } from "@/config/site"
import { useCharShortcut } from "@/hooks/useShortcut"

import "@/styles/globals.css"
import { useEffect } from "react"

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
  useCharShortcut(["."], onOpenEditPost)

  return (
    <section className="items-center gap-6 py-5 pb-8">
      <div className="flex-1 space-y-4">{children}</div>
    </section>
  )
}
