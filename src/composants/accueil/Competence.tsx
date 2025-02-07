import CV from "../../assets/Raphael_Cadete_CV.pdf";

import competences from "../../json/competences.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faSass,
  faGithub,
  faHtml5,
  faJs,
  faPhp,
  faSymfony,
  faReact,
  faVuejs,
  faAtlassian,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCube } from "@fortawesome/free-solid-svg-icons";

import "./competence.scss";

export default function Competence() {
  const iconMap: Record<string, any> = {
    faHtml5: faHtml5,
    faCss3Alt: faCss3Alt,
    faSass: faSass,
    faJs: faJs,
    faPhp: faPhp,
    faSymfony: faSymfony,
    faReact: faReact,
    faVuejs: faVuejs,
    faGithub: faGithub,
    faDatabase: faDatabase,
    faAtlassian: faAtlassian,
    faCube: faCube,
  };
  return (
    <>
      <section id="competences">
        <h2>COMPÉTENCES</h2>
        <div className="competenceGrid">
          {competences.map((competence) => (
            <div className="competenceContainer">
              <div>
                <FontAwesomeIcon icon={iconMap[competence.fontAwesome]} />
                <p>{competence.competence}</p>
              </div>
            </div>
          ))}
        </div>
        <a href={CV} target="_blank" className="moreInfoInCV">
          Plus d'informations sur&nbsp;mon&nbsp;CV
        </a>
      </section>
    </>
  );
}
