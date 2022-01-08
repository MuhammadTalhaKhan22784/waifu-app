import React from "react";
import Logo from "../../Assets/Images/Logo.png";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <img className="foot-logo" src={Logo} alt="" />
      <ul className="foot_navbar2">
        <li>
          <a href=".." className="foot-items">
            Win A NFT
          </a>
        </li>
        <li>
          <a href=".." className="foot-items">
            Attributes
          </a>
        </li>
        <li>
          <a href=".." className="foot-items">
            Specs
          </a>
        </li>
        <li>
          <a href=".." className="foot-items">
            Team
          </a>
        </li>
        <li>
          <a href=".." className="foot-items">
            FAQ
          </a>
        </li>
      </ul>

      <div className="header_social">
        <i className="header_icon fab fa-discord" style={{display:"flex"}}></i>
        <i className="header_icon fab fa-twitter" style={{display:"flex"}}></i>
      </div>
    </div>
  );
}

export default Footer;
