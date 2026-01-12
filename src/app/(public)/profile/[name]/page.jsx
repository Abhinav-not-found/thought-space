import BlogCard2 from "@/components/blog/blog-card2"
import ProfileCard from "@/components/profile/profile-card"
import { getUserBlogs } from "@/helpers/blog-server/get-user-blogs"
import { getUserInfo } from "@/helpers/user.helper"

const Profile = async ({ params }) => {
  const { name: username } = await params

  const data = await getUserInfo(username)

  const blogs = await getUserBlogs(data._id)

  return (
    <main className='flex flex-col-reverse md:flex-row gap-6 pt-5'>
      <div className='w-2/3 h-screen'>
        <div className='flex justify-between ml-4 md:ml-0 '>
          <h1 className='text-4xl font-semibold first-letter:uppercase'>
            {data.username}
          </h1>
          {/* <button>...</button> */}
        </div>
        <section
          className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 ml-3 md:ml-0 flex-1'
          aria-label='user blogs'
        >
          {blogs.map((i, index) => {
            return <BlogCard2 key={index} data={i} />
          })}
        </section>
      </div>
      <ProfileCard data={data} />
    </main>
  )
}

export default Profile
