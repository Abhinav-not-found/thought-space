import { connectDB } from "@/lib/db"
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"
import Blog from "@/models/blog.model"

export const getMyBlogs = async () => {
  await connectDB()

  const cookieStore = await cookies()
  const token = cookieStore.get("token")?.value
  if (!token) return null

  const { userId } = jwt.verify(token, process.env.JWT_SECRET)

  const blogs = await Blog.find({ authorId: userId }).lean()
  return blogs
}
