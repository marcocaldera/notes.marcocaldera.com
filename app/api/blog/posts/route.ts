import fs from "fs"
import path from "path"
import { NextRequest, NextResponse } from "next/server"
import matter from "gray-matter"

const blogPostsDirectory = path.join(process.cwd(), "app/blog/")

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
  const postDirectories = fs
    .readdirSync(blogPostsDirectory)
    .map((name) => path.join(blogPostsDirectory, name))
    .filter(isDirectory)

  const posts = postDirectories
    .map((directory, index) => {
      const postSlug = path.basename(directory)
      const fullPath = path.join(directory, "page.mdx")

      const fileContent = fs.readFileSync(fullPath, "utf8")
      const { data, content, excerpt } = matter(fileContent, {
        // @ts-ignore
        excerpt: extractExcerpt,
      })

      return {
        id: index,
        slug: postSlug,
        fullPath,
        title: data.title,
        date: data.date,
        tags: data.tags,
        content: content,
        excerpt: excerpt,
        metaData: data,
      }
    })
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

  return NextResponse.json(posts)
}
