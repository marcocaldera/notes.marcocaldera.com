import fs from "fs"
import path from "path"
import { NextRequest, NextResponse } from "next/server"
import matter from "gray-matter"

const projectsDirectory = path.join(process.cwd(), "app/projects/")

const isDirectory = (source: string) => fs.lstatSync(source).isDirectory()

function extractExcerpt(file: any, options: any) {
  let excerptLines = ""
  let isNextLine = false

  for (let line of file.content.split("\n")) {
    if (line.startsWith("{/* excerpt-end */}")) {
      break
    }

    if (isNextLine) {
      excerptLines += line
    }

    if (line.startsWith("{/* excerpt-start */}")) {
      isNextLine = true
    }
  }

  file.excerpt = excerptLines
}

export async function GET(_req: NextRequest) {
  try {
    const projectDirectories = fs
      .readdirSync(projectsDirectory)
      .map((name) => path.join(projectsDirectory, name))
      .filter(
        (dir) =>
          isDirectory(dir) &&
          !path.basename(dir).startsWith(".") &&
          path.basename(dir) !== "api"
      )

    const projects = projectDirectories
      .map((directory) => {
        try {
          const projectSlug = path.basename(directory)
          const fullPath = path.join(directory, "page.mdx")

          if (!fs.existsSync(fullPath)) {
            console.log(`No MDX file found in ${directory}`)
            return null
          }

          const fileContent = fs.readFileSync(fullPath, "utf8")
          const { data, content, excerpt } = matter(fileContent, {
            // @ts-ignore
            excerpt: extractExcerpt,
          })

          // Ensure required fields exist
          if (!data.title || !data.technologies) {
            console.log(`Missing required fields in ${fullPath}`)
            return null
          }

          return {
            slug: projectSlug,
            content,
            excerpt,
            title: data.title,
            date: data.date || "",
            author: data.author || "Marco Caldera",
            technologies: data.technologies,
            status: data.status || "new",
          }
        } catch (error) {
          console.error(`Error processing directory ${directory}:`, error)
          return null
        }
      })
      .filter(Boolean) // Remove null entries
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by date

    console.log(`Found ${projects.length} projects`)
    return NextResponse.json(projects)
  } catch (error) {
    console.error("Error in GET /api/projects:", error)
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    )
  }
}
