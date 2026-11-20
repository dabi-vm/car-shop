import { SpecOptions } from "@/components/spec-options"
import { Typography } from "@/components/ui/typography"
import { addToCartRequested } from "@/store/cart/cart-slice"
import { useAppDispatch } from "@/store/hooks"
import {
  useGetBodyColorOptionsQuery,
  useGetCartQuery,
  useGetPaintTypeOptionsQuery,
  useGetWheelColorOptionsQuery,
  useGetWheelDesignOptionsQuery,
  useGetWheelSizeOptionsQuery,
  useGetWindowTintOptionsQuery,
  useGetWindowTypeOptionsQuery,
} from "@/store/rtk-query/car-api"
import type { SpecOption } from "@/store/rtk-query/car-types"

export function CarForm() {
  const dispatch = useAppDispatch()

  const { data: cartItems = [] } = useGetCartQuery()
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

  const cartValue = (name: string) =>
    cartItems.find((item) => item.name === name)?.value ?? ""

  const handleSelect = (name: string, option: SpecOption) => {
    dispatch(
      addToCartRequested({
        name,
        ...option,
      })
    )
  }

  return (
    <section className="flex-1">
      <div className="mb-6">
        <Typography variant="h2">Car specifications</Typography>
        <Typography variant="muted" className="mt-1">
          Choose options below. Each selection is added to your cart.
        </Typography>
      </div>

      <div className="grid gap-8">
        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Body Color</Typography>
          <SpecOptions
            name="bodyColor"
            options={bodyColorData}
            loading={bodyColorLoading}
            value={cartValue("bodyColor")}
            onSelect={(option) => handleSelect("bodyColor", option)}
          />
        </div>

        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Paint Type</Typography>
          <SpecOptions
            name="paintType"
            options={paintTypeData}
            loading={paintTypeLoading}
            value={cartValue("paintType")}
            onSelect={(option) => handleSelect("paintType", option)}
          />
        </div>

        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Window Type</Typography>
          <SpecOptions
            name="windowType"
            options={windowTypeData}
            loading={windowTypeLoading}
            value={cartValue("windowType")}
            onSelect={(option) => handleSelect("windowType", option)}
          />
        </div>

        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Window Tint</Typography>
          <SpecOptions
            name="windowTint"
            options={windowTintData}
            loading={windowTintLoading}
            value={cartValue("windowTint")}
            onSelect={(option) => handleSelect("windowTint", option)}
          />
        </div>

        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Wheel Design</Typography>
          <SpecOptions
            name="wheelDesign"
            options={wheelDesignData}
            loading={wheelDesignLoading}
            value={cartValue("wheelDesign")}
            onSelect={(option) => handleSelect("wheelDesign", option)}
          />
        </div>

        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Wheel Size</Typography>
          <SpecOptions
            name="wheelSize"
            options={wheelSizeData}
            loading={wheelSizeLoading}
            value={cartValue("wheelSize")}
            onSelect={(option) => handleSelect("wheelSize", option)}
          />
        </div>

        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Wheel Color</Typography>
          <SpecOptions
            name="wheelColor"
            options={wheelColorData}
            loading={wheelColorLoading}
            value={cartValue("wheelColor")}
            onSelect={(option) => handleSelect("wheelColor", option)}
          />
        </div>
      </div>
    </section>
  )
}
