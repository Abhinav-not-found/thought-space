import { getAuthorInfo } from "@/helpers/blog-server/get-author-info"
import Link from "next/link"
import React from "react"
// in case of no image, add a skeleton with micro interaction

const BlogCard = async ({ data }) => {
  const author = await getAuthorInfo(data?.authorId.toString())
  const formattedDate = new Date(data?.createdAt).toDateString()

  return (
    <article className='min-w-88 max-w-88 h-72 rounded-xl border'>
      <div className='w-full h-2/3 border-b'></div>
      <div className='w-full h-1/2 p-2 flex flex-col gap-6'>
        <Link
          href={`/blog/${data?.slug}`}
          className='text-2xl hover:underline font-medium first-letter:uppercase'
        >
          {data?.title || "Title"}
        </Link>
        <div className='flex justify-between'>
          <Link
            href={"/profile/name"}
            className='text-muted-foreground text-sm hover:underline cursor-pointer first-letter:uppercase'
          >
            {author?.username || "author"}
          </Link>
          <p className='text-muted-foreground text-sm'>
            {formattedDate || "Date"}
          </p>
        </div>
      </div>
    </article>
  )
}

export default BlogCard
