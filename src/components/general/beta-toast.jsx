"use client"

import { X } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"

const BetaToast = () => {
  const [beta, setBeta] = useState(null)
  useEffect(() => {
    const value = localStorage?.getItem("beta") || "true"
    setBeta(value === "true")
  }, [])


  const handleClose = () => {
    setBeta(false)
    localStorage?.setItem("beta", "false")
  }

  return (
    <div>
      {beta && (
        <div className='absolute top-0 z-50 bg-blue-400 dark:bg-blue-800 w-full h-12 flex items-center rounded-md p-4 px-4 justify-between'>
          <p className='text-white'>
            This website is in beta, so things might break!
          </p>
          <Button
            onClick={() => handleClose()}
            variant='ghost'
            className={"hover:bg-transparent"}
          >
            <X className='text-white' />
          </Button>
        </div>
      )}
    </div>
  )
}

export default BetaToast
