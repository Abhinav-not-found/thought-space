import React from "react"
import { ModeToggle } from "../ui/mode-toggle"
import Link from "next/link"
import { cookies } from "next/headers"
import LogoutBtn from "../btn/logout-btn"

const Navbar = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")

  return (
    <header className='max-w-5xl mx-auto flex justify-between'>
      <Link href={token ? "/home" : "/"}>Logo</Link>
      {token && <LogoutBtn />}
      <ModeToggle />
    </header>
  )
}

export default Navbar
