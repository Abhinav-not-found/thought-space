import Heading, { Bold } from "@/components/general/heading"
import Footer from "@/components/section/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import React from "react"

const Developer = () => {
  return (
    <main className='space-y-6'>
      <Heading>
        <Bold>Beta</Bold> Release
      </Heading>

      <section className='space-y-2'>
        <p>
          This application is currently in <strong>beta</strong>. Features may
          be incomplete, change without notice, or contain bugs. We are actively
          improving the product and refining the experience.
        </p>
      </section>

      <section className='space-y-2'>
        <p className='font-medium'>Current features</p>
        <ul className='list-disc list-inside text-muted-foreground'>
          <li>User authentication (sign up and login)</li>
          <li>Create, write, and publish blog posts</li>
          <li>User profile viewing</li>
          <li>Dark and light theme support</li>
        </ul>
      </section>

      <section className='space-y-2'>
        <p className='font-medium'>Planned features</p>
        <ul className='list-disc list-inside text-muted-foreground'>
          <li>Enhanced writing editor</li>
          <li>Image uploads (posts and profile pictures)</li>
          <li>Custom usernames</li>
          <li>Profile customization</li>
          <li>Account and settings management</li>
          <li>Changelog & Updates</li>
          <li>Trending and featured blogs</li>
          <li>Admin panel</li>
        </ul>
      </section>

      <hr />

      <section className='space-y-2'>
        <p className='font-medium'>Feedback</p>
        <p>
          Your feedback plays an important role in shaping this product. If you
          encounter issues, bugs, or have suggestions, please share them through
          the feedback form.
        </p>
        <Link href={"/feedback"} className='underline flex gap-2'>
          <p>Go to Feedback form</p>
          <ArrowRight />
        </Link>
      </section>
      <Footer/>
    </main>
  )
}

export default Developer
