import Link from "next/link"
import { Button } from "../ui/button"
import { Book } from "lucide-react"

const MyBlogBtn = async () => {
  return (
    <Link href={"/my-blog"}>
      <Button variant='ghost' className={"w-full flex justify-start"}>
        <Book />
        <p>My Blog</p>
      </Button>
    </Link>
  )
}

export default MyBlogBtn
