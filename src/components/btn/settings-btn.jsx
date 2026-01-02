import React from "react"
import { Button } from "../ui/button"
import { Settings } from "lucide-react"
import Link from "next/link"

const SettingsBtn = () => {
  return (
    <Link href={"/settings"}>
      <Button variant='ghost' className={"w-full flex justify-start"}>
        <Settings />
        <p>Settings</p>
      </Button>
    </Link>
  )
}

export default SettingsBtn
