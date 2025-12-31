
export const handleRegister = async (e, form, toast, { setLoading }) => {
  e.preventDefault()
  setLoading(true)

  if (!form.name || !form.email || !form.password) {
    toast.error("All fields are required")
    setLoading(false)
    return
  }

  try {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    const data = await res.json()
    if (res.ok) {
      toast.success(data.message)
    }
  } catch (error) {
    console.log(error)
    toast.error(error.message)
  } finally {
    setLoading(false)
  }
}
