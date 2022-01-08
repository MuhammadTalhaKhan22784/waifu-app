import React from "react";
import "./Collection.css";
import img from "../../Assets/Images/test.png";
import img2 from "../../Assets/Images/test2.png";
import img3 from "../../Assets/Images/test3.png";
import img4 from "../../Assets/Images/test4.png";
import img5 from "../../Assets/Images/test5.png";
import img6 from "../../Assets/Images/test6.png";
import img7 from "../../Assets/Images/test7.png";
import circle from "../../Assets/Images/circle.png";
function Collection() {
  // const clickHandler = (e) => {
  //   const mobile = window.innerWidth;
  //   if (mobile <= 1000) {
  //     if (document.querySelector(".open_hidden") !== null) {
  //       document.querySelector(".open_hidden").classList.remove("open_hidden");
  //       document.querySelector(".translate_y").classList.remove("translate_y");
  //     }
  //     e.target.classList.add("translate_y");
  //     e.target.lastChild.classList.add("open_hidden");
  //   }
  // };
  return (
    <div id="collection" className="collection">
      <h1 className="collection_head" data-aos="fade-up">
        Collection
      </h1>
      <p className="collection_p" data-aos="fade-up">
        Hover over each card below to learn more about the drop. Join our
        Discord to get the drop date!
      </p>
      <div data-aos="fade-up" data-aos-delay="600" className="collection_grid">
        <img src={circle} alt="" className="circle-img" />
        <div className="collect-div number1">
          <div className="collect_left">
            <h1>Fair Launch</h1>
            <p className="hover-p">
              Each waifu NFT is 0.03/0.05/0.07 ETH. Only 5/4/3 can be minted per
              transaction. No bonding curve.
            </p>
          </div>
          <div className="collect_right">
            <img src={img} alt="" className="collect_img" />
          </div>
        </div>
        <div className="collect-div number2">
          <div className="collect_left">
            <h1>Win Prizes</h1>
            <p className="hover-p">
              Win Prizes Each waifu NFT is a ticket to participate in every
              lottery event. Each ticket grants X number of entries based on the
              color rarity.
            </p>
          </div>
          <div className="collect_right">
            <img src={img2} alt="" className="collect_img" />
          </div>
        </div>
        <div className="collect-div number3">
          <div className="collect_left">
            <h1>Limited</h1>
            <p className="hover-p">
              Only a total of 8,888 waifus will ever be minted into existence,
              making them super rare. 6 color rarities gives you a chance to
              mint an extra rare one!
            </p>
          </div>
          <div className="collect_right">
            <img src={img3} alt="" className="collect_img" />
          </div>
        </div>
        <div className="collect-div number4">
          <div className="collect_left">
            <h1>Make History</h1>
            <p className="hover-p">
              All Waifustation NFT owners will forever be engraved in history
              via Waifustation OVA.
            </p>
          </div>
          <div className="collect_right">
            <img src={img4} alt="" className="collect_img" />
          </div>
        </div>
        <div className="collect-div number5">
          <div className="collect_left">
            <h1>Unique Art</h1>
            <p className="hover-p">
              Each NFT waifu is a uniquely composed 1 of 1 piece of artwork
              drawn by our styleGAN2 deep learning AI overlord. No two waifus
              are the same!
            </p>
          </div>
          <div className="collect_right">
            <img src={img5} alt="" className="collect_img" />
          </div>
        </div>

        <div className="collect-div number6">
          <div className="collect_left">
            <h1>Good Cause</h1>
            <p className="hover-p">
              Upon 80% completion of the Mission Roadmap, 10 ETH will be donated
              to Kyoto Animation.
            </p>
          </div>
          <div className="collect_right">
            <img src={img6} alt="" className="collect_img" />
          </div>
        </div>
        <div className="collect-div number7">
          <div className="collect_left">
            <h1>Ownership</h1>
            <p className="hover-p">
              All waifu NFTs come with full commercial usage rights. Do as you
              please with your waifus!
            </p>
          </div>
          <div className="collect_right">
            <img src={img7} alt="" className="collect_img" />
          </div>
        </div>
        <div className="collect-div number8">
          <div className="collect_left">
            <h1>Royalties</h1>
            <p className="hover-p">
              50% of ETH obtained from all gachapon machines will be
              continuously airdropped to the NFT owners.
            </p>
          </div>
          <div className="collect_right">
            <img src={img7} alt="" className="collect_img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
