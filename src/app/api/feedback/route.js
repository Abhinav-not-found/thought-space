import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Feedback from "@/models/feedback.model"
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"

// make user info populate

export async function POST(req) {
  try {

    const feedbackStatus = process.env.FEEDBACK
    if (feedbackStatus !== "enable") {
      return NextResponse.json(
        { message: "Feedback has been temporarily disabled by the administrator. Please try again later.", code: "FEEDBACK_DISABLED" },
        { status: 403 }
      )
    }
    await connectDB()

    const cookieStore = await cookies()
    const token = cookieStore.get("token")?.value
    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      )
    }
    let decoded
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch {
      return NextResponse.json(
        { message: "Invalid token" },
        { status: 401 }
      )
    }
    const userId = decoded.userId

    const { name, email, feedback } = await req.json()

    if (!name || !email || !feedback) {
      return NextResponse.json(
        {
          code: "FIELDS_REQUIRED",
          message: "All fields are required",
        },
        { status: 400 }
      )
    }

    const newFeedback = await Feedback.create({
      name,
      email,
      feedback,
      userId,
    })

    return NextResponse.json(
      {
        message: "User Feedback Saved",
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
      {
        code: "SERVER_ERROR",
        message: "Internal server error",
      },
      { status: 500 }
    )
  }
}
