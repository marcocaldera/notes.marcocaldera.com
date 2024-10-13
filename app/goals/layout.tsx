"use client"

import "@/styles/globals.css"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <section className="items-center gap-6 py-5 pb-8">
      <div className="flex-1 space-y-4">{children}</div>
    </section>
  )
}
