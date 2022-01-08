/* eslint-disable no-console */
import Web3 from "web3"
import ERC721EnumerableABI from "../abi/ERC721Enumerable.json"
import TestABI from "../abi/Test.json"

const nftContractAddress = "0x6Cf91a82731f2f5943ef6522064Ee76D0972FEE4"

export const createWeb3Instance = async () => {
  let web3 = window.web3
  web3 = new Web3(web3.currentProvider)
  return web3
}

export const gettestContractInstance = async () => {
  try {
    let web3Instance = await createWeb3Instance()

    return await new web3Instance.eth.Contract(TestABI.abi, nftContractAddress)
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const getERCContractInstance = async () => {
  try {
    let web3Instance = await createWeb3Instance()

    return await new web3Instance.eth.Contract(
      ERC721EnumerableABI.abi,
      nftContractAddress
    )
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const getMaxNftPurchase = async () => {
  try {
    const testContract = await gettestContractInstance()
    const maxPurchase = await testContract.methods.MAX_NFT_PURCHASE().call()

    return maxPurchase
  } catch (err) {
    console.log("Max purchase ", err)
    throw err
  }
}

export const getMaxSupply = async () => {
  try {
    const testContract = await gettestContractInstance()
    const maxSupply = await testContract.methods.MAX_SUPPLY().call()

    return maxSupply
  } catch (err) {
    console.log("Max Supply ", err)
    throw err
  }
}

export const getNftPrice = async () => {
  try {
    const testContract = await gettestContractInstance()
    const nftPrice = await testContract.methods.NFT_PRICE().call()

    return parseInt(nftPrice) / 1e18
  } catch (err) {
    console.log("Max Supply ", err)
    throw err
  }
}

export const mint = async (tokens, from) => {
  try {
    const testContract = await gettestContractInstance()
    let value = await getNftPrice()
    value = value * tokens * 1e18
    const result = await testContract.methods.mint(tokens).send({ from, value })
    return result
  } catch (err) {
    console.log("Mint ", err)
    throw err
  }
}

export const getTotalSupply = async () => {
  try {
    const ercContract = await getERCContractInstance()
    const totalSupply = await ercContract.methods.totalSupply().call()

    return totalSupply
  } catch (err) {
    console.log("Total Supply ", err)
    throw err
  }
}
