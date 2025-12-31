"use client"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import Link from "next/link"

const RegisterForm = () => {
  return (
    <form>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor='name'>Name</FieldLabel>
            <Input id='name' autoComplete='off' placeholder='John Doe' />
          </Field>
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
            <Button>Register</Button>
          </Field>
          <p className='text-muted-foreground text-center'>
            Already have an account?{" "}
            <Link
              href={"/login"}
              className='underline underline-offset-2 hover:text-black dark:hover:text-white'
            >
              Login
            </Link>{" "}
            here
          </p>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}

export default RegisterForm
