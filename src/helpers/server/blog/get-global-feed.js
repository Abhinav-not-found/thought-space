import { connectDB } from "@/lib/db"
import Blog from "@/models/blog.model"

export const getGlobalFeed = async () => {
  await connectDB()

  const globalFeed = await Blog.find({}).lean().sort({ createdAt: -1 })
  return globalFeed
}
