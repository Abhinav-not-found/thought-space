// when clicked or navigated away -> save as draft in local storage

import CreateBlogForm from "@/components/auth/blog/create-blog-form"
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"

const CreateBlog = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")?.value

  let userId = null
  if (token) {
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    userId = decode.userId
  }

  return (
    <main>
      <CreateBlogForm userId={userId} />
    </main>
  )
}

export default CreateBlog
