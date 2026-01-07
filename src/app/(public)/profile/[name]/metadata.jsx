import { getUserInfo } from "@/helpers/user.helper"

export async function generateMetadata({ params }) {
  const user = await getUserInfo(params.name)

  if (!user) return {}

  return {
    title: `${user.username} – Thought Space`,
    description:
      user.bio ||
      `Read blogs written by ${user.username} on Thought Space.`,
    alternates: {
      canonical: `/profile/${params.name}`,
    },
    openGraph: {
      title: `${user.username} – Thought Space`,
      description:
        user.bio ||
        `Read blogs written by ${user.username} on Thought Space.`,
      type: "profile",
    },
  }
}
