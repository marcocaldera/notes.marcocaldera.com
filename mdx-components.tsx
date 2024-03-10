import type { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: ({ children, href }) => (
      <a href={href} className="text-primary underline hover:no-underline">
        {children}
      </a>
    ),
  }
}
