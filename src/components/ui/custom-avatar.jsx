import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import LogoutBtn from "../btn/logout-btn"
import ProfileBtn from "../btn/profile-btn"
import SettingsBtn from "../btn/settings-btn"
import MyThoughtBtn from "../btn/my-thought-btn"
import { getUserInfo } from "@/helpers/user.helper"
import FeedbackBtn from "../btn/feedback-btn"
import ChangelogBtn from "../btn/changelog-btn"
import { cookies } from "next/headers"
import { getProfileInfoById } from "@/helpers/user-server/get-user-by-id"

const CustomAvatar = async () => {
  const data = await getUserInfo()
  const user = await getProfileInfoById()
  console.log(user)
  if (!user) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarFallback>{data.name[0].toUpperCase()}</AvatarFallback>
          <AvatarImage src={user.avatar || undefined} />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className='text-left'>
          <ProfileBtn />
          <FeedbackBtn />
          <ChangelogBtn />
          {/* <MyThoughtBtn /> */}
          {/* <SettingsBtn /> */}
          <LogoutBtn />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default CustomAvatar
