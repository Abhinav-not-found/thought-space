import BlogCard from "@/components/blog/card"

const Home = () => {
  return (
    <main className='flex gap-4'>
      <div className='flex gap-4'>
        <BlogCard />
        <BlogCard />
      </div>
      {/* <div className="w-full h-screen bg-red-50"></div> */}
    </main>
  )
}

export default Home
