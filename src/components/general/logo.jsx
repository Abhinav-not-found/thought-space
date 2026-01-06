import Link from "next/link"
import { Bytesized } from "next/font/google"

const press_Start_2P = Bytesized({
  subsets: ["latin"],
  weight: ["400"],
})

const Logo = ({ token }) => {
  return (
    <Link href={token ? "/home" : "/"} className='flex select-none'>
      <p className={`font-extrabold text-4xl ${press_Start_2P.className}`}>
        TS
      </p>
    </Link>
  )
}

export default Logo
