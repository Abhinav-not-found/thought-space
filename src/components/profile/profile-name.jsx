"use client"
import { useState } from "react"
import { toast } from "sonner"

const ProfileName = ({ name }) => {
  const [IsEditing, setIsEditing] = useState(false)
  const [nameValue, setNameValue] = useState(name)

  const handleName = async () => {
    try {
      const res = await fetch("/api/user/edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: nameValue }),
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
    <div className='flex justify-between items-baseline'>
      {IsEditing ? (
        <input
          className='text-xl font-medium mt-2 first-letter:uppercase border-b border-gray-300'
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setIsEditing(false)
              handleName()
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
