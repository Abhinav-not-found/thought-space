"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Form, Logs, UserRoundCog } from "lucide-react"

export default function SettingsLayout({ children }) {
  const pathname = usePathname()

  return (
    <main className='flex flex-row gap-4'>
      <aside className='w-1/5 h-screen py-2'>
        <NavButton
          href='/settings/account'
          active={pathname === "/settings/account"}
        >
          <UserRoundCog className='size-4' />
          Account
        </NavButton>

        <NavButton
          href='/settings/feedback'
          active={pathname === "/settings/feedback"}
        >
          <Form className='size-4' />
          Feedback
        </NavButton>

        <NavButton
          href='/settings/changelog'
          active={pathname === "/settings/changelog"}
        >
          <Logs className='size-4' />
          Changelog
        </NavButton>
      </aside>

      <section className='flex-1'>{children}</section>
    </main>
  )
}

const NavButton = ({ href, active, children }) => {
  return (
    <Link
      href={href}
      className={`px-3 w-full py-2 rounded flex gap-2 items-center font-medium text-sm ${
        active
          ? "text-black dark:text-white bg-neutral-100 dark:bg-neutral-800"
          : "text-muted-foreground"
      }`}
    >
      {children}
    </Link>
  )
}
