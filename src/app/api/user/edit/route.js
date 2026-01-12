import { connectDB } from "@/lib/db"
import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"
import User from "@/models/user.model"


export async function POST(req) {
  try {
    await connectDB()
    const { name, bio } = await req.json()

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

    const result = await User.updateOne(
      { _id: userId },
      { $set: { name, bio } }
    )

    if (result.modifiedCount === 1) {
      return NextResponse.json(
        { message: "Profile Updated!" },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { message: "No changes made" },
        { status: 200 }
      )
    }

  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    )
  }
}
