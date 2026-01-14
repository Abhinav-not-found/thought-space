import { connectDB } from "@/lib/db"
import User from "@/models/user.model"
import { getUserId } from "./user-server/get-userId"

export const getUserInfo = async (username) => {
  await connectDB()

  if (username) {
    return User.findOne({ username }).lean()
  }

  const userId = await getUserId()
  return User.findById(userId).lean()
}

export const getAllUsers = async () => {
  await connectDB()

  return User.find(
    { username: { $exists: true, $ne: "" } },
    { username: 1, updatedAt: 1 }
  ).lean()
}

export const getUserById = async (userId) => {
  await connectDB()
  return User.findById(userId).lean()
}
