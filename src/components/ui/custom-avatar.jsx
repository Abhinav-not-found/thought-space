import React from "react"
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

const CustomAvatar = async () => {
  const data = await getUserInfo()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarFallback>{data.name[0].toUpperCase()}</AvatarFallback>
          {/* <AvatarImage src='https://github.com/shadcn.png' /> */}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className='text-left'>
          <ProfileBtn />
          {/* <MyThoughtBtn /> */}
          {/* <SettingsBtn /> */}
          <LogoutBtn />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default CustomAvatar
