import { connectDB } from "@/lib/db"
import Blog from "@/models/blog.model"

export const getUserBlogs = async (userId) => {
  await connectDB()

  const blogs = await Blog.find({ authorId: userId }).lean()
  return blogs
}
