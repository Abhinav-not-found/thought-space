"use client"
import { handleFileChange } from "@/helpers/client/user.client.helper"
import { useRef, useState } from "react"
import { toast } from "sonner"

const ProfileImage = ({ image }) => {
  const fileRef = useRef(null)
  const [isUploading, setIsUploading] = useState(false)
  const [preview, setPreview] = useState(image)

  return (
    <div>
      <div
        onClick={() => fileRef.current.click()}
        className={`size-20 rounded-full cursor-pointer border
          ${isUploading ? "opacity-50" : "bg-neutral-100 dark:bg-neutral-800"}`}
        style={{
          backgroundImage: preview ? `url("${preview}")` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <input
        ref={fileRef}
        type='file'
        className='hidden'
        accept='image/*'
        onChange={(e) =>
          handleFileChange(e, {
            toast,
            setIsUploading,
            setPreview,
            originalImage: image,
          })
        }
      />
    </div>
  )
}

export default ProfileImage
