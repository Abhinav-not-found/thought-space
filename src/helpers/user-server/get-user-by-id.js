import { connectDB } from "@/lib/db"
import User from "@/models/user.model"
import { getUserId } from "./get-userId"

export const getProfileInfoById = async () => {
  await connectDB()

  const userId = await getUserId()
  if (!userId) return null

  const user = await User.findById(userId)
    .select("avatar ")
    .lean()

  return user
}
