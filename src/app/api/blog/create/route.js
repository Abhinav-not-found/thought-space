import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Blog from "@/models/blog.model"
import { cookies } from "next/headers"
import jwt from 'jsonwebtoken'

export async function POST(req) {
  try {
    await connectDB()

    const { title, content } = await req.json()

    if (!title || !content) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      )
    }

    const token = cookies().get("token")?.value
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


    let baseSlug = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")

    let slug = baseSlug
    let count = 1
    while (await Blog.exists({ slug })) {
      slug = `${baseSlug}-${count}`
      count++
    }

    const newBlog = await Blog.create({
      title,
      content,
      slug,
      authorId: userId,
    })

    return NextResponse.json(
      {
        message: "Blog created successfully",
        data: newBlog,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error(error)
    if (err.code === 11000) {
      return NextResponse.json(
        { message: "Slug already exists, retry" },
        { status: 409 }
      )
    }
    return NextResponse.json({ message: "Server error" }, { status: 500 })
  }
}
