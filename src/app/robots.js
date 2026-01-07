
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/blog/", "/profile/"],
        disallow: [
          "/login",
          "/register",
          "/home",
          "/settings",
          "/bookmark",
          "/my-blog",
          "/blog/create",
          "/feedback",
        ],
      },
    ],
    sitemap: "https://thought-space-ak.vercel.app/sitemap.xml",
  }
}
