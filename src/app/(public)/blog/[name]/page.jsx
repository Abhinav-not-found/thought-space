import { getBlogBySlug } from "@/helpers/blog-server/get-blog-by-slug"
import Link from "next/link"
import { notFound } from "next/navigation"

// add skeleton for all elements
// add image skeleton

const BlogDetail = async ({ params }) => {
  const { name } = await params

  const data = await getBlogBySlug(name)
  if (!data) notFound()
  const formattedDate = data?.createdAt
    ? new Date(data.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "date"

  return (
    <main>
      <div className='bg-neutral-100 dark:bg-neutral-800 w-full h-90 rounded-md'></div>
      <article className='mt-4'>
        <h1 className='text-5xl first-letter:uppercase font-medium'>
          {data?.title}
        </h1>
        <div className='mt-4 flex items-center gap-4 text-muted-foreground'>
          <Link
            href={`/profile/${data?.authorId?.username}`}
            className='text-muted-foreground first-letter:uppercase hover:underline'
          >
            {data?.authorId?.username}
          </Link>
          <time dateTime={data.createdAt}>{formattedDate}</time>
        </div>
        <div className='mt-8'>
          <p className='first-letter:uppercase text-xl leading-relaxed'>
            {data?.content}
          </p>
        </div>
      </article>
    </main>
  )
}

export default BlogDetail

