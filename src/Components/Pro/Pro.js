import React, { useEffect, useRef, useState } from "react";
import "./Pro.scss";
import RP from "../../assets/RP.PNG";
import MT from "../../assets/Mines.PNG";
import tuteur from "../../assets/fox.png";
import Bubble from "../Bubble/Bubble";
import { BubbleTextPro } from "../Bubble/BubbleText";
import anime from "animejs";

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

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        anime({
          targets: ".bubbles.pro .bubble",
          opacity: 1,
          easing: "linear",
          duration: 800,
        });
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: window.innerWidth > 750 ? 0.5 : 0.3,
    });

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      if (wrapperRef.current) {
        // eslint-disable-next-line
        observer.unobserve(wrapperRef.current);
      }
    };
  }, []);

  return (
    <>
      <h1 className="bubbles__title" id="pro">
        Mes projets pro
      </h1>
      <div className="bubbles pro" ref={wrapperRef}>
        <Bubble
          id={2}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          image={RP}
          className="first"
          title="Reseau Pro"
          content={BubbleTextPro.rp}
        ></Bubble>
        <Bubble
          id={3}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          image={MT}
          className="second"
          title="Mines Télécom"
          content={BubbleTextPro.mines}
        ></Bubble>
        <Bubble
          id={4}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          image={tuteur}
          className="third"
          title="Tuteur Virtuel"
          content={BubbleTextPro.tuteur}
        ></Bubble>
      </div>
    </>
  );
};

export default Pro;
