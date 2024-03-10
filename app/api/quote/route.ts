import fs from "fs"
import path from "path"
import { NextRequest, NextResponse } from "next/server"
import matter from "gray-matter"

export async function GET(_req: NextRequest) {
  const response = await fetch(
    "https://raw.githubusercontent.com/marcocaldera/marcocaldera/main/data/quote.json"
  )

  const dailyQuote = await response.json()

  return NextResponse.json(dailyQuote)
}
