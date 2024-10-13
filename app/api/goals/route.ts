import { NextRequest, NextResponse } from "next/server"

export async function GET(_req: NextRequest) {
  const response = await fetch(
    "https://raw.githubusercontent.com/marcocaldera/marcocaldera/main/data/goals/goals.json"
  )

  const goals = await response.json()

  return NextResponse.json(goals)
}
