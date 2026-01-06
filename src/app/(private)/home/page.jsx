import BlogCard2 from "@/components/blog/blog-card2"

const Home = () => {
  return (
    <main className='flex gap-4'>
      <div className='flex gap-4'>
        <BlogCard2 />
        <BlogCard2 />
      </div>
      {/* <aside className="w-full h-screen bg-red-50"></aside> */}
    </main>
  )
}

export default Home
