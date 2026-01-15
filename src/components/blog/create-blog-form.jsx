"use client"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"

import { Spinner } from "@/components/ui/spinner"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { handleCreateBlog } from "@/helpers/client/blog.client.helper"
import Tiptap from "../general/Tiptap"

const CreateBlogForm = () => {
  const router = useRouter()

  const fileRef = useRef(null)
  const [banner, setBanner] = useState(null)

  const [form, setForm] = useState({ title: "", content: "" })
  const [loading, setLoading] = useState(false)
  console.log(form)

  const handleChange = (e) => {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
  }
  const handleContentChange = (html) => {
    setForm((prev) => ({ ...prev, content: html }))
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("title", form.title)
        formData.append("content", form.content)
        if (banner) {
          formData.append("banner", banner)
        }
        handleCreateBlog(formData, router, { setLoading, toast })
      }}
      className='space-y-4 mx-4 md:mx-0 '
    >
      <input
        id='title'
        value={form.title}
        onChange={handleChange}
        placeholder='Title'
        className='w-full text-5xl font-semibold placeholder:text-neutral-300/80 dark:placeholder:text-neutral-600 outline-none'
      />
      <div className='flex gap-2 items-center'>
        <input
          ref={fileRef}
          id='banner'
          type='file'
          accept='image/*'
          className='hidden'
          onChange={(e) => setBanner(e.target.files?.[0] || null)}
        />
        <Button
          type='button'
          variant='outline'
          onClick={() => fileRef.current?.click()}
        >
          Upload Banner
        </Button>
        {banner && (
          <span className='text-sm text-neutral-500 truncate max-w-50'>
            {banner.name}
          </span>
        )}
      </div>

      <Tiptap content={form.content} onChange={handleContentChange} />
      <div className='flex gap-2'>
        <Button type='submit' disabled={loading}>
          {loading ? <Spinner /> : "Post"}
        </Button>
      </div>
    </form>
  )
}

export default CreateBlogForm
