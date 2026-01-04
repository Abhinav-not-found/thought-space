import { connectDB } from "@/lib/db"
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"
import Blog from "@/models/blog.model"
import User from "@/models/user.model"

export const getAuthorInfo = async ( id ) => {
  await connectDB()

  // const cookieStore = await cookies()
  // const token = cookieStore.get("token")?.value
  // if (!token) return null

  // const { userId } = jwt.verify(token, process.env.JWT_SECRET)

  const author = await User.findById(id).lean()
  return author
}
