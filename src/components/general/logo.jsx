import Link from "next/link"
import { Bytesized } from "next/font/google"

const bytesized = Bytesized({
  subsets: ["latin"],
  weight: ["400"],
  fallback: ["sans-serif"],
})

const Logo = ({ token }) => {
  return (
    <Link href={token ? "/home" : "/"} className='flex select-none'>
      <p className={`font-extrabold text-4xl ${bytesized.className}`}>
        TS
      </p>
    </Link>
  )
}

export default Logo
