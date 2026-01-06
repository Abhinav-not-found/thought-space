import Link from "next/link"
import { Button } from "../ui/button"
import { Book } from "lucide-react"

const MyThoughtBtn = async () => {
  return (
    <Link href={"/my-blog"}>
      <Button variant='ghost' className={"w-full flex justify-start"}>
        <Book />
        <p>My Thoughts</p>
      </Button>
    </Link>
  )
}

export default MyThoughtBtn
