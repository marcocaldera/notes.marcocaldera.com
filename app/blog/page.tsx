"use client"

import { BlogPost } from "@/types/blog"
import { siteConfig } from "@/config/site"
import { useFetchBlogPosts } from "@/hooks/useFetchBlogPosts"
import { buttonVariants } from "@/components/ui/button"
import { columns } from "@/components/blog-data-table/columns"
import { BlogDataTable } from "@/components/blog-data-table/data-table"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"

// https://github.com/shadcn-ui/ui/tree/0fae3fd93ae749aca708bdfbbbeddc5d576bfb2e/apps/www/app/examples/tasks
export default function BlogPage() {
  const { posts = [], isLoading } = useFetchBlogPosts()

  return (
    <section>
      <PageHeader>
        <PageHeaderHeading className="hidden md:block">
          Welcome inside my Notes 📒!
        </PageHeaderHeading>
        <PageHeaderHeading className="md:hidden">Notes 📒</PageHeaderHeading>
        <PageHeaderDescription>
          Here is a list of thoughts and ideas I&apos;ve been thinking of.
        </PageHeaderDescription>
      </PageHeader>
      <BlogDataTable isLoading={isLoading} columns={columns} data={posts} />
    </section>
  )
}
