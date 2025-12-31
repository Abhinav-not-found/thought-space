"use client"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import Link from "next/link"
import { useState } from "react"
import { handleRegister } from "@/helpers/auth.helper"
import { toast } from "sonner"

const RegisterForm = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
  }

  const fields = [
    { id: "name", label: "Name", placeholder: "John Doe", type: "text" },
    {
      id: "email",
      label: "Email",
      placeholder: "johnDoe@gmail.com",
      type: "email",
    },
    {
      id: "password",
      label: "Password",
      placeholder: "● ● ● ● ●",
      type: "password",
    },
  ]

  return (
    <form onSubmit={(e) => handleRegister(e, form, toast, { setLoading })}>
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
                autoComplete='off'
              />
            </Field>
          ))}

          <Field orientation='horizontal'>
            <Button type='submit' disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </Button>
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
