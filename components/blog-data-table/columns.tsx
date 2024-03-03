import { ColumnDef } from "@tanstack/react-table"

import { BlogPost } from "@/types/blog"
import { Badge } from "@/components/ui/badge"

export const columns: ColumnDef<BlogPost>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("title")}</div>
    },
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "excerpt",
    header: "Excerpt",
    cell: ({ row }) => {
      return <div className="line-clamp-2">{row.getValue("excerpt")}</div>
    },
  },
  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) => {
      const tags = row.getValue("tags") as string[]

      return (
        <div className="flex gap-x-2">
          {tags.map((tag) => {
            return (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            )
          })}
        </div>
      )
    },
    filterFn: (row, id, filteredTags) => {
      const tags = row.getValue(id) as string[]

      for (let tag of filteredTags) {
        if (tags.includes(tag)) {
          return true
        }
      }

      return false
    },
  },
]
