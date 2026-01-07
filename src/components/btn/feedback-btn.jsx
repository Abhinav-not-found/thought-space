import Link from "next/link"
import React from "react"
import { Button } from "../ui/button"
import { Form } from "lucide-react"

const FeedbackBtn = () => {
  return (
    <Link href={"/feedback"}>
      <Button variant='ghost' className={"w-full flex justify-start"}>
        <Form />
        <p>Feedback</p>
      </Button>
    </Link>
  )
}

export default FeedbackBtn
