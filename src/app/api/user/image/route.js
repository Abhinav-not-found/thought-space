import { NextResponse } from "next/server"
import ImageKit from "imagekit"
import { connectDB } from "@/lib/db"
import { cookies } from "next/headers"
import User from "@/models/user.model"
import jwt from "jsonwebtoken"

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
})

export async function POST(req) {
  try {
    await connectDB()
    const formData = await req.formData()
    const file = formData.get("image")

    if (!file) {
      return NextResponse.json(
        { message: "No file provided" },
        { status: 400 }
      )
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const uploadResponse = await imagekit.upload({
      file: buffer,
      fileName: `profile-${Date.now()}`,
      folder: "/Thought_Space/Profile_Pic",
    })

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

    const user = await User.findById(userId)
    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      )
    }

    user.avatar = uploadResponse.url
    await user.save()

    return NextResponse.json(
      {
        message: "Upload successful",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: "Upload failed" },
      { status: 500 }
    )
  }
}
