import React from "react"
// in case of no image, add a skeleton with micro interaction
const BlogCard = () => {
  return (
    <article className='min-w-[22rem] h-72 rounded-xl border'>
      <div className='w-full h-2/3 border-b'></div>
      <div className='w-full h-1/2 p-2 flex flex-col gap-6'>
        <h3 className='text-2xl font-medium'>Title</h3>
        <div className='flex justify-between'>
          <p className='text-muted-foreground text-sm hover:underline cursor-pointer'>
            Author
          </p>
          <p className='text-muted-foreground text-sm'>Jan 12, 2024</p>
        </div>
      </div>
    </article>
  )
}

export default BlogCard
