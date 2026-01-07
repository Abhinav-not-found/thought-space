import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { connectDB } from "@/lib/db"
import User from "@/models/user.model"

export async function POST(req) {
  try {
    const loginStatus = process.env.LOGIN

    if (loginStatus !== "enable") {
      return NextResponse.json(
        { message: "Login has been temporarily disabled by the administrator. Please try again later.", code: "LOGIN_DISABLED" },
        { status: 403 }
      )
    }

    await connectDB()

    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json(
        {
          code: "FIELDS_REQUIRED",
          message: "All fields are required",
        },
        { status: 400 }
      )
    }

    const user = await User.findOne({ email }).select("+password")
    if (!user) {
      return NextResponse.json({ message: "Invalid credentials", code: "INVALID_CRED", }, { status: 401 })
    }

    const isMatch = await user.matchPassword(password)

    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials", code: "INVALID_CRED" }, { status: 401 })
    }

    if (user.isBanned) {
      return NextResponse.json({ message: "Your account has been banned.", code: "ACCOUNT_BANNED" }, { status: 401 })
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    )

    const res = NextResponse.json(
      { user: user, message: 'Login Successful' },
      { status: 200 }
    )

    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60,
      path: "/",
    })

    return res
  } catch (error) {
    if (error.name === "ValidationError") {
      return NextResponse.json(
        {
          code: "VALIDATION_ERROR",
          message: error.message,
        },
        { status: 400 }
      )
    }
    console.log(error)
    return NextResponse.json({ message: "Server error" }, { status: 500 })
  }
}
