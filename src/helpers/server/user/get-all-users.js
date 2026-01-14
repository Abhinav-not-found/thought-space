import { connectDB } from "@/lib/db"
import User from "@/models/user.model"

export const getAllUsers = async () => {
  await connectDB()

  return User.find(
    { username: { $exists: true, $ne: "" } },
    { username: 1, updatedAt: 1 }
  ).lean()
}
