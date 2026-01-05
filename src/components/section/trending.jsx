import React from "react"
import BlogCard from "../blog/blog-card"
import Heading, { Bold } from "../general/heading"

// make new cards and display them in 3x2 grid

const Trending = () => {
  return (
    <section className='h-screen pt-28'>
      <Heading>
        <Bold>Trending</Bold> Thoughts
      </Heading>
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
