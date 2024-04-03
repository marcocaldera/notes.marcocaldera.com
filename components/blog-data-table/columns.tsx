import { ColumnDef } from "@tanstack/react-table"
import { formatDistanceToNow } from "date-fns"

import { BlogPost } from "@/types/blog"
import { Badge } from "@/components/ui/badge"

export const columns: ColumnDef<BlogPost>[] = [
  // {
  //   accessorKey: "date",
  //   header: "Date",
  //   cell: ({ row }) => {
  //     const dateString = row.getValue("date") as string
  //     const date = new Date(dateString)
  //     const formattedDate = date.toLocaleDateString("en-US", {
  //       year: "numeric",
  //       month: "short",
  //       day: "numeric",
  //     })

  //     return <div className="font-medium">{formattedDate}</div>
  //   },
  // },
  // {
  //   accessorKey: "title",
  //   header: "Title",
  //   cell: ({ row }) => {
  //     return <div className="font-medium">{row.getValue("title")}</div>
  //   },
  // },
  {
    accessorKey: "excerpt",
    header: "Excerpt",
    cell: ({ row }) => {
      const dateString = row.original.date as string
      const date = new Date(dateString)
      const formattedDate = formatDistanceToNow(date, {
        addSuffix: true,
      })

      return (
        <div>
          <div className="pb-1 font-semibold">{row.original.title}</div>
          <div className="pb-2 text-xs font-medium">{formattedDate}</div>
          <div className="line-clamp-2">{row.getValue("excerpt")}</div>
        </div>
      )
    },
  },

  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) => {
      const tags = row.getValue("tags") as string[]

      return (
        <div className="flex flex-col gap-y-2">
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
