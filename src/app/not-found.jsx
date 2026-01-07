import HeroBtn from "@/components/btn/hero-btn"
import Heading, { Bold } from "@/components/general/heading"
import { cookies } from "next/headers"

const NotFound = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")
  
  return (
    <main className='max-w-5xl mx-auto h-screen flex flex-col items-center justify-center'>
      <Heading>
        <Bold>404</Bold> - page not found
      </Heading>
      <div className='flex justify-center mt-10'>
        <p className='text-lg md:text-xl text-center text-muted-foreground'>
          Looks like the page you have been looking for is not available.
        </p>
      </div>
      <div className='mt-24'>
        <HeroBtn href={token ? "/home" : "/"}>Back to Home</HeroBtn>
      </div>
    </main>
  )
}

export default NotFound
