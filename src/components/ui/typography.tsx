import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-bold tracking-tight text-balance",
      h2: "scroll-m-20 text-xl font-semibold tracking-tight",
      h3: "scroll-m-20 text-lg font-semibold tracking-tight",
      h4: "scroll-m-20 text-base font-semibold tracking-tight",
      p: "text-base leading-7",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
      label: "text-sm font-semibold tracking-tight",
      option: "text-sm font-medium leading-none",
      caption: "text-xs text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "p",
  },
})

const defaultElement = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  lead: "p",
  large: "div",
  small: "small",
  muted: "p",
  label: "span",
  option: "span",
  caption: "span",
} as const satisfies Record<
  NonNullable<VariantProps<typeof typographyVariants>["variant"]>,
  React.ElementType
>

type TypographyProps = React.ComponentPropsWithoutRef<"p"> &
  VariantProps<typeof typographyVariants> & {
    as?: React.ElementType
  }

function Typography({
  className,
  variant = "p",
  as,
  ...props
}: TypographyProps) {
  const Comp = as ?? defaultElement[variant ?? "p"]

  return (
    <Comp
      data-slot="typography"
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Typography, typographyVariants }
