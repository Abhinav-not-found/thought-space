"use client"
import { useState } from "react"
import { Button } from "../ui/button"
import { Spinner } from "../ui/spinner"
import { handleLogout } from "@/helpers/auth.helper"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const LogoutBtn = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  return (
    <Button onClick={() => handleLogout(toast, router, { setLoading })}>
      {loading ? <Spinner /> : "Logout"}
    </Button>
  )
}

export default LogoutBtn
