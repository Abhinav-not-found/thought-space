import Link from "next/link"
import React from "react"
import { Button } from "../ui/button"
import { Logs } from "lucide-react"

const ChangelogBtn = () => {
  return (
    <Link href={"/changelog"}>
      <Button variant='ghost' className={"w-full flex justify-start"}>
        <Logs />
        <p>Changelog</p>
      </Button>
    </Link>
  )
}

export default ChangelogBtn
