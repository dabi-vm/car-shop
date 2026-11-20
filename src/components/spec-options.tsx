import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Typography } from "@/components/ui/typography"
import { type SpecOption } from "@/store/rtk-query/car-types"
import { Loader2 } from "lucide-react"

type SpecOptionsProps = {
  name: string
  options?: SpecOption[]
  loading?: boolean
  onSelect?: (option: SpecOption) => void
  value?: string
}

export function SpecOptions({
  name,
  options,
  loading,
  onSelect,
  value,
}: SpecOptionsProps) {
  return (
    <RadioGroup
      name={name}
      value={value}
      onValueChange={(nextValue) => {
        const option = options?.find((item) => item.value === nextValue)
        if (option) {
          onSelect?.(option)
        }
      }}
      className="grid gap-2 sm:grid-cols-2"
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <Loader2 className="size-4 animate-spin" />
        </div>
      ) : (
        options?.map((option) => (
          <Label
            key={option.value}
            className="flex cursor-pointer items-start gap-3 rounded-2xl border border-transparent bg-input/50 px-3 py-2.5 transition-colors has-[[data-slot=radio-group-item][data-checked]]:border-ring has-[[data-slot=radio-group-item][data-checked]]:bg-accent"
          >
            <RadioGroupItem value={option.value} className="mt-0.5" />
            <span className="grid min-w-0 gap-1">
              <Typography variant="option">{option.label}</Typography>
              <Typography variant="caption">
                {`+$${option.price.toLocaleString()}`}
              </Typography>
            </span>
          </Label>
        ))
      )}
    </RadioGroup>
  )
}
