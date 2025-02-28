import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import projetInfo from "../../json/projetsInfos.json";
import ModelViewer from "../ModelViewer";

import "./projectFirstPart.scss";

interface Project {
  projectUrl: string;
  projectName: string;
  projectCategory: string;
  projectDescription: string;
  competences: string[];
  pdfLink?: string;
  ModelLink?: string;
  scale?: string;
  orbit?: string;
  maxCameraOrbit?: string;
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
                src={currentProject.ModelLink}
                alt="OIIA"
                loading="eager"
                scale={currentProject.scale}
                cameraOrbit={currentProject.orbit}
                cameraControls
                maxCameraOrbit={currentProject.maxCameraOrbit}
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
