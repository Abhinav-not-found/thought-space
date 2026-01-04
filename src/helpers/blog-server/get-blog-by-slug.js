import { connectDB } from "@/lib/db"
import Blog from "@/models/blog.model"

export const getBlogBySlug = async (slug) => {
  await connectDB()

  return Blog.findOne({ slug }).populate('authorId', 'name').lean()

}
