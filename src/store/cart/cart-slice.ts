import { createSlice } from "@reduxjs/toolkit"

import { addToCart, removeFromCart } from "@/store/cart/cart-thunks"

export type CartMutationStatus = "idle" | "loading"

type CartState = {
  status: CartMutationStatus
}

const initialState: CartState = {
  status: "idle",
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.status = "loading"
      })
      .addCase(removeFromCart.pending, (state) => {
        state.status = "loading"
      })
      .addMatcher(addToCart.settled, (state) => {
        state.status = "idle"
      })
      .addMatcher(removeFromCart.settled, (state) => {
        state.status = "idle"
      })
  },
})

export const cartReducer = cartSlice.reducer

export const selectCartMutationStatus = (state: { cart: CartState }) =>
  state.cart.status

export const selectIsCartMutationPending = (state: { cart: CartState }) =>
  state.cart.status === "loading"
