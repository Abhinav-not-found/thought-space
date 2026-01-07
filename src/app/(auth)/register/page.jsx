import RegisterForm from "@/components/auth/register-form"
import Heading, { Bold } from "@/components/general/heading"
import React from "react"

const Register = () => {
  return (
    <main className='w-full'>
      <div className='flex flex-col justify-center items-center mt-28 mb-10 '>
        <Heading>
          <Bold>Create</Bold> Account
        </Heading>
        <p className='text-muted-foreground text-lg mt-3'>
          Join us to start sharing your thoughts
        </p>
      </div>
      <div className='max-w-sm md:max-w-lg mx-auto'>
        <RegisterForm />
      </div>
    </main>
  )
}

export default Register
export const metadata = {
  title: "Register – Thought Space",
  robots: { index: false, follow: false },
}
