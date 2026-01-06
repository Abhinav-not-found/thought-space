import User from "@/models/user.model"

export const generateUsername = async (name) => {
  const base = name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .slice(0, 16)

  let username
  let exists = true

  while (exists) {
    const randomNumber = Math.floor(100 + Math.random() * 9900)
    username = `${base}${randomNumber}`
    exists = await User.findOne({ username })
  }

  return username
}
