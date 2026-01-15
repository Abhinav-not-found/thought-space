import { connectDB } from "@/lib/db"

import Blog from "@/models/blog.model"
import { getUserId } from "../user/get-userId"

export const getMyBlogs = async () => {
  await connectDB()
  const userId = getUserId()

  const blogs = await Blog.find({ authorId: userId }).lean().sort({createdAt:-1})
  return blogs
}
