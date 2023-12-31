import React, { useEffect, useRef, useState } from "react";
import "./Perso.scss";
import bubble_lpr from "../../assets/bubble_lpr.jpg";
import bubble_sc from "../../assets/bubble_sc.jpg";
import bubble_notes from "../../assets/bubble_notes_2.png";
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
          content={BubbleText[0]}
        ></Bubble>
        <Bubble
          id={3}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          image={bubble_lpr}
          className="second lpr"
          title="La pause réconfort"
          content={BubbleText[1]}
        ></Bubble>
        <Bubble
          id={4}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          image={bubble_notes}
          className="third"
          title="Mes notes"
          content={BubbleText[2]}
        ></Bubble>
      </div>
    </>
  );
};

export default Perso;
