"use client"

import { useEffect } from "react"

export default function SetBeta() {
  useEffect(() => {
    localStorage.setItem("beta", "true")
  }, [])

  return null
}
