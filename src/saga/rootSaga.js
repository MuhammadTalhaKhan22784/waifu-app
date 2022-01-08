import { all, fork } from "redux-saga/effects"
import createSagaMiddleware from "redux-saga"
import startUpSaga from "./startUpSaga"
import nftSaga from "./nftSaga"

function* rootSaga() {
  yield all([fork(startUpSaga), fork(nftSaga)])
}

const sagaMiddleware = createSagaMiddleware()

export const startSaga = () => {
  sagaMiddleware.run(rootSaga)
}

export default sagaMiddleware
