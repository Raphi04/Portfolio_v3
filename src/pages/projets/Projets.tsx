import Footer from "../../composants/footer/Footer";
import Header from "../../composants/header/Header";
import ProjectFirstPart from "../../composants/projet/ProjectFirstPart";
import ProjectSecondPart from "../../composants/projet/ProjectSecondPart";

import "./projets.scss";

export default function Projets() {
  return (
    <>
      <Header currentSection="" />
      <section className="allProjectPartContainer">
        <ProjectFirstPart />
        <hr />
        <ProjectSecondPart />
      </section>
      <Footer />
    </>
  );
}
