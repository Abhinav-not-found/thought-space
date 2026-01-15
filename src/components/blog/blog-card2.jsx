import { getAuthorInfo } from "@/helpers/server/blog/get-author-info"
import Link from "next/link"
import Image from "next/image"
import CardImageSkeleton from "../skeleton/card-sk"

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
    <div className='w-75 md:w-82 h-70 md:h-62 rounded-lg'>
      <div className='w-full h-2/3 relative overflow-hidden'>
        {data?.banner ? (
          <Image
            src={data?.banner}
            alt={data?.title || "Blog banner"}
            fill
            priority
            className='object-cover rounded-t-md dark:brightness-90'
          />
        ) : (
          <CardImageSkeleton />
        )}
      </div>
      <div className='w-full h-1/3 p-2'>
        <div className='flex gap-2 mt-1 mb-1'>
          <Link
            href={`/profile/${author?.username}`}
            className='text-sm md:text-xs text-muted-foreground hover:underline underline-offset-2'
          >
            {author?.username || "author"}
          </Link>
          <p className='text-sm md:text-xs text-muted-foreground'>
            {formattedDate || "date"}
          </p>
        </div>
        <Link
          href={`/blog/${data?.slug}`}
          className='text-xl md:text-xl font-medium tracking-tight mt-1 first-letter:uppercase hover:underline leading-6 md:leading-0 underline-offset-2'
        >
          {data?.title || "Title"}
        </Link>
      </div>
    </div>
  )
}

export default BlogCard2
