import { useEffect, useState } from "react";

import projectData from "../../json/projets.json";

import "./projetsGrid.scss";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  linkComplement: string;
  category: string;
  imgLink: string;
  imgAlt: string;
  titre: string;
  sousTitre: string;
  backgroundColor: string;
}

export default function ProjetsGrid() {
  const [currentProjects, setCurrentProjects] = useState<Project[]>(projectData);
  const [projectFilter, setProjectFilter] = useState<string>("tous");

  useEffect(() => {
    const newProjectSelection = projectData.filter((project) => {
      if (projectFilter !== "tous") {
        if (project.category == projectFilter) {
          return true;
        }
      } else {
        return true;
      }
    });

    setCurrentProjects(newProjectSelection);
  }, [projectFilter]);

  function handleChangeProjectFilter(newFilter: string) {
    setProjectFilter(newFilter);
  }

  return (
    <>
      <section id="projets">
        <h2>MES PROJETS</h2>
        <p>
          Vous retrouverez ici une selection de projets que j'ai réalisé durant mes trois années en
          BUT MMI.
        </p>
      </section>
      <section className="projetsGrid">
        <nav className="projectNav">
          <button
            onClick={() => handleChangeProjectFilter("tous")}
            className={projectFilter == "tous" ? "active" : ""}
          >
            Tous les projets
          </button>
          <button
            onClick={() => handleChangeProjectFilter("developpement")}
            className={projectFilter == "developpement" ? "active" : ""}
          >
            Développement
          </button>
          <button
            onClick={() => handleChangeProjectFilter("graphisme")}
            className={projectFilter == "graphisme" ? "active" : ""}
          >
            Graphisme
          </button>
          <button
            onClick={() => handleChangeProjectFilter("3D")}
            className={projectFilter == "3D" ? "active" : ""}
          >
            Réalisation 3D
          </button>
          <button
            onClick={() => handleChangeProjectFilter("redaction")}
            className={projectFilter == "redaction" ? "active" : ""}
          >
            Rédaction
          </button>
        </nav>
        <section className="grid">
          {currentProjects.map((project) => (
            <Link
              key={project.id}
              to={`projets/${project.linkComplement}`}
              className="projectContainer"
            >
              <img src={project.imgLink} alt={project.imgAlt} />
              <div className={`projectInfos ${project.backgroundColor}`}>
                <h3>{project.titre}</h3>
                <p>{project.sousTitre}</p>
              </div>
            </Link>
          ))}
        </section>
      </section>
    </>
  );
}
