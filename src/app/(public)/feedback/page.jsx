import FeedbackForm from "@/components/general/feedback-form"
import Heading, { Bold } from "@/components/general/heading"
import Footer from "@/components/section/footer"
import React from "react"

const Feedback = () => {
  return (
    <main className=''>
      <div className='flex flex-col justify-center items-center mt-8 mb-10'>
        <Heading>
          <Bold>Feedback</Bold> Form
        </Heading>
        <p className='text-muted-foreground text-base md:text-lg mt-3'>
          Share your feedback to help us improve
        </p>
      </div>
      <div className='max-w-xl mx-auto px-4 md:px-0'>
        <FeedbackForm />
      </div>
      <Footer/>
    </main>
  )
}

export default Feedback
