import Container from "@/components/general/container"
import AuthRedirect from "@/components/route/authRedirect"
import Footer from "@/components/section/footer"
import Hero from "@/components/section/hero"
import Trending from "@/components/section/trending"
import Why from "@/components/section/why"
import Write from "@/components/section/write"
import SetBeta from "@/lib/setBeta"

export default async function LandingPage() {
  return (
    <AuthRedirect>
      <SetBeta/>
      <Container>
        <Hero />
        <Why />
        <Write />
        <Trending />
        <Footer />
      </Container>
    </AuthRedirect>
  )
}
