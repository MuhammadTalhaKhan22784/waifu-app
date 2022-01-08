import React, { useRef, useState, useEffect } from "react"
import "./Hero.css"
import { connect } from "react-redux"
import { createAction } from "@reduxjs/toolkit"
import { mint } from "../../utils/nft"
//assets
import img from "../../Assets/Images/test.png"
import img2 from "../../Assets/Images/test2.png"
import img3 from "../../Assets/Images/test3.png"
import img4 from "../../Assets/Images/test4.png"
import img5 from "../../Assets/Images/test5.png"
import img6 from "../../Assets/Images/test6.png"
import img7 from "../../Assets/Images/test7.png"

const nftValues = createAction("NFT_VALUES")

const HeroConnected = props => {
  const { prices, address, nftValues, balances } = props
  const [count, setCount] = useState(1)

  const handleClick = async () => {
    try {
      if (balances < prices.mintPrice * count)
        alert("Insufficient fund in Wallet.")
      else {
        const result = await mint(count, address)
        console.log("result:=======", result)
        await nftValues()
      }
    } catch (err) {
      console.log("minting:========", err)
      alert(err.message)
    }
  }

  const [showTimer, setShowTimer] = useState(true)
  const [showMint, setShowMint] = useState(false)
  const [timerDays, setTimerDays] = useState("00")
  const [timerHours, setTimerHours] = useState("00")
  const [timerMinutes, setTimerMinutes] = useState("00")
  const [timerSeconds, setTimerSeconds] = useState("00")
  let interval = useRef()
  const startTimer = () => {
    const countdownDate = new Date("Jan 12, 2022 00:10:00").getTime()
    interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      if (distance <= 0) {
        // stop our timer
        // setShowTimer(false)
        // clearInterval(interval.current)
        // setShowMint(true)
        setShowTimer(false)
        clearInterval(interval.current)
        document.querySelector(".hero_connect").style.display = "none"
        setShowMint(true)
      } else {
        // update timer
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    })
  }
  useEffect(() => {
    startTimer()
    return () => {
      clearInterval(interval.current)
    }
  })
  return (
    <div id="hero" className="hero">
      <h1 data-aos="fade-up">Collect Beans On the Metaverse</h1>
      <p data-aos="fade-up" className="hero-p">
        5000 confused beans who have somehow made their way to the metaverse.
        Only on Solana
      </p>
      {/* {(timerDays && timerHours && timerMinutes && timerSeconds == "00") ||
      (timerDays && timerHours && timerMinutes && timerSeconds == "0") ? ( */}
      {!showTimer ? (
        <button
          onClick={() => {
            // setShowMint(true)
            handleClick()
          }}
          data-aos="fade-up"
          data-aos-delay="200"
          className="hero_mint hero_mint"
        >
          Mint
        </button>
      ) : (
        <div className="timer-div">
          <div className="time-box">
            <h2>Days</h2>
            <h2>{timerDays}</h2>
          </div>
          <div className="time-box">
            <h2>Hours</h2>
            <h2>{timerHours}</h2>
          </div>
          <div className="time-box">
            <h2>Minutes</h2>
            <h2>{timerMinutes}</h2>
          </div>
          <div className="time-box">
            <h2>Seconds</h2>
            <h2>{timerSeconds}</h2>
          </div>
        </div>
      )}
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="hero_card-mine-div"
      >
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img className="card-mine-img" src={img} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity common">Common</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img2} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity rare">Rare</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img3} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity mythic">Mythic</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img4} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity common">Common</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img5} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity common">Common</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img6} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity common">Common</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img7} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity common">Common</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity common">Common</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img2} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity rare">Rare</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img3} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity mythic">Mythic</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img4} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity common">Common</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img5} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity common">Common</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img6} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity common">Common</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img7} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity common">Common</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="hero-desc">
        The gang: 5000 clumsy, simpleminded, and endangered beans, who are more
        ofá threat to themselves than anything else. Seriously. We're not sure
        how they've managed to survive this long to come with each others
      </p>
    </div>
  )
}
const mapStateToProps = state => ({
  prices: state.nft,
  address: state.metamask.address,
  balances: state.metamask.balances,
})

export default connect(mapStateToProps, { nftValues })(HeroConnected)
