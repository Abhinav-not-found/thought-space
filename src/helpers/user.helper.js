import { connectDB } from "@/lib/db"
import User from "@/models/user.model"
import { cookies } from "next/headers"
import jwt from 'jsonwebtoken'

export const getUserInfo = async (username) => {
  await connectDB()

  if (username) {
    return User.findOne({ username }).lean()
  }

  const cookieStore = await cookies()
  const token = cookieStore.get("token")?.value
  if (!token) return null

  const { userId } = jwt.verify(token, process.env.JWT_SECRET)
  return  User.findById(userId).lean()
}
