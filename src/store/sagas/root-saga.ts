import { all, fork } from "redux-saga/effects"

import { cartSaga } from "@/store/sagas/cart-saga"

export function* rootSaga() {
  yield all([fork(cartSaga)])
}
