"use client"
import { useState } from "react"
import { toast } from "sonner"

// add a character count for 160 characters max limit for bio

const ProfileBio = ({ bio }) => {
  const [IsEditing, setIsEditing] = useState(false)
  const [bioValue, setBioValue] = useState(bio)

  const handleBio = async () => {
    try {
      const res = await fetch("/api/user/edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bio: bioValue }),
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.message || "Something went wrong")
      }
      toast.success(data.message)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      {IsEditing ? (
        <input
          className='text-sm font-medium mt-2 border-b border-gray-300 text-muted-foreground w-full'
          value={bioValue}
          onChange={(e) => setBioValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setIsEditing(false)
              handleBio()
            }
          }}
        />
      ) : (
        <p
          onClick={() => setIsEditing(!IsEditing)}
          className='text-sm first-letter:uppercase text-muted-foreground'
        >
          {bioValue}
        </p>
      )}
    </div>
  )
}

export default ProfileBio
