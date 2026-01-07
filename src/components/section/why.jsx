import Heading, { Bold } from "../general/heading"
import Card from "../landing/why-card"
import { BookOpen, Brain, Pencil } from "lucide-react"

const Why = () => {
  return (
    <section className='w-full h-fit md:h-[60vh] md:mt-24'>
      <Heading>
        <Bold>Why</Bold> Thought Space?
      </Heading>

      <div className='flex flex-col md:flex-row items-center justify-center gap-5 md:gap-14 mt-14'>
        <Card
          title='Built for Clear Thinking'
          description='A distraction-free space designed to help you focus on ideas, not noise or vanity metrics.'
          icon={
            <Brain className='size-32 text-neutral-200/60 dark:text-neutral-700' />
          }
        />

        <Card
          title='Write Without Friction'
          description='Create, edit, and publish blogs with a simple flow that stays out of your way.'
          icon={
            <Pencil className='size-32 text-neutral-200/60 dark:text-neutral-700' />
          }
        />

        <Card
          title='Read What Matters'
          description='Discover thoughtful writing from people who value depth, clarity, and perspective.'
          icon={
            <BookOpen className='size-32 text-neutral-200/60 dark:text-neutral-700' />
          }
        />
      </div>
    </section>
  )
}

export default Why
