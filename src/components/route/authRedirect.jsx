import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const AuthRedirect = async ({ children }) => {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")

  if (token) redirect("/home")

  return <main>{children}</main>
}

export default AuthRedirect
