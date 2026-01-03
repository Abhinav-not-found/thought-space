import BlogCard from "@/components/blog/blog-card"

const Home = () => {
  return (
    <main className='flex gap-4'>
      <div className='flex gap-4'>
        <BlogCard />
        <BlogCard />
      </div>
      {/* <aside className="w-full h-screen bg-red-50"></aside> */}
    </main>
  )
}

export default Home
