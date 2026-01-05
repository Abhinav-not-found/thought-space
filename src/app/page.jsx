import Container from "@/components/general/container"
import AuthRedirect from "@/components/route/authRedirect"
import Footer from "@/components/section/footer"
import Hero from "@/components/section/hero"

export default async function LandingPage() {
  return (
    <AuthRedirect>
      <Container>
        <Hero />
        <Footer />
      </Container>
    </AuthRedirect>
  )
}
