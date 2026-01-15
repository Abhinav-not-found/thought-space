import React from "react"

const CardImageSkeleton = () => {
  return (
    <div className='w-full h-full bg-neutral-100 dark:bg-neutral-900 rounded-t-lg overflow-clip relative'>
      {/* top-left */}
      <div className='absolute top-4 left-6 w-12 h-12 bg-neutral-300/50 rounded-full blur-2xl' />

      {/* center */}
      <div className='absolute top-1/3 left-1/3 w-24 h-24 bg-white dark:bg-neutral-100/60 rounded-full blur-3xl' />

      {/* right */}
      <div className='absolute top-10 right-0 w-16 h-20 bg-neutral-200/20 rounded-xl blur-2xl' />

      {/* bottom-left */}
      <div className='absolute bottom-6 left-4 w-20 h-20 bg-neutral-white rounded-full blur-3xl' />

      {/* bottom-right */}
      <div className='absolute -bottom-6 -right-8 w-32 h-24 bg-neutral-300/20 rounded-2xl blur-3xl' />

      {/* extra subtle glow */}
      <div className='absolute top-1/2 right-3/4 w-10 h-10 bg-neutral-700/20 rounded-full blur-2xl' />
    </div>
  )
}

export default CardImageSkeleton
