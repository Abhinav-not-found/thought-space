import { connectDB } from "@/lib/db"
import User from "@/models/user.model"
import { getUserId } from "./get-userId"

export const getUserInfo = async (username) => {
  await connectDB()

  if (username) {
    return User.findOne({ username }).lean()
  }

  const userId = await getUserId()
  return User.findById(userId).lean()
}
