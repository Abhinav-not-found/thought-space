import Link from "next/link"
import React from "react"
import { PenTool } from "lucide-react"

const Logo = ({ token }) => {
  return (
    <Link href={token ? "/home" : "/"} className='flex select-none'>
      <PenTool className='rotate-45 translate-y-1.5 size-7' />
    </Link>
  )
}

export default Logo
