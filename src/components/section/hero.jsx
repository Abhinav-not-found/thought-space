import React from "react"
import HeroBtn from "../btn/hero-btn"

const Hero = () => {
  return (
    <section className='w-full h-[60vh] md:h-[80vh]'>
      <p className='text-center mt-20 mb-7 bg-neutral-100 dark:bg-neutral-800 w-fit mx-auto p-1 rounded-sm md:rounded-md px-3 text-xs md:text-sm font-medium'>
        Thought = Blog
      </p>

      <h1 className='text-3xl md:text-6xl text-center  tracking-tight leading-10 md:leading-16'>
        <span className='font-semibold'>Thought Space </span>
        — Where <br />
        Ideas Become Blogs
      </h1>

      <div className='flex justify-center mt-14 '>
        <p className='text-center text-base md:text-xl text-muted-foreground w-2xl md:leading-8'>
          A clean, distraction-free blogging platform built for sharing
          thoughts,stories, and knowledge that actually matter.
        </p>
      </div>

      <div className='mt-14 flex justify-center'>
        <HeroBtn href={"/login"}>Start Writing</HeroBtn>
      </div>
    </section>
  )
}

export default Hero
