import React from "react"
import { Button } from "../ui/button"
import { Trash } from "lucide-react"

const DeleteBtn = () => {
  return (
    <Button
      variant='ghost'
      className={
        "w-full flex hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-950/80"
      }
    >
      <Trash />
      <p>Delete</p>
    </Button>
  )
}

export default DeleteBtn
