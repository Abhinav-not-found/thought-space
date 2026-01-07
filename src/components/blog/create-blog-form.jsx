"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"

import { Spinner } from "@/components/ui/spinner"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { handleCreateBlog } from "@/helpers/blog.helper"

const CreateBlogForm = () => {
  const router = useRouter()
  const [form, setForm] = useState({ title: "", content: "" })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
  }

  return (
    <form
      onSubmit={(e) => handleCreateBlog(e, form, router, { setLoading, toast })}
      className='space-y-4 mx-6 md:mx-0'
    >
      <input
        id='title'
        value={form.title}
        onChange={handleChange}
        placeholder='Title'
        className='w-full text-5xl font-semibold placeholder:text-neutral-300/80 dark:placeholder:text-neutral-600 outline-none'
      />
      <textarea
        id='content'
        value={form.content}
        onChange={handleChange}
        placeholder='Blog'
        className='w-full h-80 outline-none mt-4'
      />
      <div className='flex gap-2'>
        {/* <Button variant='outline'>Save as draft</Button> */}
        <Button type='submit' disabled={loading}>
          {loading ? <Spinner /> : "Post"}
        </Button>
      </div>
    </form>
  )
}

export default CreateBlogForm
