export const handleCreateBlog = async (
  e,
  form,
  router,
  { setLoading, toast }
) => {
  e.preventDefault()
  setLoading(true)

  try {
    const res = await fetch("/api/blog/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form }),
    })
    const data = await res.json()
    if (!res.ok) {
      switch (data.code) {
        case "FIELDS_REQUIRED":
          toast.error("All fields are required.")
          break

        case "CREATE_BLOG_DISABLED":
          toast.error(data.message)
          break

        case "VALIDATION_ERROR":
          toast.error(data.message)
          break

        default:
          toast.error("Failed to submit feedback.")
      }
      return
    }

    toast.success(data.message)
    router.push("/home")
    router.refresh()
  } catch (error) {
    console.log(error)
  } finally {
    setLoading(false)
  }
}

