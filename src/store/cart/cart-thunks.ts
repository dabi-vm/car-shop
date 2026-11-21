import { createAsyncThunk } from "@reduxjs/toolkit"

import { carApi, type CartItem } from "@/store/rtk-query/car-api"
import type { RootState } from "@/store/store"

function selectCartItems(state: RootState): CartItem[] {
  return carApi.endpoints.getCart.select()(state).data ?? []
}

export const addToCart = createAsyncThunk<
  CartItem,
  CartItem,
  { state: RootState }
>(
  "cart/addToCart",
  async (item, { dispatch, getState }) => {
    const cartItems = selectCartItems(getState())

    // if item is in cart stop
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id)
    if (existingItem) {
      return existingItem
    }

    // if category of item in cart remove item and add new one
    const existingCategory = cartItems.find(
      (cartItem) => cartItem.name === item.name
    )
    if (existingCategory) {
      await dispatch(
        carApi.endpoints.removeFromCart.initiate(existingCategory.id)
      ).unwrap()
    }

    return dispatch(carApi.endpoints.addToCart.initiate(item)).unwrap()
  },
  {
    // stop request when any request is running
    condition: (_, { getState }) => {
      const status = getState().cart.status
      return status !== "loading"
    },
  }
)

export const removeFromCart = createAsyncThunk<
  void,
  string,
  { state: RootState }
>(
  "cart/removeFromCart",
  async (id, { dispatch }) => {
    await dispatch(carApi.endpoints.removeFromCart.initiate(id)).unwrap()
  },
  {
    // stop request when any request is running
    condition: (_, { getState }) => {
      const status = getState().cart.status
      return status !== "loading"
    },
  }
)
