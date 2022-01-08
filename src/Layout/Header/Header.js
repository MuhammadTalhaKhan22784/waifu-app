import React, { useState } from "react"
import "./Header.css"
//assets
import Logo from "../../Assets/Images/Logo.png"
function Header() {
  const [open, setOpen] = useState(true)
  const opening = e => {
    const navbar = document.querySelector(".navbar2")

    if (open === true) {
      navbar.classList.add("block")
      setTimeout(() => {
        navbar.classList.add("open")
      }, 50)
    } else {
      navbar.classList.remove("open")
      setTimeout(() => {
        navbar.classList.remove("block")
      }, 50)
    }
    setOpen(prev => !prev)
  }
  return (
    <div className="header">
      <img className="logo mobile" src={Logo} alt="" />
      <ul className="navbar2">
        <li>
          <i onClick={opening} className="mobile fas fa-times"></i>
        </li>
        <li>
          <a href="#hero" className="nav-items">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="nav-items">
            About
          </a>
        </li>
        <li>
          <a href="#collection" className="nav-items">
            Collection
          </a>
        </li>
        <li className="logo-li">
          <img className="logo-nav desktop" src={Logo} alt="" />
        </li>
        <li>
          <a href="#roadmap" className="nav-items">
            Roadmap
          </a>
        </li>
        <li>
          <a href="#team" className="nav-items">
            Team
          </a>
        </li>
        <li>
          <a href="#faq" className="nav-items">
            FAQ
          </a>
        </li>
      </ul>
      <i onClick={opening} className="mobile fas fa-bars"></i>
      {/* <div className="desktop header_social">
      
      </div> */}
      <i className="desktop header_icon ms-3 fab fa-twitter"></i>
      <i className="desktop header_icon me-3 ms-3 fab fa-discord"></i>
    </div>
  )
}

export default Header
