import { SpecOptions } from "@/components/spec-options"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import {
  useGetBodyColorOptionsQuery,
  useGetPaintTypeOptionsQuery,
  useGetWheelColorOptionsQuery,
  useGetWheelDesignOptionsQuery,
  useGetWheelSizeOptionsQuery,
  useGetWindowTintOptionsQuery,
  useGetWindowTypeOptionsQuery,
} from "@/store/rtk-query/car-api"

export function CarForm() {
  const { data: bodyColorData, isLoading: bodyColorLoading } =
    useGetBodyColorOptionsQuery()
  const { data: paintTypeData, isLoading: paintTypeLoading } =
    useGetPaintTypeOptionsQuery()
  const { data: windowTypeData, isLoading: windowTypeLoading } =
    useGetWindowTypeOptionsQuery()
  const { data: windowTintData, isLoading: windowTintLoading } =
    useGetWindowTintOptionsQuery()
  const { data: wheelDesignData, isLoading: wheelDesignLoading } =
    useGetWheelDesignOptionsQuery()
  const { data: wheelSizeData, isLoading: wheelSizeLoading } =
    useGetWheelSizeOptionsQuery()
  const { data: wheelColorData, isLoading: wheelColorLoading } =
    useGetWheelColorOptionsQuery()

  return (
    <section className="flex-1">
      <div className="mb-6">
        <Typography variant="h2">Car specifications</Typography>
        <Typography variant="muted" className="mt-1">
          Choose options below. Each selection has its own price.
        </Typography>
      </div>

      <form className="grid gap-8">
        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Body Color</Typography>
          <SpecOptions
            name="bodyColor"
            options={bodyColorData}
            loading={bodyColorLoading}
          />
        </div>

        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Paint Type</Typography>
          <SpecOptions
            name="paintType"
            options={paintTypeData}
            loading={paintTypeLoading}
          />
        </div>

        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Window Type</Typography>
          <SpecOptions
            name="windowType"
            options={windowTypeData}
            loading={windowTypeLoading}
          />
        </div>

        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Window Tint</Typography>
          <SpecOptions
            name="windowTint"
            options={windowTintData}
            loading={windowTintLoading}
          />
        </div>

        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Wheel Design</Typography>
          <SpecOptions
            name="wheelDesign"
            options={wheelDesignData}
            loading={wheelDesignLoading}
          />
        </div>

        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Wheel Size</Typography>
          <SpecOptions
            name="wheelSize"
            options={wheelSizeData}
            loading={wheelSizeLoading}
          />
        </div>

        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Wheel Color</Typography>
          <SpecOptions
            name="wheelColor"
            options={wheelColorData}
            loading={wheelColorLoading}
          />
        </div>

        <Button type="submit" className="w-fit">
          Add to cart
        </Button>
      </form>
    </section>
  )
}
