import React, { useState } from "react";
import "./Footer.scss";
import cv from "../../assets/CV.pdf";
import { BsGithub } from "react-icons/bs";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { SiMinutemailer } from "react-icons/si";
import Contact from "../Contact/Contact";

const Footer = () => {
  const [visibleMail, setVisibleMail] = useState(false);
  return (
    <div className="footer">
      <a
        href="https://github.com/Elliotstdr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub style={{ fill: "url(#blue-gradient)" }} size={45} />
      </a>
      <a
        href="https://www.linkedin.com/in/elliot-saint-andr%C3%A9-710093171/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BiLogoLinkedinSquare
          style={{ fill: "url(#blue-gradient)" }}
          size={60}
        />
      </a>
      <h2>Elliot Saint-André</h2>
      <a href={cv} target="_blank" rel="noopener noreferrer" className="cv">
        CV
      </a>
      <span onClick={() => setVisibleMail(true)}>
        <SiMinutemailer
          style={{ fill: "url(#blue-gradient)" }}
          size={45}
        ></SiMinutemailer>
      </span>
      {visibleMail && (
        <Contact visible={visibleMail} setVisible={setVisibleMail}></Contact>
      )}
    </div>
  );
};

export default Footer;
