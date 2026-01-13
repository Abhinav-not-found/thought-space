import FeedbackForm from "@/components/general/feedback-form"
import Heading, { Bold } from "@/components/general/heading"

const Feedback = () => {
  return (
    <main className='w-full'>
      {/* <div className='flex flex-col justify-center items-center mt-8 mb-10'>
        <Heading>
          <Bold>Feedback</Bold> Form
        </Heading>
        <p className='text-muted-foreground text-base md:text-lg mt-3'>
          Share your feedback to help us improve
        </p>
      </div> */}
      <header className='mb-10'>
        <h1 className='text-4xl font-bold tracking-tight'>Feedback Form</h1>
        <p className='mt-2 text-muted-foreground'>
          Share your feedback to help us improve
        </p>
      </header>
      <div className='max-w-2xl px-4 md:px-0'>
        <FeedbackForm />
      </div>
    </main>
  )
}

export default Feedback
