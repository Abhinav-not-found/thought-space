import Link from "next/link"
import React from "react"
import { Button } from "../ui/button"
import { PenBox } from "lucide-react"

const WriteBtn = () => {
  return (
    <Link href={"/blog/create"}>
      <Button variant='outline' >
        <PenBox />
        Write
      </Button>
    </Link>
  )
}

export default WriteBtn
