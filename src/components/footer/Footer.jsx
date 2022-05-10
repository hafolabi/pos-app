import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="footerLeft">
          <span className="footerLeftTitle">Ola-pos</span>
          <span className="footerLeftDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            facilis placeat ducimus deserunt vel quasi
          </span>
          <div className="social">
            <i className="socialIcon fa-brands fa-twitter-square"></i>
            <i className="socialIcon fa-brands fa-facebook-square"></i>
            <i className="socialIcon fa-brands fa-pinterest-square"></i>
            <i className="socialIcon fa-brands fa-instagram-square"></i>
          </div>
        </div>

        <div className="footerCenter">
          <span className="footerCenterTitle"> Curious about Ola-pos? </span>
          <span className="footerCenterList">About</span>
          <span className="footerCenterList">How it works</span>
          <span className="footerCenterList">Login</span>
          <span className="footerCenterList">Sign up</span>
        </div>

        <div className="footerRight">
          <div className="footerRightTitle">Contact</div>
          <div className="footerRightList">
            <i className="footerRightIcon fa-solid fa-location-dot"></i>
            <span className="footerRightItem">Ogba Lagos || Nigeria</span>
          </div>

          <div className="footerRightList">
          <i className="footerRightIcon fa-solid fa-phone"></i>
            <span className="footerRightItem">+234-810-3300-875</span>
          </div>

          <div className="footerRightList">
            <i className="footerRightIcon fa-solid fa-envelope"></i>
            <span className="footerRightItem">admin@ola-pos.com</span>
          </div>

          <div className="footerRightList">
            <i className="footerRightIcon fa-solid fa-envelope"></i>
            <span className="footerRightItem">admin@ola-pos.com</span>
          </div>
          
        </div>

        <div className="farRight">
            <div className="footerRightTitle2">Legal</div>
            
            <span className="footerRightItem1">Terms & Conditions</span>
            <span className="footerRightItem2">Privacy Policy</span>
        </div>
      </div>
      <div className="footerBottom">
        <div className="footerBottomLeft">
          Ola-pos &copy;
          <span style={{ fontSize: "14px" }}>
            All Right Reserved {new Date().getFullYear()}
          </span>
        </div>
        <div className="footerBottomRight">Developed by theinsights_dev</div>
      </div>
    </div>
  );
}
