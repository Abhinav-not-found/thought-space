"use client"

import { useEffect } from "react"

export default function SetDefault() {
  useEffect(() => {
    localStorage.setItem("beta", "true")
    localStorage.setItem("ring", "true")
  }, [])

  return null
}
