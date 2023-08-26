import React from "react";
import "./App.scss";
import Bubbles from "../../Components/Bubbles/Bubbles";
import Presentation from "../../Components/Presentation/Presentation";
import Skills from "../../Components/Skills/Skills";
import Footer from "../../Components/Footer/Footer";
import Pro from "../../Components/Pro/Pro";

const App = () => {
  return (
    <div className="App">
      <h2 className="name">
        Elliot <br />
        Saint-André
      </h2>
      <Presentation></Presentation>
      <Pro></Pro>
      <Skills></Skills>
      <Bubbles></Bubbles>
      <Footer></Footer>
    </div>
  );
};

export default App;
