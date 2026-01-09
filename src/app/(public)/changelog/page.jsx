import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

const Changelog = () => {
  return (
    <main className='flex gap-10 w-full'>
      <section className='w-3/4 '>
        <header className='mb-10'>
          <h1 className='text-4xl font-bold tracking-tight'>Changelog</h1>
          <p className='mt-2 text-muted-foreground'>
            Product updates, improvements, and fixes.
          </p>
        </header>

        <div className='flex items-center justify-between'>
          <div>
            <h2 className='text-xl font-semibold'>Beta Released Features</h2>
            <p className='text-sm text-muted-foreground mt-1'>
              January 8, 2026
            </p>
          </div>
          <Badge variant='secondary'>Beta</Badge>
        </div>

        <Separator className='my-6' />
        <div>
          <ul className='space-y-3 text-sm leading-relaxed'>
            <li className='flex gap-2'>
              <span className='mt-2 h-1.5 w-1.5 rounded-full bg-foreground' />
              User authentication (sign up and login)
            </li>

            <li className='flex gap-2'>
              <span className='mt-2 h-1.5 w-1.5 rounded-full bg-foreground' />
              Create and publish blog posts
            </li>

            <li className='flex gap-2'>
              <span className='mt-2 h-1.5 w-1.5 rounded-full bg-foreground' />
              User profile viewing
            </li>

            <li className='flex gap-2'>
              <span className='mt-2 h-1.5 w-1.5 rounded-full bg-foreground' />
              Dark and light theme support
            </li>
          </ul>
        </div>
      </section>
      <aside className='w-1/3 h-screen'></aside>
    </main>
  )
}

export default Changelog
