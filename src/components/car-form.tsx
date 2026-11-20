import { SpecOptions } from "@/components/spec-options"
import { Typography } from "@/components/ui/typography"
import {
  bodyColorOptions,
  paintTypeOptions,
  wheelColorOptions,
  wheelDesignOptions,
  wheelSizeOptions,
  windowTintOptions,
  windowTypeOptions,
} from "@/data/car-specs"

export function CarForm() {
  return (
    <section className="flex-1">
      <div className="mb-6">
        <Typography variant="h2">Car specifications</Typography>
        <Typography variant="muted" className="mt-1">
          Choose options below. Each selection has its own price.
        </Typography>
      </div>

      <form className="grid gap-8" onSubmit={(event) => event.preventDefault()}>
        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Body Color</Typography>
          <SpecOptions name="bodyColor" options={bodyColorOptions} />
        </div>

        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Paint Type</Typography>
          <SpecOptions name="paintType" options={paintTypeOptions} />
        </div>

        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Window Type</Typography>
          <SpecOptions name="windowType" options={windowTypeOptions} />
        </div>

        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Window Tint</Typography>
          <SpecOptions name="windowTint" options={windowTintOptions} />
        </div>

        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Wheel Design</Typography>
          <SpecOptions name="wheelDesign" options={wheelDesignOptions} />
        </div>

        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Wheel Size</Typography>
          <SpecOptions name="wheelSize" options={wheelSizeOptions} />
        </div>

        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Wheel Color</Typography>
          <SpecOptions name="wheelColor" options={wheelColorOptions} />
        </div>
      </form>
    </section>
  )
}
