interface SectionBlockProps {
  children: React.ReactNode
}

export const SectionBlock = ({ children }: SectionBlockProps) => {
  return (
    <section className="rounded-lg border bg-background shadow-sm">
      <div className="flex h-full flex-1 flex-col p-8">{children}</div>
    </section>
  )
}
