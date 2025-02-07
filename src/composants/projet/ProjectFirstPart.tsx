import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import projetInfo from "../../json/projetsInfos.json";
import "./projectFirstPart.scss";
import ModelViewer from "../ModelViewer";

interface Project {
  projectUrl: string;
  projectName: string;
  projectCategory: string;
  projectDescription: string;
  competences: string[];
  pdfLink?: string;
  ModelLink?: string;
  imgSrc?: string;
  urlLink?: string;
}

export default function ProjectFirstPart() {
  const [currentProject, setCurrentProject] = useState<Project>();
  const { selectedProject } = useParams();

  const navigate = useNavigate();

  function getProjectInfo() {
    const projetFiltered = projetInfo.find(
      (projet: Project) => projet.projectUrl == selectedProject
    );

    if (!projetFiltered) {
      navigate("/");
    }
    setCurrentProject(projetFiltered);
  }

  useEffect(() => {
    getProjectInfo();
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [selectedProject]);

  return (
    <>
      {currentProject && (
        <section className="projectContainer">
          <div className="projectInfosContainer">
            <h2>{currentProject.projectCategory}</h2>
            <h1>{currentProject.projectName}</h1>
            <p dangerouslySetInnerHTML={{ __html: currentProject.projectDescription }}></p>
            <div className="competencesGrid desktop">
              {currentProject.competences.map((competence, index) => (
                <div key={index} className="competence">
                  <p>{competence}</p>
                </div>
              ))}
            </div>
          </div>

          {currentProject?.pdfLink && (
            <div className="projectView">
              <img
                src={currentProject.imgSrc}
                alt={`${currentProject.projectName} - ${currentProject.projectCategory}`}
              />
              <a className="seeMore mobile" href={currentProject.pdfLink} target="_blank">
                VOIR PLUS
              </a>
            </div>
          )}

          {currentProject.ModelLink && (
            <div className="projectView">
              <ModelViewer
                src="/projects/mjollnir/SAE.glb"
                alt="OIIA"
                loading="eager"
                scale="5 5 5"
                cameraOrbit="20deg 85deg 25m"
                cameraControls
              />
            </div>
          )}

          {currentProject.urlLink && (
            <div className="projectView">
              <iframe
                width="560"
                height="315"
                src={currentProject.urlLink}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <div className="competencesGrid mobile">
            {currentProject.competences.map((competence, index) => (
              <div key={index} className="competence">
                <p>{competence}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
