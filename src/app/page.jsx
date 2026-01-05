import Container from "@/components/general/container"
import AuthRedirect from "@/components/route/authRedirect"
import Footer from "@/components/section/footer"
import Hero from "@/components/section/hero"
import Trending from "@/components/section/trending"
import Why from "@/components/section/why"

// change(UI) blog to thoughts ex: my blogs - my thoughts, featured thoughts

// a section where you showcase the writing feature with screen shot/video of writing blog

export default async function LandingPage() {
  return (
    <AuthRedirect>
      <Container>
        <Hero />
        <Why />
        <Trending />
        <Footer />
      </Container>
    </AuthRedirect>
  )
}
