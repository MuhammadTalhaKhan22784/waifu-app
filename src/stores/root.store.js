import { configureStore } from "@reduxjs/toolkit"
import sagaMiddleware from "../saga/rootSaga"
import createRootReducer from "../reducers/rootReducer"

const rootReducer = createRootReducer()

const middleware = [sagaMiddleware]

const store = configureStore({
  middleware,
  reducer: rootReducer,
})

export default store
