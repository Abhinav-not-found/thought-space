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
        <section className='mt-5 grid grid-cols-2 gap-6 flex-1' aria-label='user blogs'>
          {blogs.map((i, index) => {
            return <BlogCard2 key={index} data={i} />
          })}
        </section>
      </div>
      <aside className='w-1/3 h-fit rounded-md p-4'>
        <div className='size-20 bg-neutral-100 rounded-full'></div>
        <h2 className='text-xl font-medium mt-2 first-letter:uppercase'>
          {data.name}
        </h2>
        <p>{data.bio}</p>
      </aside>
    </main>
  )
}

export default Profile
