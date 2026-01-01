import Container from "@/components/general/container"
import AuthRedirect from "@/components/route/authRedirect"

export default async function Home() {
  return (
    <AuthRedirect>
      <Container>landing page</Container>
    </AuthRedirect>
  )
}
