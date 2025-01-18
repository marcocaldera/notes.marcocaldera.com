"use client"

import { useCallback, useState } from "react"
import { useRouter } from "next/navigation"
import {
  EnvelopeClosedIcon,
  GearIcon,
  HomeIcon,
  PersonIcon,
} from "@radix-ui/react-icons"
import { Badge, FileIcon, Hammer } from "lucide-react"

import { cn } from "@/lib/utils"
import { useFetchBlogPosts } from "@/hooks/useFetchBlogPosts"
import { useFetchProjects } from "@/hooks/useFetchProjects"
import {
  useCharShortcut,
  useCharShortcutWithCommandKey,
} from "@/hooks/useShortcut"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export const BlogMenu = () => {
  const router = useRouter()
  const { posts } = useFetchBlogPosts()
  const { projects } = useFetchProjects()
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const runCommand = useCallback((command: () => unknown) => {
    setIsDialogOpen(false)
    command()
  }, [])

  useCharShortcut(["n"], () => {
    setIsDialogOpen((isOpen) => !isOpen)
    runCommand(() => router.push(`/blog` as string))
  })

  useCharShortcut(["p"], () => {
    setIsDialogOpen((isOpen) => !isOpen)
    runCommand(() => router.push(`/projects` as string))
  })

  useCharShortcut(["g"], () => {
    setIsDialogOpen((isOpen) => !isOpen)
    runCommand(() => router.push(`/goals` as string))
  })

  useCharShortcut(["h"], () => {
    setIsDialogOpen((isOpen) => !isOpen)
    runCommand(() => router.push(`/` as string))
  })

  useCharShortcut(["/"], (e) => {
    setIsDialogOpen((isOpen) => !isOpen)
  })
  useCharShortcutWithCommandKey(["k"], () => {
    setIsDialogOpen((isOpen) => !isOpen)
  })

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
        )}
        onClick={() => setIsDialogOpen(true)}
      >
        <span className="hidden lg:inline-flex">Search...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <CommandInput placeholder="Search notes, projects..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push(`/blog` as string))
              }}
            >
              <PersonIcon className="mr-2 size-4" />
              <span>Notes</span>
              <CommandShortcut>N</CommandShortcut>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push(`/projects` as string))
              }}
            >
              <Hammer className="mr-2 size-4" />
              <span>Projects</span>
              <CommandShortcut>P</CommandShortcut>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push(`/goals` as string))
              }}
            >
              <Badge className="mr-2 size-4" />
              <span>Goals</span>
              <CommandShortcut>G</CommandShortcut>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push(`/` as string))
              }}
            >
              <HomeIcon className="mr-2 size-4" />
              <span>Home</span>
              <CommandShortcut>H</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Notes">
            {posts?.map((post) => (
              <CommandItem
                key={post.slug}
                onSelect={() => {
                  runCommand(() => router.push(`/blog/${post.slug}` as string))
                }}
              >
                <FileIcon className="mr-2 size-4" />
                <div>
                  {post.metaData.title}
                  <div className="flex gap-x-1">
                    {post.metaData?.tags.map((tag: string, index: number) => {
                      const isLastElement =
                        index === post.metaData.tags.length - 1

                      return (
                        <div
                          key={tag}
                          className="text-xs text-muted-foreground"
                        >
                          {`${tag}${isLastElement ? "" : " /"}`}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Projects">
            {projects?.map((project) => (
              <CommandItem
                key={project.slug}
                onSelect={() => {
                  runCommand(() => router.push(`/projects/${project.slug}`))
                }}
              >
                <Hammer className="mr-2 size-4" />
                <div>
                  {project.metaData?.title}
                  <div className="flex gap-x-1">
                    {project.metaData?.technologies?.map(
                      (tech: string, index: number) => {
                        const isLastElement =
                          index ===
                          (project.metaData?.technologies?.length ?? 0) - 1
                        return (
                          <div
                            key={tech}
                            className="text-xs text-muted-foreground"
                          >
                            {`${tech}${isLastElement ? "" : " /"}`}
                          </div>
                        )
                      }
                    )}
                  </div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
