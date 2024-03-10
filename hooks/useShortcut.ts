"use client"

import { useEffect } from "react"

export const useCharShortcut = (
  key: string[],
  callback: (e: KeyboardEvent) => void
) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isInsideATextInput(e)) {
        return
      }

      if (key.includes(e.key) && !(e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        callback(e)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [key, callback])
}

export const useCharShortcutWithCommandKey = (
  key: string[],
  callback: (e: KeyboardEvent) => void
) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (key.includes(e.key) && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        callback(e)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [key, callback])
}

function isInsideATextInput(e: KeyboardEvent) {
  return (
    (e.target instanceof HTMLElement && e.target.isContentEditable) ||
    e.target instanceof HTMLInputElement ||
    e.target instanceof HTMLTextAreaElement ||
    e.target instanceof HTMLSelectElement
  )
}
