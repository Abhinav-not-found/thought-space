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

const FeedbackForm = () => {
  return (
    <form>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor='name'>Your name</FieldLabel>
            <Input id='name' autoComplete='off' placeholder='Jane Doe' />
          </Field>

          <Field>
            <FieldLabel htmlFor='email'>Email</FieldLabel>
            <Input
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
            <Button className={"py-6 text-lg"}>Submit</Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}

export default FeedbackForm
