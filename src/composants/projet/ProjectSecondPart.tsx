import { useEffect, useState } from "react";

import projectData from "../../json/projets.json";

import "./projectSecondPart.scss";

import { Link, useLocation, useParams } from "react-router-dom";

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

export default function ProjectSecondPart() {
  const [randomProjects, setRandomProjects] = useState<Project[]>([]);
  const location = useLocation();
  const { selectedProject } = useParams();

  function selectRandomProjects() {
    let selectedProjects: Project[] = [];
    let selectedNumbers: number[] = [];
    let i = 0;

    while (i < 3) {
      let randomNumber = Math.floor(Math.random() * projectData.length);
      if (
        !selectedNumbers.includes(randomNumber) &&
        projectData[randomNumber].linkComplement !== selectedProject
      ) {
        selectedProjects.push(projectData[randomNumber]);
        selectedNumbers.push(randomNumber);
        i++;
      }
    }

    setRandomProjects(selectedProjects);
  }

  useEffect(() => {
    selectRandomProjects();
  }, []);

  useEffect(() => {
    selectRandomProjects();
  }, [location]);

  return (
    <>
      <section className="secondPart">
        <h2>D'AUTRES PROJETS :</h2>

        <div className="randomProjects">
          {randomProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projets/${project.linkComplement}`}
              className="projectContainer"
            >
              <img src={project.imgLink} alt={project.imgAlt} />
              <div className={`projectInfos ${project.backgroundColor}`}>
                <h3>{project.titre}</h3>
                <p>{project.sousTitre}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
