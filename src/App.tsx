import React from "react";
import "./App.css";
import { ProjectInterface } from "./ProjectInterface";
import { Project } from "./components/project";
import { Projects } from "./Projects";

function App() {
  let projects: Array<ProjectInterface> = Projects;
  return (
    <>
      <h1>MYC 2021 Hackathon</h1>
      <div className="win">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="project-container">
        {projects.map((project, key) => (
          <Project key={key} {...project} />
        ))}
      </div>
    </>
  );
}

export default App;
