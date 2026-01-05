import Card from "../landing/why-card"
import { BookOpen, Brain, Pencil } from "lucide-react"

const Why = () => {
  return (
    <section className='w-full h-[60vh] mt-24'>
      <h2 className='text-6xl text-center tracking-tighter'>
        <span className='font-semibold'>Why</span> Thought Space?
      </h2>

      <div className='flex justify-center gap-14 mt-14'>
        <Card
          title='Built for Clear Thinking'
          description='A distraction-free space designed to help you focus on ideas, not noise or vanity metrics.'
          icon={<Brain size={28} />}
        />

        <Card
          title='Write Without Friction'
          description='Create, edit, and publish blogs with a simple flow that stays out of your way.'
          icon={<Pencil size={28} />}
        />

        <Card
          title='Read What Matters'
          description='Discover thoughtful writing from people who value depth, clarity, and perspective.'
          icon={<BookOpen size={28} />}
        />
      </div>
    </section>
  )
}

export default Why
