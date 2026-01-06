import BlogCard from "@/components/blog/blog-card"
import BlogCard2 from "@/components/blog/blog-card2"
import { getUserBlogs } from "@/helpers/blog-server/get-user-blogs"
import { getUserInfo } from "@/helpers/user.helper"

const Profile = async ({ params }) => {
  const { name: username } = await params

  const data = await getUserInfo(username)

  const blogs = await getUserBlogs(data._id)

  return (
    <main className='flex gap-6 pt-5'>
      <div className='w-2/3 h-screen'>
        <div className='flex justify-between'>
          <h1 className='text-4xl font-semibold first-letter:uppercase'>
            {data.username}
          </h1>
          {/* <button>...</button> */}
        </div>
        <div className='mt-5'>
          {blogs.map((i, index) => {
            return <BlogCard2 key={index} data={i} />
          })}
        </div>
      </div>
      {/* <aside className='w-1/3 h-fit border rounded-md p-4'>
        <div className='size-20 bg-red-50 rounded-full'></div>
        <h2>{data.name}</h2>
        <p>{data.bio}</p>
      </aside> */}
    </main>
  )
}

export default Profile
