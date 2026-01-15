import { connectDB } from "@/lib/db"
import Blog from "@/models/blog.model"
import { cache } from "react"

export const getBlogBySlug = cache(async (slug) => {
  await connectDB()

  return Blog.findOne({ slug }).populate('authorId', 'name username').lean()

})
