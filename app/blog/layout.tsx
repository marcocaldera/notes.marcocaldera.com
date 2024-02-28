import "@/styles/globals.css"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <section className="container max-w-2xl items-center gap-6 pb-8 md:py-5">
      <div className="flex-1">{children}</div>
    </section>
  )
}
