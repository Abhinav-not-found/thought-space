import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React from "react"

const CreateBlog = () => {
  // when clicked or navigated away -> save as draft in local storage
  return (
    <main>
      <Input placeholder='Title' />
      <Textarea placeholder='Blog' />
      <Button>Post</Button>
    </main>
  )
}

export default CreateBlog
