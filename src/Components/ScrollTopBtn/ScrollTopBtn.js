import React from "react";
import "./ScrollTopBtn.scss";
import { BiArrowToTop } from "react-icons/bi";

const ScrollTopBtn = (props) => {
  return (
    <button
      className="scrollTop"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        props.setActiveIndex(0);
      }}
    >
      <BiArrowToTop></BiArrowToTop>
    </button>
  );
};

export default ScrollTopBtn;
