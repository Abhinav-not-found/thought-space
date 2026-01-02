import React from "react"
import { Button } from "../ui/button"
import { User } from "lucide-react"
import Link from "next/link"

const ProfileBtn = () => {
  return (
    <Link href={'/profile/name'}>
      <Button variant='ghost' className={"w-full"}>
        <User />
        <p>Profile</p>
      </Button>
    </Link>
  )
}

export default ProfileBtn
