import React from "react"

const Profile = () => {
  return (
    <main className='flex gap-4'>
      <div className='w-2/3 h-screen'>
        <div className='flex justify-between'>
          <h1 className='text-4xl font-semibold'>Author Name</h1>
          <button>...</button>
        </div>
        <div className='mt-5'>
          <p>all the blogs created by this author</p>
        </div>
      </div>
      <aside className='w-1/3 h-screen border-l p-6'>
        <div className='size-20 bg-red-50 rounded-full'></div>
        <h2>Name</h2>
        <p>Bio</p>
      </aside>
    </main>
  )
}

export default Profile
