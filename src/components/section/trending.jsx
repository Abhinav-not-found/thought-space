import Heading, { Bold } from "../general/heading"
import BlogCard2 from "../blog/blog-card2"

// may be change this to a bento grid
const Trending = () => {
  return (
    <section className='h-screen pt-28'>
      <Heading>
        <Bold>Trending</Bold> Thoughts
      </Heading>
      <div className='w-fit mt-14 grid grid-cols-3 grid-rows-2 mx-auto gap-x-12 gap-y-8'>
        <BlogCard2/>
        <BlogCard2/>
        <BlogCard2/>
        <BlogCard2/>
        <BlogCard2/>
        <BlogCard2/>
      </div>
    </section>
  )
}

export default Trending
