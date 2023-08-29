import React, { useEffect, useState } from "react";
import "./App.scss";
import Perso from "../Components/Perso/Perso";
import Presentation from "../Components/Presentation/Presentation";
import Skills from "../Components/Skills/Skills";
import Footer from "../Components/Footer/Footer";
import Pro from "../Components/Pro/Pro";
import Header from "../Components/Header/Header";
import ScrollTopBtn from "../Components/ScrollTopBtn/ScrollTopBtn";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleButton, setVisibleButton] = useState(false);

  window.addEventListener("scroll", () => {
    setVisibleButton(window.scrollY > 300);
    if (window.scrollY < 10) {
      setActiveIndex(0);
    }
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="App" id="App">
        <Header
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        ></Header>
        <Presentation></Presentation>
        <Pro></Pro>
        <Skills></Skills>
        <Perso></Perso>
        {visibleButton && (
          <ScrollTopBtn setActiveIndex={setActiveIndex}></ScrollTopBtn>
        )}
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
