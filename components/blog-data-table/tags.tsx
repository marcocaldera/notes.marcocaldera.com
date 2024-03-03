import { Brain, HandCoins } from "lucide-react"

import { Tag } from "@/types/blog"

export const tags: Tag[] = [
  {
    value: "finance",
    label: "Finance",
    icon: HandCoins,
  },
  {
    value: "psychology",
    label: "Psychology",
    icon: Brain,
  },
] as const
