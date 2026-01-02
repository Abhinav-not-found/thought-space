"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Spinner } from "@/components/ui/spinner"

const CreateBlogForm = ({ userId }) => {
  const [form, setForm] = useState({ title: "", content: "" })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
  }

  const handleCreateBlog = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api/blog/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, userId }),
      })
      const data = await res.json()
      if (res.ok) {
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleCreateBlog}>
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
