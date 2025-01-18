"use client"

import { ColumnDef } from "@tanstack/react-table"
import { formatDistanceToNow } from "date-fns"

import { Badge } from "@/components/ui/badge"

export type Project = {
  slug: string
  content: string
  excerpt?: string
  title: string
  date: string
  author: string
  technologies: string[]
  status: string
}

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "excerpt",
    header: "Excerpt",
    cell: ({ row }) => {
      const dateString = row.original.date
      const date = new Date(dateString)
      const formattedDate = formatDistanceToNow(date, {
        addSuffix: true,
      })

      return (
        <div>
          <div className="pb-1 font-semibold">{row.original.title}</div>
          <div className="pb-2 text-xs font-medium">{formattedDate}</div>
          <div className="line-clamp-2">
            {row.original.excerpt || row.original.content}
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Badge variant={status === "new" ? "default" : "secondary"}>
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "technologies",
    header: "Technologies",
    cell: ({ row }) => {
      const technologies = row.getValue("technologies") as string[]
      return (
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech: string) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      )
    },
  },
]
