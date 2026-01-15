"use client"
import { handleGetProfileName } from "@/helpers/client/user.client.helper"
import { useState } from "react"
import { toast } from "sonner"

// put a condition if(logged in user == profile user) {only then he should be able to click to edit profile }

const ProfileName = ({ name }) => {
  const [IsEditing, setIsEditing] = useState(false)
  const [nameValue, setNameValue] = useState(name)

  return (
    <div className=''>
      {IsEditing ? (
        <input
          className='text-xl font-medium mt-2 first-letter:uppercase border-b border-gray-300 w-full'
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setIsEditing(false)
              handleGetProfileName(nameValue, { toast })
            }
          }}
        />
      ) : (
        <h2
          onClick={() => setIsEditing(!IsEditing)}
          className='text-xl font-medium mt-2 first-letter:uppercase'
        >
          {nameValue}
        </h2>
      )}
    </div>
  )
}

export default ProfileName
