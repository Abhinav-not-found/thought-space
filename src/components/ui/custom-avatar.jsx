import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import LogoutBtn from "../btn/logout-btn"
import ProfileBtn from "../btn/profile-btn"
import SettingsBtn from "../btn/settings-btn"
import FeedbackBtn from "../btn/feedback-btn"
import ChangelogBtn from "../btn/changelog-btn"
import { getUserInfo } from "@/helpers/server/user/get-user-info"
import { getProfileAvatarById } from "@/helpers/server/user/get-profile-avatar-by-id"

const CustomAvatar = async () => {
  const data = await getUserInfo()
  const user = await getProfileAvatarById()
  if (!user) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user.avatar || undefined} />
          <AvatarFallback>{data.name[0].toUpperCase()}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className='text-left'>
          <ProfileBtn />
          {/* <SettingsBtn /> */}
          <LogoutBtn />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default CustomAvatar
