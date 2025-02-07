import { HashLink } from "react-router-hash-link";

import "./welcome.scss";

export default function Welcome() {
  return (
    <>
      <section id="accueil">
        <div className="opacity">
          <p className="presentation">Je suis un</p>
          <h1 className="title">DÉVELOPPEUR WEB</h1>
          <hr />
          <p className="subTitle">Étudiant en troisième année de BUT MMI</p>
          <HashLink to="/#apropos" className="discover">
            DÉCOUVRIR
          </HashLink>
        </div>
      </section>
    </>
  );
}
