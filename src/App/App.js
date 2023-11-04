import React, { useEffect, useState } from "react";
import "./App.scss";
import Perso from "../Components/Perso/Perso";
import Presentation from "../Components/Presentation/Presentation";
import Skills from "../Components/Skills/Skills";
import Footer from "../Components/Footer/Footer";
import Pro from "../Components/Pro/Pro";
import Header from "../Components/Header/Header";
import ScrollTopBtn from "../Components/ScrollTopBtn/ScrollTopBtn";
import Netflix from "../Components/Netflix/Netflix";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleButton, setVisibleButton] = useState(false);
  const [visibleNetflix, setVisibleNetflix] = useState(true);

  window.addEventListener("scroll", () => {
    setVisibleButton(window.scrollY > 300);
    if (window.scrollY < 10) {
      setActiveIndex(0);
    }
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      const app = document.getElementById("App");
      app.style.overflow = "unset";
      app.style.height = "unset";
    }, 4000 * 0.7);
    setTimeout(() => {
      setVisibleNetflix(false);
    }, 5000 * 0.7);
  }, []);

  return (
    <>
      <div className="App" id="App">
        {visibleNetflix && <Netflix></Netflix>}
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
