import { useEffect, useState } from "react";
import Apropos from "../../composants/accueil/Apropos";
import Welcome from "../../composants/accueil/Welcome";
import Header from "../../composants/header/Header";
import "./accueil.scss";
import Competence from "../../composants/accueil/Competence";
import Footer from "../../composants/footer/Footer";
import ProjetsGrid from "../../composants/accueil/ProjetsGrid";

export default function Accueil() {
  const [activeSection, setActiveSection] = useState<string>("");

  const options = {
    root: null,
    rootMargin: "-55px 0px 0px 0px",
    threshold: 0.8,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  }, options);

  useEffect(() => {
    const elementsToObserve = document.querySelectorAll(
      "#accueil, #apropos, #competences, #projets"
    );
    console.log(elementsToObserve);
    elementsToObserve.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header currentSection={activeSection} />
      <Welcome />
      <Apropos />
      <Competence />
      <ProjetsGrid />
      <Footer />
    </>
  );
}
