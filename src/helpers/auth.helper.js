export const handleRegister = async (e, form, toast, router, { setLoading }) => {
  e.preventDefault()
  setLoading(true)

  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    const data = await res.json()
    if (!res.ok) {
      switch (data.code) {
        case "FIELDS_REQUIRED":
        case "PASSWORD_TOO_SHORT":
        case "EMAIL_ALREADY_REGISTERED":
        case "VALIDATION_ERROR":
        case "REGISTER_DISABLED":
          toast.error(data.message)
          break

        default:
          toast.error(data.message || "Something went wrong")
      }
      return
    }

    toast.success(data.message)
    router.push('/login')

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

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    const data = await res.json()
    if (!res.ok) {
      switch (data.code) {
        case "FIELDS_REQUIRED":
        case "PASSWORD_TOO_SHORT":
        case "EMAIL_ALREADY_REGISTERED":
        case "VALIDATION_ERROR":
        case "REGISTER_DISABLED":
          toast.error(data.message)
          break

        default:
          toast.error(data.message || "Something went wrong")
      }
      return
    }
    toast.success(data.message)
    router.push('/home')
    router.refresh()
  } catch (error) {
    console.log(error)
  } finally {
    setLoading(false)
  }
}

export const handleLogout = async (toast, router, { setLoading }) => {
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
      router.refresh()
    }
  } catch (error) {
    console.log(error)
  } finally {
    setLoading(false)
  }
}
