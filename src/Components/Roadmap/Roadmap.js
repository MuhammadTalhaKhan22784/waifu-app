import React from "react";
import "./Roadmap.css";
import bg from "../../Assets/Images/roadmap-bg.png";
import pointer from "../../Assets/Images/pointer.png";
function Roadmap() {
  return (
    <div id="roadmap" className="roadmap">
      <h1 data-aos="fade-down">DAO</h1>
      <div className="roadmap-image">
        <img
          data-aos-delay="200"
          data-aos="fade-down"
          className="roadmap-bg"
          src={bg}
          alt=""
        />
        <div
          data-aos-delay="300"
          data-aos="fade-down"
          className="pointer-div pointer-div1"
        >
          <div className="left-pointer">
            <img
              data-aos="zoom-in"
              data-aos-delay="350"
              src={pointer}
              alt=""
              className="pointer-img"
            />
          </div>
          <div className="right-pointer">
            <h4>Launch</h4>
            <p>Launch the presale for all whitelisted members, followed by a</p>
          </div>
        </div>
        <div
          data-aos-delay="400"
          data-aos="fade-down"
          className="pointer-div pointer-div2"
        >
          <div className="left-pointer">
            <img
              data-aos="zoom-in"
              data-aos-delay="450"
              src={pointer}
              alt=""
              className="pointer-img"
            />
          </div>
          <div className="right-pointer">
            <h4>Launch</h4>
            <p>Launch the presale for all whitelisted members, followed by a</p>
          </div>
        </div>
        <div
          data-aos-delay="500"
          data-aos="fade-down"
          className="pointer-div pointer-div3"
        >
          <div className="left-pointer">
            <img
              data-aos="zoom-in"
              data-aos-delay="550"
              src={pointer}
              alt=""
              className="pointer-img"
            />
          </div>
          <div className="right-pointer">
            <h4>Launch</h4>
            <p>Launch the presale for all whitelisted members, followed by a</p>
          </div>
        </div>
        <div
          data-aos-delay="600"
          data-aos="fade-down"
          className="pointer-div pointer-div4"
        >
          <div className="left-pointer">
            <img
              data-aos="zoom-in"
              data-aos-delay="650"
              src={pointer}
              alt=""
              className="pointer-img"
            />
          </div>
          <div className="right-pointer">
            <h4>Launch</h4>
            <p>Launch the presale for all whitelisted members, followed by a</p>
          </div>
        </div>
        <div
          data-aos-delay="700"
          data-aos="fade-down"
          className="pointer-div pointer-div5"
        >
          <div className="left-pointer">
            <img
              data-aos="zoom-in"
              data-aos-delay="750"
              src={pointer}
              alt=""
              className="pointer-img"
            />
          </div>
          <div className="right-pointer">
            <h4>Launch</h4>
            <p>Launch the presale for all whitelisted members, followed by a</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
