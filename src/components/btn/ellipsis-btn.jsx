import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { Ellipsis } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DeleteBtn from "./delete-btn"

const EllipsisBtn = ({ className, variant, size }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={variant || "default"}
          size={size || "default"}
          className={cn(
            "hover:bg-neutral-200 dark:hover:bg-neutral-700",
            className
          )}
        >
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div>
          <DeleteBtn/>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default EllipsisBtn
