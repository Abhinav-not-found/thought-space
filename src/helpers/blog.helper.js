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

    if (res.ok) {
      toast.success(data.message)
      router.push("/home")
      router.refresh()
    }
  } catch (error) {
    console.log(error)
  } finally {
    setLoading(false)
  }
}

