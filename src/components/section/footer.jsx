import Link from "next/link"
import React from "react"
import FooterLinks from "../general/footer-links"

const Footer = () => {
  return (
    <footer className='w-full md:w-5xl mx-auto mt-32 py-5 '>
      {/* <FooterLinks/> */}
      <h2 className='text-[42px] md:text-9xl font-extrabold text-center text-transparent bg-clip-text bg-linear-to-b from-neutral-200 dark:from-neutral-700 via-neutral-200/60 dark:via-neutral-800 to-neutral-50/30 dark:to-neutral-950 select-none'>
        Thought Space
      </h2>
      <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:mt-5 mb-5 text-muted-foreground'>
        <p className='text-xs md:text-base'>
          © 2024 Thought Space. All rights reserved.
        </p>
        <p className='text-xs md:text-base'>
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
