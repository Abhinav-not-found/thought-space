import { getUserInfo } from "@/helpers/server/user/get-user-info"
import { Button } from "../ui/button"
import { User } from "lucide-react"
import Link from "next/link"

const ProfileBtn = async () => {
  const userInfo = await getUserInfo()
  return (
    <Link href={`/profile/${userInfo?.username}`}>
      <Button variant='ghost' className={"w-full flex justify-start"}>
        <User />
        <p>Profile</p>
      </Button>
    </Link>
  )
}

export default ProfileBtn
