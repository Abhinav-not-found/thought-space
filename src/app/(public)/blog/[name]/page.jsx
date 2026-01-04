import React from "react"

const BlogDetail = () => {
  return (
    <main>
      <div className='bg-neutral-100 dark:bg-neutral-800 w-full h-90 rounded-md'></div>
      <div className="mt-4">
        <h1 className="text-5xl">Title</h1>
        <div className="mt-2">
          <p className="text-muted-foreground">Author | Date</p>
        </div>
        <div className="mt-8">
          <p>Content</p>
        </div>
      </div>
    </main>
  )
}

export default BlogDetail
