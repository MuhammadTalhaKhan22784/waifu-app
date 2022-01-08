/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

const configSlice = createSlice({
  name: "nft",
  initialState: {
    remainingNft: 0,
    totalNft: 0,
    mintPrice: 0,
  },
  reducers: {
    updateRemainingNFT(state, action) {
      state.remainingNft = action.payload
    },
    updateTotalNFT(state, action) {
      state.totalNft = action.payload
    },
    updateMintPrice(state, action) {
      state.mintPrice = action.payload
    },
  },
})

const { actions, reducer } = configSlice

export const { updateMintPrice, updateRemainingNFT, updateTotalNFT } = actions

export default reducer
