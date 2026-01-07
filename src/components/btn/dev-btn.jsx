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
      className='flex items-center gap-0'
    >
      {ring && <PulseDot />}
      <Button
        variant='ghost'
        className='hover:underline hover:bg-transparent underline-offset-2'
      >
        <p className='font-light text-muted-foreground hidden md:block'>
          Note from developer
        </p>
        <p className='block md:hidden font-light text-muted-foreground'>developer</p>
      </Button>
    </Link>
  )
}

export default DevBtn
