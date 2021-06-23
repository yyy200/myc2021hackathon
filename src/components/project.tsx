import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  teamName: string;
  teamMembers: Array<string>;
  github?: string;
  url?: string;
  video: string;
}

export const Project: React.FC<Props> = (props: Props) => {
  return (
    <div className="project">
      <div>
        <h2>{props.teamName}</h2>
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
