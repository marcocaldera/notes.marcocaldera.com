"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { useFetchDailyQuote } from "@/hooks/useFetchDailyQuote"
import { buttonVariants } from "@/components/ui/button"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"

export default function IndexPage() {
  const { quote, isLoading } = useFetchDailyQuote()
  return (
    <section className="grid items-center gap-6 py-5 pb-8">
      <PageHeader>
        <PageHeaderHeading className="hidden md:block">
          Ciao, I&apos;m Marco. 👋
        </PageHeaderHeading>
        <PageHeaderHeading className="md:hidden">
          Ciao, I&apos;m Marco. 👋
        </PageHeaderHeading>
        <PageHeaderDescription>
          This is my notebook. I jot down small thoughts and ideas that I can
          easily access.
        </PageHeaderDescription>
      </PageHeader>
      <section className="rounded-lg border bg-background shadow-sm">
        <div className="flex h-full flex-1 flex-col p-8">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="mb-2 text-2xl font-bold">Daily Automated Quote</h2>
              <p className="text-muted-foreground">{quote?.text}</p>
              {quote?.title != "" ? (
                <p className="text-muted-foreground">{quote?.title}</p>
              ) : null}
            </div>
          </div>
          <div className="mt-4 flex gap-4">
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.quotesAutomation}
              className={cn(buttonVariants({ variant: "link" }), "px-0")}
            >
              How it works?
            </Link>
          </div>
        </div>
      </section>
    </section>
  )
}
