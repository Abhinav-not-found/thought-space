"use client"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import Link from "next/link"
import { useState } from "react"
import { handleLogin } from "@/helpers/auth.helper"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Spinner } from "../ui/spinner"

const LoginForm = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" })
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleChange = (e) => {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
  }

  const fields = [
    {
      id: "email",
      label: "Email",
      placeholder: "johnDoe@gmail.com",
      type: "email",
    },
    {
      id: "password",
      label: "Password",
      placeholder: "••••••",
      type: "password",
    },
  ]

  return (
    <form onSubmit={(e) => handleLogin(e, form, toast, router, { setLoading })}>
      <FieldSet>
        <FieldGroup>
          {fields.map(({ id, label, placeholder, type }) => (
            <Field key={id}>
              <FieldLabel htmlFor={id}>{label}</FieldLabel>
              <Input
                id={id}
                type={type}
                value={form[id]}
                onChange={handleChange}
                placeholder={placeholder}
              />
            </Field>
          ))}

          <Field orientation='horizontal'>
            <Button
              type='submit'
              disabled={loading}
              className={"w-full py-6 text-lg"}
            >
              {loading ? <Spinner /> : "Login"}
            </Button>
          </Field>

          <p className='text-muted-foreground text-center mt-6'>
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
