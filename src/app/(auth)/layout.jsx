import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function AuthLayout({ children }) {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")

  if (token) redirect("/home")
  return children
}
