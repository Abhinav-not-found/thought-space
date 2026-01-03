import Container from "@/components/general/container"
import AuthRedirect from "@/components/route/authRedirect"
import Hero from "@/components/section/hero"

export default async function Home() {
  return (
    <AuthRedirect>
      <Container><Hero/></Container>
    </AuthRedirect>
  )
}
