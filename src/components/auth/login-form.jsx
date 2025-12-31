"use client"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import Link from "next/link"

const LoginForm = () => {
  return (
    <form>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor='email'>Email</FieldLabel>
            <Input
              id='email'
              autoComplete='off'
              placeholder='johnDoe@gmail.com'
            />
          </Field>
          <Field>
            <FieldLabel htmlFor='password'>Password</FieldLabel>
            <Input id='password' autoComplete='off' placeholder='● ● ● ● ●' />
          </Field>
          <Field orientation='horizontal'>
            <Button>Login</Button>
          </Field>
          <p className='text-muted-foreground text-center'>
            Don't have an account?{" "}
            <Link
              href={"/register"}
              className='underline underline-offset-2 hover:text-black dark:hover:text-white'
            >
              Register
            </Link>{" "}
            here
          </p>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}

export default LoginForm
