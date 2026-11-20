import { ShoppingCartIcon, Trash2Icon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Typography } from "@/components/ui/typography"
import { removeFromCartRequested } from "@/store/cart/cart-slice"
import { useAppDispatch } from "@/store/hooks"
import { useGetCartQuery } from "@/store/rtk-query/car-api"

const specLabels: Record<string, string> = {
  bodyColor: "Body Color",
  paintType: "Paint Type",
  windowType: "Window Type",
  windowTint: "Window Tint",
  wheelDesign: "Wheel Design",
  wheelSize: "Wheel Size",
  wheelColor: "Wheel Color",
}

export function CartPanel() {
  const dispatch = useAppDispatch()
  const { data: items = [] } = useGetCartQuery()

  const subtotal = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <aside className="sticky top-14 flex max-h-svh min-h-[calc(100svh-56px)] w-full shrink-0 flex-col self-start overflow-hidden border-t bg-muted/30 lg:w-80 lg:border-t-0 lg:border-l">
      <div className="flex items-center gap-2 px-4 py-4 sm:px-6 lg:px-5">
        <ShoppingCartIcon className="size-4" />
        <Typography variant="h4">Cart</Typography>
        <Typography variant="caption" className="ml-auto">
          {items.length} {items.length === 1 ? "item" : "items"}
        </Typography>
      </div>

      <Separator />

      <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-4 sm:px-6 lg:px-5">
        {items.length === 0 ? (
          <div className="flex flex-1 items-center justify-center">
            <Typography variant="muted">Your cart is empty</Typography>
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-2 border-b pb-3 last:border-b-0"
            >
              <div className="grid min-w-0 flex-1 gap-1">
                <Typography variant="small">
                  {specLabels[item.name] ?? item.name}
                </Typography>
                <Typography variant="caption">{item.label}</Typography>
                <Typography variant="small">
                  {item.price === 0
                    ? "Included"
                    : `$${item.price.toLocaleString()}`}
                </Typography>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon-xs"
                aria-label={`Remove ${item.label}`}
                onClick={() => {
                  dispatch(removeFromCartRequested(item.id))
                }}
              >
                <Trash2Icon />
              </Button>
            </div>
          ))
        )}
      </div>

      <div className="mt-auto space-y-3 border-t p-4 sm:px-6 lg:px-5">
        <div className="flex items-center justify-between">
          <Typography variant="muted">Subtotal</Typography>
          <Typography variant="small">${subtotal.toLocaleString()}</Typography>
        </div>
        <Button type="button" className="w-full" disabled={items.length === 0}>
          Checkout
        </Button>
      </div>
    </aside>
  )
}
