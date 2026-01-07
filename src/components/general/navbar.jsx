import React from "react"
import { ModeToggle } from "../ui/mode-toggle"
import Link from "next/link"
import { cookies } from "next/headers"
import { Button } from "../ui/button"
import WriteBtn from "../btn/write-btn"
import Logo from "./logo"
import CustomAvatar from "../ui/custom-avatar"
import DevBtn from "../btn/dev-btn"

const Navbar = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")

  return (
    <header className=' h-14 max-w-5xl mx-auto flex items-center justify-between'>
      <Logo token={token} />
      <div className='flex items-center gap-2'>
        {token && <DevBtn />}
        <ModeToggle />
        {token ? (
          <div className='flex gap-3'>
            <WriteBtn />
            <CustomAvatar />
          </div>
        ) : (
          <Link href={"/login"}>
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </header>
  )
}

export default Navbar
