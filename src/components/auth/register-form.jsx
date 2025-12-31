"use client"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import Link from "next/link"
import { useState } from "react"
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

  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (!form.name || !form.email || !form.password) {
      toast.error("All fields are required")
      setLoading(false)
      return
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        toast.success(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleRegister}>
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
