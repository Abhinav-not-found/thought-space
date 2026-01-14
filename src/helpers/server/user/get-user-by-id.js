import { connectDB } from "@/lib/db"
import User from "@/models/user.model"

export const getUserById = async (userId) => {
  await connectDB()
  return User.findById(userId).lean()
}
