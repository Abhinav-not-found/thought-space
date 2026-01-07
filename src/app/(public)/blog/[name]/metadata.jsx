
import { getBlogBySlug } from "@/helpers/blog-server/get-blog-by-slug"

export async function generateMetadata(
  { params }
) {
  const post = await getBlogBySlug(params.name)

  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt ?? post.content.slice(0, 150),
    alternates: {
      canonical: `/blog/${params.name}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  }
}

