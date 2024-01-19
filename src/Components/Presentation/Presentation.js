import React from "react";
import "./Presentation.scss";
import me from "../../assets/me.jpg";
import cv from "../../assets/CV.pdf";
import { BsGithub } from "react-icons/bs";
import { BiLogoLinkedinSquare } from "react-icons/bi";

const Presentation = () => {
  return (
    <div className="presentation">
      <div className="presentation__left">
        <h1>Qui suis-je ?</h1>
        <span className="presentation__text">
          Ingénieur en mécanique de formation j'ai décidé en 2022 de m'orienter
          vers le développement web. Fort d'un cursus solide et d'expériences de
          développeur sur différents languages en école et en entreprise, je me
          suis rapidement senti bien dans cette nouvelle voie.
          <br />
          <br />
          J'ai maintenant plusieurs projets professionnels et personnels à mon
          actif. Je cherche toujours le défi technique dans mes projets
          personnels. Dans les projets professionnels c'est la collaboration,
          l'entraide et la rigueur dans le code qui priment.
        </span>
        <h3>Développeur Full Stack</h3>
        <div className="presentation__icons">
          <a
            href="https://github.com/Elliotstdr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="0" height="0">
              <linearGradient
                id="blue-gradient"
                x1="100%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop stopColor="rgb(250, 217, 97)" offset="0%" />
                <stop stopColor="rgb(247, 107, 28)" offset="100%" />
              </linearGradient>
            </svg>
            <BsGithub style={{ fill: "url(#blue-gradient)" }} size={75} />
          </a>
          <a
            href="https://www.linkedin.com/in/elliot-saint-andr%C3%A9-710093171/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoLinkedinSquare
              style={{ fill: "url(#blue-gradient)" }}
              size={100}
            />
          </a>
          <a href={cv} target="_blank" rel="noopener noreferrer" className="cv">
            CV
          </a>
        </div>
      </div>
      <div className="img_container">
        <img className="presentation__my-picture" src={me} alt="" />
      </div>
    </div>
  );
};

export default Presentation;
