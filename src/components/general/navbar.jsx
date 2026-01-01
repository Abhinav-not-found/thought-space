import React from "react"
import { ModeToggle } from "../ui/mode-toggle"
import Link from "next/link"
import { cookies } from "next/headers"
import LogoutBtn from "../btn/logout-btn"
import { Button } from "../ui/button"

const Navbar = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")

  return (
    <header className='max-w-5xl mx-auto flex justify-between'>
      <Link href={token ? "/home" : "/"}>Logo</Link>
      <div className='flex items-center gap-2'>
        {token ? (
          <LogoutBtn />
        ) : (
          <Link href={"/login"}>
            <Button>Login</Button>
          </Link>
        )}
        <ModeToggle />
      </div>
    </header>
  )
}

export default Navbar
