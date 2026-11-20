import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import type { SpecOption } from "@/store/rtk-query/car-types"

export type CartItem = {
  id: string
  name: string
  value: string
  label: string
  price: number
}

export const carApi = createApi({
  reducerPath: "carApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  tagTypes: ["Cart"],
  endpoints: (build) => ({
    getBodyColorOptions: build.query<SpecOption[], void>({
      query: () => "/bodyColorOptions",
    }),
    getPaintTypeOptions: build.query<SpecOption[], void>({
      query: () => "/paintTypeOptions",
    }),
    getWindowTypeOptions: build.query<SpecOption[], void>({
      query: () => "/windowTypeOptions",
    }),
    getWindowTintOptions: build.query<SpecOption[], void>({
      query: () => "/windowTintOptions",
    }),
    getWheelDesignOptions: build.query<SpecOption[], void>({
      query: () => "/wheelDesignOptions",
    }),
    getWheelSizeOptions: build.query<SpecOption[], void>({
      query: () => "/wheelSizeOptions",
    }),
    getWheelColorOptions: build.query<SpecOption[], void>({
      query: () => "/wheelColorOptions",
    }),
    getCart: build.query<CartItem[], void>({
      query: () => "/cart",
      providesTags: ["Cart"],
    }),
    addToCart: build.mutation<CartItem, CartItem>({
      query: (item) => ({
        url: "/cart",
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["Cart"],
    }),
    removeFromCart: build.mutation<void, string>({
      query: (id) => ({
        url: `/cart/${encodeURIComponent(id)}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
})

export const {
  useGetBodyColorOptionsQuery,
  useGetPaintTypeOptionsQuery,
  useGetWindowTypeOptionsQuery,
  useGetWindowTintOptionsQuery,
  useGetWheelDesignOptionsQuery,
  useGetWheelSizeOptionsQuery,
  useGetWheelColorOptionsQuery,
  useGetCartQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
} = carApi
