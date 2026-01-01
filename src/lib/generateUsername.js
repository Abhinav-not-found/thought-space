import User from "@/models/user.model"

export const generateUsername = async (name) => {
  const base = name.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 20)
  let username = base
  let count = 1

  while (await User.findOne({ username })) {
    username = `${base}${count++}`
  }

  return username
}
