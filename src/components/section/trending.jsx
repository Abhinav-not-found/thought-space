import Heading, { Bold } from "../general/heading"
import BlogCard2 from "../blog/blog-card2"
import { getUserBlogs } from "@/helpers/blog-server/get-user-blogs"

// may be change this to a bento grid
const Trending = async () => {
  const blogs = await getUserBlogs("695e45c31839396f1d5ac19e")

  return (
    <section className='h-screen pt-28'>
      <Heading>
        <Bold>Trending</Bold> Thoughts
      </Heading>
      <div className='w-fit mt-14 grid grid-cols-3 grid-rows-2 mx-auto gap-x-12 gap-y-8'>
        {blogs.map((blog) => (
          <BlogCard2 key={blog._id} data={blog} />
        ))}
      </div>
    </section>
  )
}

export default Trending
