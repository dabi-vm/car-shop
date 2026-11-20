import { createAction, createSlice } from "@reduxjs/toolkit"

import type { CartItem } from "@/store/rtk-query/car-api"

export const addToCartRequested = createAction<CartItem>(
  "cart/addToCartRequested"
)

export const removeFromCartRequested = createAction<string>(
  "cart/removeFromCartRequested"
)

const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCartRequested, () => {})
  },
})

export const cartReducer = cartSlice.reducer
