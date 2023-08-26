import React from "react";
import "./Skills.scss";
import { TfiServer } from "react-icons/tfi";
import { RiJavascriptFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skills__title">Mes compétences</h1>
      <div className="skills__container">
        <div className="skills__container__item first">
          <div className="icon">
            <RiJavascriptFill
              style={{ fill: "url(#blue-gradient)" }}
              size={120}
            />
          </div>
          <span>Développeur Front End</span>
          <div className="skills__container__item__name">
            React, HTML, CSS, JS Vanilla, JQuery, TypeScript, Twig, Redux,
            Responsive Design
          </div>
        </div>
        <div className="skills__container__item">
          <div className="icon">
            <TfiServer style={{ fill: "url(#blue-gradient)" }} size={90} />
          </div>
          <span>Développeur Back End</span>
          <div className="skills__container__item__name">
            Symfony, PHP, NodeJS, Python, Fortran, SQL, MongoDB, Git, Docker
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
