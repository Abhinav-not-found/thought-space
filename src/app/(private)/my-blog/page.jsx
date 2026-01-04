import BlogCard from "@/components/blog/blog-card"
import { getMyBlogs } from "@/helpers/blog-server/my-blog"

const MyBlogs = async () => {
  const blogs = await getMyBlogs()
  return (
    <main>
      <div className='w-2/3 grid grid-cols-2 auto-rows-max gap-x-10 gap-y-8 mt-4'>
        {blogs.map((i, index) => {
          return <BlogCard key={index} data={i} />
        })}
      </div>
    </main>
  )
}

export default MyBlogs
