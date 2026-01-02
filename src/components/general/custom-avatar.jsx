import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import LogoutBtn from "../btn/logout-btn"
import ProfileBtn from "../btn/profile-btn"
import SettingsBtn from "../btn/settings-btn"

const CustomAvatar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarFallback>test</AvatarFallback>
          <AvatarImage src='https://github.com/shadcn.png' />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className='text-left'>
          <ProfileBtn />
          <SettingsBtn />
          <LogoutBtn />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default CustomAvatar
