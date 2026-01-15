import { connectDB } from "@/lib/db"
import Blog from "@/models/blog.model"

export async function getAllBlogSlugs() {
  await connectDB()

  const blogs = await Blog.find({}, "slug").lean()

  return blogs
}
