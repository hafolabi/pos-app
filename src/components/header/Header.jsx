import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import { slides } from "../../dummydata";
import BtnSlider from "./BtnSlider";

const Header = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== slides.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === slides.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(slides.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    const interval = setInterval(play, 5 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header">
      <div className="heroImgContainer">
        <div className="heroImg">
          <img
            src="/images/sideHeroImg.jpg"
            alt=""
            className="leftSideHeroImg"
          />
        </div>

        <div className="heroImgText">
          <h1 className="heroImgTextTitle">
            A DIGITAL POS SYSTEM BUILT AROUND CUSTOMER NEEDS
          </h1>
          <span className="heroImgTextDesc">SEND AND RECIEVE CASH.</span>

          <div className="heroImgTextSlider">
            {slides.map((obj, index) => (
              <div
                key={obj.id}
                className={
                  slideIndex === index + 1 ? "slide active-anim" : "slide"
                }
              >
                <img
                  src={process.env.PUBLIC_URL + `/images/slide${index + 1}.jpg`}
                  alt=""
                />
              </div>
            ))}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots">
              {Array.from({ length: 3 }).map((item, index) => (
                <div
                  key={index}
                  onClick={() => moveDot(index + 1)}
                  className={slideIndex === index + 1 ? "dot active" : "dot"}
                ></div>
              ))}
            </div>
          </div>

          <span className="heroImgTextDesc2">SEND AND RECIEVE CASH.</span>

          <button className="heroImgButton">CREATE ACCOUNT</button>
          <button className="heroImgButton heroImgButton2">LOGIN</button>
        </div>
      </div>

      <div className="headerServicesList">
        <div className="headerServiceListItems">
          <i className=" headerServiceIcon fa-solid fa-right-left"></i>
          <div className="headerServiceListItem">
            <h3 className="headerServiceTitle">Transfer</h3>
            <span className="headerServiceDesc">Instant transfer receiver</span>
          </div>
        </div>

        <div className="headerServiceListItems">
          <i className=" headerServiceIcon fa-solid fa-comment-dollar"></i>
          <div className="headerServiceListItem">
            <h3 className="headerServiceTitle">Withdrawal/Deposit</h3>
            <span className="headerServiceDesc">
              Instant withdrawal/deposit
            </span>
          </div>
        </div>

        <div className="headerServiceListItems">
          <i className=" headerServiceIcon fa-solid fa-hand-holding-dollar"></i>
          <div className="headerServiceListItem">
            <h3 className="headerServiceTitle">Bills Payment</h3>
            <span className="headerServiceDesc">Inatant bills payment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
