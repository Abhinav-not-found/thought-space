"use client"
import { useRef, useState } from "react"
import { toast } from "sonner"

const ProfileImage = ({ image }) => {
  const fileRef = useRef(null)
  const [isUploading, setIsUploading] = useState(false)
  const [preview, setPreview] = useState(image)

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0]
    if (!selectedFile) return

    // instant preview
    const localPreview = URL.createObjectURL(selectedFile)
    setPreview(localPreview)

    const formData = new FormData()
    formData.append("image", selectedFile)

    try {
      setIsUploading(true)
      const res = await fetch("/api/user/image", {
        method: "POST",
        body: formData,
      })

      if (!res.ok) {
        throw new Error("Upload failed")
      }

      const data = await res.json()
      toast.success(data.message)

      if (data.avatar) {
        setPreview(data.avatar)
      }
    } catch (err) {
      toast.error("Image upload failed")
      setPreview(image)
    } finally {
      setIsUploading(false)
      e.target.value = ""
    }
  }

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
        onChange={handleFileChange}
      />
    </div>
  )
}

export default ProfileImage
