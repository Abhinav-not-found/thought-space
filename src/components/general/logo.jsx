import Link from "next/link"
import React from "react"
import { Oswald } from "next/font/google"

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight:['200','300','400','500','600','700']
})

const Logo = ({ token }) => {
  return (
    <Link href={token ? "/home" : "/"} className="flex gap-1">
      <p className={`${oswald.className} text-2xl `}>Thought </p>
      <p className={`${oswald.className} text-2xl `}> Space</p>
    </Link>
  )
}

export default Logo
