import { SpecOptions } from "@/components/spec-options"
import { Typography } from "@/components/ui/typography"
import {
  useAddToCartMutation,
  useGetBodyColorOptionsQuery,
  useGetCartQuery,
  useGetPaintTypeOptionsQuery,
  useGetWheelColorOptionsQuery,
  useGetWheelDesignOptionsQuery,
  useGetWheelSizeOptionsQuery,
  useGetWindowTintOptionsQuery,
  useGetWindowTypeOptionsQuery,
  useRemoveFromCartMutation,
} from "@/store/rtk-query/car-api"
import type { SpecOption } from "@/store/rtk-query/car-types"

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
  const { data: cartItems = [] } = useGetCartQuery()
  const [addToCart, { error: addError }] = useAddToCartMutation()
  const [removeFromCart] = useRemoveFromCartMutation()

  const handleSelect = (name: string, option: SpecOption) => {
    const existingType = cartItems.find((item) => item.name === name)

    if (existingType) {
      removeFromCart(existingType.id)
    }
    addToCart({
      name,
      ...option,
    })
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
            onSelect={(option) => handleSelect("bodyColor", option)}
          />
        </div>

        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Paint Type</Typography>
          <SpecOptions
            name="paintType"
            options={paintTypeData}
            loading={paintTypeLoading}
            onSelect={(option) => handleSelect("paintType", option)}
          />
        </div>

        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Window Type</Typography>
          <SpecOptions
            name="windowType"
            options={windowTypeData}
            loading={windowTypeLoading}
            onSelect={(option) => handleSelect("windowType", option)}
          />
        </div>

        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Window Tint</Typography>
          <SpecOptions
            name="windowTint"
            options={windowTintData}
            loading={windowTintLoading}
            onSelect={(option) => handleSelect("windowTint", option)}
          />
        </div>

        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Wheel Design</Typography>
          <SpecOptions
            name="wheelDesign"
            options={wheelDesignData}
            loading={wheelDesignLoading}
            onSelect={(option) => handleSelect("wheelDesign", option)}
          />
        </div>

        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Wheel Size</Typography>
          <SpecOptions
            name="wheelSize"
            options={wheelSizeData}
            loading={wheelSizeLoading}
            onSelect={(option) => handleSelect("wheelSize", option)}
          />
        </div>

        <div className="grid min-w-0 gap-3">
          <Typography variant="label">Wheel Color</Typography>
          <SpecOptions
            name="wheelColor"
            options={wheelColorData}
            loading={wheelColorLoading}
            onSelect={(option) => handleSelect("wheelColor", option)}
          />
        </div>

        {addError ? (
          <Typography variant="muted">Could not add to cart.</Typography>
        ) : null}
      </div>
    </section>
  )
}
