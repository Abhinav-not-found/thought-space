import Link from "next/link"
import React from "react"
// in case of no image, add a skeleton with micro interaction

const BlogCard = () => {
  return (
    <article className='min-w-88 h-72 rounded-xl border'>
      <div className='w-full h-2/3 border-b'></div>
      <div className='w-full h-1/2 p-2 flex flex-col gap-6'>
        <Link
          href={"/blog/name"}
          className='text-2xl hover:underline font-medium'
        >
          Title
        </Link>
        <div className='flex justify-between'>
          <Link
            href={"/profile/name"}
            className='text-muted-foreground text-sm hover:underline cursor-pointer'
          >
            Author
          </Link>
          <p className='text-muted-foreground text-sm'>Jan 12, 2024</p>
        </div>
      </div>
    </article>
  )
}

export default BlogCard
