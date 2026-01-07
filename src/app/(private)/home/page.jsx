import BlogCard2 from "@/components/blog/blog-card2"
import BetaToast from "@/components/general/beta-toast"
import { getGlobalFeed } from "@/helpers/blog-server/get-global-feed"

const Home = async () => {
  const globalFeed = await getGlobalFeed()

  return (
    <main className='flex gap-4 relative w-full'>
      <BetaToast />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 -ml-1 md:ml-0'>
        {globalFeed.map((blog) => (
          <BlogCard2 key={blog._id} data={blog} />
        ))}
      </div>
      {/* <aside className="w-full h-screen bg-red-50"></aside> */}
    </main>
  )
}

export default Home
