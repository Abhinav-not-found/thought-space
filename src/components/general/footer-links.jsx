import Link from "next/link"

const FOOTER_SECTIONS = [
  {
    title: "Important",
    links: [
      { label: "Changelog", href: "/changelog" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Login", href: "/login" },
      { label: "Register", href: "/register" },
    ],
  },
]

const FooterLinks = () => {
  return (
    <footer className='w-full mb-4 flex flex-row items-center justify-end'>
      <nav className='mx-auto  w-3xl grid grid-cols-2 md:grid-cols-3 gap-8'>
        {FOOTER_SECTIONS.map((section) => (
          <FooterGroup key={section.title} title={section.title}>
            {section.links.map((link) => (
              <FooterLink key={link.href} {...link} />
            ))}
          </FooterGroup>
        ))}
      </nav>
    </footer>
  )
}

const FooterGroup = ({ title, children }) => {
  return (
    <div>
      <h4 className='mb-2 font-medium text-sm uppercase tracking-wide'>
        {title}
      </h4>
      <ul className='space-y-2 text-muted-foreground cursor-pointer text-sm'>{children}</ul>
    </div>
  )
}

const FooterLink = ({ label, href }) => {
  return (
    <li>
      <Link href={href} className='hover:underline underline-offset-2 cursor-pointer'>
        {label}
      </Link>
    </li>
  )
}

export default FooterLinks
