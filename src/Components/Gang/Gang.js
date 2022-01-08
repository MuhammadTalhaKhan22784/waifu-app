import React, { useEffect } from "react"
import "./Gang.css"
import img1 from "../../Assets/Team/test1-no-bg.png"
import img2 from "../../Assets/Team/test2-no-bg.png"
import img3 from "../../Assets/Team/test3-no-bg.png"
import img4 from "../../Assets/Team/test4-no-bg.png"
import img5 from "../../Assets/Team/test5-no-bg.png"
import img6 from "../../Assets/Team/test6-no-bg.png"
import AOS from "aos"
import "aos/dist/aos.css"
function Gang() {
  useEffect(() => {
    AOS.init({
      once: true,
    })
    AOS.refresh()
  }, [])
  return (
    <div id="gang" className="gang">
      <h1 data-aos="fade-up">Let's Join the gang!</h1>
      <div data-aos="fade-up" data-aos-delay="50" className="gang_btn-div">
        <button className="btn-gang gang-discord">
          <i className="fab fa-discord gang-icon"></i>
          DISCORD
        </button>
        <button className="btn-gang gang-twitter">
          <i className="fab fa-twitter gang-icon"></i>
          TWITTER
        </button>
      </div>
      <div className="gang-absolute">
        <img
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="0"
          src={img1}
          data-aos-duration="600"
          alt="..."
          className="gang-img1"
        />
        <img
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="100"
          data-aos-duration="600"
          src={img2}
          alt="..."
          className="gang-img2"
        />
        <img
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="400"
          data-aos-duration="600"
          src={img3}
          alt="..."
          className="gang-img3"
        />
        <img
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="800"
          data-aos-duration="600"
          src={img4}
          alt="..."
          className="gang-img4"
        />
        <img
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="1000"
          src={img5}
          data-aos-duration="600"
          alt="..."
          className="gang-img5"
        />
        <img
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="600"
          data-aos-duration="600"
          src={img6}
          alt="..."
          className="gang-img6"
        />
        {/* <img
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="900"
          data-aos-duration="600"
          src={img7}
          alt="..."
          className="gang-img7"
        /> */}
      </div>
    </div>
  )
}

export default Gang
