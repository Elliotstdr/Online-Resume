import React, { useEffect, useRef, useState } from "react";
import "./Perso.scss";
import bubble_lpr from "../../assets/bubble_lpr.jpg";
import bubble_sc from "../../assets/bubble_sc.jpg";
import bubble_mern from "../../assets/bubble_mern.jpg";
import Bubble from "../Bubble/Bubble";
import { BubbleText } from "../Bubble/BubbleText";
import anime from "animejs";

const Perso = () => {
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
          targets: ".bubbles.perso .bubble",
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
      <h1 className="bubbles__title">Mes projets perso</h1>
      <div className="bubbles perso" id="perso" ref={wrapperRef}>
        <Bubble
          id={2}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          image={bubble_sc}
          className="first"
          title="Shary Cooking"
          content={BubbleText.shary}
        ></Bubble>
        <Bubble
          id={4}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          image={bubble_mern}
          className="second"
          title="My budget"
          content={BubbleText.mern}
        ></Bubble>
        <Bubble
          id={3}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          image={bubble_lpr}
          className="third lpr"
          title="La pause réconfort"
          content={BubbleText.lpr}
        ></Bubble>
      </div>
    </>
  );
};

export default Perso;
