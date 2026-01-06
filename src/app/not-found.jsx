import HeroBtn from "@/components/btn/hero-btn"
import Heading, { Bold } from "@/components/general/heading"

const NotFound = () => {
  return (
    <main className='max-w-5xl mx-auto h-screen flex flex-col items-center justify-center'>
      <Heading>
        <Bold>404</Bold> - page not found
      </Heading>
      <div className='flex justify-center mt-10'>
        <p className='text-xl text-muted-foreground'>
          Looks like the page you have been looking for is not available.
        </p>
      </div>
      <div className='mt-24'>
        <HeroBtn href='/'>Back to Home</HeroBtn>
      </div>
    </main>
  )
}

export default NotFound
