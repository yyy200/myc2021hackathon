import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  text: string;
}

export const AwardWidget: React.FC<Props> = (props) => {
  return (
    <div>
      <FontAwesomeIcon icon={faStar} />
      <span>&nbsp;{props.text}&nbsp;</span>
    </div>
  );
};
