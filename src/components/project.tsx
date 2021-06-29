import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ProjectInterface } from "../ProjectInterface";
import { AwardWidget } from "./awardwidget";

export const Project: React.FC<ProjectInterface> = (
  props: ProjectInterface
) => {
  return (
    <div className="project">
      <div>
        <div className="project-header">
          <h2>{props.teamName}</h2>
          {props.awards?.map((val) => (
            <AwardWidget text={val} />
          ))}
        </div>
        <p>{props.teamMembers.join(" \u00B7 ")}</p>
      </div>
      <div className="ressource-container">
        {props.github ? (
          <a href={props.github}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        ) : (
          ""
        )}
        <a href={props.video}>
          <FontAwesomeIcon icon={faFilm} />
        </a>
        {props.url ? (
          <a href={props.url}>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
