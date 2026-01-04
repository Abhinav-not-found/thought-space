import { connectDB } from "@/lib/db"
import User from "@/models/user.model"

export const getAuthorInfo = async ( id ) => {
  await connectDB()
  const author = await User.findById(id).lean()
  return author
}
