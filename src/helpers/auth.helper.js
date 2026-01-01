export const handleRegister = async (e, form, toast, router, { setLoading }) => {
  e.preventDefault()
  setLoading(true)

  if (!form.name || !form.email || !form.password) {
    toast.error("All fields are required")
    setLoading(false)
    return
  }

  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    const data = await res.json()
    if (res.ok) {
      toast.success(data.message)
      router.push('/login')
    }
  } catch (error) {
    console.log(error)
    toast.error(error.message)
  } finally {
    setLoading(false)
  }
}

export const handleLogin = async (e, form, toast, router, { setLoading }) => {
  e.preventDefault()
  setLoading(true)

  if (!form.email || !form.password) {
    toast.error("All fields are required")
    setLoading(false)
    return
  }
  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    const data = await res.json()
    if (res.ok) {
      toast.success(data.message)
      router.push('/home')
    }
  } catch (error) {
    console.log(error)
  } finally {
    setLoading(false)
  }
}

export const handleLogout = async (toast,router,{ setLoading }) => {
  setLoading(true)
  try {
    const res = await fetch("/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
    const data = await res.json()
    if (res.ok) {
      toast.success(data.message)
      router.push('/')
    }
  } catch (error) {
    console.log(error)
  } finally {
    setLoading(false)
  }
}
