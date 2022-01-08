import React from "react";
import "./Launch.css";
import img1 from "../../Assets/Launch Images/launch (1).jpg";
import img2 from "../../Assets/Launch Images/launch (2).jpg";
import img3 from "../../Assets/Launch Images/launch (3).jpg";
import img4 from "../../Assets/Launch Images/launch (4).jpg";
import img5 from "../../Assets/Launch Images/launch (5).jpg";
import img6 from "../../Assets/Launch Images/launch (6).jpg";
import img7 from "../../Assets/Launch Images/launch (7).jpg";
import img8 from "../../Assets/Launch Images/launch (8).jpg";
import img9 from "../../Assets/Launch Images/launch (9).jpg";
import img10 from "../../Assets/Launch Images/launch (10).jpg";
import img11 from "../../Assets/Launch Images/launch (11).jpg";
import img12 from "../../Assets/Launch Images/launch (12).jpg";
import img13 from "../../Assets/Launch Images/launch (13).jpg";
import img14 from "../../Assets/Launch Images/launch (14).jpg";
import img15 from "../../Assets/Launch Images/launch (15).jpg";
function Launch() {
  const clickHandler = (e) => {
    const mobile = window.innerWidth;
    if (mobile <= 1050) {
      if (document.querySelector(".content_hover") !== null) {
        document
          .querySelector(".content_hover")
          .classList.remove("content_hover");
        document.querySelector(".img_hover").classList.remove("img_hover");
      }
      console.log(e.target.firstChild);
      e.target.firstChild.classList.add("img_hover");
      e.target.lastChild.classList.add("content_hover");
    }
  };
  return (
    <div className="launch">
      <h1 data-aos="fade-up">The Launch</h1>
      <div data-aos="fade-up" data-aos-delay="550" className="line-div">
        <div className="dot-div">
          <div className="circle"></div>
          <p>20%</p>
        </div>
        <div className="dot-div">
          <div className="circle"></div>
          <p>40%</p>
        </div>
        <div className="dot-div">
          <div className="circle"></div>
          <p>60%</p>
        </div>
        <div className="dot-div">
          <div className="circle"></div>
          <p>80%</p>
        </div>
        <div className="dot-div">
          <div className="circle"></div>
          <p>100%</p>
        </div>
      </div>
      <div className="launch-div">
        <div data-aos="fade-up" data-aos-delay="100" className="launch-box">
          <p>NFT Giveaway</p>
          <div className="x10-div">
            {/* 3d flip ----------------- */}
            <div className="box" onClick={clickHandler}>
              <img src={img1} alt="" />
              <div className="content">
                <p>Win 1 of 10 Waifustation NFTs.</p>
              </div>
            </div>
            {/* 3d flip end ----------------------- */}
          </div>
          <p>CrunchyRoll Premium</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img4} alt="" />
              <div className="content">
                <p>Win 1 of 10 Crunchyroll Premium subscriptions.</p>
              </div>
            </div>
          </div>
          <p>Metaverse Gachapons</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img12} alt="" />
              <div className="content">
                <p>
                  Waifustation gachapon stores will be built inside the Sandbox,
                  Decentraland and future metaverses.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="launch-box">
          <p>Partner NFTs</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img11} alt="" />
              <div className="content">
                <p>Win 1 of 10 partner project NFTs.</p>
              </div>
            </div>
          </div>
          <p>Gachapon Ticket</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img6} alt="" />
              <div className="content">
                <p>Win 1 of 30 gachapon roll tickets.</p>
              </div>
            </div>
          </div>
          <p>Game Assets</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img7} alt="" />
              <div className="content">
                <p>Win 1 of 20 blockchain game assets.</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300" className="launch-box">
          <p>Crypto Crate</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img15} alt="" />
              <div className="content">
                <p>
                  Win 1 of 100 crypto crates charged with the top 50 altcoins.
                </p>
              </div>
            </div>
          </div>
          <p>Gatebox AI</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img9} alt="" />
              <div className="content">
                <p>Win 1 of 5 Gatebox AI personal hologram waifu.</p>
              </div>
            </div>
          </div>
          <p>Body Pillow</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img3} alt="" />
              <div className="content">
                <p>Win 1 of 20 full-sized custom waifu body pillows.</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="400" className="launch-box">
          <p>Eth Lottery</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img5} alt="" />
              <div className="content">
                <p>Win ETH from prize pool.</p>
              </div>
            </div>
          </div>
          <p>Gaming PC RTX3090</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img8} alt="" />
              <div className="content">
                <p>Win 1 of 5 Nvidia RTX3090 gaming PCs.</p>
              </div>
            </div>
          </div>
          <p>Playstation 5</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img14} alt="" />
              <div className="content">
                <p>Win 1 of 10 Playstation 5.</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="500" className="launch-box">
          <p>Waifustation OVA</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img13} alt="" />
              <div className="content">
                <p>Win 1 of 10 spots to be part of Waifustation's OVA.</p>
              </div>
            </div>
          </div>
          <p>Waifu Cybertruck</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img2} alt="" />
              <div className="content">
                <p>Win a 1 of 1 waifu wrapped Tesla Cybertruck.</p>
              </div>
            </div>
          </div>
          <p>Round Trip to Japan</p>
          <div className="x10-div">
            <div className="box" onClick={clickHandler}>
              <img src={img10} alt="" />
              <div className="content">
                <p>Win 1 of 10 round trips to Japan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Launch;
