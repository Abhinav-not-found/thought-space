import { getAllBlogs } from "@/helpers/blog-server/get-global-feed"
import { getAllUsers } from "@/helpers/user.helper"

export default async function sitemap() {
  const blogs = await getAllBlogs()
  const users = await getAllUsers()

  const baseUrl = "https://thought-space-ak.vercel.app"

  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.name}`,
    lastModified: blog.updatedAt || blog.createdAt,
  }))

  const profileUrls = users.map((user) => ({
    url: `${baseUrl}/profile/${user.username}`,
    lastModified: user.updatedAt,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...blogUrls,
    ...profileUrls,
  ]
}
