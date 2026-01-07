import LoginForm from "@/components/auth/login-form"
import Heading, { Bold } from "@/components/general/heading"

const Login = () => {
  return (
    <main className='w-full'>
      <div className='flex flex-col justify-center items-center mt-28 mb-10'>
        <Heading>
          <Bold>Welcome</Bold> Back
        </Heading>
        <p className='text-muted-foreground text-lg mt-3'>
          Sign in to your account to continue
        </p>
      </div>
      <div className='max-w-lg mx-auto px-4 md:px-0'>
        <LoginForm />
      </div>
    </main>
  )
}

export default Login


export const metadata = {
  title: "Login – Thought Space",
  robots: { index: false, follow: false },
}

