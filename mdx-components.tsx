import type { MDXComponents } from "mdx/types"

import { cn } from "@/lib/utils"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Enhanced heading styles
    h1: ({ className, ...props }) => (
      <h1
        className={cn(
          "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn(
          "mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn(
          "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
          className
        )}
        {...props}
      />
    ),
    // Enhanced paragraph with better readability
    p: ({ className, ...props }) => (
      <p
        className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
        {...props}
      />
    ),
    // Enhanced link with better hover states and external indicator
    a: ({ children, href, className }) => (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className={cn(
          "font-medium text-primary underline underline-offset-4 decoration-primary/50 hover:decoration-primary transition-colors",
          className
        )}
      >
        {children}
        {href?.startsWith("http") && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1 inline-block h-3 w-3"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        )}
      </a>
    ),
    // Enhanced lists with better spacing and bullets
    ul: ({ className, ...props }) => (
      <ul
        className={cn(
          "my-6 ml-6 list-disc space-y-3 marker:text-primary [&>li>ul]:mt-3",
          className
        )}
        {...props}
      />
    ),
    ol: ({ className, ...props }) => (
      <ol
        className={cn(
          "my-6 ml-6 list-decimal space-y-3 marker:text-primary [&>li>ol]:mt-3",
          className
        )}
        {...props}
      />
    ),
    li: ({ className, ...props }) => (
      <li className={cn("leading-7", className)} {...props} />
    ),
    // Enhanced blockquote with a distinctive style
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          "mt-6 border-l-4 border-primary pl-6 italic text-muted-foreground",
          className
        )}
        {...props}
      />
    ),
    // Enhanced code blocks
    pre: ({ className, ...props }) => (
      <pre
        className={cn(
          "mb-4 mt-6 overflow-x-auto rounded-lg border bg-zinc-50 p-4 dark:bg-zinc-950",
          className
        )}
        {...props}
      />
    ),
    code: ({ className, ...props }) => (
      <code
        className={cn(
          "relative rounded bg-zinc-100 px-[0.3rem] py-[0.2rem] font-mono text-sm text-zinc-900 dark:bg-zinc-800 dark:text-zinc-200",
          className
        )}
        {...props}
      />
    ),
    // Enhanced sup for footnotes
    sup: ({ children }) => (
      <sup className="text-xs ml-0.5">
        <a
          href={`#footnote-${children}`}
          className="text-primary no-underline hover:underline"
        >
          [{children}]
        </a>
      </sup>
    ),
    // Enhanced footer for references
    footer: ({ children }) => (
      <footer className="mt-16 pt-8 border-t border-border">
        <h2 className="text-xl font-semibold mb-4">References</h2>
        <div className="space-y-4 text-sm text-muted-foreground">
          {children}
        </div>
      </footer>
    ),
    // Add table styles
    table: ({ className, ...props }) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className={cn("w-full", className)} {...props} />
      </div>
    ),
    tr: ({ className, ...props }) => (
      <tr
        className={cn("m-0 border-t p-0 even:bg-muted", className)}
        {...props}
      />
    ),
    th: ({ className, ...props }) => (
      <th
        className={cn(
          "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
          className
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }) => (
      <td
        className={cn(
          "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
          className
        )}
        {...props}
      />
    ),
  }
}
