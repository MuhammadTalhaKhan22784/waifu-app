import React, { useEffect } from "react"
import "./Team.css"
import img1 from "../../Assets/Team/test1-no-bg.png"
import img2 from "../../Assets/Team/test2-no-bg.png"
import img3 from "../../Assets/Team/test3-no-bg.png"
import img4 from "../../Assets/Team/test4-no-bg.png"
import img5 from "../../Assets/Team/test5-no-bg.png"
import img6 from "../../Assets/Team/test6-no-bg.png"
import img7 from "../../Assets/Team/test7-no-bg.png"
import AOS from "aos"
import "aos/dist/aos.css"
function Team() {
  useEffect(() => {
    AOS.init({
      once: true,
    })
    AOS.refresh()
  }, [])
  return (
    <div id="team" className="team">
      <h1 data-aos="fade-up">OUR TEAM</h1>
      <div data-aos="fade-up" data-aos-delay="400" className="team-grid">
        <img className="team_image" src={img1} alt="..." />
        <img className="team_image" src={img2} alt="..." />
        <img className="team_image" src={img3} alt="..." />
        <img className="team_image" src={img4} alt="..." />
        <img className="team_image" src={img5} alt="..." />
        <img className="team_image" src={img6} alt="..." />
        <img className="team_image" src={img7} alt="..." />
        <p className="see-more">
          SEE <br></br> MORE
        </p>
      </div>
    </div>
  )
}

export default Team
