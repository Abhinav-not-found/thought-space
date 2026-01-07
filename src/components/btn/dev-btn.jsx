"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import PulseDot from "../ui/pulse-dot"

const DevBtn = () => {
  const [ring, setRing] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const value = localStorage.getItem("ring")
    setRing(value !== "false")
  }, [])

  const handleClose = () => {
    setRing(false)
    localStorage.setItem("ring", "false")
  }

  if (!mounted) return null

  return (
    <Link
      href='/developer'
      onClick={() => handleClose()}
      className='flex items-center gap-2'
    >
      {ring && <PulseDot />}
      <Button
        variant='ghost'
        className='font-light hover:underline hover:bg-transparent'
      >
        Note from developer
      </Button>
    </Link>
  )
}

export default DevBtn
