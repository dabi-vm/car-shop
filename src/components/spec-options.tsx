import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Typography } from "@/components/ui/typography"
import { formatSpecPrice, type SpecOption } from "@/data/car-specs"

type SpecOptionsProps = {
  name: string
  options: SpecOption[]
}

export function SpecOptions({ name, options }: SpecOptionsProps) {
  return (
    <RadioGroup name={name} className="grid gap-2 sm:grid-cols-2">
      {options.map((option) => (
        <Label
          key={option.value}
          className="flex cursor-pointer items-start gap-3 rounded-2xl border border-transparent bg-input/50 px-3 py-2.5 transition-colors has-[[data-slot=radio-group-item][data-checked]]:border-ring has-[[data-slot=radio-group-item][data-checked]]:bg-accent"
        >
          <RadioGroupItem value={option.value} className="mt-0.5" />
          <span className="grid min-w-0 gap-1">
            <Typography variant="option">{option.label}</Typography>
            <Typography variant="caption">
              {formatSpecPrice(option.price)}
            </Typography>
          </span>
        </Label>
      ))}
    </RadioGroup>
  )
}
