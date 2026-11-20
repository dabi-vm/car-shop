import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import createSagaMiddleware from "redux-saga"

import { cartReducer } from "@/store/cart/cart-slice"
import { carApi } from "@/store/rtk-query/car-api"
import { rootSaga } from "@/store/sagas/root-saga"

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [carApi.reducerPath]: carApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carApi.middleware, sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
