import Link from "next/link"
import React from "react"
import { Oswald } from "next/font/google"
import { PenTool } from "lucide-react"

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
})

const Logo = ({ token }) => {
  return (
    <Link href={token ? "/home" : "/"} className='flex'>
      <PenTool className='rotate-45 translate-y-1.5' />
      <div className='flex gap-1'>
        <p className={`${oswald.className} text-2xl `}>Thought </p>
        <p className={`${oswald.className} text-2xl `}> Space</p>
      </div>
    </Link>
  )
}

export default Logo
