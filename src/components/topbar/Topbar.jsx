import React, { useState } from "react";
import "./topbar.css";

export default function Topbar() {
  const [navbar, setNavbar] = useState(false);
  const [navicon, setNavicon] = useState(false);

  const user = false;

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div className={navbar ? "topbar active" : "topbar"}>
        <div className={navbar ? "topbarLogo active" : "topbarLogo"}>
          Ola-pos
        </div>
        <div className="topbarMenuItems">
          <ul className={navbar ? "topbarMenuItem active" : "topbarMenuItem"}>
            <li className="topbarMenuItemList">Home</li>
            <li className="topbarMenuItemList">About</li>
            <li className="topbarMenuItemList">Contact</li>
            {!user ? (
              <>
                <li className="topbarMenuItemList">Log in</li>
                <li
                  className={
                    navbar ? "topbarMenuItemList active" : "topbarMenuItemList"
                  }
                >
                  Sign up
                </li>
              </>
            ) : (
              <li className="topbarMenuItemList">Logout</li>
            )}
          </ul>

          {user && (
            <>
              <img src="/images/9.jpg" alt="" className="topbarUserImg" />
              <span
                className={ navbar ? "topbarUseraname active" : "topbarUseraname"}
              >
                admin
              </span>
            </>
          )}
        </div>

        <div className="topbarMenuMobileItems">
          {!navicon ? (
            <i
              className="fa-solid fa-bars"
              onClick={() => setNavicon(true)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-xmark"
              onClick={() => setNavicon(false)}
            ></i>
          )}
        </div>
      </div>
      
      {navicon ? (
        <div className="topbarMenuMobileItems">
          <ul className={navbar ? "topbarMenuMobileItem active" : "topbarMenuMobileItem"}>
            <li className="topbarMenuMobileItemList">Home</li>
            <li className="topbarMenuMobileItemList">About</li>
            <li className="topbarMenuMobileItemList">Contact</li>
            {!user ? (
              <>
                <li className="topbarMenuMobileItemList">Log in</li>
                <li
                  className={
                    navbar ? "topbarMenuMobileItemList active" : "topbarMenuMobileItemList"
                  }
                >
                  Sign up
                </li>
              </>
            ) : (
              <>
                <li className="topbarMenuMobileItemList">Logout</li>
                <div className="topbarMobileUserIcon">
                  <img src="/images/9.jpg" alt="" className="topbarUserImg" />
                    <span className="topbarUseraname">
                      admin
                    </span>
                  </div>
              </>
            )}
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
