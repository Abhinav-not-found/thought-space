import BlogCard2 from "@/components/blog/blog-card2"
import { getGlobalFeed } from "@/helpers/blog-server/get-global-feed"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

const Home = async () => {
  const globalFeed = await getGlobalFeed()
  if (!globalFeed.length) {
    return (
      <>
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant='icon'>
              <Icon />
            </EmptyMedia>
            <EmptyTitle>No data</EmptyTitle>
            <EmptyDescription>No data found</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button>Add data</Button>
          </EmptyContent>
        </Empty>
      </>
    )
  }

  return (
    <main className='flex gap-4 relative w-full'>
      <section className='grid grid-cols-1 md:grid-cols-3 gap-6 -ml-1 md:ml-0'>
        {globalFeed.map((blog) => (
          <BlogCard2 key={blog._id} data={blog} />
        ))}
      </section>

      {/* <aside className="w-full h-screen bg-red-50"></aside> */}
    </main>
  )
}
export const revalidate = 60
export default Home
