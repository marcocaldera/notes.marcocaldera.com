"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeftIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname()
  const isProjectPage = pathname !== "/projects"

  return (
    <>
      <div className="container relative">
        {isProjectPage && (
          <Link
            href="/projects"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "absolute left-[-200px] top-8 hidden xl:inline-flex"
            )}
          >
            <ChevronLeftIcon className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        )}

        <article className="prose prose-quoteless mx-auto max-w-[750px] py-8 dark:prose-invert">
          <div className="relative">{children}</div>
        </article>
      </div>
    </>
  )
}
