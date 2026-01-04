import { getBlogBySlug } from "@/helpers/blog-server/get-blog-by-slug"
import { notFound } from "next/navigation"

const BlogDetail = async ({ params }) => {
  const { name } = await params

  const data = await getBlogBySlug(name)
  if (!data) notFound()

  const formattedDate = new Date(data?.createdAt).toDateString()

  return (
    <main>
      <div className='bg-neutral-100 dark:bg-neutral-800 w-full h-90 rounded-md'></div>
      <div className='mt-4'>
        <h1 className='text-5xl first-letter:uppercase font-medium'>
          {data?.title}
        </h1>
        <div className='mt-2'>
          <p className='text-muted-foreground first-letter:uppercase'>
            {data?.authorId.name} {formattedDate}
          </p>
        </div>
        <div className='mt-8'>
          <p>{data?.content}</p>
        </div>
      </div>
    </main>
  )
}

export default BlogDetail
