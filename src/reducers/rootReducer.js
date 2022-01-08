import { combineReducers } from "redux"
import metamask from "./metamask"
import nft from "./nft"

const createRootReducer = () =>
  combineReducers({
    metamask,
    nft,
  })

export default createRootReducer
