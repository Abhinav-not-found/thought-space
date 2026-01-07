import { getAuthorInfo } from "@/helpers/blog-server/get-author-info"
import Link from "next/link"
import CardSkeleton from "../skeleton/card-sk"

// change the skeleton so that the logo is in middle and it looks like footer(faded at the bottom)

// change card skeleton name to card-image-skeleton

const BlogCard2 = async ({ data }) => {
  const author = await getAuthorInfo(data?.authorId.toString())
  const formattedDate = data?.createdAt
    ? new Date(data.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "date"

  return (
    <div className='w-82 h-62 rounded-lg'>
      <CardSkeleton />
      <div className='w-full h-1/3 p-2'>
        <div className='flex gap-2 mt-1'>
          <Link
            href={`/profile/${author?.username}`}
            className='text-xs text-muted-foreground hover:underline underline-offset-2'
          >
            {author?.username || "author"}
          </Link>
          <p className='text-xs text-muted-foreground'>
            {formattedDate || "date"}
          </p>
        </div>
        <Link
          href={`/blog/${data?.slug}`}
          className='text-xl font-medium tracking-tight mt-1 first-letter:uppercase hover:underline underline-offset-2'
        >
          {data?.title || "Title"}
        </Link>
      </div>
    </div>
  )
}

export default BlogCard2
