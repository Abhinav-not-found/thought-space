import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import User from "@/models/user.model"
import { generateUsername } from "@/lib/generateUsername"

export async function POST(req) {
  try {
    await connectDB()

    const { name, email, password } = await req.json()

    if (!name || !email || !password) {
      return NextResponse.json(
        { code: "FIELDS_REQUIRED", message: "All fields are required" },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { code: "PASSWORD_TOO_SHORT", message: "Password must be at least 6 characters" },
        { status: 400 }
      )
    }

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return NextResponse.json(
        { code: "EMAIL_ALREADY_REGISTERED", message: "Email already registered" },
        { status: 409 }
      )
    }
    const username = await generateUsername(name)

    const user = await User.create({
      name,
      email,
      password,
      username
    })

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
      { status: 201 }
    )
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
    console.error(error)
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    )
  }
}
