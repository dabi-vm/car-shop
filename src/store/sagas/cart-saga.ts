import {
  addToCartRequested,
  removeFromCartRequested,
} from "@/store/cart/cart-slice"
import { carApi, type CartItem } from "@/store/rtk-query/car-api"
import type { RootState } from "@/store/store"
import type { Task } from "redux-saga"
import { fork, put, select, take } from "redux-saga/effects"

type MutationRequest = Promise<unknown>

function selectCartItems(state: RootState): CartItem[] {
  return carApi.endpoints.getCart.select()(state).data ?? []
}

function* addToCart(action: ReturnType<typeof addToCartRequested>) {
  const item = action.payload
  const cartItems: CartItem[] = yield select(selectCartItems)

  // Option already in cart — skip the network call.
  if (cartItems.some((cartItem) => cartItem.id === item.id)) {
    return
  }

  // item category already in cart
  const existingCategory = cartItems.find(
    (cartItem) => cartItem.name === item.name
  )

  try {
    // remove item category from cart if it exists
    if (existingCategory) {
      const removeRequest: MutationRequest = yield put(
        carApi.endpoints.removeFromCart.initiate(existingCategory.id)
      )
      yield removeRequest
    }

    const addRequest: MutationRequest = yield put(
      carApi.endpoints.addToCart.initiate(item)
    )
    yield addRequest
  } catch (error) {
    console.error(error)
  }
}

function* removeFromCart(action: ReturnType<typeof removeFromCartRequested>) {
  const id = action.payload
  const cartItems: CartItem[] = yield select(selectCartItems)

  // item not in cart — skip the network call
  if (!cartItems.some((cartItem) => cartItem.id === id)) {
    return
  }

  const removeRequest: MutationRequest = yield put(
    carApi.endpoints.removeFromCart.initiate(id)
  )
  yield removeRequest
}

function* watchCartMutations() {
  let runningTask: Task | null = null
  let runningKind: "add" | "remove" | null = null

  while (true) {
    const action:
      | ReturnType<typeof addToCartRequested>
      | ReturnType<typeof removeFromCartRequested> = yield take([
      addToCartRequested.type,
      removeFromCartRequested.type,
    ])

    // stop new add/remove requests while add or remove request is running
    if (
      runningTask?.isRunning() &&
      (runningKind === "add" || runningKind === "remove")
    ) {
      continue
    }

    if (action.type === addToCartRequested.type) {
      runningTask = yield fork(
        addToCart,
        action as ReturnType<typeof addToCartRequested>
      )
      runningKind = "add"
    } else {
      runningTask = yield fork(
        removeFromCart,
        action as ReturnType<typeof removeFromCartRequested>
      )
      runningKind = "remove"
    }
  }
}

export function* cartSaga() {
  yield fork(watchCartMutations)
}
