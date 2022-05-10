import React from "react";
import "./header.css";

const BtnSlider = ({ direction, moveSlide }) => {
  const leftArrow = <i className="fa-solid fa-circle-chevron-left"></i>;
  const rightArrow = <i className="fa-solid fa-circle-chevron-right"></i>;
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
        {direction === 'next' ? rightArrow : leftArrow}
    </button>
    
  );
};

export default BtnSlider;
