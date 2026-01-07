"use client"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Spinner } from "../ui/spinner"
import { toast } from "sonner"

const FeedbackForm = () => {
  const [form, setForm] = useState({ name: "", email: "", feedback: "" })
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleChange = (e) => {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (!response.ok) {
        switch (data.code) {
          case "FIELDS_REQUIRED":
            toast.error("Please fill in all required fields.")
            break

          case "VALIDATION_ERROR":
            toast.error(data.message)
            break

          default:
            toast.error("Failed to submit feedback.")
        }
        return
      }
      toast.success("Thank you for your feedback!")
      setForm({ name: "", email: "", feedback: "" })
      router.push("/home")
    } catch (error) {
      console.error("An error occurred:", error)
      toast.error(error.message || "An unexpected error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor='name'>Your name</FieldLabel>
            <Input
              value={form.name}
              onChange={handleChange}
              id='name'
              autoComplete='off'
              placeholder='Jane Doe'
            />
          </Field>

          <Field>
            <FieldLabel htmlFor='email'>Email</FieldLabel>
            <Input
              value={form.email}
              onChange={handleChange}
              id='email'
              type='email'
              autoComplete='off'
              placeholder='jane@example.com'
            />
          </Field>
          <FieldDescription>
            Only used if we need to follow up.
          </FieldDescription>

          <Field>
            <FieldLabel htmlFor='feedback'>
              Your feedback or bug report
            </FieldLabel>
            <Textarea
              value={form.feedback}
              onChange={handleChange}
              id='feedback'
              as='textarea'
              placeholder='What worked well? What didn’t? Any bugs you found?  Any features you’d like to see?'
              className={"h-40"}
            />
            <FieldDescription>
              Be as specific as possible (pages, actions, errors).
            </FieldDescription>
          </Field>
          <Field>
            <Button className={"py-6 text-lg"} disabled={loading} type='submit'>
              {loading ? <Spinner /> : "Submit"}
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}

export default FeedbackForm
