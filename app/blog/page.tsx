"use client"

import { siteConfig } from "@/config/site"
import { useFetchBlogPosts } from "@/hooks/useFetchBlogPosts"
import { buttonVariants } from "@/components/ui/button"
import { columns } from "@/components/blog-data-table/columns"
import { BlogDataTable } from "@/components/blog-data-table/data-table"

// https://github.com/shadcn-ui/ui/tree/0fae3fd93ae749aca708bdfbbbeddc5d576bfb2e/apps/www/app/examples/tasks
export default function BlogPage() {
  const { posts = [] } = useFetchBlogPosts()

  return (
    <section className="grid items-center gap-6 pb-8">
      <div className="overflow-hidden rounded-[0.5rem] border bg-background">
        <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Welcome inside my notes!
              </h2>
              <p className="text-muted-foreground">
                Here is a list of thoughts and ideas I&apos;ve been thinking
                about.
              </p>
            </div>
          </div>
          <BlogDataTable columns={columns} data={posts} />
        </div>
      </div>
    </section>
  )
}
