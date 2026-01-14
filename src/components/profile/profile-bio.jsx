"use client"
import { handleBio } from "@/helpers/client/user.client.helper"
import { useState } from "react"
import { toast } from "sonner"

// add a character count for 160 characters max limit for bio

const ProfileBio = ({ bio }) => {
  const [IsEditing, setIsEditing] = useState(false)
  const [bioValue, setBioValue] = useState(bio)

  return (
    <div className='mt-2'>
      {IsEditing ? (
        <input
          className='text-sm font-medium mt-2 border-b border-gray-300 text-muted-foreground w-full'
          value={bioValue}
          onChange={(e) => setBioValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setIsEditing(false)
              handleBio(bioValue, { toast })
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
