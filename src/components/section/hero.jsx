import React from "react"
import { Button } from "../ui/button"

// custom button ui(cta)

const Hero = () => {
  return (
    <section className='w-full h-[80vh]'>
      <h1 className='text-6xl text-center pt-32 tracking-tight'>
        <span className='font-semibold'>Thought Space </span>
        — Where <br />
        Ideas Become Blogs
      </h1>
      <div className='flex justify-center mt-14 '>
        <p className='text-center text-xl text-muted-foreground w-2xl leading-8'>
          A clean, distraction-free blogging platform built for sharing
          thoughts,stories, and knowledge that actually matter.
        </p>
      </div>

      <div className='mt-14 flex justify-center'>
        <Button>Start Writing</Button>
      </div>
    </section>
  )
}

export default Hero
