import React, { useEffect, useRef } from "react";
import "./Skills.scss";
import { TfiServer } from "react-icons/tfi";
import { RiJavascriptFill } from "react-icons/ri";
import { SiSmartthings } from "react-icons/si";
import anime from "animejs";

const Skills = () => {
  const skillsRef = useRef(null);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        anime({
          targets:
            ".skills__container__item.first .skills__container__item__name div",
          opacity: 1,
          delay: anime.stagger(100),
        });
        anime({
          targets:
            ".skills__container__item.second .skills__container__item__name div",
          opacity: 1,
          delay: anime.stagger(100),
        });
        anime({
          targets:
            ".skills__container__item.third .skills__container__item__name div",
          opacity: 1,
          delay: anime.stagger(100),
        });
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: window.innerWidth > 910 ? 0.7 : 0.3,
    });

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        // eslint-disable-next-line
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div className="skills" id="skills" ref={skillsRef}>
      <h1 className="skills__title">Mes compétences</h1>
      <div className="skills__container">
        <div className="skills__container__item first">
          <div className="icon">
            <RiJavascriptFill
              style={{ fill: "url(#blue-gradient)" }}
              size={80}
            />
          </div>
          <span>Dév. Front End</span>
          <div className="skills__container__item__name">
            <div className="devicon-react-plain">React</div>
            <div className="devicon-typescript-plain">TypeScript</div>
            <div className="devicon-redux-plain">Redux</div>
            <div className="devicon-html5-plain">HTML</div>
            <div className="devicon-css3-plain">CSS</div>
            <div className="devicon-javascript-plain">JS Vanilla</div>
            <div className="devicon-jquery-plain">JQuery</div>
            <div className="pi pi-check-circle">Twig</div>
            <div className="pi pi-check-circle">Responsive</div>
          </div>
        </div>
        <div className="skills__container__item second">
          <div className="icon">
            <TfiServer style={{ fill: "url(#blue-gradient)" }} size={60} />
          </div>
          <span>Dév. Back End</span>
          <div className="skills__container__item__name">
            <div className="devicon-symfony-original">Symfony</div>
            <div className="devicon-php-plain">PHP</div>
            <div className="devicon-nodejs-plain">NodeJS</div>
            <div className="devicon-git-plain">Git</div>
            <div className="devicon-docker-plain">Docker</div>
            <div className="devicon-python-plain">Python</div>
            <div className="pi pi-check-circle">Fortran</div>
            <div className="devicon-mysql-plain">SQL</div>
            <div className="devicon-mongodb-plain">MongoDB</div>
          </div>
        </div>
        <div className="skills__container__item third">
          <div className="icon">
            <SiSmartthings style={{ fill: "url(#blue-gradient)" }} size={60} />
          </div>
          <span>Soft Skills</span>
          <div className="skills__container__item__name">
            <div className="pi pi-check-circle">Esprit d'équipe</div>
            <div className="pi pi-check-circle">Capacité d'abstraction</div>
            <div className="pi pi-check-circle">Organisation</div>
            <div className="pi pi-check-circle">Écoute</div>
            <div className="pi pi-check-circle">Prise d'initiative</div>
            <div className="pi pi-check-circle">Bonnes pratiques</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
