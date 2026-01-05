import Link from "next/link"
import React from "react"

const HeroBtn = ({ children }) => {
  return (
    <Link href='#_' className='relative inline-block text-lg group'>
      <span className='relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-neutral-800 dark:text-neutral-200 transition-colors duration-300 ease-out border-2 border-neutral-900 dark:border-neutral-100 rounded-lg group-hover:text-neutral-100 dark:group-hover:text-black'>
        <span className='absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-950'></span>
        <span className='absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-neutral-900 dark:bg-neutral-200 group-hover:-rotate-180 ease'></span>
        <span className='relative'>{children}</span>
      </span>
      <span
        className='absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-neutral-900 dark:bg-neutral-100 rounded-lg group-hover:mb-0 group-hover:mr-0'
        data-rounded='rounded-lg'
      ></span>
    </Link>
  )
}

export default HeroBtn
