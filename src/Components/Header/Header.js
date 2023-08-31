import React from "react";
import "./Header.scss";
import { Steps } from "primereact/steps";
import me from "../../assets/me.jpg";

const Header = (props) => {
  const goTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const items = [
    {
      label: "Présentation",
      command: () => goTo("App"),
    },
    {
      label: "Projets Pro",
      command: () => goTo("pro"),
    },
    {
      label: "Compétences",
      command: () => goTo("skills"),
    },
    {
      label: "Projets Perso",
      command: () => goTo("perso"),
    },
  ];

  return (
    <div className="header">
      <div className="header__mobile">
        <img className="header__my-picture" src={me} alt="" />
        <h2 className="name">
          Elliot <br />
          Saint-André
        </h2>
      </div>
      <h2 className="header__name">
        Elliot <br />
        Saint-André
      </h2>
      <Steps
        model={items}
        readOnly={false}
        activeIndex={props.activeIndex}
        onSelect={(e) => props.setActiveIndex(e.index)}
      ></Steps>
    </div>
  );
};

export default Header;
