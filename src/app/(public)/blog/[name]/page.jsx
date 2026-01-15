import { getAllBlogSlugs } from "@/helpers/server/blog/get-all-blog-slugs"
import { getBlogBySlug } from "@/helpers/server/blog/get-blog-by-slug"
import Image from "next/image"
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
    <main className='w-full h-full'>
      <div className='bg-neutral-100 dark:bg-neutral-800 w-full h-40 md:h-90 rounded-md relative overflow-hidden'>
        <Image
          src={data.banner}
          alt={data.title}
          fill
          priority
          className='object-cover dark:brightness-90'
        />
      </div>
      <article className='mt-4 px-2 md:px-0 mb-20'>
        <h1 className='text-4xl md:text-5xl first-letter:uppercase font-semibold'>
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
        <div
          className='prose prose-neutral dark:prose-invert max-w-none mt-8 blog-content'
          dangerouslySetInnerHTML={{ __html: data?.content }}
        />
      </article>
    </main>
  )
}

export default BlogDetail

export async function generateStaticParams() {
  const blogs = await getAllBlogSlugs()

  return blogs.map((blog) => ({
    name: blog.slug,
  }))
}

export async function generateMetadata({ params }) {
  const blog = await getBlogBySlug(params.name)
  if (!blog) return {}

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      images: [blog.banner],
    },
  }
}
