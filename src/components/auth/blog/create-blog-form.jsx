"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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
    >
      <Input
        id='title'
        value={form.title}
        onChange={handleChange}
        placeholder='Title'
      />
      <Textarea
        id='content'
        value={form.content}
        onChange={handleChange}
        placeholder='Blog'
      />
      <Button type='submit' disabled={loading}>
        {loading ? <Spinner /> : "Post"}
      </Button>
    </form>
  )
}

export default CreateBlogForm
