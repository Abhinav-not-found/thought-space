"use client"
import { useState } from "react"
import { Button } from "../ui/button"
import { Spinner } from "../ui/spinner"
import { handleLogout } from "@/helpers/auth.helper"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"

const LogoutBtn = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  return (
    <Button
      variant='ghost'
      onClick={() => handleLogout(toast, router, { setLoading })}
      className={"w-full flex justify-start"}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          <LogOut />
          <p>Logout</p>
        </>
      )}
    </Button>
  )
}

export default LogoutBtn
