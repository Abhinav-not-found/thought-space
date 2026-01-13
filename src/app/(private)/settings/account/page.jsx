"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

const Account = () => {
  const [email, setEmail] = useState("user@example.com")

  return (
    <main className='max-w-2xl space-y-10 mb-20'>
      <header>
        <h1 className='text-4xl font-bold tracking-tight'>Account Settings</h1>
        <p className='mt-2 text-muted-foreground'>
          Manage your email and password
        </p>
      </header>
      <Separator />

      {/* Email Section */}
      <section className='space-y-6'>
        <div className='space-y-1'>
          <h2 className='text-lg font-medium'>Email</h2>
          <p className='text-sm text-muted-foreground'>
            Update and verify your email address
          </p>
        </div>

        <div className='space-y-2'>
          <Label htmlFor='email'>Email address</Label>
          <Input
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='you@example.com'
          />
        </div>

        <div className='flex gap-3'>
          <Button>Update email</Button>
          <Button variant='outline'>Send verification</Button>
        </div>

        <p className='text-xs text-muted-foreground'>
          Keep your email verified for account recovery.
        </p>
      </section>

      <Separator />

      {/* Password Section */}
      <section className='space-y-6'>
        <div className='space-y-1'>
          <h2 className='text-lg font-medium'>Password</h2>
          <p className='text-sm text-muted-foreground'>
            Change your account password
          </p>
        </div>

        <div className='space-y-2'>
          <Label htmlFor='current-password'>Current password</Label>
          <Input id='current-password' type='password' />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='new-password'>New password</Label>
          <Input id='new-password' type='password' />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='confirm-password'>Confirm new password</Label>
          <Input id='confirm-password' type='password' />
        </div>

        <Button className='w-fit'>Update password</Button>

        <p className='text-xs text-muted-foreground'>
          Minimum 8 characters, one uppercase letter, and one number.
        </p>
      </section>
    </main>
  )
}

export default Account
