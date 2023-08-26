import React, { useEffect, useRef, useState } from "react";
import "./Pro.scss";
import RP from "../../assets/RP_2.jpg";
import MT from "../../assets/MT_2.jpg";
import PEPSISE from "../../assets/PEPSISE_2.jpg";
import Bubble from "../Bubbles/Bubble/Bubble";
import { BubbleTextPro } from "../Bubbles/BubbleText";

const Pro = () => {
  const [isHovered, setIsHovered] = useState(null);

  const useOutsideAlerter = (ref, command) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          command();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
      // eslint-disable-next-line
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setIsHovered(null));

  return (
    <>
      <h1 className="bubbles__title">Mes projets pro</h1>
      <div className="bubbles pro" ref={wrapperRef}>
        <Bubble
          id={2}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          image={RP}
          className="first"
          title="Reseau Pro"
          content={BubbleTextPro[0]}
        ></Bubble>
        <Bubble
          id={3}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          image={MT}
          className="second"
          title="Mines Télécom"
          content={BubbleTextPro[1]}
        ></Bubble>
        <Bubble
          id={4}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          image={PEPSISE}
          className="third"
          title="PEPSISE"
          content={BubbleTextPro[2]}
        ></Bubble>
      </div>
    </>
  );
};

export default Pro;
