export const handleGetProfileName = async (nameValue, { toast }) => {
  try {
    const res = await fetch("/api/user/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: nameValue }),
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.message || "Something went wrong")

    toast.success(data.message)
  } catch (error) {
    console.log(error)
  }
}


export const handleFileChange = async (e, { toast, setPreview, setIsUploading, originalImage }) => {

  const selectedFile = e.target.files[0]
  if (!selectedFile) return

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
    setPreview(originalImage)
  } finally {
    setIsUploading(false)
    e.target.value = ""
  }
}


export const handleBio = async (bioValue, { toast }) => {
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
