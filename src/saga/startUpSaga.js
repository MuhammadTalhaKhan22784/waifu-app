/* eslint-disable no-console */
/* eslint-disable max-len */
import { put, takeLatest, call, fork, take, select } from "redux-saga/effects"
import {
  updateMetaMask,
  updateNetwork,
  updateNetworkID,
  updateAccount,
  updateBalance,
} from "../reducers/metamask"
import { eventChannel } from "redux-saga"
import {
  initializeWeb3,
  isMetamaskInstalled,
  askPermission,
  getNetworkId,
  getNetworkName,
  getAccountAddress,
  metaMaskAccountsChanged,
  getAccounts,
  getBalance,
  checksumAddress,
} from "../wallet/metamask"

function* startSaga() {
  yield takeLatest("CONNECT_WALLET", connectWallet)
  yield fork(watchMetaMaskAccountChange)
}

const isBrowser = typeof window !== "undefined"

function* connectWallet() {
  try {
    if (!isBrowser) {
      return false
    }

    const isMetamask = yield isMetamaskInstalled()
    yield put(updateMetaMask({ isAvailable: isMetamask }))
    if (isMetamask) {
      initializeWeb3()
      yield askPermission()
      const network = yield getNetworkName()
      const id = yield getNetworkId()
      if (id === 56) {
        yield put(updateNetwork("bsc-mainnet"))
      } else if (id === 97) {
        yield put(updateNetwork("bsc-testnet"))
      } else {
        yield put(updateNetwork(network))
      }
      yield put(updateNetworkID(id))
      let walletAddress = yield getAccountAddress()
      walletAddress = yield checksumAddress(walletAddress)
      yield put(updateAccount(walletAddress))
      const balance = yield getBalance(walletAddress)
      yield put(updateBalance(balance / 1e18))
    }
  } catch (error) {
    console.log(error)
  }
}

function createMetaMaskAccountChannel() {
  return eventChannel(emit => {
    metaMaskAccountsChanged(account => {
      emit(account)
    })
    return () => {
      console.log("Account changed")
    }
  })
}

export function* watchMetaMaskAccountChange() {
  if (!isBrowser) {
    return false
  }

  const accountChannel = yield call(createMetaMaskAccountChannel)
  while (true) {
    try {
      yield take(accountChannel)
      const oldnetwork = yield select(state => state.user.networkID)
      const newnetwork = yield getNetworkId()
      yield put({ type: "NETWORK" })
      if (oldnetwork === newnetwork) {
        // only account has been changed
        const account = yield getAccounts()
        yield put(updateAccount(account[0]))
      } else if (oldnetwork && newnetwork) {
        window.location.reload()
      }
    } catch (err) {
      console.error("error in Channel:", err)
    }
  }
}

export default startSaga
