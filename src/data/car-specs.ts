export type SpecOption = {
  value: string
  label: string
  price: number
}

export const bodyColorOptions: SpecOption[] = [
  { value: "white", label: "White", price: 0 },
  { value: "black", label: "Black", price: 150 },
  { value: "silver", label: "Silver", price: 200 },
  { value: "gray", label: "Gray", price: 180 },
]

export const paintTypeOptions: SpecOption[] = [
  { value: "gloss", label: "Gloss", price: 0 },
  { value: "matte", label: "Matte", price: 800 },
  { value: "metallic", label: "Metallic", price: 450 },
]

export const windowTypeOptions: SpecOption[] = [
  { value: "standard", label: "Standard Glass", price: 0 },
  { value: "acoustic", label: "Acoustic Glass", price: 250 },
  { value: "laminated", label: "Laminated Safety", price: 400 },
]

export const windowTintOptions: SpecOption[] = [
  { value: "none", label: "No Tint", price: 0 },
  { value: "light", label: "Light (70%)", price: 120 },
  { value: "dark", label: "Dark (20%)", price: 220 },
]

export const wheelDesignOptions: SpecOption[] = [
  { value: "alloy-5-spoke", label: "Alloy 5-Spoke", price: 0 },
  { value: "alloy-mesh", label: "Alloy Mesh", price: 350 },
  { value: "multi-spoke", label: "Multi-Spoke", price: 500 },
]

export const wheelSizeOptions: SpecOption[] = [
  { value: "16", label: '16"', price: 0 },
  { value: "17", label: '17"', price: 200 },
  { value: "18", label: '18"', price: 400 },
]

export const wheelColorOptions: SpecOption[] = [
  { value: "silver", label: "Silver", price: 0 },
  { value: "black", label: "Black", price: 150 },
  { value: "white", label: "White", price: 180 },
]

export function formatSpecPrice(price: number) {
  if (price === 0) {
    return "Included"
  }

  return `+$${price.toLocaleString()}`
}
