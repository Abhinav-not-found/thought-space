import { connectDB } from "@/lib/db"
import Blog from "@/models/blog.model"
import { cache } from "react"

export const getUserBlogs = cache(async (userId) => {
  await connectDB()

  const blogs = await Blog.find({ authorId: userId }).lean().sort({createdAt:-1}).limit(6)
  return blogs
})
