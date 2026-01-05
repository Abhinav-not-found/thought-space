import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <footer className='w-5xl mx-auto mt-10 py-5'>
      <h2 className='text-9xl font-extrabold text-center text-transparent bg-clip-text bg-linear-to-b from-neutral-300 dark:from-neutral-700 via-neutral-200/60 dark:via-neutral-800 to-neutral-50 dark:to-neutral-950 select-none'>
        Thought Space
      </h2>
      <div className='flex justify-center gap-2 mt-5 text-muted-foreground'>
        <p>© 2024 Thought Space. All rights reserved.</p>
        <p>
          Built by{" "}
          <Link
            href={"https://dev-abhinav.vercel.app/"}
            className='hover:underline underline-offset-2'
            target='_blank'
          >
            Abhinav
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
