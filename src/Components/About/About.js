import React from "react";
import "./About.css";
//assets
import img3 from "../../Assets/Images/test3.png";
import smallLogo from "../../Assets/Images/about-logo.png";
function About() {
  return (
    <div id="about" className="about">
      <div data-aos="fade-up" className="about_left">
        <div className="card-mine big_card-mine">
          <img
            data-aos="zoom-out-up"
            className="absolute-image"
            data-aos-delay="500"
            src={smallLogo}
            alt=""
          />
          <img className="card-mine-img big_img" src={img3} alt="..." />
          <p className="card-mine-title">Male smokers old</p>
          <div className="card-mine-lower">
            <p className="number">#2290</p>
            <p className="rarity mythic">Mythic</p>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="about_right">
        <h4 className="about_title">ABOUT</h4>
        <h2 className="about_title2">WHAT is NFT?</h2>
        <p className="about_desc">
          An NFT, also known as a Non-Fungible Token, is a one-of-a-kind digital
          token stored on a digital ledger/blockchain. The term "Non-Fungible"
          signifies something not interchangeable with another good due to its
          distinct properties.
        </p>
        <div className="btn-div">
          <button className="hero_buy">BUY A BEAN</button>
          <button className="hero_create">BUY Anyhing</button>
        </div>
      </div>
    </div>
  );
}

export default About;
