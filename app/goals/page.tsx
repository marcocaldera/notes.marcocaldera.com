"use client"

import { useEffect, useState } from "react"
import { Lock } from "lucide-react"

import { useFetchGoals } from "@/hooks/useFetchGoals"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"

export default function GoalsPage() {
  const { goals, isLoading, error } = useFetchGoals()

  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  )
  const availableYears = Array.from(
    new Set(goals?.map((goal) => goal.year))
  ).sort((a, b) => b - a)

  const renderGoalsByQuarter = (quarter: 1 | 2 | 3 | 4) => {
    return goals
      ?.filter((goal) => goal.quarter === quarter && goal.year === selectedYear)
      .map((goal) => (
        <Card
          key={`${goal.quarter}-${goal.year}-${goal.title}`}
          className={goal.achieved ? "bg-green-success" : ""}
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {goal.isPrivate ? (
                <span className="flex items-center text-gray-500">
                  <Lock className="mr-2" size={16} />
                  Private
                </span>
              ) : (
                goal.title
              )}
              {goal.achieved && (
                <Badge variant="secondary" className="ml-2">
                  Achieved
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {goal.isPrivate ? (
              <p className="italic text-gray-400">This goal is private</p>
            ) : (
              <p>{goal.description}</p>
            )}
          </CardContent>
        </Card>
      ))
  }

  const handleYearChange = (year: string) => {
    setSelectedYear(Number(year))
  }

  return (
    <section>
      <PageHeader>
        <PageHeaderHeading className="hidden md:block">
          Welcome to my Goals 🎯!
        </PageHeaderHeading>
        <PageHeaderHeading className="md:hidden">Goals 🎯</PageHeaderHeading>
        <PageHeaderDescription>
          Those goals are based on my values and principles.
        </PageHeaderDescription>
      </PageHeader>
      <div className="my-4 flex items-center justify-center space-x-4">
        <Select
          onValueChange={handleYearChange}
          value={selectedYear.toString()}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a year" />
          </SelectTrigger>
          <SelectContent>
            {availableYears.map((year) => (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4">
        {[1, 2, 3, 4].map((quarter) => (
          <div key={quarter}>
            <h2 className="mb-4 text-xl font-bold">Q{quarter}</h2>
            <div className="space-y-4">
              {renderGoalsByQuarter(quarter as 1 | 2 | 3 | 4)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
