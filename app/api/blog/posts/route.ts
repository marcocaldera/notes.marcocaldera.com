import fs from "fs"
import path from "path"
import { NextRequest, NextResponse } from "next/server"
import matter from "gray-matter"

const blogPostsDirectory = path.join(process.cwd(), "app/blog/")

const isDirectory = (source: string) => fs.lstatSync(source).isDirectory()

export interface BlogPost {
  slug: string
  fullPath: string
  metaData: { [key: string]: any }
}

export async function GET(_req: NextRequest) {
  const postDirectories = fs
    .readdirSync(blogPostsDirectory)
    .map((name) => path.join(blogPostsDirectory, name))
    .filter(isDirectory)

  const posts = postDirectories.map((directory) => {
    const postSlug = path.basename(directory)
    const fullPath = path.join(directory, "page.mdx")

    const fileContent = fs.readFileSync(fullPath, "utf8")
    const { data } = matter(fileContent)

    return {
      slug: postSlug,
      fullPath,
      metaData: data,
    }
  })

  return NextResponse.json(posts)
}
