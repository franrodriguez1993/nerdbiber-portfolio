import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectRoute/ProjectCard";
import "../css/ProjectRoute/ProjectRoute.css";
import projectJson from "../json/projects.json";

const ProjectRoute = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectJson.projects);
  }, []);

  return (
    <div className="route-container">
      <div className="projectroute-title_container">
        <h1 className="projectroute-title">Our projects</h1>
      </div>
      <div className="projectroute-container_card">
        {projects.length !== 0 &&
          projects.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
  );
};

export default ProjectRoute;
