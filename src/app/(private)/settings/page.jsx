"use client"
import AccountSection from "@/components/settings/account-section"
import { UserRoundCog } from "lucide-react"
import { useState } from "react"

const Settings = () => {
  const [active, setActive] = useState("account")

  return (
    <main className='flex flex-row gap-4'>
      <aside className='w-1/3 h-screen py-2'>
        <Button tab='account' activeTab={active} setActiveTab={setActive}>
          <UserRoundCog className='size-5' />
          Account Settings
        </Button>
      </aside>
      <AccountSection/>
    </main>
  )
}
const Button = ({ children, tab, activeTab, setActiveTab }) => {
  const isActive = activeTab === tab
  return (
    <button
      onClick={() => setActiveTab(tab)}
      className={` px-4 w-full py-3 rounded flex gap-2 items-center font-medium cursor-pointer ${
        isActive
          ? "text-black dark:text-white bg-neutral-100 dark:bg-neutral-800 rounded-md"
          : "text-muted-foreground"
      }`}
    >
      {children}
    </button>
  )
}

export default Settings
