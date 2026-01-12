import { cookies } from "next/headers"
import jwt from "jsonwebtoken"
import { connectDB } from "@/lib/db"
import User from "@/models/user.model"

export const getProfileInfoById = async () => {
  await connectDB()

  const cookieStore = await cookies()
  const token = cookieStore.get("token")?.value
  if (!token) return null

  let decoded
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET)
  } catch {
    return null
  }

  const user = await User.findById(decoded.userId)
    .select("avatar ")
    .lean()

  return user
}
