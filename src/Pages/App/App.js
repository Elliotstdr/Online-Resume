import Bubble from "../../Components/Bubble/Bubble";
import "./App.scss";
import bubble_lpr from "../../assets/bubble_lpr.jpg";
import bubble_sc from "../../assets/bubble_sc.jpg";
import bubble_notes from "../../assets/bubble_notes.jpg";
import bubble_me from "../../assets/bubble_me.jpg";
import { useState } from "react";

function App() {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <div className="App">
      <h1 className="home_title">Découvrez mes projets !</h1>
      <div className="bubbles">
        <Bubble
          id={0}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          image={bubble_notes}
          className="fourth"
          title="Mes notes"
          content={
            <>
              Par curiosité pour NodeJS j'ai voulu apprendre ce language en
              créant mon application de prise de notes. Conçu autour d'un modèle
              de page {"->"} feuilles {"->"} notes déplaçables, c'est un outil
              rapide qui colle à mes besoins. <br />
              <br />
              Il a logiquement été développé en <i>NodeJS</i> coté server et en{" "}
              <i>ReactJS</i> pour le front. Le tout étant fait en{" "}
              <i>Typescript</i> que je voulais apprendre également.
              <br />
              <br />
              Vous pouvez aller testez la démo sur{" "}
              <a
                href="https://notesdemo.elliotstdr.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                notesdemo.elliotstdr.fr
              </a>
              , contactez moi pour avoir les logs !
            </>
          }
        ></Bubble>
        <Bubble
          id={1}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          image={bubble_lpr}
          className="third"
          title="La pause réconfort"
          content={
            <>
              Alors que je débutais à peine une amie m'a demandée de lui faire
              le site internet de son association. En recherche d'expérience je
              me suis lancé. Plus qu'un défi technologique ce projet fut surtout
              un défi graphique. <br />
              <br />
              Conçu en<i> Symfony6</i> et <i>ReactJS</i> ce site vitrine se veut
              intuitif et clair, collant aux personnes qu'il veut cibler.
              <br />
              <br />
              Retrouvez le sur{" "}
              <a
                href="https://lapausereconfort.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                lapausereconfort.fr
              </a>
            </>
          }
        ></Bubble>
        <Bubble
          id={2}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          image={bubble_sc}
          className="second"
          title="Shary Cooking"
          content={
            <>
              Ayant la volonté de cuisiner mieux et diversifié, tout en
              partageant cela avec mes proches, j'ai décidé, après 6 mois en
              tant que développeur, de créer ce site de partage de recettes de
              cuisine. <br />
              <br />
              Conçu en
              <i> Symfony6</i> et <i>ReactJS</i> il permet de créer son compte,
              de le gérer, de consulter des recettes, d'en créer, d'en ajouter à
              ses favoris mais aussi de générer sa liste de courses. Vous pouvez
              retouver tout celà sur{" "}
              <a
                href="https://shary-cooking.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                shary-cooking.fr
              </a>
              . <br />
              <br />
              <span>
                Le site étant restreint à mes proches, contactez moi pour
                obtenir des logs.
              </span>
            </>
          }
        ></Bubble>
        <Bubble
          id={3}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          image={bubble_me}
          className="first"
          title="Me découvrir"
          content={
            <>
              Ingénieur en mécanique de formation j'ai décidé en 2022 de
              m'orienté vers le développement web. Fort d'un cursus solide et
              d'expérience de dév sur différents languages en école et en
              entreprise, je me suis rapidement senti bien dans cette nouvelle
              voie.
              <br />
              <br />
              Pour connaitre mon parcours et mes accomplissements professionnels
              je vous invite sur mon{" "}
              <a
                href="https://www.linkedin.com/in/elliot-saint-andr%C3%A9-710093171/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
              . <br />
              Pour découvrir mes projets personnels vous êtes au bon endroit !
              Si toutefois le code source vous intéresse en route pour mon{" "}
              <a
                href="https://github.com/Elliotstdr"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </>
          }
        ></Bubble>
      </div>
    </div>
  );
}

export default App;
