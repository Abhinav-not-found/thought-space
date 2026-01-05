import React from "react"
import BlogCard from "../blog/blog-card"

const Trending = () => {
  return (
    <section className='h-screen mt-10'>
      <h1 className='text-6xl text-center tracking-tighter'>
        <span className='font-semibold'>Trending</span> Thoughts
      </h1>
      <div className='w-fit mt-14 grid grid-cols-2 mx-auto gap-x-12 gap-y-8'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  )
}

export default Trending
