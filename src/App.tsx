import React from "react";
import "./App.css";
import { ProjectInterface } from "./ProjectInterface";
import { Project } from "./components/project";
import { Projects } from "./Projects";
import { Award } from "./components/award";

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

      <div className="award-container">
        <Award team="5D-Penta" award="Best Tech" />
        <Award team="Orca" award="Best Pitch" />
        <Award team="SMRT" award="Most Realistic" />
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
