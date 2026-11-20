import { ShoppingCartIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Typography } from "@/components/ui/typography"

export function CartPanel() {
  return (
    <aside className="flex w-full shrink-0 flex-col border-t bg-muted/30 lg:w-80 lg:border-t-0 lg:border-l">
      <div className="flex items-center gap-2 px-4 py-4 sm:px-6 lg:px-5">
        <ShoppingCartIcon className="size-4" />
        <Typography variant="h4">Cart</Typography>
        <Typography variant="caption" className="ml-auto">
          0 items
        </Typography>
      </div>

      <Separator />

      <div className="flex min-h-0 flex-1 items-center justify-center p-4 sm:px-6 lg:px-5">
        <Typography variant="muted">Your cart is empty</Typography>
      </div>

      <div className="mt-auto space-y-3 border-t p-4 sm:px-6 lg:px-5">
        <div className="flex items-center justify-between">
          <Typography variant="muted">Subtotal</Typography>
          <Typography variant="small">$0</Typography>
        </div>
        <Button type="button" className="w-full" disabled>
          Checkout
        </Button>
      </div>
    </aside>
  )
}
