import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";

import "./header.scss";
import { useState } from "react";

interface HeaderProps {
  currentSection: string;
}

export default function Header({ currentSection }: HeaderProps) {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  function handleIsMenuVisible() {
    let newState = !isMenuVisible;
    setIsMenuVisible(newState);
  }

  return (
    <>
      <header className="mobile">
        <HashLink to="/#accueil">Raphael CADETE</HashLink>
        <FontAwesomeIcon icon={isMenuVisible ? faXmark : faBars} onClick={handleIsMenuVisible} />
        <section className={`menu ${isMenuVisible ? "visible" : ""}`}>
          <div>
            <HashLink to="/#accueil" onClick={handleIsMenuVisible}>
              ACCUEIL
            </HashLink>
            <HashLink to="/#apropos" onClick={handleIsMenuVisible}>
              À PROPOS
            </HashLink>
            <HashLink to="/#competences" onClick={handleIsMenuVisible}>
              MES COMPETENCES
            </HashLink>
            <HashLink to="/#projets" onClick={handleIsMenuVisible}>
              MES PROJETS
            </HashLink>
          </div>
        </section>
      </header>

      <header className="desktop">
        <HashLink className="home" to="/#accueil">
          Raphael CADETE
        </HashLink>
        <div className="linkContainer">
          <HashLink className={currentSection == "accueil" ? "active" : ""} to="/#accueil">
            ACCUEIL
          </HashLink>
          <HashLink className={currentSection == "apropos" ? "active" : ""} to="/#apropos">
            À PROPOS
          </HashLink>
          <HashLink className={currentSection == "competences" ? "active" : ""} to="/#competences">
            MES COMPETENCES
          </HashLink>
          <HashLink className={currentSection == "projets" ? "active" : ""} to="/#projets">
            MES PROJETS
          </HashLink>
        </div>
      </header>
    </>
  );
}
