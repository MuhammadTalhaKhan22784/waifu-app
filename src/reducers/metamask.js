/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

const configSlice = createSlice({
  name: "metamask",
  initialState: {
    isAvailable: false,
    address: "",
    balances: 0,
    network: "",
    networkID: "",
  },
  reducers: {
    connectMetamask() {},
    updateMetaMask(state, action) {
      state.isAvailable = action.payload.isAvailable
    },
    updateAccount(state, action) {
      state.address = action.payload
    },
    updateBalance(state, action) {
      // state.balances[action.payload.name] = action.payload.value
      state.balances = action.payload
    },
    updateNetwork(state, action) {
      state.network = action.payload
    },
    updateNetworkID(state, action) {
      state.networkID = action.payload
    },
  },
})

const { actions, reducer } = configSlice

export const {
  updateMetaMask,
  connectMetamask,
  updateAccount,
  updateBalance,
  updateNetwork,
  updateNetworkID,
} = actions

export default reducer
