import { Braces, Brain, HandCoins, LocateFixed } from "lucide-react"

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
  {
    value: "mind map",
    label: "Mind Map",
    icon: LocateFixed,
  },
  {
    value: "engineering",
    label: "Engineering",
    icon: Braces,
  },
]
