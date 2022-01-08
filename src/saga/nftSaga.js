/* eslint-disable no-console */
/* eslint-disable max-len */
import { put, takeLatest } from "redux-saga/effects"
import {
  updateMintPrice,
  updateRemainingNFT,
  updateTotalNFT,
} from "../reducers/nft"
import { getMaxSupply, getTotalSupply, getNftPrice } from "../utils/nft"

function* nftSaga() {
  yield takeLatest("NFT_VALUES", nftValue)
}

function* nftValue() {
  try {
    const totalNft = yield getMaxSupply()
    yield put(updateTotalNFT(totalNft))

    const totalSupply = yield getTotalSupply()
    const remainingNft = totalNft - totalSupply
    yield put(updateRemainingNFT(remainingNft))

    const nftPrice = yield getNftPrice()
    yield put(updateMintPrice(nftPrice))
  } catch (error) {
    console.log(error)
  }
}

export default nftSaga
