import React from "react";
import wwwIcon from "../../svg/web.svg";
import githubIcon from "../../svg/github.svg";

const ProjectCard = ({ project }) => {
  return (
    <div className="projectcard">
      <div className="projectcard-img_container">
        <img
          src={project.preview}
          alt="project-preview-link"
          className="projectcard-img"
        />
      </div>
      <div className="projectcard-description_container">
        <p className="projectcard-description_p">{project.name}</p>
      </div>
      <div className="projectcard-icons_container">
        <a href={project.url} target="_blank" rel="noreferrer">
          <img src={wwwIcon} alt="web" className="projectcard-icon" />
        </a>
        <a href={project.github} target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="github" className="projectcard-icon" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
