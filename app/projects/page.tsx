"use client"

import { useMemo } from "react"
import { usePathname } from "next/navigation"

import { useFetchProjects } from "@/hooks/useFetchProjects"
import { Badge } from "@/components/ui/badge"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { columns } from "@/components/projects-data-table/columns"
import { ProjectsDataTable } from "@/components/projects-data-table/data-table"

export default function ProjectsPage() {
  const { projects = [], isLoading } = useFetchProjects()
  const pathname = usePathname()
  const projectSlug = pathname.split("/").pop()

  const project = useMemo(() => {
    if (projectSlug === "projects") return null
    return projects?.find((p) => p.slug === projectSlug)
  }, [projects, projectSlug])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (project) {
    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">{project.metaData.title}</h1>
          <div className="flex flex-wrap gap-2">
            {project.metaData.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="prose dark:prose-invert">{project.content}</div>
      </div>
    )
  }

  return (
    <section>
      <PageHeader>
        <PageHeaderHeading className="hidden md:block">
          My Projects 🛠️
        </PageHeaderHeading>
        <PageHeaderHeading className="md:hidden">Projects 🛠️</PageHeaderHeading>
        <PageHeaderDescription>
          A collection of personal projects and experiments I&apos;ve been
          working on.
        </PageHeaderDescription>
      </PageHeader>
      <ProjectsDataTable columns={columns} data={projects} />
    </section>
  )
}
