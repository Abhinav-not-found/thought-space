
import Container from "@/components/general/container"
import AuthRedirect from "@/components/route/authRedirect"
import Footer from "@/components/section/footer"
import Hero from "@/components/section/hero"
import Trending from "@/components/section/trending"
import Why from "@/components/section/why"
import Write from "@/components/section/write"
import { Suspense } from "react"

export const revalidate = 60

export default async function LandingPage() {
  return (
    <>
      <Container>
        <Hero />
        <Why />
        {/* <Write /> */}
        <Suspense>
          <Trending />
        </Suspense>
        <Footer />
      </Container>
    </>
  )
}

export const metadata = {
  title: "Thought Space – where ideas become blogs.",
  description:
    "A clean, distraction-free blogging platform built for sharing thoughts, stories, and knowledge that actually matter.",
  keywords: [
    "blog platform",
    "writing platform",
    "read blogs",
    "write blogs",
    "Thought Space",
  ],
  openGraph: {
    title: "Thought Space – where ideas become blogs.",
    description:
      "A clean, distraction-free blogging platform built for sharing thoughts,stories, and knowledge that actually matter.",
    url: "https://thought-space-ak.vercel.app",
    siteName: "Thought Space",
    images: [
      {
        url: "https://thought-space-ak.vercel.app/images/og.png",
        width: 1200,
        height: 630,
        alt: "Thought Space blogging platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thought Space – where ideas become blogs.",
    description:
      "A clean, distraction-free blogging platform built for sharing thoughts,stories, and knowledge that actually matter.",
    images: ["https://thought-space-ak.vercel.app/images/og.png"],
  },
  alternates: {
    canonical: "https://thought-space-ak.vercel.app",
  },
}
