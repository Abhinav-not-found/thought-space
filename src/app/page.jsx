import AuthRedirect from "@/components/route/authRedirect"
import Hero from "@/components/section/hero"

export default async function Home() {
  return (
    <AuthRedirect>
      <Hero />
    </AuthRedirect>
  )
}
