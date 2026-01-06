const BlogCard2 = () => {
  return (
    <div className='w-82 h-62 rounded-lg'>
      <div className='w-full h-2/3 bg-neutral-100 rounded-t-lg'></div>
      <div className='w-full h-1/3 p-2'>
        <div className='flex gap-1 mt-1'>
          <p className='text-sm text-muted-foreground'>Author</p>
          <p className='text-sm text-muted-foreground'>Date</p>
        </div>
        <p className='text-2xl font-medium tracking-tighter mt-1'>Title</p>
      </div>
    </div>
  )
}

export default BlogCard2
